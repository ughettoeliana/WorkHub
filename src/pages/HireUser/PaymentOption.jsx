import PropTypes from "prop-types";
import "./PaymentOption.css";

const PaymentOption = ({
  title,
  description,
  optionValue,
  selectedOption,
  handleSelection,
}) => {
  return (
    <div>
      <div
        className={`payment-option ${
          selectedOption === optionValue ? "selected" : ""
        }`}
        onClick={() => handleSelection(optionValue, title)}
      >
        <input
          type="radio"
          name="payment"
          value={optionValue}
          checked={selectedOption === optionValue}
          onChange={() => handleSelection(optionValue, title)}
          className="hidden-radio"
        />
        <label>
          <h4 className="payment-title wh-color-primary">{title}</h4>
          <p className="wh-color-gray-2">{description}</p>
        </label>
      </div>
    </div>
  );
};

PaymentOption.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  optionValue: PropTypes.string.isRequired,
  selectedOption: PropTypes.bool.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

export default PaymentOption;
