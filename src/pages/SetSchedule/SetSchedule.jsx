import Calendar from "react-calendar";
import "./SetSchedule.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/user";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function SetSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { contractTitle } = location.state || {};

 
  const handleOnclick = () => {
    console.log("Navigating with state:", { selectedDate, time });
    navigate("./payment-method", {
      state: {
        selectedDate,
        time,
        contractTitle,
      },
    });
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserById(userId);
      setUser(userData);
    }
    fetchUserData();
  }, [userId]);

  return (
    <>
      <div className="user__header">
        <h1>
          Ready to work with{" "}
          <strong className="wh-color-primary">
            {user.firstName} {user.lastName}?
          </strong>
        </h1>
      </div>
      <div className="date-time__container">
        <div>
          <h3>Select a date</h3>
          <div className="calendar-wrapper">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="custom-calendar"
            />
          </div>
          {selectedDate && (
            <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
          )}
        </div>
        <div className="time-container">
          <h3>Select a time</h3>
          <input
            type="time"
            className="contract__input"
            value={time}
            onChange={handleTimeChange}
          />
          <div className="button-container">
            <button
              className="wh-button wh-button--primary"
              onClick={handleOnclick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetSchedule;
