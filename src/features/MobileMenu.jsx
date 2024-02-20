import style from "./MobileMenu.module.scss";
import { FaWallet } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
function MobileMenu() {
  return (
    <div className={style.mobileMenu}>
      <FaWallet className={`${style.iconSize} ${style.activeColor}`} />
      <FaCompass className={style.iconSize} />
      <IoNotifications className={style.iconSize} />
      <TbSettingsFilled className={style.iconSize} />
    </div>
  );
}

export default MobileMenu;
