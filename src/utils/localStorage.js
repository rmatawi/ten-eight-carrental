// localStorage Utility Functions
// Handles all localStorage operations with error handling

const STORAGE_KEYS = {
  USER: 'carrental_user',
  BOOKINGS: 'carrental_bookings',
  FAVORITES: 'carrental_favorites',
  SEARCH_HISTORY: 'carrental_search_history'
};

// Generic localStorage helpers
const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return null;
  }
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error);
    // Handle quota exceeded error
    if (error.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded. Consider clearing old data.');
    }
    return false;
  }
};

const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error);
    return false;
  }
};

// User Management
export const saveUser = (user) => {
  return setItem(STORAGE_KEYS.USER, user);
};

export const getUser = () => {
  return getItem(STORAGE_KEYS.USER);
};

export const removeUser = () => {
  return removeItem(STORAGE_KEYS.USER);
};

export const updateUser = (updates) => {
  const currentUser = getUser();
  if (currentUser) {
    const updatedUser = { ...currentUser, ...updates };
    return saveUser(updatedUser);
  }
  return false;
};

export const isUserLoggedIn = () => {
  const user = getUser();
  return user !== null;
};

// Bookings Management
export const saveBooking = (booking) => {
  const bookings = getBookings();
  bookings.push(booking);
  return setItem(STORAGE_KEYS.BOOKINGS, bookings);
};

export const getBookings = (userId = null) => {
  const allBookings = getItem(STORAGE_KEYS.BOOKINGS) || [];
  if (userId) {
    return allBookings.filter(booking => booking.userId === userId);
  }
  return allBookings;
};

export const getBookingById = (bookingId) => {
  const bookings = getBookings();
  return bookings.find(booking => booking.id === bookingId);
};

export const updateBooking = (bookingId, updates) => {
  const bookings = getBookings();
  const index = bookings.findIndex(booking => booking.id === bookingId);

  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updates };
    return setItem(STORAGE_KEYS.BOOKINGS, bookings);
  }
  return false;
};

export const cancelBooking = (bookingId) => {
  return updateBooking(bookingId, {
    status: 'cancelled',
    cancelledAt: new Date().toISOString()
  });
};

export const deleteBooking = (bookingId) => {
  const bookings = getBookings();
  const filtered = bookings.filter(booking => booking.id !== bookingId);
  return setItem(STORAGE_KEYS.BOOKINGS, filtered);
};

// Get bookings by status
export const getBookingsByStatus = (userId, status) => {
  const userBookings = getBookings(userId);
  return userBookings.filter(booking => booking.status === status);
};

// Get upcoming bookings (confirmed and pickup date in future)
export const getUpcomingBookings = (userId) => {
  const userBookings = getBookings(userId);
  const now = new Date();

  return userBookings.filter(booking => {
    const pickupDate = new Date(booking.pickupDate);
    return booking.status === 'confirmed' && pickupDate > now;
  });
};

// Get past bookings (completed or pickup date in past)
export const getPastBookings = (userId) => {
  const userBookings = getBookings(userId);
  const now = new Date();

  return userBookings.filter(booking => {
    const returnDate = new Date(booking.returnDate);
    return booking.status === 'completed' || returnDate < now;
  });
};

// Favorites Management
export const saveFavorites = (userId, favorites) => {
  const allFavorites = getItem(STORAGE_KEYS.FAVORITES) || {};
  allFavorites[userId] = favorites;
  return setItem(STORAGE_KEYS.FAVORITES, allFavorites);
};

export const getFavorites = (userId) => {
  const allFavorites = getItem(STORAGE_KEYS.FAVORITES) || {};
  return allFavorites[userId] || [];
};

export const addFavorite = (userId, carId) => {
  const favorites = getFavorites(userId);
  if (!favorites.includes(carId)) {
    favorites.push(carId);
    return saveFavorites(userId, favorites);
  }
  return true;
};

export const removeFavorite = (userId, carId) => {
  const favorites = getFavorites(userId);
  const filtered = favorites.filter(id => id !== carId);
  return saveFavorites(userId, filtered);
};

export const toggleFavorite = (userId, carId) => {
  const favorites = getFavorites(userId);
  if (favorites.includes(carId)) {
    return removeFavorite(userId, carId);
  } else {
    return addFavorite(userId, carId);
  }
};

export const isFavorite = (userId, carId) => {
  const favorites = getFavorites(userId);
  return favorites.includes(carId);
};

// Search History Management
export const saveSearchHistory = (searchParams) => {
  const history = getItem(STORAGE_KEYS.SEARCH_HISTORY) || [];

  // Add timestamp
  const searchWithTimestamp = {
    ...searchParams,
    timestamp: new Date().toISOString()
  };

  // Add to beginning of array
  history.unshift(searchWithTimestamp);

  // Keep only last 10 searches
  const limitedHistory = history.slice(0, 10);

  return setItem(STORAGE_KEYS.SEARCH_HISTORY, limitedHistory);
};

export const getSearchHistory = () => {
  return getItem(STORAGE_KEYS.SEARCH_HISTORY) || [];
};

export const clearSearchHistory = () => {
  return setItem(STORAGE_KEYS.SEARCH_HISTORY, []);
};

// Clear all app data
export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error('Error clearing all data:', error);
    return false;
  }
};

// Check localStorage availability
export const isLocalStorageAvailable = () => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

// Get storage usage (approximate)
export const getStorageUsage = () => {
  try {
    let total = 0;
    Object.keys(localStorage).forEach(key => {
      total += localStorage[key].length + key.length;
    });
    // Convert to KB
    return (total / 1024).toFixed(2);
  } catch (error) {
    console.error('Error calculating storage usage:', error);
    return 0;
  }
};

export default {
  // User
  saveUser,
  getUser,
  removeUser,
  updateUser,
  isUserLoggedIn,

  // Bookings
  saveBooking,
  getBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
  deleteBooking,
  getBookingsByStatus,
  getUpcomingBookings,
  getPastBookings,

  // Favorites
  saveFavorites,
  getFavorites,
  addFavorite,
  removeFavorite,
  toggleFavorite,
  isFavorite,

  // Search History
  saveSearchHistory,
  getSearchHistory,
  clearSearchHistory,

  // Utilities
  clearAllData,
  isLocalStorageAvailable,
  getStorageUsage
};
