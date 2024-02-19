import { SlArrowLeft } from "react-icons/sl";
import { HiOutlineDotsVertical } from "react-icons/hi";
import style from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={style.NavBar}>
      <SlArrowLeft />
      <h1>Bitcoin Wallet</h1>
      <HiOutlineDotsVertical />
    </div>
  );
}

export default NavBar;
