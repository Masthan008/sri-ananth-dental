import { useEffect, useState, useCallback } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

const WelcomePopup = () => {
  const [show, setShow] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);

  // Check if speech synthesis is supported
  const isSpeechSynthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Play welcome message function (wait for voices to load)
  const playWelcomeMessage = useCallback(() => {
    if (!isSpeechSynthesisSupported || isMuted) return;
    if (sessionStorage.getItem('welcomeVoicePlayed') === 'true') return;
    try {
      const speak = () => {
        const message = new window.SpeechSynthesisUtterance(
          "Welcome to Sri Ananth Dental Hospital. We're delighted to have you here. How can we assist you with your dental care today?"
        );
        message.lang = "en-IN";
        message.rate = 0.95;
        message.pitch = 1.1;
        const voices = window.speechSynthesis.getVoices();
        const indianVoice = voices.find(voice => voice.lang === 'en-IN' || voice.name.includes('India'));
        if (indianVoice) {
          message.voice = indianVoice;
        } else {
          const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
          if (englishVoice) message.voice = englishVoice;
        }
        message.onstart = () => setIsSpeaking(true);
        message.onend = () => {
          setIsSpeaking(false);
          sessionStorage.setItem('welcomeVoicePlayed', 'true');
        };
        message.onerror = (event) => {
          console.error('SpeechSynthesis error:', event);
          setVoiceSupported(false);
          setIsSpeaking(false);
        };
        window.speechSynthesis.speak(message);
      };
      // If voices are not loaded, wait for them
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          speak();
          window.speechSynthesis.onvoiceschanged = null;
        };
      } else {
        speak();
      }
    } catch (error) {
      console.error('Error with speech synthesis:', error);
      setVoiceSupported(false);
    }
  }, [isMuted, isSpeechSynthesisSupported]);

  // Toggle mute state
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    // If unmuting and voice hasn't played yet, play the message
    if (newMutedState === false && !sessionStorage.getItem('welcomeVoicePlayed')) {
      playWelcomeMessage();
    }
    
    // If currently speaking and muting, cancel speech
    if (isSpeaking && newMutedState) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Initialize component
  useEffect(() => {
    // Load mute preference from localStorage if available
    const savedMutePref = localStorage.getItem('welcomeMessageMuted');
    if (savedMutePref === 'true') {
      setIsMuted(true);
    }

    // Only show popup and play voice if not already shown this session
    const hasShownPopup = sessionStorage.getItem('welcomePopupShown') === 'true';
    if (hasShownPopup) {
      setShow(false);
      return;
    }

    // Show popup after a short delay
    const showTimer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem('welcomePopupShown', 'true');
      // Play welcome message if not muted and not already played
      if (!isMuted && sessionStorage.getItem('welcomeVoicePlayed') !== 'true') {
        playWelcomeMessage();
      }
    }, 2000);

    // Auto-hide after 10 seconds if not hovered
    const hideTimer = setTimeout(() => {
      if (!isHovered) {
        setShow(false);
      }
    }, 10000);

    // Cleanup
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isMuted, isHovered, playWelcomeMessage]);

  // Save mute preference when it changes
  useEffect(() => {
    localStorage.setItem('welcomeMessageMuted', String(isMuted));
  }, [isMuted]);

  // Animation styles
  const popupStyle = {
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
  };

  // Don't render if speech synthesis is not supported and message was already shown
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setShow(false)}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl mx-4 transform transition-all duration-300 scale-95 hover:scale-100 relative flex flex-col md:flex-row"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Welcome Image */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-600 to-cyan-500 p-6 flex flex-col justify-center items-center text-white">
          <div className="text-5xl mb-4">👋</div>
          <h2 className="text-2xl font-bold mb-2 text-center">Welcome!</h2>
          <p className="text-blue-100 text-center">We're glad to see you</p>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Sri Ananth Dental Hospital</h2>
            <button 
              onClick={() => setShow(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close welcome message"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-6 flex-1">
            Thank you for choosing us for your dental care needs. Our team of experienced professionals is here to provide you with exceptional service and personalized treatment.
          </p>
          
          <div className="mt-3 flex space-x-2">
            <a 
              href="tel:+919494444027"
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/919494444027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Accessibility: Hidden label for screen readers */}
      <span className="sr-only">
        Welcome message with options to contact Sri Ananth Dental Hospital
      </span>
    </div>
  );
};

export default WelcomePopup;
