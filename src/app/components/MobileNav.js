"use client";

import { useState } from "react";
import hamburger from "../icons/hamburger.png";
import cross from "../icons/cross.png";
import Image from "next/image";
import Sidebar from "./Sidebar";

const MobileNav = ({currentPage}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      {window.screen.width < 768 && (
        <div>
          {!openMenu ? (
            <div className="mobile-menu">
              <h1 style={{ margin: "12px" }}>Movies</h1>
              <Image
                style={{ margin: "16px", cursor: "pointer" }}
                src={hamburger}
                width={32}
                height={32}
                alt="hamburger"
                onClick={(() => setOpenMenu(true))}
              />
            </div>
          ) : (
            <div className="mobile-menu-sidebar">
                <Sidebar currentPage={currentPage} mode={"mobile"} />
                              <Image
                style={{ margin: "16px", cursor: "pointer" }}
                src={cross}
                width={32}
                height={32}
                alt="cross"
                onClick={(() => setOpenMenu(false))}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
