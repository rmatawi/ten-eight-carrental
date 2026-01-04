import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
  Block,
  BlockTitle
} from 'framework7-react';
import { useStore } from 'framework7-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hero from '../components/common/Hero';
import SearchWidget from '../components/common/SearchWidget';
import FeatureCard from '../components/ui/FeatureCard';
import RatingStars from '../components/ui/RatingStars';
import Badge from '../components/ui/Badge';
import PriceDisplay from '../components/ui/PriceDisplay';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  const popularCars = useStore('popularCars');
  const isAuthenticated = useStore('isAuthenticated');
  const user = useStore('user');

  return (
    <Page name="home">
      {/* Navbar */}
      <Navbar>
        <NavLeft>
          <Link href="/" className="cr-logo">
            <i className="f7-icons">car_fill</i>
            <span>Car Rental</span>
          </Link>
        </NavLeft>
        <NavRight>
          <Link href="/cars/" iconF7="search" />
          {isAuthenticated ? (
            <Link href="/profile/" iconF7="person_circle_fill" />
          ) : (
            <Link href="/login/" iconF7="person_circle" />
          )}
        </NavRight>
      </Navbar>

      {/* Hero Section with Search */}
      <Hero
        title="Find Your Perfect Ride"
        subtitle="Choose from our premium fleet of vehicles. Quality cars, competitive prices, and exceptional service."
        backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600"
        height="650px"
      >
        <SearchWidget />
      </Hero>

      {/* Featured Cars Section */}
      <div className="cr-section">
        <div className="cr-container">
          <div className="cr-section-header">
            <h2 className="cr-heading-2">Popular Vehicles</h2>
            <p className="cr-body cr-text-muted">Most loved cars by our customers</p>
          </div>

          <Swiper
            className="cr-cars-swiper"
            params={{
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
              breakpoints: {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }
            }}
          >
            {popularCars.map((car) => (
              <SwiperSlide key={car.id}>
                <Link href={`/cars/${car.id}/`} className="cr-car-card-link">
                  <div className="cr-car-card">
                    <div className="cr-car-image-wrapper">
                      <img
                        src={car.thumbnail}
                        alt={car.name}
                        className="cr-car-image"
                      />
                      {car.popular && (
                        <div className="cr-car-badge-top">
                          <Badge text="Popular" color="accent" />
                        </div>
                      )}
                    </div>
                    <div className="cr-car-content">
                      <Badge text={car.category} color="gray" size="small" className="cr-car-category" />
                      <h3 className="cr-car-name">{car.name}</h3>
                      <div className="cr-car-rating">
                        <RatingStars rating={car.rating} size="small" showNumber />
                        <span className="cr-car-reviews">({car.reviewCount} reviews)</span>
                      </div>
                      <div className="cr-car-specs">
                        <div className="cr-car-spec">
                          <i className="f7-icons">person_2_fill</i>
                          <span>{car.specifications.passengers}</span>
                        </div>
                        <div className="cr-car-spec">
                          <i className="f7-icons">bag_fill</i>
                          <span>{car.specifications.luggage}</span>
                        </div>
                        <div className="cr-car-spec">
                          <i className="f7-icons">gear_alt_fill</i>
                          <span>{car.specifications.transmission}</span>
                        </div>
                      </div>
                      <div className="cr-car-footer">
                        <PriceDisplay price={car.pricePerDay} period="day" size="medium" />
                        <button className="cr-btn cr-btn-primary cr-btn-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="cr-text-center cr-mt-8">
            <Link href="/cars/" className="cr-btn cr-btn-outline cr-btn-lg">
              View All Cars
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="cr-section cr-section-alt">
        <div className="cr-container">
          <div className="cr-section-header">
            <h2 className="cr-heading-2">Why Choose Us</h2>
            <p className="cr-body cr-text-muted">Experience the difference with our premium service</p>
          </div>

          <div className="cr-grid cr-grid-3">
            <FeatureCard
              icon="checkmark_shield_fill"
              title="Trusted & Safe"
              description="All our vehicles undergo rigorous safety inspections. Your safety is our top priority."
            />
            <FeatureCard
              icon="money_dollar_circle_fill"
              title="Best Price Guarantee"
              description="We offer competitive pricing with no hidden fees. What you see is what you pay."
            />
            <FeatureCard
              icon="clock_fill"
              title="24/7 Support"
              description="Our customer service team is available round the clock to assist you."
            />
            <FeatureCard
              icon="location_fill"
              title="18+ Locations"
              description="Convenient pickup and drop-off at major airports and downtown locations."
            />
            <FeatureCard
              icon="star_fill"
              title="Premium Fleet"
              description="Choose from our diverse collection of well-maintained, modern vehicles."
            />
            <FeatureCard
              icon="hand_thumbsup_fill"
              title="Easy Booking"
              description="Simple and quick booking process. Get on the road in minutes."
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="cr-section">
        <div className="cr-container">
          <div className="cr-section-header">
            <h2 className="cr-heading-2">How It Works</h2>
            <p className="cr-body cr-text-muted">Rent a car in three simple steps</p>
          </div>

          <div className="cr-how-it-works">
            <div className="cr-step">
              <div className="cr-step-number">1</div>
              <div className="cr-step-content">
                <h3 className="cr-step-title">Choose Your Car</h3>
                <p className="cr-step-description">
                  Browse our extensive fleet and select the perfect vehicle for your journey.
                </p>
              </div>
            </div>

            <div className="cr-step-arrow">
              <i className="f7-icons">arrow_right</i>
            </div>

            <div className="cr-step">
              <div className="cr-step-number">2</div>
              <div className="cr-step-content">
                <h3 className="cr-step-title">Book & Pay</h3>
                <p className="cr-step-description">
                  Complete your booking with our secure payment system. Instant confirmation.
                </p>
              </div>
            </div>

            <div className="cr-step-arrow">
              <i className="f7-icons">arrow_right</i>
            </div>

            <div className="cr-step">
              <div className="cr-step-number">3</div>
              <div className="cr-step-content">
                <h3 className="cr-step-title">Hit the Road</h3>
                <p className="cr-step-description">
                  Pick up your car and enjoy your trip. Return it at your convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="cr-text-center cr-mt-8">
            <Link href="/cars/" className="cr-btn cr-btn-primary cr-btn-lg">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="cr-section cr-section-alt">
        <div className="cr-container">
          <div className="cr-section-header">
            <h2 className="cr-heading-2">What Our Customers Say</h2>
            <p className="cr-body cr-text-muted">Real reviews from real customers</p>
          </div>

          <div className="cr-grid cr-grid-3">
            <div className="cr-testimonial">
              <RatingStars rating={5} size="medium" />
              <p className="cr-testimonial-text">
                "Excellent service! The car was clean, comfortable, and exactly what I needed for my business trip. Will definitely rent again!"
              </p>
              <div className="cr-testimonial-author">
                <img src="https://i.pravatar.cc/150?img=12" alt="Michael Johnson" className="cr-testimonial-avatar" />
                <div>
                  <div className="cr-testimonial-name">Michael Johnson</div>
                  <div className="cr-testimonial-title">Business Traveler</div>
                </div>
              </div>
            </div>

            <div className="cr-testimonial">
              <RatingStars rating={5} size="medium" />
              <p className="cr-testimonial-text">
                "Great experience from start to finish. The booking process was simple and the staff was very helpful. Highly recommend!"
              </p>
              <div className="cr-testimonial-author">
                <img src="https://i.pravatar.cc/150?img=27" alt="Sarah Williams" className="cr-testimonial-avatar" />
                <div>
                  <div className="cr-testimonial-name">Sarah Williams</div>
                  <div className="cr-testimonial-title">Vacation Traveler</div>
                </div>
              </div>
            </div>

            <div className="cr-testimonial">
              <RatingStars rating={5} size="medium" />
              <p className="cr-testimonial-text">
                "Fantastic fleet of cars and amazing prices. The SUV I rented was perfect for our family road trip. Thank you!"
              </p>
              <div className="cr-testimonial-author">
                <img src="https://i.pravatar.cc/150?img=33" alt="David Chen" className="cr-testimonial-avatar" />
                <div>
                  <div className="cr-testimonial-name">David Chen</div>
                  <div className="cr-testimonial-title">Family Vacation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Styles */}
      <style jsx>{`
        /* Logo Styles */
        :global(.cr-logo) {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: var(--font-heading);
          font-weight: var(--font-weight-bold);
          font-size: var(--text-lg);
          color: var(--gray-900) !important;
          text-decoration: none;
        }

        :global(.cr-logo i) {
          font-size: 28px;
          color: var(--primary);
        }

        /* Section Header */
        .cr-section-header {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .cr-section-header h2 {
          margin-bottom: var(--space-2);
        }

        /* Car Card Styles */
        :global(.cr-car-card-link) {
          text-decoration: none;
          display: block;
        }

        .cr-car-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-base);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .cr-car-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .cr-car-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .cr-car-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cr-car-badge-top {
          position: absolute;
          top: var(--space-3);
          right: var(--space-3);
        }

        .cr-car-content {
          padding: var(--space-4);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cr-car-category {
          margin-bottom: var(--space-2);
        }

        .cr-car-name {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          margin: 0 0 var(--space-2);
        }

        .cr-car-rating {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-3);
        }

        .cr-car-reviews {
          font-size: var(--text-xs);
          color: var(--gray-500);
        }

        .cr-car-specs {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-3) 0;
          border-top: 1px solid var(--gray-200);
          border-bottom: 1px solid var(--gray-200);
          margin-bottom: var(--space-4);
        }

        .cr-car-spec {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          font-size: var(--text-sm);
          color: var(--gray-600);
        }

        .cr-car-spec i {
          font-size: 16px;
          color: var(--gray-500);
        }

        .cr-car-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        /* How It Works */
        .cr-how-it-works {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-6);
          max-width: 900px;
          margin: 0 auto;
        }

        .cr-step {
          flex: 1;
          text-align: center;
        }

        .cr-step-number {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--space-4);
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-4xl);
          font-weight: var(--font-weight-bold);
          color: var(--white);
        }

        .cr-step-title {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .cr-step-description {
          font-size: var(--text-sm);
          color: var(--gray-600);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .cr-step-arrow {
          color: var(--gray-400);
        }

        .cr-step-arrow i {
          font-size: 32px;
        }

        /* Testimonials */
        .cr-testimonial {
          background: var(--white);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .cr-testimonial-text {
          font-size: var(--text-base);
          color: var(--gray-700);
          line-height: var(--leading-relaxed);
          margin: var(--space-4) 0;
          font-style: italic;
        }

        .cr-testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .cr-testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }

        .cr-testimonial-name {
          font-weight: var(--font-weight-semibold);
          color: var(--gray-900);
          font-size: var(--text-sm);
        }

        .cr-testimonial-title {
          font-size: var(--text-xs);
          color: var(--gray-500);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cr-how-it-works {
            flex-direction: column;
          }

          .cr-step-arrow {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 768px) {
          :global(.cr-logo span) {
            display: none;
          }
        }
      `}</style>
    </Page>
  );
};

export default HomePage;
