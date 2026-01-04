import { createStore } from 'framework7/lite';
import mockCars from '../data/mockCars';
import mockLocations from '../data/mockLocations';
import mockExtras from '../data/mockExtras';
import mockReviews from '../data/mockReviews';
import { getUser, getBookings, getFavorites } from '../utils/localStorage';

const store = createStore({
  state: {
    // User & Authentication
    user: getUser(),
    isAuthenticated: getUser() !== null,

    // Cars Data
    cars: mockCars,
    locations: mockLocations,
    extras: mockExtras,
    reviews: mockReviews,
    selectedCar: null,
    comparisonCars: [],

    // Filters
    filters: {
      category: [],
      brand: [],
      priceRange: [0, 300],
      transmission: null,
      fuelType: [],
      features: [],
      seating: null,
      location: null
    },
    sortBy: 'popularity',
    viewMode: 'grid', // 'grid' or 'list'
    searchQuery: '',

    // Booking
    currentBooking: {
      car: null,
      pickupLocation: null,
      returnLocation: null,
      pickupDate: null,
      pickupTime: '10:00',
      returnDate: null,
      returnTime: '10:00',
      extras: [],
      driverInfo: {}
    },

    // User Bookings
    userBookings: [],

    // UI State
    loading: false,
    error: null
  },

  getters: {
    // User Getters
    user({ state }) {
      return state.user;
    },
    isAuthenticated({ state }) {
      return state.isAuthenticated;
    },

    // Cars Getters
    allCars({ state }) {
      return state.cars;
    },
    filteredCars({ state }) {
      let filtered = [...state.cars];

      // Apply category filter
      if (state.filters.category && state.filters.category.length > 0) {
        filtered = filtered.filter(car => state.filters.category.includes(car.category));
      }

      // Apply brand filter
      if (state.filters.brand && state.filters.brand.length > 0) {
        filtered = filtered.filter(car => state.filters.brand.includes(car.brand));
      }

      // Apply price range filter
      if (state.filters.priceRange) {
        const [min, max] = state.filters.priceRange;
        filtered = filtered.filter(car => car.pricePerDay >= min && car.pricePerDay <= max);
      }

      // Apply transmission filter
      if (state.filters.transmission) {
        filtered = filtered.filter(car => car.specifications.transmission === state.filters.transmission);
      }

      // Apply fuel type filter
      if (state.filters.fuelType && state.filters.fuelType.length > 0) {
        filtered = filtered.filter(car => state.filters.fuelType.includes(car.specifications.fuelType));
      }

      // Apply seating filter
      if (state.filters.seating) {
        filtered = filtered.filter(car => car.specifications.passengers >= state.filters.seating);
      }

      // Apply location filter
      if (state.filters.location) {
        filtered = filtered.filter(car => car.location && car.location.includes(state.filters.location));
      }

      // Apply search query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(car =>
          car.name.toLowerCase().includes(query) ||
          car.brand.toLowerCase().includes(query) ||
          car.category.toLowerCase().includes(query)
        );
      }

      // Apply sorting
      switch (state.sortBy) {
        case 'priceLowToHigh':
          filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
          break;
        case 'priceHighToLow':
          filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'popularity':
        default:
          filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.reviewCount - a.reviewCount);
          break;
      }

      return filtered;
    },
    carById: ({ state }) => (carId) => {
      return state.cars.find(car => car.id === carId);
    },
    popularCars({ state }) {
      return state.cars.filter(car => car.popular).slice(0, 6);
    },
    comparisonCars({ state }) {
      return state.comparisonCars;
    },
    favoriteCars({ state }) {
      if (!state.user) return [];
      const favoriteIds = getFavorites(state.user.id);
      return state.cars.filter(car => favoriteIds.includes(car.id));
    },

    // Location Getters
    allLocations({ state }) {
      return state.locations;
    },
    popularLocations({ state }) {
      return state.locations.filter(loc => loc.popular);
    },

    // Extras Getters
    allExtras({ state }) {
      return state.extras;
    },
    popularExtras({ state }) {
      return state.extras.filter(extra => extra.popular);
    },

    // Reviews Getters
    reviewsByCarId: ({ state }) => (carId) => {
      return state.reviews.filter(review => review.carId === carId);
    },

    // Booking Getters
    currentBooking({ state }) {
      return state.currentBooking;
    },
    userBookings({ state }) {
      if (!state.user) return [];
      return getBookings(state.user.id);
    },

    // Filter Getters
    filters({ state }) {
      return state.filters;
    },
    sortBy({ state }) {
      return state.sortBy;
    },

    // UI State
    viewMode({ state }) {
      return state.viewMode;
    },
    loading({ state }) {
      return state.loading;
    }
  },

  actions: {
    // User Actions
    setUser({ state }, user) {
      state.user = user;
      state.isAuthenticated = user !== null;
    },
    logout({ state }) {
      state.user = null;
      state.isAuthenticated = false;
      state.userBookings = [];
    },

    // Filter Actions
    setFilter({ state }, { filterName, value }) {
      state.filters[filterName] = value;
    },
    clearFilters({ state }) {
      state.filters = {
        category: [],
        brand: [],
        priceRange: [0, 300],
        transmission: null,
        fuelType: [],
        features: [],
        seating: null,
        location: null
      };
      state.searchQuery = '';
    },
    setSortBy({ state }, sortBy) {
      state.sortBy = sortBy;
    },
    setSearchQuery({ state }, query) {
      state.searchQuery = query;
    },

    // View Actions
    setViewMode({ state }, mode) {
      state.viewMode = mode;
    },

    // Car Actions
    setSelectedCar({ state }, car) {
      state.selectedCar = car;
    },
    addToComparison({ state }, car) {
      if (state.comparisonCars.length < 3 && !state.comparisonCars.find(c => c.id === car.id)) {
        state.comparisonCars = [...state.comparisonCars, car];
      }
    },
    removeFromComparison({ state }, carId) {
      state.comparisonCars = state.comparisonCars.filter(car => car.id !== carId);
    },
    clearComparison({ state }) {
      state.comparisonCars = [];
    },

    // Booking Actions
    setCurrentBooking({ state }, booking) {
      state.currentBooking = { ...state.currentBooking, ...booking };
    },
    clearCurrentBooking({ state }) {
      state.currentBooking = {
        car: null,
        pickupLocation: null,
        returnLocation: null,
        pickupDate: null,
        pickupTime: '10:00',
        returnDate: null,
        returnTime: '10:00',
        extras: [],
        driverInfo: {}
      };
    },
    addExtra({ state }, extraId) {
      if (!state.currentBooking.extras.includes(extraId)) {
        state.currentBooking.extras = [...state.currentBooking.extras, extraId];
      }
    },
    removeExtra({ state }, extraId) {
      state.currentBooking.extras = state.currentBooking.extras.filter(id => id !== extraId);
    },

    // UI Actions
    setLoading({ state }, loading) {
      state.loading = loading;
    },
    setError({ state }, error) {
      state.error = error;
    }
  }
});

export default store;
