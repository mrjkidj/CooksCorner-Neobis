import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux-Toolkit/Slices/UserSlices";
import { useDispatch } from "react-redux";
import s from "./Navbar.module.css";
import HomeLink from "../../Elements/Navigation/HomeLink";
import SearchLink from "../../Elements/Navigation/SearchLink";
import ProfileLink from "../../Elements/Navigation/ProfileLink";
import logout_link from "../../Assets/icons/NavbarIcons/logout_link.svg";
import cooks_corner_link from "../../Assets/icons/NavbarIcons/cooks_corner_icon.svg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={s.navbar}>
      <div className={s.cooks_corner_link}>
        <img src={cooks_corner_link} alt="cooks_corner_link" />
      </div>
       {/* Добавляем разделитель */}
      <div className={s.navbar_links}>
        <HomeLink to={"/"} />
        <SearchLink to={"/search"} />
        <ProfileLink to={"/profile"} />
      </div>
      <button onClick={handleLogOut} type="button" className={s.logout_button}>
        <img src={logout_link} alt="logout_link" />
      </button>
    </div>
  );
};

export default Navbar;
