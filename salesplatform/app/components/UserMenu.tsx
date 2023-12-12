'use client'

import { useCallback, useState } from "react";
import Avatar from "../product/[productId]/Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

interface UserMenuProps{
  currentUser: SafeUser | null;
}

const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
      }, []);

  return (
    <>
    <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
        md:px-4
        md:py-3
        px-2
        py-1
        border-[1px]
        border-slate-400
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-slate-700
        bg-slate-950
        "
        >
          <p className="text-white md:text-lg text-[10px]">User Menu</p>
          <Avatar src={currentUser?.image}/>
          <AiFillCaretDown />
        </div>

        {isOpen && (
          <div
            className="
        absolute
        rounded-md
        shadow-md
        w-[170px]
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        flex
        flex-col
        cursor-pointer
        "
          >
            {currentUser ?  <div>
                <Link href='/orders'>
                    <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href='/admin'>
                    <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
            </div> : <div>
                <Link href='/login'>
                    <MenuItem onClick={toggleOpen}>Log In</MenuItem>
                </Link>
                <Link href='/register'>
                    <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
                </div>}
                
            </div>
        )}
    </div>
    {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
    </>
  )
}

export default UserMenu