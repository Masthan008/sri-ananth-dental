import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationTarget = string | Element | NodeListOf<Element> | null;
type Direction = 'left' | 'right' | 'top' | 'bottom';

interface AnimationMethods {
  fadeInUp(selector: AnimationTarget, delay?: number, duration?: number): void;
  fadeInLeft(selector: AnimationTarget, delay?: number, duration?: number): void;
  fadeInRight(selector: AnimationTarget, delay?: number, duration?: number): void;
  scaleIn(selector: AnimationTarget, delay?: number, duration?: number): void;
  staggerChildren(parent: string | Element, childSelector: string, stagger?: number): void;
  animateText(selector: AnimationTarget, delay?: number): void;
  animateCounter(selector: AnimationTarget, endValue: number, suffix?: string, duration?: number): void;
  revealImage(selector: AnimationTarget, direction?: Direction): void;
  addTiltEffect(selector: AnimationTarget, intensity?: number): void;
  cleanup(): void;
}

export const initAnimations = (scope?: HTMLElement | Document | null): AnimationMethods => {
  // Common animation defaults
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
  });

  // ScrollTrigger configuration
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    ignoreMobileResize: true,
  });

  // Helper function to get elements from selector
  const getElements = (selector: AnimationTarget): Element[] => {
    if (!selector) return [];
    
    try {
      if (typeof selector === 'string') {
        const ctx = scope || document;
        return Array.from(ctx.querySelectorAll(selector));
      } else if (selector instanceof NodeList) {
        return Array.from(selector);
      } else if (selector instanceof Element) {
        return [selector];
      }
    } catch (error) {
      console.error('Error getting elements:', error);
    }
    return [];
  };

  // Animation methods
  const methods: AnimationMethods = {
    fadeInUp: (selector, delay = 0, duration = 0.8) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        gsap.from(element, {
          y: 50,
          opacity: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },

    fadeInLeft: (selector, delay = 0, duration = 0.8) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        gsap.from(element, {
          x: -50,
          opacity: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },

    fadeInRight: (selector, delay = 0, duration = 0.8) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        gsap.from(element, {
          x: 50,
          opacity: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },

    scaleIn: (selector, delay = 0, duration = 0.8) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        gsap.from(element, {
          scale: 0.8,
          opacity: 0,
          duration,
          delay,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },

    staggerChildren: (parent, childSelector, stagger = 0.1) => {
      let parentElement: Element | null = null;
      
      if (typeof parent === 'string') {
        parentElement = (scope || document).querySelector(parent);
      } else if (parent instanceof Element) {
        parentElement = parent;
      }
      
      if (!parentElement) return;
      
      const children = Array.from(parentElement.querySelectorAll(childSelector));
      children.forEach((child, index) => {
        gsap.from(child, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: parentElement,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    },

    animateText: (selector, delay = 0) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        if (!(element instanceof HTMLElement)) return;
        
        const text = element.textContent || '';
        element.textContent = '';
        
        text.split('').forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          element.appendChild(span);
          
          gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: delay + (i * 0.03),
            ease: 'power2.out',
          });
        });
      });
    },

    animateCounter: (selector, endValue, suffix = '', duration = 2) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        if (!(element instanceof HTMLElement)) return;
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let current = 0;
              const increment = endValue / (duration * 60); // 60fps
              
              const updateCounter = () => {
                current += increment;
                if (current < endValue) {
                  element.textContent = `${Math.round(current)}${suffix}`;
                  requestAnimationFrame(updateCounter);
                } else {
                  element.textContent = `${endValue}${suffix}`;
                }
              };
              
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(element);
      });
    },

    revealImage: (selector, direction: Direction = 'left') => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        if (!(element instanceof HTMLElement)) return;
        
        const clipPathMap = {
          left: 'inset(0 100% 0 0)',
          right: 'inset(0 0 0 100%)',
          top: 'inset(100% 0 0 0)',
          bottom: 'inset(0 0 100% 0)',
        } as const;
        
        gsap.from(element, {
          clipPath: clipPathMap[direction],
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },

    addTiltEffect: (selector, intensity = 10) => {
      const elements = getElements(selector);
      elements.forEach((element) => {
        if (!(element instanceof HTMLElement)) return;
        
        const onMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / intensity;
          const rotateY = (centerX - x) / intensity;
          
          gsap.to(element, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            transformOrigin: 'center center',
            ease: 'power1.out',
            duration: 0.5,
          });
        };
        
        const onMouseLeave = () => {
          gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: 'elastic.out(1, 0.5)',
          });
        };

        element.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseleave', onMouseLeave);

        // Cleanup function
        return () => {
          element.removeEventListener('mousemove', onMouseMove);
          element.removeEventListener('mouseleave', onMouseLeave);
        };
      });
    },

    cleanup: () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      // Kill all GSAP animations
      gsap.killTweensOf('*');
      
      // Reset any inline styles that might have been applied
      document.querySelectorAll('[style*="transform"]').forEach((el) => {
        gsap.set(el, { clearProps: 'all' });
      });
    },
  };

  return methods;
};

export default initAnimations;
