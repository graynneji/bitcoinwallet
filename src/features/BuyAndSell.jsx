import { FaDollarSign } from "react-icons/fa6";
import style from "./BuyAndSell.module.scss";
function BuyAndSell() {
  return (
    <div className={style.buySellCon}>
      <div>
        <div className={style.buy}>
          <FaDollarSign />
          <span>Buy BTC</span>
        </div>
      </div>
      <div>
        <div className={style.sell}>
          <FaDollarSign />
          <span>Sell BTC</span>
        </div>
      </div>
    </div>
  );
}
//12.84px
export default BuyAndSell;
