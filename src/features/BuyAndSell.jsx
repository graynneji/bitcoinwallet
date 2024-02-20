import { FaDollarSign } from "react-icons/fa6";
import style from "./BuyAndSell.module.scss";
function BuyAndSell() {
  return (
    <div className={style.buySellCon}>
      <div>
        <div className={style.buy}>
          <FaDollarSign className={style.dollarIcon} />
        </div>
        <span>Buy BTC</span>
      </div>
      <div>
        <div className={style.sell}>
          <FaDollarSign className={style.dollarIcon} />
        </div>
        <span>Sell BTC</span>
      </div>
    </div>
  );
}
//12.84px
export default BuyAndSell;
