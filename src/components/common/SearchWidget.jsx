import React, { useState } from 'react';
import { f7, List, Button } from 'framework7-react';
import { useStore } from 'framework7-react';
import LocationPicker from './LocationPicker';
import DateTimePicker from './DateTimePicker';
import { getTomorrow, getDaysFromNow, formatDateForInput } from '../../utils/dateHelpers';

const SearchWidget = ({ onSearch, showCarType = false }) => {
  const locations = useStore('allLocations');

  const [searchData, setSearchData] = useState({
    location: '',
    pickupDate: formatDateForInput(getTomorrow()),
    pickupTime: '10:00',
    returnDate: formatDateForInput(getDaysFromNow(3)),
    returnTime: '10:00',
    carType: ''
  });

  const [errors, setErrors] = useState({});

  const handleSearch = () => {
    // Validate
    const newErrors = {};
    if (!searchData.location) newErrors.location = 'Please select a location';
    if (!searchData.pickupDate) newErrors.pickupDate = 'Please select pickup date';
    if (!searchData.returnDate) newErrors.returnDate = 'Please select return date';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Navigate to browse cars with filters
    if (onSearch) {
      onSearch(searchData);
    } else {
      f7.views.main.router.navigate('/cars/', {
        props: {
          searchParams: searchData
        }
      });
    }
  };

  return (
    <div className="cr-search-widget">
      <List className="cr-search-form" noHairlines>
        <LocationPicker
          locations={locations}
          value={searchData.location}
          onChange={(value) => {
            setSearchData({ ...searchData, location: value });
            setErrors({ ...errors, location: null });
          }}
          label="Pickup & Return Location"
          placeholder="Select location"
          required
          error={errors.location}
        />

        <DateTimePicker
          date={searchData.pickupDate}
          time={searchData.pickupTime}
          onDateChange={(value) => {
            setSearchData({ ...searchData, pickupDate: value });
            setErrors({ ...errors, pickupDate: null });
          }}
          onTimeChange={(value) => setSearchData({ ...searchData, pickupTime: value })}
          dateLabel="Pickup Date"
          timeLabel="Pickup Time"
          minDate={getTomorrow()}
          required
          dateError={errors.pickupDate}
        />

        <DateTimePicker
          date={searchData.returnDate}
          time={searchData.returnTime}
          onDateChange={(value) => {
            setSearchData({ ...searchData, returnDate: value });
            setErrors({ ...errors, returnDate: null });
          }}
          onTimeChange={(value) => setSearchData({ ...searchData, returnTime: value })}
          dateLabel="Return Date"
          timeLabel="Return Time"
          minDate={searchData.pickupDate || getTomorrow()}
          required
          dateError={errors.returnDate}
        />

        {showCarType && (
          <select
            className="cr-search-select"
            value={searchData.carType}
            onChange={(e) => setSearchData({ ...searchData, carType: e.target.value })}
          >
            <option value="">All Car Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Luxury">Luxury</option>
            <option value="Sports">Sports</option>
            <option value="Electric">Electric</option>
            <option value="Van">Van</option>
          </select>
        )}
      </List>

      <Button
        className="cr-search-button"
        fill
        large
        onClick={handleSearch}
      >
        <i className="f7-icons">search</i>
        <span>Search Available Cars</span>
      </Button>

      <style jsx>{`
        .cr-search-widget {
          background: var(--white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          padding: var(--space-6);
          max-width: 800px;
          margin: 0 auto;
        }

        .cr-search-form {
          margin-bottom: var(--space-4);
        }

        :global(.cr-search-button) {
          width: 100%;
          background: var(--accent) !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          font-weight: var(--font-weight-semibold) !important;
        }

        :global(.cr-search-button:hover) {
          background: var(--accent-dark) !important;
        }

        :global(.cr-search-button i) {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .cr-search-widget {
            padding: var(--space-4);
            border-radius: var(--radius-lg);
          }
        }
      `}</style>
    </div>
  );
};

export default SearchWidget;
