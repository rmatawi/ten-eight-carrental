// Mock Locations Data for Car Rental App
// This file contains 18 rental locations across major US cities

const mockLocations = [
  {
    id: 'loc-001',
    code: 'LAX',
    name: 'Los Angeles International Airport',
    city: 'Los Angeles',
    state: 'CA',
    type: 'Airport',
    address: '1 World Way, Los Angeles, CA 90045',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (310) 646-5252',
    popular: true
  },
  {
    id: 'loc-002',
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
    city: 'New York',
    state: 'NY',
    type: 'Airport',
    address: 'Queens, NY 11430',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (718) 244-4444',
    popular: true
  },
  {
    id: 'loc-003',
    code: 'ORD',
    name: 'O\'Hare International Airport',
    city: 'Chicago',
    state: 'IL',
    type: 'Airport',
    address: '10000 W O\'Hare Ave, Chicago, IL 60666',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (773) 686-2200',
    popular: true
  },
  {
    id: 'loc-004',
    code: 'DFW',
    name: 'Dallas/Fort Worth International Airport',
    city: 'Dallas',
    state: 'TX',
    type: 'Airport',
    address: '2400 Aviation Dr, Dallas, TX 75261',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (972) 973-3112',
    popular: true
  },
  {
    id: 'loc-005',
    code: 'MIA',
    name: 'Miami International Airport',
    city: 'Miami',
    state: 'FL',
    type: 'Airport',
    address: '2100 NW 42nd Ave, Miami, FL 33142',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (305) 876-7000',
    popular: true
  },
  {
    id: 'loc-006',
    code: 'SEA',
    name: 'Seattle-Tacoma International Airport',
    city: 'Seattle',
    state: 'WA',
    type: 'Airport',
    address: '17801 International Blvd, Seattle, WA 98158',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (206) 787-5388',
    popular: true
  },
  {
    id: 'loc-007',
    code: 'SFO',
    name: 'San Francisco International Airport',
    city: 'San Francisco',
    state: 'CA',
    type: 'Airport',
    address: 'San Francisco, CA 94128',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (650) 821-8211',
    popular: true
  },
  {
    id: 'loc-008',
    code: 'ATL',
    name: 'Hartsfield-Jackson Atlanta International Airport',
    city: 'Atlanta',
    state: 'GA',
    type: 'Airport',
    address: '6000 N Terminal Pkwy, Atlanta, GA 30320',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (800) 897-1910',
    popular: true
  },
  {
    id: 'loc-009',
    code: 'DEN',
    name: 'Denver International Airport',
    city: 'Denver',
    state: 'CO',
    type: 'Airport',
    address: '8500 Peña Blvd, Denver, CO 80249',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (303) 342-2000',
    popular: true
  },
  {
    id: 'loc-010',
    code: 'LAS',
    name: 'Harry Reid International Airport',
    city: 'Las Vegas',
    state: 'NV',
    type: 'Airport',
    address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (702) 261-5211',
    popular: true
  },
  {
    id: 'loc-011',
    code: 'PHX',
    name: 'Phoenix Sky Harbor International Airport',
    city: 'Phoenix',
    state: 'AZ',
    type: 'Airport',
    address: '3400 E Sky Harbor Blvd, Phoenix, AZ 85034',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (602) 273-3300',
    popular: false
  },
  {
    id: 'loc-012',
    code: 'BOS',
    name: 'Boston Logan International Airport',
    city: 'Boston',
    state: 'MA',
    type: 'Airport',
    address: '1 Harborside Dr, Boston, MA 02128',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (800) 235-6426',
    popular: false
  },
  {
    id: 'loc-013',
    code: 'PDX',
    name: 'Portland International Airport',
    city: 'Portland',
    state: 'OR',
    type: 'Airport',
    address: '7000 NE Airport Way, Portland, OR 97218',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (877) 739-4636',
    popular: false
  },
  {
    id: 'loc-014',
    code: 'SLC',
    name: 'Salt Lake City International Airport',
    city: 'Salt Lake City',
    state: 'UT',
    type: 'Airport',
    address: '776 N Terminal Dr, Salt Lake City, UT 84122',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (801) 575-2400',
    popular: false
  },
  {
    id: 'loc-015',
    code: 'LAX-DT',
    name: 'Downtown Los Angeles',
    city: 'Los Angeles',
    state: 'CA',
    type: 'Downtown',
    address: '550 S Flower St, Los Angeles, CA 90071',
    hours: {
      weekday: '7:00 AM - 7:00 PM',
      weekend: '8:00 AM - 6:00 PM'
    },
    phone: '+1 (213) 687-7777',
    popular: false
  },
  {
    id: 'loc-016',
    code: 'NYC-DT',
    name: 'Manhattan Midtown',
    city: 'New York',
    state: 'NY',
    type: 'Downtown',
    address: '234 W 42nd St, New York, NY 10036',
    hours: {
      weekday: '7:00 AM - 8:00 PM',
      weekend: '8:00 AM - 6:00 PM'
    },
    phone: '+1 (212) 555-0100',
    popular: true
  },
  {
    id: 'loc-017',
    code: 'MIA-SB',
    name: 'Miami South Beach',
    city: 'Miami Beach',
    state: 'FL',
    type: 'Hotel',
    address: '1701 Collins Ave, Miami Beach, FL 33139',
    hours: {
      weekday: '8:00 AM - 8:00 PM',
      weekend: '8:00 AM - 8:00 PM'
    },
    phone: '+1 (305) 674-1234',
    popular: true
  },
  {
    id: 'loc-018',
    code: 'LAS-ST',
    name: 'Las Vegas Strip',
    city: 'Las Vegas',
    state: 'NV',
    type: 'Hotel',
    address: '3355 S Las Vegas Blvd, Las Vegas, NV 89109',
    hours: {
      weekday: '24 Hours',
      weekend: '24 Hours'
    },
    phone: '+1 (702) 693-7111',
    popular: true
  }
];

export default mockLocations;
