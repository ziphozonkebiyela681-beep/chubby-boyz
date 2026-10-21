import { StoreStatus } from '../types';

/**
 * Calculates if Chubbyz in Maboneng is currently open based on
 * South African Standard Time (SAST, UTC+2).
 */
export function getStoreStatus(): StoreStatus {
  try {
    const now = new Date();
    // Convert to SAST (UTC+2)
    const sastTimeStr = now.toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' });
    const sastDate = new Date(sastTimeStr);
    const day = sastDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = sastDate.getHours();
    const minutes = sastDate.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    let openMinutes = 12 * 60; // 12:00 PM
    const closeMinutes = 23 * 60; // 11:00 PM
    let hoursToday = '12:00 PM – 11:00 PM';

    if (day === 0) {
      // Sunday opens at 10:00 AM
      openMinutes = 10 * 60;
      hoursToday = '10:00 AM – 11:00 PM';
    }

    const isOpen = currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes;

    if (isOpen) {
      const minsUntilClose = closeMinutes - currentTimeInMinutes;
      const hoursUntilClose = Math.floor(minsUntilClose / 60);
      const closeMsg = hoursUntilClose > 0 
        ? `Open Now · Closes at 11:00 PM (in ${hoursUntilClose}h ${minsUntilClose % 60}m)`
        : `Open Now · Closes soon at 11:00 PM`;
      return {
        isOpen: true,
        message: closeMsg,
        hoursToday,
      };
    } else {
      const openTimeFormatted = day === 0 ? '10:00 AM' : '12:00 PM';
      return {
        isOpen: false,
        message: `Currently Closed · Opens today at ${openTimeFormatted}`,
        hoursToday,
      };
    }
  } catch {
    return {
      isOpen: true,
      message: 'Open Today · 12:00 PM – 11:00 PM',
      hoursToday: '12:00 PM – 11:00 PM',
    };
  }
}
