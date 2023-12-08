import Link from "next/link";
import Container from "./Container";
import CartCount from "../cart/CartCount";
import { SafeUser } from "@/types";
import UserMenu from "./UserMenu";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

interface NavBarProps {
  currentUser: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div
      className="
    text-slate-950
    sticky
    w-full
    md:px-8
    z-30
    top-0
    bg-[#EDEEF2]
    "
    >
      <div className=" pt-5 bg-[#EDEEF2]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          px-4
          "
          >
            <Link
              href="/"
              className={` font-bold text-lg md:text-2xl`}
            >
             SalesPlatform
            </Link>
            <div className="hidden md:block">
              {/* <SearchBar /> */}
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default NavBar;
