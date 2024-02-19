import AmountCard from "../features/AmountCard";
import BuyAndSell from "../features/BuyAndSell";
import CalendarLink from "../features/CalendarLink";
import Chart from "../features/Chart";
import MobileMenu from "../features/MobileMenu";
import NavBar from "../features/NavBar";
import style from "./AppLayout.module.scss";

function AppLayout() {
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
    </div>
  );
}

export default AppLayout;
