// Price Calculator Utility
// Calculates rental prices including extras, taxes, and fees

import { getDaysBetween } from './dateHelpers';

// Tax rate (10% as default)
const TAX_RATE = 0.10;

// Service fee (flat fee)
const SERVICE_FEE = 5.99;

// Calculate base price for rental period
export const calculateBasePrice = (pricePerDay, startDate, endDate) => {
  const days = getDaysBetween(startDate, endDate);
  return pricePerDay * days;
};

// Calculate extras total
export const calculateExtrasTotal = (extras, extrasData, startDate, endDate) => {
  if (!extras || extras.length === 0) return 0;

  const days = getDaysBetween(startDate, endDate);
  let total = 0;

  extras.forEach(extraId => {
    const extra = extrasData.find(e => e.id === extraId);
    if (extra) {
      // Some extras have flat price, others are per day
      if (extra.priceFlat) {
        total += extra.priceFlat;
      } else {
        total += extra.pricePerDay * days;
      }
    }
  });

  return total;
};

// Calculate subtotal (base price + extras)
export const calculateSubtotal = (basePrice, extrasTotal) => {
  return basePrice + extrasTotal;
};

// Calculate tax
export const calculateTax = (subtotal) => {
  return subtotal * TAX_RATE;
};

// Calculate total fees
export const calculateFees = () => {
  return SERVICE_FEE;
};

// Calculate grand total
export const calculateTotal = (subtotal, tax, fees = SERVICE_FEE) => {
  return subtotal + tax + fees;
};

// Calculate complete booking price
export const calculateBookingPrice = (car, extras, extrasData, startDate, endDate) => {
  const days = getDaysBetween(startDate, endDate);
  const basePrice = calculateBasePrice(car.pricePerDay, startDate, endDate);
  const extrasTotal = calculateExtrasTotal(extras, extrasData, startDate, endDate);
  const subtotal = calculateSubtotal(basePrice, extrasTotal);
  const tax = calculateTax(subtotal);
  const fees = calculateFees();
  const total = calculateTotal(subtotal, tax, fees);

  return {
    days,
    pricePerDay: car.pricePerDay,
    basePrice,
    extrasTotal,
    subtotal,
    tax,
    fees,
    total
  };
};

// Format price to currency string
export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

// Format price with optional currency symbol
export const formatPriceWithSymbol = (price, showSymbol = true) => {
  const formatted = price.toFixed(2);
  return showSymbol ? `$${formatted}` : formatted;
};

// Calculate discount (if applicable)
export const calculateDiscount = (subtotal, discountPercent) => {
  if (!discountPercent || discountPercent <= 0) return 0;
  return subtotal * (discountPercent / 100);
};

// Apply discount to total
export const applyDiscount = (total, discount) => {
  return Math.max(0, total - discount);
};

// Calculate long-term rental discount
// 7+ days: 5% off, 14+ days: 10% off, 30+ days: 15% off
export const calculateLongTermDiscount = (days, basePrice) => {
  let discountPercent = 0;

  if (days >= 30) {
    discountPercent = 15;
  } else if (days >= 14) {
    discountPercent = 10;
  } else if (days >= 7) {
    discountPercent = 5;
  }

  if (discountPercent > 0) {
    const discount = basePrice * (discountPercent / 100);
    return {
      applied: true,
      percent: discountPercent,
      amount: discount
    };
  }

  return {
    applied: false,
    percent: 0,
    amount: 0
  };
};

// Get price breakdown for display
export const getPriceBreakdown = (pricing) => {
  return [
    {
      label: `Car Rental (${pricing.days} day${pricing.days > 1 ? 's' : ''} × ${formatPrice(pricing.pricePerDay)})`,
      amount: pricing.basePrice,
      type: 'base'
    },
    ...(pricing.extrasTotal > 0 ? [{
      label: 'Extras',
      amount: pricing.extrasTotal,
      type: 'extras'
    }] : []),
    {
      label: 'Subtotal',
      amount: pricing.subtotal,
      type: 'subtotal'
    },
    {
      label: `Tax (${(TAX_RATE * 100).toFixed(0)}%)`,
      amount: pricing.tax,
      type: 'tax'
    },
    {
      label: 'Service Fee',
      amount: pricing.fees,
      type: 'fees'
    },
    ...(pricing.discount && pricing.discount > 0 ? [{
      label: 'Discount',
      amount: -pricing.discount,
      type: 'discount'
    }] : []),
    {
      label: 'Total',
      amount: pricing.total,
      type: 'total'
    }
  ];
};

// Calculate price per day with all costs included
export const calculateTrueCostPerDay = (total, days) => {
  return total / days;
};

// Compare prices between cars
export const comparePrices = (car1Total, car2Total) => {
  const difference = Math.abs(car1Total - car2Total);
  const percentDifference = ((difference / Math.min(car1Total, car2Total)) * 100).toFixed(1);

  return {
    difference,
    percentDifference,
    cheaper: car1Total < car2Total ? 'car1' : 'car2'
  };
};

// Estimate fuel cost (optional utility)
export const estimateFuelCost = (miles, mpg, gasPrice = 3.50) => {
  const gallons = miles / mpg;
  return gallons * gasPrice;
};

// Calculate refund amount for cancellation
// Cancellation within 48 hours: 100% refund
// 24-48 hours: 50% refund
// Less than 24 hours: No refund
export const calculateRefundAmount = (total, hoursUntilPickup) => {
  if (hoursUntilPickup >= 48) {
    return {
      amount: total,
      percent: 100,
      message: 'Full refund'
    };
  } else if (hoursUntilPickup >= 24) {
    return {
      amount: total * 0.5,
      percent: 50,
      message: '50% refund'
    };
  } else {
    return {
      amount: 0,
      percent: 0,
      message: 'No refund'
    };
  }
};

export default {
  calculateBasePrice,
  calculateExtrasTotal,
  calculateSubtotal,
  calculateTax,
  calculateFees,
  calculateTotal,
  calculateBookingPrice,
  formatPrice,
  formatPriceWithSymbol,
  calculateDiscount,
  applyDiscount,
  calculateLongTermDiscount,
  getPriceBreakdown,
  calculateTrueCostPerDay,
  comparePrices,
  estimateFuelCost,
  calculateRefundAmount,
  TAX_RATE,
  SERVICE_FEE
};
