import PropTypes from "prop-types";
import style from "./CalendarLink.module.scss";
import { useDispatch } from "react-redux";
import { changedMarket } from "../app/reducer/market";
import { useState } from "react";

function CalendarLink({ market }) {
  const dispatch = useDispatch();
  const [timeData, setTimeData] = useState("Week");

  const handleClick = (value) => {
    dispatch(changedMarket(value));
    console.log(value);
    setTimeData(value);
  };

  return (
    <>
      {market?.map((mar) => (
        <div
          key={mar.time}
          className={`${style.CalLink} ${
            mar.time === timeData && style.active
          }`}
          onClick={() => handleClick(mar?.time)}
        >
          {mar.time}
        </div>
      ))}
    </>
  );
}
CalendarLink.propTypes = {
  market: PropTypes.array,
};
export default CalendarLink;
