import { useSelector } from "react-redux";
import AmountCard from "../features/AmountCard";
import BuyAndSell from "../features/BuyAndSell";
import CalendarLink from "../features/CalendarLink";
import Chart from "../features/Chart";
import MobileMenu from "../features/MobileMenu";
import NavBar from "../features/NavBar";
import style from "./AppLayout.module.scss";

function AppLayout() {
  const { isOpen } = useSelector((state) => state.navToggle);
  return (
    <div className={style.container}>
      <header className={style.header}>
        <NavBar />
      </header>
      <main className={style.main}>
        <AmountCard
          cryptoName="Bitcoin"
          cryptoSym="BTC"
          amountCrypto="3.529020 BTC"
          amountUsd="$19.153 USD"
          percentage="- 2.32%"
        />
        <Chart />
        <CalendarLink />
        <BuyAndSell />
      </main>
      <MobileMenu />
      <div
        className={isOpen ? `${style.overlay} ${style.active}` : style.overlay}
      ></div>
    </div>
  );
}

export default AppLayout;
