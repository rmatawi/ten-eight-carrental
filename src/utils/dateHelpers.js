// Date Helper Utilities
// Provides date formatting, validation, and calculation functions

// Format date to readable string (e.g., "Dec 25, 2024")
export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format date to full readable string (e.g., "Monday, December 25, 2024")
export const formatDateFull = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format date for input fields (YYYY-MM-DD)
export const formatDateForInput = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Format time for display (e.g., "2:30 PM")
export const formatTime = (time) => {
  if (!time) return '';
  // If time is in HH:MM format, convert to Date
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

// Format date and time together
export const formatDateTime = (date, time) => {
  if (!date || !time) return '';
  return `${formatDate(date)} at ${formatTime(time)}`;
};

// Get today's date at midnight
export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

// Get tomorrow's date at midnight
export const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow;
};

// Get date N days from now
export const getDaysFromNow = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(0, 0, 0, 0);
  return date;
};

// Calculate number of days between two dates
export const getDaysBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// Calculate number of hours between two datetimes
export const getHoursBetween = (startDate, startTime, endDate, endTime) => {
  const start = new Date(`${startDate}T${startTime}`);
  const end = new Date(`${endDate}T${endTime}`);
  const diffTime = Math.abs(end - start);
  const diffHours = diffTime / (1000 * 60 * 60);
  return diffHours;
};

// Check if date is in the past
export const isPastDate = (date) => {
  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);
  const today = getToday();
  return inputDate < today;
};

// Check if date is today
export const isToday = (date) => {
  const inputDate = new Date(date);
  const today = new Date();
  return (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  );
};

// Check if date is in the future
export const isFutureDate = (date) => {
  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);
  const today = getToday();
  return inputDate > today;
};

// Check if date range is valid (end > start)
export const isValidDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return end > start;
};

// Check if rental period meets minimum requirement (typically 1 day)
export const meetsMinimumRentalPeriod = (startDate, endDate, minDays = 1) => {
  const days = getDaysBetween(startDate, endDate);
  return days >= minDays;
};

// Get minimum return date (1 day after pickup)
export const getMinimumReturnDate = (pickupDate) => {
  const date = new Date(pickupDate);
  date.setDate(date.getDate() + 1);
  return date;
};

// Check if datetime combination is valid (not in the past)
export const isValidDateTime = (date, time) => {
  const dateTime = new Date(`${date}T${time}`);
  const now = new Date();
  return dateTime > now;
};

// Get time options for dropdown (9 AM to 9 PM in 30-min intervals)
export const getTimeOptions = () => {
  const times = [];
  for (let hour = 9; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourStr = String(hour).padStart(2, '0');
      const minuteStr = String(minute).padStart(2, '0');
      times.push(`${hourStr}:${minuteStr}`);
    }
  }
  return times;
};

// Parse date string to Date object
export const parseDate = (dateString) => {
  if (!dateString) return null;
  try {
    return new Date(dateString);
  } catch (error) {
    console.error('Invalid date string:', dateString);
    return null;
  }
};

// Get relative time description (e.g., "in 3 days", "2 days ago")
export const getRelativeTime = (date) => {
  const now = new Date();
  const inputDate = new Date(date);
  const diffTime = inputDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays > 1) return `in ${diffDays} days`;
  if (diffDays < -1) return `${Math.abs(diffDays)} days ago`;
  return formatDate(date);
};

// Check if time is valid (HH:MM format)
export const isValidTimeFormat = (time) => {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(time);
};

// Get current time in HH:MM format
export const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Round time to nearest 30 minutes
export const roundTimeToNearest30 = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const roundedMinutes = Math.round(minutes / 30) * 30;
  const adjustedHours = roundedMinutes === 60 ? hours + 1 : hours;
  const finalMinutes = roundedMinutes === 60 ? 0 : roundedMinutes;

  return `${String(adjustedHours).padStart(2, '0')}:${String(finalMinutes).padStart(2, '0')}`;
};

// Get booking duration in human-readable format
export const getBookingDuration = (startDate, endDate) => {
  const days = getDaysBetween(startDate, endDate);

  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  if (days === 7) return '1 week';
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    if (remainingDays === 0) return `${weeks} weeks`;
    return `${weeks} week${weeks > 1 ? 's' : ''} and ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
  }
  const months = Math.floor(days / 30);
  return `${months} month${months > 1 ? 's' : ''}`;
};

// Check if dates overlap (for booking conflicts)
export const doDatesOverlap = (start1, end1, start2, end2) => {
  const s1 = new Date(start1);
  const e1 = new Date(end1);
  const s2 = new Date(start2);
  const e2 = new Date(end2);

  return s1 <= e2 && s2 <= e1;
};

export default {
  formatDate,
  formatDateFull,
  formatDateForInput,
  formatTime,
  formatDateTime,
  getToday,
  getTomorrow,
  getDaysFromNow,
  getDaysBetween,
  getHoursBetween,
  isPastDate,
  isToday,
  isFutureDate,
  isValidDateRange,
  meetsMinimumRentalPeriod,
  getMinimumReturnDate,
  isValidDateTime,
  getTimeOptions,
  parseDate,
  getRelativeTime,
  isValidTimeFormat,
  getCurrentTime,
  roundTimeToNearest30,
  getBookingDuration,
  doDatesOverlap
};
