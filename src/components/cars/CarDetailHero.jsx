import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Badge from '../ui/Badge';

const CarDetailHero = ({ car }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Generate image array (use thumbnail multiple times as placeholder)
  const images = car.images || [car.thumbnail, car.thumbnail, car.thumbnail, car.thumbnail];

  return (
    <div className="cr-car-detail-hero">
      {/* Main Image Swiper */}
      <div className="cr-main-swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="cr-main-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cr-slide-image">
                <img src={image} alt={`${car.name} - ${index + 1}`} />
                {car.popular && index === 0 && (
                  <div className="cr-badge-overlay">
                    <Badge text="Popular" color="accent" />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="cr-thumbs-swiper-container">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="cr-thumbs-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cr-thumb-image">
                <img src={image} alt={`${car.name} thumbnail ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .cr-car-detail-hero {
          margin-bottom: var(--space-8);
        }

        .cr-main-swiper-container {
          margin-bottom: var(--space-4);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--gray-100);
        }

        :global(.cr-main-swiper) {
          width: 100%;
          height: 500px;
        }

        .cr-slide-image {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-100);
        }

        .cr-slide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cr-badge-overlay {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
        }

        .cr-thumbs-swiper-container {
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        :global(.cr-thumbs-swiper) {
          height: 100px;
        }

        :global(.cr-thumbs-swiper .swiper-slide) {
          cursor: pointer;
          opacity: 0.6;
          transition: opacity var(--transition-fast);
        }

        :global(.cr-thumbs-swiper .swiper-slide-thumb-active) {
          opacity: 1;
          border: 2px solid var(--primary);
          border-radius: var(--radius-sm);
        }

        .cr-thumb-image {
          width: 100%;
          height: 100%;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--gray-100);
        }

        .cr-thumb-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Swiper Navigation Buttons */
        :global(.cr-main-swiper .swiper-button-next),
        :global(.cr-main-swiper .swiper-button-prev) {
          color: var(--white);
          background: rgba(0, 0, 0, 0.5);
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        :global(.cr-main-swiper .swiper-button-next:after),
        :global(.cr-main-swiper .swiper-button-prev:after) {
          font-size: 20px;
        }

        /* Swiper Pagination */
        :global(.cr-main-swiper .swiper-pagination-bullet) {
          background: var(--white);
          opacity: 0.7;
        }

        :global(.cr-main-swiper .swiper-pagination-bullet-active) {
          background: var(--primary);
          opacity: 1;
        }

        @media (max-width: 768px) {
          :global(.cr-main-swiper) {
            height: 300px;
          }

          :global(.cr-thumbs-swiper) {
            height: 80px;
          }

          :global(.cr-thumbs-swiper) {
            --swiper-navigation-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

CarDetailHero.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarDetailHero;
