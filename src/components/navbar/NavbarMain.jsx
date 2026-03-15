import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 relative z-20 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-4 md:p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="sm:hidden lg:inline-flex">
            <NavbarBtn />
          </span>
          <span className="lg:hidden">
            <NavbarToggler />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
