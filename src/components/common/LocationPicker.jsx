import React from 'react';
import PropTypes from 'prop-types';
import { ListInput } from 'framework7-react';

const LocationPicker = ({
  locations,
  value,
  onChange,
  placeholder = 'Select location',
  label = 'Location',
  required = false,
  error = null
}) => {
  return (
    <ListInput
      type="select"
      label={label}
      placeholder={placeholder}
      value={value}
      onInput={(e) => onChange(e.target.value)}
      required={required}
      errorMessage={error}
      errorMessageForce={!!error}
    >
      <option value="">Select a location</option>
      {locations.map((location) => (
        <option key={location.id} value={location.code}>
          {location.name} ({location.code})
        </option>
      ))}
    </ListInput>
  );
};

LocationPicker.propTypes = {
  locations: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string
};

export default LocationPicker;
