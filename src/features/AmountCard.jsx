/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import style from "./AmountCard.module.scss";
import { SiBitcoinsv } from "react-icons/si";
import { TbChevronCompactDown } from "react-icons/tb";
import CalendarLink from "./CalendarLink";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { marketData } from "../app/thunk/marketThunk";
function AmountCard({
  cryptoName,
  cryptoSym,
  amountCrypto,
  amountUsd,
  percentage,
}) {
  const { market, error, loading } = useSelector((state) => state.market);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(marketData());
    },
    [dispatch]
  );
  return (
    <>
      <div className={style.amountCard}>
        <div>
          <div className={style.cardLeft}>
            <SiBitcoinsv className={style.iconBitcoin} />
            <p>{cryptoName}</p>
          </div>
          <span>{cryptoSym}</span>
        </div>
        <h4 className={style.amtCry}>{amountCrypto}</h4>
        <div className={style.usdAmt}>
          <h2>{amountUsd}</h2>
          <div>
            <p>{percentage}</p>
          </div>
        </div>
        <div className={style.btnDown}>
          <TbChevronCompactDown className={style.downM} />
        </div>
      </div>

      <div className={style.calLnkCont}>
        {market.map((mar, index) => (
          <CalendarLink key={index}>{mar?.time}</CalendarLink>
        ))}
      </div>
    </>
  );
}
AmountCard.propTypes = {
  cryptoName: PropTypes.string.isRequired,
  cryptoSym: PropTypes.string.isRequired,
  amountCrypto: PropTypes.string.isRequired,
  amountUsd: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
export default AmountCard;
