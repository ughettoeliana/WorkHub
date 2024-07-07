import { useEffect, useState } from "react";
import "./PaymentMethod.css";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/user";
import PropTypes from "prop-types";

function PaymentMethod() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserById(userId);
      setUser(userData);
    }
    fetchUserData();
  }, [userId]);

  return (
    <div className="payment-method__info">
      <div className="user__header">
        <h1>
        Hire <strong className="wh-color-primary">{user.firstName} {user.lastName}</strong>
        </h1>
      </div>
      <div className="payment-method__container">
        <div className="payment-method__steps-container">
          {currentStep === 1 && <AddressForm onNext={handleNextStep} />}
          {currentStep === 2 && <BillingForm onPrevious={handlePreviousStep} />}
        </div>
        <div className="payment-method__user-info">
          <div className="grey-rounded-border">
          <div className="details-wraper ">
            <div className="img-container">
              <img src="/src/assets/imgs/woman-picture.avif" />
            </div>
            <div className="user__details">
              <h2>
                Hire {user.firstName} {user.lastName} for: `Job Title`
              </h2>
            </div>
          </div>
          <div className="user__details">
            <h3>Details</h3>
            <div className="wh-color-gray-3">
              <div className="user__details-content">
                <h4>Hourly rate </h4>
                {user.hourlyRate ? <p>${user.hourlyRate}</p> : ""}
              </div>
              <div className="user__details-content">
                <h4>Date</h4>
                {user.hourlyRate ? <p>${user.hourlyRate}</p> : ""}
              </div>
              <div className="user__details-content">
                <h4>Time</h4>
                {user.hourlyRate ? <p>${user.hourlyRate}</p> : ""}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

const AddressForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    country: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation - you can add more complex validation as needed
    if (
      formData.country &&
      formData.addressLine1 &&
      formData.city &&
      formData.postalCode
    ) {
      onNext(); // Proceed to next step
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>1.Add an Address</h2>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Denmark"
        />
      </label>
      <label>
        Address Line 1:
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          placeholder="Address 1"
        />
      </label>
      <label>
        Address Line 2 (optional):
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleInputChange}
          placeholder="Address 2"
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="Copenhagen"
        />
      </label>
      <label>
        Postal Code:
        <input
          type="number"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="1234"
        />
      </label>
      <div>
        <button className="wh-button wh-button--primary" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

const BillingForm = ({ onPrevious }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    firstName: "",
    lastName: "",
    expirationDate: "",
    securityCode: "",
    billingCountry: "",
    billingAddressLine1: "",
    billingAddressLine2: "",
    billingCity: "",
    billingPostalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation - you can add more complex validation as needed
    if (
      formData.cardNumber &&
      formData.firstName &&
      formData.lastName &&
      formData.expirationDate &&
      formData.securityCode &&
      formData.billingCountry &&
      formData.billingAddressLine1 &&
      formData.billingCity &&
      formData.billingPostalCode
    ) {
      // Handle form submission (e.g., API call, etc.)
      alert("Payment form submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>2.Add Billing Method</h2>
      <label>
        Card Number:
        <input
          type="number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
        />
      </label>
      <label>
        First name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="John"
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Doe"
        />
      </label>
      <label>
        Expiration date:
        <input
          type="number"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleInputChange}
          placeholder="12/29"
        />
      </label>
      <label>
        Security code:
        <input
          type="number"
          name="securityCode"
          value={formData.securityCode}
          onChange={handleInputChange}
          placeholder="123"
        />
      </label>
      <h3>Billing address</h3>
      <label>
        Country:
        <input
          type="text"
          name="billingCountry"
          value={formData.billingCountry}
          onChange={handleInputChange}
          placeholder="Denmark"
        />
      </label>
      <label>
        Address Line 1:
        <input
          type="text"
          name="billingAddressLine1"
          value={formData.billingAddressLine1}
          onChange={handleInputChange}
          placeholder="Address"
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="billingCity"
          value={formData.billingCity}
          onChange={handleInputChange}
          placeholder="Copenhagen"
        />
      </label>
      <label>
        Postal Code:
        <input
          type="number"
          name="billingPostalCode"
          value={formData.billingPostalCode}
          onChange={handleInputChange}
          placeholder="2900"
        />
      </label>
      <div></div>
      <div className="buttons-container">
        <button
          className="wh-button wh-bg-gray-4 wh-color-gray-5"
          type="submit"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button className="wh-button wh-button--primary" type="submit">
          Confirm
        </button>
      </div>{" "}
    </form>
  );
};

PaymentMethod.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

AddressForm.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};
BillingForm.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default PaymentMethod;
