import React from 'react';
import PropTypes from 'prop-types';

const Skeleton = ({ type = 'text', width, height, className = '' }) => {
  const getSkeletonStyle = () => {
    const baseStyle = {
      width: width || '100%',
      height: height || 'auto'
    };

    switch (type) {
      case 'text':
        return { ...baseStyle, height: height || '16px' };
      case 'title':
        return { ...baseStyle, height: height || '28px' };
      case 'avatar':
        return { ...baseStyle, height: height || '48px', borderRadius: '50%' };
      case 'image':
        return { ...baseStyle, height: height || '200px' };
      case 'button':
        return { ...baseStyle, height: height || '40px', borderRadius: '8px' };
      case 'card':
        return { ...baseStyle, height: height || '300px', borderRadius: '12px' };
      default:
        return baseStyle;
    }
  };

  return (
    <div
      className={`cr-skeleton ${className}`}
      style={getSkeletonStyle()}
    >
      <style jsx>{`
        .cr-skeleton {
          background: linear-gradient(
            90deg,
            var(--gray-200) 0%,
            var(--gray-100) 50%,
            var(--gray-200) 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
          border-radius: var(--radius-md);
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

Skeleton.propTypes = {
  type: PropTypes.oneOf(['text', 'title', 'avatar', 'image', 'button', 'card']),
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

// Pre-built skeleton components for common use cases
export const CarCardSkeleton = () => (
  <div className="cr-card">
    <Skeleton type="image" />
    <div style={{ padding: 'var(--space-4)' }}>
      <Skeleton type="text" width="60px" style={{ marginBottom: 'var(--space-2)' }} />
      <Skeleton type="title" style={{ marginBottom: 'var(--space-2)' }} />
      <Skeleton type="text" width="120px" style={{ marginBottom: 'var(--space-3)' }} />
      <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
        <Skeleton type="text" width="40px" />
        <Skeleton type="text" width="40px" />
        <Skeleton type="text" width="60px" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Skeleton type="text" width="80px" />
        <Skeleton type="button" width="100px" />
      </div>
    </div>
  </div>
);

export default Skeleton;
