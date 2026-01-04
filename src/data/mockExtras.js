// Mock Rental Extras Data for Car Rental App
// This file contains additional services and add-ons available for rental

const mockExtras = [
  {
    id: 'extra-001',
    name: 'GPS Navigation System',
    description: 'TomTom GO Premium with lifetime maps and real-time traffic updates',
    pricePerDay: 12.99,
    icon: 'f7:location_fill',
    category: 'Technology',
    popular: true
  },
  {
    id: 'extra-002',
    name: 'Child Safety Seat (Infant)',
    description: 'Rear-facing car seat for infants up to 35 lbs (0-2 years)',
    pricePerDay: 13.99,
    icon: 'f7:person_2_square_stack',
    category: 'Safety',
    popular: true
  },
  {
    id: 'extra-003',
    name: 'Child Safety Seat (Toddler)',
    description: 'Forward-facing car seat for toddlers 22-65 lbs (2-7 years)',
    pricePerDay: 13.99,
    icon: 'f7:person_2_square_stack',
    category: 'Safety',
    popular: true
  },
  {
    id: 'extra-004',
    name: 'Booster Seat',
    description: 'Booster seat for children 40-100 lbs (4-12 years)',
    pricePerDay: 9.99,
    icon: 'f7:person_2_square_stack',
    category: 'Safety',
    popular: false
  },
  {
    id: 'extra-005',
    name: 'Additional Driver',
    description: 'Add an authorized driver to your rental agreement (age 25+)',
    pricePerDay: 14.99,
    icon: 'f7:person_2',
    category: 'Driver',
    popular: true
  },
  {
    id: 'extra-006',
    name: 'Young Driver Fee',
    description: 'Required fee for drivers aged 21-24 years',
    pricePerDay: 29.99,
    icon: 'f7:person',
    category: 'Driver',
    popular: false
  },
  {
    id: 'extra-007',
    name: 'Full Coverage Insurance',
    description: 'Comprehensive coverage with zero deductible and roadside assistance',
    pricePerDay: 24.99,
    icon: 'f7:shield_fill',
    category: 'Insurance',
    popular: true
  },
  {
    id: 'extra-008',
    name: 'Premium Insurance Package',
    description: 'Full coverage plus personal effects coverage up to $1,000',
    pricePerDay: 34.99,
    icon: 'f7:shield_lefthalf_fill',
    category: 'Insurance',
    popular: false
  },
  {
    id: 'extra-009',
    name: 'WiFi Hotspot',
    description: 'Unlimited 4G LTE WiFi hotspot for up to 5 devices',
    pricePerDay: 10.99,
    icon: 'f7:wifi',
    category: 'Technology',
    popular: true
  },
  {
    id: 'extra-010',
    name: 'Satellite Radio',
    description: 'SiriusXM satellite radio with 150+ channels',
    pricePerDay: 4.99,
    icon: 'f7:antenna_radiowaves_left_right',
    category: 'Entertainment',
    popular: false
  },
  {
    id: 'extra-011',
    name: 'Toll Pass',
    description: 'Automatic toll payment transponder for all major toll roads',
    pricePerDay: 7.99,
    icon: 'f7:car_fill',
    category: 'Convenience',
    popular: true
  },
  {
    id: 'extra-012',
    name: 'Ski Rack',
    description: 'Roof-mounted ski and snowboard rack (holds up to 6 pairs)',
    pricePerDay: 15.99,
    icon: 'f7:snow',
    category: 'Recreation',
    popular: false
  },
  {
    id: 'extra-013',
    name: 'Bike Rack',
    description: 'Hitch-mounted bike rack (holds up to 4 bikes)',
    pricePerDay: 12.99,
    icon: 'f7:bicycle',
    category: 'Recreation',
    popular: false
  },
  {
    id: 'extra-014',
    name: 'Prepaid Fuel',
    description: 'Return the car empty - we\'ll fill it up for you at market rate',
    pricePerDay: 0,
    priceFlat: 75.00,
    icon: 'f7:fuel',
    category: 'Convenience',
    popular: true
  },
  {
    id: 'extra-015',
    name: 'Premium Roadside Assistance',
    description: '24/7 premium roadside assistance with towing, jump starts, and tire changes',
    pricePerDay: 8.99,
    icon: 'f7:wrench_fill',
    category: 'Insurance',
    popular: false
  }
];

export default mockExtras;
