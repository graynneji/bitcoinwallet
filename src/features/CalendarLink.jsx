import PropTypes from "prop-types";
import style from "./CalendarLink.module.scss";
import { useDispatch } from "react-redux";
import { changedMarket } from "../app/reducer/market";

function CalendarLink({ children }) {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(changedMarket(value));
    console.log(value);
  };
  return (
    <div onClick={() => handleClick(children)} className={style.CalLink}>
      {children}
    </div>
  );
}
CalendarLink.propTypes = {
  children: PropTypes.node,
};
export default CalendarLink;
