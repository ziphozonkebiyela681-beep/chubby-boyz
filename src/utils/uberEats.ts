import { STORE_INFO } from '../data/menuData';

/**
 * Uber Eats Store URL & Deep Links
 * Chubby Boyz: 289 Fox Street, Jeppestown, Johannesburg
 */
const WEB_STORE_URL = STORE_INFO.uberEatsUrl;
const ANDROID_INTENT_URL =
  'intent://www.ubereats.com/store/chubby-boyz/289-fox-street-johannesburg#Intent;scheme=https;package=com.ubercab.eats;S.browser_fallback_url=https%3A%2F%2Fwww.ubereats.com%2Fstore%2Fchubby-boyz%2F289-fox-street-johannesburg;end';
const IOS_SCHEME_URL = 'ubereats://store/chubby-boyz/289-fox-street-johannesburg';
const GENERIC_APP_SCHEME_URL = 'ubereats://';

/**
 * Detects whether the user is on a mobile device (Android, iPhone, iPad, iPod)
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  const ua = navigator.userAgent || navigator.vendor || '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

/**
 * Detects specifically Android devices
 */
export const isAndroidDevice = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  const ua = navigator.userAgent || '';
  return /Android/i.test(ua);
};

/**
 * Detects specifically iOS devices (iPhone, iPad, iPod)
 */
export const isIOSDevice = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  const ua = navigator.userAgent || '';
  return /iPhone|iPad|iPod/i.test(ua);
};

/**
 * Returns the best direct deep link URL for the user's device
 */
export const getUberEatsDeepLink = (): string => {
  if (typeof window === 'undefined') {
    return WEB_STORE_URL;
  }

  if (isAndroidDevice()) {
    return ANDROID_INTENT_URL;
  }

  if (isIOSDevice()) {
    return IOS_SCHEME_URL;
  }

  return WEB_STORE_URL;
};

/**
 * Triggers the native Uber Eats app on the device.
 * - On Android: Dispatches direct intent into the com.ubercab.eats native app (with browser fallback if not installed).
 * - On iOS: Dispatches ubereats:// custom scheme to launch native app directly, with smooth web fallback if not installed.
 * - On Desktop/Laptop: Opens the Uber Eats restaurant store in a new browser tab.
 */
export const openUberEatsApp = (e?: React.MouseEvent): void => {
  if (e) {
    e.preventDefault();
  }

  if (typeof window === 'undefined') return;

  const isAndroid = isAndroidDevice();
  const isIOS = isIOSDevice();
  const isMobile = isMobileDevice();

  if (isAndroid) {
    // Android intent launches native Uber Eats application
    window.location.href = ANDROID_INTENT_URL;
    return;
  }

  if (isIOS) {
    // Attempt to open the Uber Eats iOS app
    const start = Date.now();
    let appOpened = false;

    const onVisibilityChange = () => {
      if (document.hidden) {
        appOpened = true;
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange, { once: true });

    // Try store link first
    window.location.href = IOS_SCHEME_URL;

    // Graceful fallback to web store if app isn't installed after 1.5s
    setTimeout(() => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (!appOpened && Date.now() - start < 2200 && !document.hidden) {
        window.location.href = WEB_STORE_URL;
      }
    }, 1500);
    return;
  }

  if (isMobile) {
    // Generic mobile fallback scheme
    window.location.href = GENERIC_APP_SCHEME_URL;
    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = WEB_STORE_URL;
      }
    }, 1500);
    return;
  }

  // Desktop or non-mobile: open in fresh tab
  window.open(WEB_STORE_URL, '_blank', 'noopener,noreferrer');
};
