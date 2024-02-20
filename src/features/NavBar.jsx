// import { SlArrowLeft } from "react-icons/sl";
import { MdArrowBackIosNew } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import style from "./NavBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavMenu } from "../app/reducer/navMenuSlice";
import { BiSolidEdit } from "react-icons/bi";
import { BsInfoSquare } from "react-icons/bs";
import { PiShareDuotone } from "react-icons/pi";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
function NavBar() {
  const { isOpen } = useSelector((state) => state.navToggle);
  const dispatch = useDispatch();
  const handleNavToggle = () => {
    dispatch(NavMenu());
    console.log(isOpen);
  };
  return (
    <nav className={style.NavBar}>
      <MdArrowBackIosNew className={style.navIcon} />
      <h1>Bitcoin Wallet</h1>
      <HiOutlineDotsVertical
        onClick={handleNavToggle}
        className={`${isOpen ? style.navIcoNin : style.navIcon}`}
      />

      {isOpen && (
        <div className={style.navModal}>
          <ul>
            <li>
              <span>Edit</span>
              <BiSolidEdit />
            </li>
            <li>
              <span>Courier info</span>
              <BsInfoSquare />
            </li>
            <li>
              <span>Share</span>
              <PiShareDuotone />
            </li>
            <li>
              <span>Remove</span>
              <MdOutlineRemoveCircleOutline />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
