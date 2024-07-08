import { useEffect, useRef } from 'react';
import PropTypes from "prop-types";

const AddressAutocomplete = ({ onChange, value }) => {
  const addressInputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
      types: ['address'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      onChange(place.formatted_address);
    });
  }, [onChange]);

  return (
    <input
      className="profile__form-input"
      type="text"
      name="address"
      id="address"
      ref={addressInputRef}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      required
    />
  );
};


AddressAutocomplete.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddressAutocomplete;
