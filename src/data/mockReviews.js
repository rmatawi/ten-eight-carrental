// Mock Reviews Data for Car Rental App
// This file contains customer reviews for cars

const mockReviews = [
  // Toyota Camry Reviews (car-001)
  {
    id: 'review-001',
    carId: 'car-001',
    userId: 'user-101',
    userName: 'Michael Johnson',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    date: '2024-12-20',
    title: 'Perfect for a Business Trip',
    comment: 'Rented this for a week-long business trip. The Camry was incredibly comfortable, fuel-efficient, and had all the tech features I needed. Bluetooth and CarPlay made staying connected easy. Highly recommend!',
    helpful: 24,
    verified: true
  },
  {
    id: 'review-002',
    carId: 'car-001',
    userId: 'user-102',
    userName: 'Sarah Williams',
    userAvatar: 'https://i.pravatar.cc/150?img=27',
    rating: 4,
    date: '2024-12-10',
    title: 'Great Reliable Car',
    comment: 'The Toyota Camry was exactly what we needed for our family vacation. Spacious, comfortable, and very reliable. Only wish it had a bit more trunk space for all our luggage.',
    helpful: 18,
    verified: true
  },
  {
    id: 'review-003',
    carId: 'car-001',
    userId: 'user-103',
    userName: 'David Chen',
    userAvatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    date: '2024-11-28',
    title: 'Excellent Fuel Economy',
    comment: 'Did a 1,500-mile road trip and was amazed by the fuel economy. The car is smooth, quiet, and makes long drives a breeze. Will definitely rent again!',
    helpful: 31,
    verified: true
  },

  // Honda Accord Reviews (car-002)
  {
    id: 'review-004',
    carId: 'car-002',
    userId: 'user-104',
    userName: 'Emily Rodriguez',
    userAvatar: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    date: '2024-12-15',
    title: 'Love the Hybrid!',
    comment: 'The hybrid system is fantastic! Got over 45 MPG on the highway. The car is also packed with safety features. Very impressed with this rental.',
    helpful: 29,
    verified: true
  },
  {
    id: 'review-005',
    carId: 'car-002',
    userId: 'user-105',
    userName: 'James Taylor',
    userAvatar: 'https://i.pravatar.cc/150?img=51',
    rating: 4,
    date: '2024-12-05',
    title: 'Smooth and Comfortable',
    comment: 'Great car for long trips. The adaptive cruise control is a lifesaver in traffic. Interior is upscale and comfortable.',
    helpful: 15,
    verified: true
  },

  // Toyota RAV4 Reviews (car-004)
  {
    id: 'review-006',
    carId: 'car-004',
    userId: 'user-106',
    userName: 'Jennifer Martinez',
    userAvatar: 'https://i.pravatar.cc/150?img=24',
    rating: 5,
    date: '2024-12-18',
    title: 'Perfect Family SUV',
    comment: 'Took this on a family camping trip. The AWD handled mountain roads with ease, and there was plenty of room for all our gear. The kids loved the spacious back seat!',
    helpful: 42,
    verified: true
  },
  {
    id: 'review-007',
    carId: 'car-004',
    userId: 'user-107',
    userName: 'Robert Anderson',
    userAvatar: 'https://i.pravatar.cc/150?img=60',
    rating: 5,
    date: '2024-12-08',
    title: 'Hybrid SUV Done Right',
    comment: 'Amazing fuel economy for an SUV. Got 38 MPG combined! The hybrid system is seamless and the car has plenty of power when needed.',
    helpful: 38,
    verified: true
  },

  // BMW 5 Series Reviews (car-008)
  {
    id: 'review-008',
    carId: 'car-008',
    userId: 'user-108',
    userName: 'William Thompson',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    date: '2024-12-22',
    title: 'Luxury at Its Finest',
    comment: 'Treated myself to this for a special occasion. The driving experience is unmatched. Everything from the heated seats to the premium sound system is top-notch. Worth every penny!',
    helpful: 27,
    verified: true
  },
  {
    id: 'review-009',
    carId: 'car-008',
    userId: 'user-109',
    userName: 'Amanda White',
    userAvatar: 'https://i.pravatar.cc/150?img=36',
    rating: 5,
    date: '2024-12-12',
    title: 'The Ultimate Driving Machine',
    comment: 'BMW doesn\'t disappoint. The handling is precise, the acceleration is smooth, and the technology is cutting-edge. Made my business trip feel like a vacation.',
    helpful: 22,
    verified: true
  },

  // Tesla Model 3 Reviews (car-014)
  {
    id: 'review-010',
    carId: 'car-014',
    userId: 'user-110',
    userName: 'Christopher Lee',
    userAvatar: 'https://i.pravatar.cc/150?img=68',
    rating: 5,
    date: '2024-12-25',
    title: 'Welcome to the Future',
    comment: 'First time driving an electric car and I\'m blown away! The acceleration is instant, Autopilot made highway driving so easy, and I loved not having to stop for gas. The Supercharger network is everywhere.',
    helpful: 56,
    verified: true
  },
  {
    id: 'review-011',
    carId: 'car-014',
    userId: 'user-111',
    userName: 'Jessica Garcia',
    userAvatar: 'https://i.pravatar.cc/150?img=47',
    rating: 4,
    date: '2024-12-16',
    title: 'Great EV Experience',
    comment: 'Really enjoyed driving this Tesla. The tech is amazing and the car is fun to drive. Only minor issue was figuring out where all the charging stations were at first.',
    helpful: 33,
    verified: true
  },

  // Ford Mustang GT Reviews (car-011)
  {
    id: 'review-012',
    carId: 'car-011',
    userId: 'user-112',
    userName: 'Daniel Harris',
    userAvatar: 'https://i.pravatar.cc/150?img=52',
    rating: 5,
    date: '2024-12-14',
    title: 'Pure Driving Excitement!',
    comment: 'Rented this for a weekend getaway and had a blast! The V8 engine sounds amazing and the car handles beautifully. It\'s everything you\'d want in a muscle car.',
    helpful: 45,
    verified: true
  },
  {
    id: 'review-013',
    carId: 'car-011',
    userId: 'user-113',
    userName: 'Michelle Clark',
    userAvatar: 'https://i.pravatar.cc/150?img=29',
    rating: 5,
    date: '2024-11-30',
    title: 'Bucket List Checked!',
    comment: 'Always wanted to drive a Mustang GT and it did not disappoint. The power is exhilarating! Took it on some mountain roads and had the time of my life.',
    helpful: 38,
    verified: true
  },

  // Honda Odyssey Reviews (car-018)
  {
    id: 'review-014',
    carId: 'car-018',
    userId: 'user-114',
    userName: 'Patricia Lewis',
    userAvatar: 'https://i.pravatar.cc/150?img=41',
    rating: 5,
    date: '2024-12-19',
    title: 'Best Family Road Trip Ever',
    comment: 'Rented this for a cross-country family vacation with 3 kids. The rear entertainment system kept the kids happy for hours. The built-in vacuum was a lifesaver! So many clever features.',
    helpful: 51,
    verified: true
  },
  {
    id: 'review-015',
    carId: 'car-018',
    userId: 'user-115',
    userName: 'Thomas Walker',
    userAvatar: 'https://i.pravatar.cc/150?img=56',
    rating: 5,
    date: '2024-12-09',
    title: 'Minivan Perfection',
    comment: 'Never thought I\'d say this about a minivan, but the Odyssey is fantastic. Smooth ride, tons of space, and the power sliding doors are so convenient. Great for airport runs and family trips.',
    helpful: 29,
    verified: true
  },

  // Jeep Grand Cherokee Reviews (car-006)
  {
    id: 'review-016',
    carId: 'car-006',
    userId: 'user-116',
    userName: 'Karen Young',
    userAvatar: 'https://i.pravatar.cc/150?img=20',
    rating: 4,
    date: '2024-12-11',
    title: 'Capable and Comfortable',
    comment: 'Took this on a ski trip to Colorado. The 4WD handled snowy mountain roads perfectly. Interior is luxurious and comfortable for long drives.',
    helpful: 26,
    verified: true
  },

  // Hyundai Ioniq 5 Reviews (car-017)
  {
    id: 'review-017',
    carId: 'car-017',
    userId: 'user-117',
    userName: 'Brian King',
    userAvatar: 'https://i.pravatar.cc/150?img=64',
    rating: 5,
    date: '2024-12-21',
    title: 'Innovative and Practical',
    comment: 'The Ioniq 5 is incredible! Fast charging is a game-changer - went from 20% to 80% in under 20 minutes. The interior is spacious and futuristic. Love the V2L feature that let me power our camping equipment!',
    helpful: 48,
    verified: true
  },

  // Mercedes E-Class Reviews (car-009)
  {
    id: 'review-018',
    carId: 'car-009',
    userId: 'user-118',
    userName: 'Laura Scott',
    userAvatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    date: '2024-12-13',
    title: 'Pure Elegance',
    comment: 'Rented this for a special anniversary trip. The E-Class is sophistication personified. The ride quality is sublime and the interior materials are exquisite. Felt like royalty!',
    helpful: 19,
    verified: true
  },

  // Mazda CX-5 Reviews (car-023)
  {
    id: 'review-019',
    carId: 'car-023',
    userId: 'user-119',
    userName: 'Matthew Green',
    userAvatar: 'https://i.pravatar.cc/150?img=70',
    rating: 5,
    date: '2024-12-17',
    title: 'Punches Above Its Weight',
    comment: 'For the price point, this SUV offers amazing quality. The interior feels premium, it drives like a much more expensive car, and the AWD system is confidence-inspiring.',
    helpful: 35,
    verified: true
  },

  // Porsche 911 Reviews (car-013)
  {
    id: 'review-020',
    carId: 'car-013',
    userId: 'user-120',
    userName: 'Andrew Adams',
    userAvatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    date: '2024-12-07',
    title: 'Dream Come True',
    comment: 'Splurged on this for my 50th birthday trip. The 911 is everything I dreamed it would be and more. The handling is telepathic, the engine note is music, and the build quality is perfection. Unforgettable experience!',
    helpful: 62,
    verified: true
  }
];

export default mockReviews;
