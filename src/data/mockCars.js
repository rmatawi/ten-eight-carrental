// Mock Car Data for Car Rental App
// This file contains 25 diverse cars across different categories

const mockCars = [
  // ===== SEDANS =====
  {
    id: 'car-001',
    name: 'Toyota Camry 2024',
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    category: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
    pricePerDay: 59.99,
    rating: 4.5,
    reviewCount: 128,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 32,
      engine: '2.5L 4-Cylinder',
      horsepower: 203,
      drive: 'FWD'
    },
    features: [
      'Bluetooth',
      'Backup Camera',
      'Climate Control',
      'Cruise Control',
      'USB Charging',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'The Toyota Camry offers a perfect blend of comfort, reliability, and efficiency. Ideal for business trips or family vacations with its spacious interior and advanced safety features.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'ORD', 'DFW']
  },
  {
    id: 'car-002',
    name: 'Honda Accord 2024',
    brand: 'Honda',
    model: 'Accord',
    year: 2024,
    category: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400',
    pricePerDay: 64.99,
    rating: 4.6,
    reviewCount: 156,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      mpg: 48,
      engine: '2.0L Hybrid',
      horsepower: 204,
      drive: 'FWD'
    },
    features: [
      'Bluetooth',
      'Backup Camera',
      'Lane Keeping Assist',
      'Adaptive Cruise Control',
      'Wireless Charging',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'Experience exceptional fuel economy with the Honda Accord Hybrid without sacrificing performance or comfort. Perfect for long-distance travelers.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'MIA', 'SEA']
  },
  {
    id: 'car-003',
    name: 'Nissan Altima 2024',
    brand: 'Nissan',
    model: 'Altima',
    year: 2024,
    category: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1623869675781-80aa31cdb4b3?w=800',
      'https://images.unsplash.com/photo-1623869675781-80aa31cdb4b3?w=800',
      'https://images.unsplash.com/photo-1623869675781-80aa31cdb4b3?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1623869675781-80aa31cdb4b3?w=400',
    pricePerDay: 54.99,
    rating: 4.3,
    reviewCount: 89,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 30,
      engine: '2.5L 4-Cylinder',
      horsepower: 188,
      drive: 'FWD'
    },
    features: [
      'Bluetooth',
      'Backup Camera',
      'Climate Control',
      'Keyless Entry',
      'USB Charging',
      'Apple CarPlay'
    ],
    description: 'Affordable and reliable, the Nissan Altima is perfect for budget-conscious travelers who don\'t want to compromise on comfort.',
    availability: true,
    popular: false,
    location: ['LAX', 'ORD', 'DFW', 'ATL']
  },

  // ===== SUVs =====
  {
    id: 'car-004',
    name: 'Toyota RAV4 2024',
    brand: 'Toyota',
    model: 'RAV4',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400',
    pricePerDay: 79.99,
    rating: 4.7,
    reviewCount: 203,
    specifications: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      mpg: 40,
      engine: '2.5L Hybrid',
      horsepower: 219,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      'Backup Camera',
      '360° Camera',
      'Lane Departure Warning',
      'Adaptive Cruise Control',
      'Apple CarPlay',
      'Android Auto',
      'Roof Rails'
    ],
    description: 'The Toyota RAV4 combines SUV versatility with hybrid efficiency. Perfect for adventurous families and outdoor enthusiasts.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'ORD', 'DEN', 'SEA']
  },
  {
    id: 'car-005',
    name: 'Honda CR-V 2024',
    brand: 'Honda',
    model: 'CR-V',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
    pricePerDay: 74.99,
    rating: 4.6,
    reviewCount: 178,
    specifications: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 28,
      engine: '1.5L Turbo',
      horsepower: 190,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      'Backup Camera',
      'Lane Keeping Assist',
      'Blind Spot Monitor',
      'Heated Seats',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'Spacious and comfortable, the Honda CR-V is a top choice for families. Enjoy ample cargo space and advanced safety features.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'MIA', 'ATL']
  },
  {
    id: 'car-006',
    name: 'Jeep Grand Cherokee 2024',
    brand: 'Jeep',
    model: 'Grand Cherokee',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400',
    pricePerDay: 94.99,
    rating: 4.5,
    reviewCount: 134,
    specifications: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 22,
      engine: '3.6L V6',
      horsepower: 293,
      drive: '4WD'
    },
    features: [
      '4-Wheel Drive',
      'Leather Seats',
      'Panoramic Sunroof',
      'Premium Audio',
      'Navigation System',
      'Apple CarPlay',
      'Android Auto',
      'Tow Package'
    ],
    description: 'Rugged luxury meets refined comfort in the Jeep Grand Cherokee. Ideal for both city driving and off-road adventures.',
    availability: true,
    popular: false,
    location: ['DEN', 'PHX', 'LAS', 'SLC']
  },
  {
    id: 'car-007',
    name: 'Ford Explorer 2024',
    brand: 'Ford',
    model: 'Explorer',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400',
    pricePerDay: 89.99,
    rating: 4.4,
    reviewCount: 145,
    specifications: {
      passengers: 7,
      luggage: 5,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 24,
      engine: '2.3L EcoBoost',
      horsepower: 300,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      '3rd Row Seating',
      'Backup Camera',
      'Blind Spot Monitor',
      'Keyless Entry',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'Need extra space? The Ford Explorer seats up to 7 passengers with plenty of cargo room. Perfect for large groups.',
    availability: true,
    popular: true,
    location: ['ORD', 'DFW', 'ATL', 'DEN']
  },

  // ===== LUXURY =====
  {
    id: 'car-008',
    name: 'BMW 5 Series 2024',
    brand: 'BMW',
    model: '5 Series',
    year: 2024,
    category: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
    pricePerDay: 149.99,
    rating: 4.8,
    reviewCount: 92,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 26,
      engine: '2.0L Turbo',
      horsepower: 255,
      drive: 'RWD'
    },
    features: [
      'Leather Seats',
      'Heated & Ventilated Seats',
      'Panoramic Sunroof',
      'Premium Sound System',
      'Navigation System',
      'Head-Up Display',
      'Wireless Charging',
      'Gesture Control'
    ],
    description: 'Experience the ultimate driving machine. The BMW 5 Series combines luxury, performance, and cutting-edge technology.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'MIA', 'SFO']
  },
  {
    id: 'car-009',
    name: 'Mercedes-Benz E-Class 2024',
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2024,
    category: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400',
    pricePerDay: 159.99,
    rating: 4.9,
    reviewCount: 87,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 25,
      engine: '2.0L Turbo',
      horsepower: 255,
      drive: 'RWD'
    },
    features: [
      'Leather Seats',
      'Heated & Ventilated Seats',
      'Panoramic Sunroof',
      'Burmester Audio',
      'Navigation System',
      '64-Color Ambient Lighting',
      'Wireless Charging',
      'MBUX Infotainment'
    ],
    description: 'The pinnacle of luxury and sophistication. The Mercedes-Benz E-Class offers unmatched comfort and prestige.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'MIA', 'LAS']
  },
  {
    id: 'car-010',
    name: 'Audi A6 2024',
    brand: 'Audi',
    model: 'A6',
    year: 2024,
    category: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=400',
    pricePerDay: 139.99,
    rating: 4.7,
    reviewCount: 76,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 27,
      engine: '2.0L Turbo',
      horsepower: 248,
      drive: 'AWD'
    },
    features: [
      'Quattro AWD',
      'Leather Seats',
      'Heated Seats',
      'Virtual Cockpit',
      'Navigation System',
      'Bang & Olufsen Audio',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'Sophisticated and sporty, the Audi A6 delivers Quattro all-wheel drive capability with premium comfort.',
    availability: true,
    popular: false,
    location: ['SFO', 'SEA', 'BOS', 'JFK']
  },

  // ===== SPORTS =====
  {
    id: 'car-011',
    name: 'Ford Mustang GT 2024',
    brand: 'Ford',
    model: 'Mustang GT',
    year: 2024,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5f8f590f6?w=800',
      'https://images.unsplash.com/photo-1584345604476-8ec5f8f590f6?w=800',
      'https://images.unsplash.com/photo-1584345604476-8ec5f8f590f6?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1584345604476-8ec5f8f590f6?w=400',
    pricePerDay: 119.99,
    rating: 4.6,
    reviewCount: 112,
    specifications: {
      passengers: 4,
      luggage: 2,
      transmission: 'Manual',
      fuelType: 'Gasoline',
      mpg: 18,
      engine: '5.0L V8',
      horsepower: 480,
      drive: 'RWD'
    },
    features: [
      'Sport Exhaust',
      'Performance Package',
      'Launch Control',
      'Track Apps',
      'Premium Audio',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'Unleash American muscle power. The Mustang GT delivers thrilling performance and iconic style.',
    availability: true,
    popular: true,
    location: ['LAX', 'LAS', 'MIA', 'PHX']
  },
  {
    id: 'car-012',
    name: 'Chevrolet Corvette 2024',
    brand: 'Chevrolet',
    model: 'Corvette',
    year: 2024,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1597404294360-ffc6dc541f9c?w=800',
      'https://images.unsplash.com/photo-1597404294360-ffc6dc541f9c?w=800',
      'https://images.unsplash.com/photo-1597404294360-ffc6dc541f9c?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1597404294360-ffc6dc541f9c?w=400',
    pricePerDay: 189.99,
    rating: 4.9,
    reviewCount: 68,
    specifications: {
      passengers: 2,
      luggage: 1,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 19,
      engine: '6.2L V8',
      horsepower: 495,
      drive: 'RWD'
    },
    features: [
      'Mid-Engine Design',
      'Performance Exhaust',
      'Launch Control',
      'Carbon Fiber Package',
      'Bose Premium Audio',
      'Head-Up Display',
      'Performance Data Recorder'
    ],
    description: 'The mid-engine Corvette is a supercar for the people. Experience exotic car thrills at an accessible price.',
    availability: true,
    popular: true,
    location: ['LAX', 'MIA', 'LAS']
  },
  {
    id: 'car-013',
    name: 'Porsche 911 Carrera 2024',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
    pricePerDay: 299.99,
    rating: 5.0,
    reviewCount: 45,
    specifications: {
      passengers: 4,
      luggage: 1,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 20,
      engine: '3.0L Twin-Turbo Flat-6',
      horsepower: 379,
      drive: 'RWD'
    },
    features: [
      'Sport Chrono Package',
      'PASM Suspension',
      'Sport Exhaust',
      'Burmester Audio',
      'Carbon Fiber Interior',
      'GT Sport Steering Wheel',
      'Track Precision App'
    ],
    description: 'The legendary Porsche 911 - a timeless icon of performance and engineering excellence. Make your drive unforgettable.',
    availability: true,
    popular: false,
    location: ['LAX', 'SFO', 'MIA']
  },

  // ===== ELECTRIC =====
  {
    id: 'car-014',
    name: 'Tesla Model 3 2024',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    category: 'Electric',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400',
    pricePerDay: 99.99,
    rating: 4.7,
    reviewCount: 234,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Electric',
      mpg: 132,
      engine: 'Dual Motor AWD',
      horsepower: 346,
      drive: 'AWD'
    },
    features: [
      'Autopilot',
      'Over-the-Air Updates',
      'Premium Audio',
      'Glass Roof',
      '15-inch Touchscreen',
      'Supercharger Access',
      'Sentry Mode'
    ],
    description: 'Experience the future of driving with Tesla Model 3. Zero emissions, instant acceleration, and cutting-edge technology.',
    availability: true,
    popular: true,
    location: ['LAX', 'SFO', 'SEA', 'DEN']
  },
  {
    id: 'car-015',
    name: 'Tesla Model Y 2024',
    brand: 'Tesla',
    model: 'Model Y',
    year: 2024,
    category: 'Electric',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400',
    pricePerDay: 109.99,
    rating: 4.8,
    reviewCount: 198,
    specifications: {
      passengers: 7,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Electric',
      mpg: 122,
      engine: 'Dual Motor AWD',
      horsepower: 384,
      drive: 'AWD'
    },
    features: [
      'Autopilot',
      '3rd Row Seating',
      'Over-the-Air Updates',
      'Premium Audio',
      'Glass Roof',
      '15-inch Touchscreen',
      'Supercharger Access',
      'Dog Mode'
    ],
    description: 'The Tesla Model Y combines SUV versatility with electric efficiency. Optional third-row seating for maximum flexibility.',
    availability: true,
    popular: true,
    location: ['LAX', 'SFO', 'SEA', 'PDX', 'DEN']
  },
  {
    id: 'car-016',
    name: 'Chevrolet Bolt EUV 2024',
    brand: 'Chevrolet',
    model: 'Bolt EUV',
    year: 2024,
    category: 'Electric',
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400',
    pricePerDay: 69.99,
    rating: 4.4,
    reviewCount: 87,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Electric',
      mpg: 115,
      engine: 'Single Motor',
      horsepower: 200,
      drive: 'FWD'
    },
    features: [
      'Super Cruise',
      'Fast Charging',
      'Apple CarPlay',
      'Android Auto',
      'Panoramic Sunroof',
      'Wireless Charging',
      '360° Camera'
    ],
    description: 'Affordable electric mobility with the Chevy Bolt EUV. Great range, spacious interior, and hands-free driving capability.',
    availability: true,
    popular: false,
    location: ['SFO', 'SEA', 'DEN']
  },
  {
    id: 'car-017',
    name: 'Hyundai Ioniq 5 2024',
    brand: 'Hyundai',
    model: 'Ioniq 5',
    year: 2024,
    category: 'Electric',
    images: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
    pricePerDay: 84.99,
    rating: 4.6,
    reviewCount: 124,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Electric',
      mpg: 110,
      engine: 'Dual Motor AWD',
      horsepower: 320,
      drive: 'AWD'
    },
    features: [
      'Ultra-Fast Charging',
      'V2L (Vehicle to Load)',
      'Augmented Reality HUD',
      'Solar Roof',
      'Relaxation Seats',
      'Premium Audio',
      'Apple CarPlay',
      'Android Auto'
    ],
    description: 'Futuristic design meets practical innovation. The Ioniq 5 charges from 10% to 80% in just 18 minutes.',
    availability: true,
    popular: true,
    location: ['LAX', 'SFO', 'SEA']
  },

  // ===== VANS =====
  {
    id: 'car-018',
    name: 'Honda Odyssey 2024',
    brand: 'Honda',
    model: 'Odyssey',
    year: 2024,
    category: 'Van',
    images: [
      'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800',
      'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800',
      'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400',
    pricePerDay: 94.99,
    rating: 4.7,
    reviewCount: 167,
    specifications: {
      passengers: 8,
      luggage: 6,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 22,
      engine: '3.5L V6',
      horsepower: 280,
      drive: 'FWD'
    },
    features: [
      'Power Sliding Doors',
      'CabinWatch Camera',
      'CabinTalk',
      'Rear Entertainment System',
      'Vacuum Cleaner',
      'Apple CarPlay',
      'Android Auto',
      '10-Speed Automatic'
    ],
    description: 'The ultimate family road trip vehicle. The Honda Odyssey offers unmatched versatility and family-friendly features.',
    availability: true,
    popular: true,
    location: ['LAX', 'ORD', 'DFW', 'ATL']
  },
  {
    id: 'car-019',
    name: 'Chrysler Pacifica 2024',
    brand: 'Chrysler',
    model: 'Pacifica',
    year: 2024,
    category: 'Van',
    images: [
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800',
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800',
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=400',
    pricePerDay: 99.99,
    rating: 4.5,
    reviewCount: 143,
    specifications: {
      passengers: 7,
      luggage: 5,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      mpg: 30,
      engine: '3.6L V6 Hybrid',
      horsepower: 260,
      drive: 'FWD'
    },
    features: [
      'Hybrid Powertrain',
      'Stow \'n Go Seating',
      'Uconnect Theater',
      'Hands-Free Doors',
      'Tri-Pane Panoramic Sunroof',
      'Apple CarPlay',
      'Android Auto',
      'WiFi Hotspot'
    ],
    description: 'Innovative hybrid minivan with exceptional fuel economy. Perfect for eco-conscious families who need space.',
    availability: true,
    popular: true,
    location: ['LAX', 'JFK', 'ORD', 'MIA']
  },
  {
    id: 'car-020',
    name: 'Toyota Sienna 2024',
    brand: 'Toyota',
    model: 'Sienna',
    year: 2024,
    category: 'Van',
    images: [
      'https://images.unsplash.com/photo-1511527844068-006b95d162c2?w=800',
      'https://images.unsplash.com/photo-1511527844068-006b95d162c2?w=800',
      'https://images.unsplash.com/photo-1511527844068-006b95d162c2?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1511527844068-006b95d162c2?w=400',
    pricePerDay: 97.99,
    rating: 4.6,
    reviewCount: 156,
    specifications: {
      passengers: 8,
      luggage: 5,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      mpg: 36,
      engine: '2.5L Hybrid',
      horsepower: 245,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      'Hybrid (All Models)',
      'Power Sliding Doors',
      'Driver Easy Speak',
      'Super Long Slide Seats',
      'Apple CarPlay',
      'Android Auto',
      'WiFi Hotspot'
    ],
    description: 'The only hybrid-only minivan with available AWD. Exceptional fuel economy meets family versatility.',
    availability: true,
    popular: true,
    location: ['LAX', 'SEA', 'DEN', 'PDX']
  },

  // ===== MORE SEDANS =====
  {
    id: 'car-021',
    name: 'Mazda6 2024',
    brand: 'Mazda',
    model: 'Mazda6',
    year: 2024,
    category: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=800',
      'https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=800',
      'https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=400',
    pricePerDay: 62.99,
    rating: 4.5,
    reviewCount: 98,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 29,
      engine: '2.5L Turbo',
      horsepower: 227,
      drive: 'FWD'
    },
    features: [
      'Bose Premium Audio',
      'Leather Seats',
      'Heated Seats',
      'Apple CarPlay',
      'Android Auto',
      'Adaptive Cruise Control',
      'Lane Keep Assist'
    ],
    description: 'Upscale driving experience in the midsize sedan class. The Mazda6 combines style, comfort, and driving dynamics.',
    availability: true,
    popular: false,
    location: ['LAX', 'SFO', 'SEA']
  },
  {
    id: 'car-022',
    name: 'Hyundai Sonata 2024',
    brand: 'Hyundai',
    model: 'Sonata',
    year: 2024,
    category: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400',
    pricePerDay: 57.99,
    rating: 4.4,
    reviewCount: 112,
    specifications: {
      passengers: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 31,
      engine: '2.5L 4-Cylinder',
      horsepower: 191,
      drive: 'FWD'
    },
    features: [
      'Wireless Phone Charging',
      'Digital Key',
      'Remote Smart Parking',
      'Highway Driving Assist',
      'Apple CarPlay',
      'Android Auto',
      'Heated Seats'
    ],
    description: 'Modern and tech-forward, the Hyundai Sonata offers great value with innovative features like digital key technology.',
    availability: true,
    popular: false,
    location: ['ORD', 'DFW', 'ATL']
  },

  // ===== MORE SUVs =====
  {
    id: 'car-023',
    name: 'Mazda CX-5 2024',
    brand: 'Mazda',
    model: 'CX-5',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1581540222194-0def29197da8?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def29197da8?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def29197da8?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1581540222194-0def29197da8?w=400',
    pricePerDay: 76.99,
    rating: 4.6,
    reviewCount: 189,
    specifications: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 26,
      engine: '2.5L Turbo',
      horsepower: 227,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      'Bose Premium Audio',
      'Leather Seats',
      'Heated Seats',
      'Apple CarPlay',
      'Android Auto',
      'i-Activsense Safety'
    ],
    description: 'Premium feel at a non-premium price. The Mazda CX-5 offers upscale materials and engaging driving dynamics.',
    availability: true,
    popular: true,
    location: ['LAX', 'SFO', 'SEA', 'DEN']
  },
  {
    id: 'car-024',
    name: 'Hyundai Tucson 2024',
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=800',
      'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=800',
      'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=400',
    pricePerDay: 71.99,
    rating: 4.5,
    reviewCount: 167,
    specifications: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      mpg: 38,
      engine: '1.6L Turbo Hybrid',
      horsepower: 226,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      'Hybrid Powertrain',
      'Digital Cockpit',
      'Wireless Charging',
      'Panoramic Sunroof',
      'Apple CarPlay',
      'Android Auto',
      'Smart Park Assist'
    ],
    description: 'Bold styling meets hybrid efficiency. The Tucson offers impressive fuel economy without compromising on features.',
    availability: true,
    popular: true,
    location: ['LAX', 'ORD', 'DFW', 'ATL']
  },
  {
    id: 'car-025',
    name: 'Kia Sportage 2024',
    brand: 'Kia',
    model: 'Sportage',
    year: 2024,
    category: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1609630871358-8fce9da28f49?w=800',
      'https://images.unsplash.com/photo-1609630871358-8fce9da28f49?w=800',
      'https://images.unsplash.com/photo-1609630871358-8fce9da28f49?w=800'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1609630871358-8fce9da28f49?w=400',
    pricePerDay: 69.99,
    rating: 4.4,
    reviewCount: 145,
    specifications: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      mpg: 25,
      engine: '2.5L 4-Cylinder',
      horsepower: 187,
      drive: 'AWD'
    },
    features: [
      'All-Wheel Drive',
      'Curved Panoramic Display',
      'Wireless Charging',
      'Highway Driving Assist',
      'Blind Spot View Monitor',
      'Apple CarPlay',
      'Android Auto',
      'Remote Smart Park'
    ],
    description: 'Tech-packed compact SUV with striking design. The Kia Sportage offers great value and a comprehensive warranty.',
    availability: true,
    popular: false,
    location: ['ORD', 'DFW', 'ATL', 'DEN']
  }
];

export default mockCars;
