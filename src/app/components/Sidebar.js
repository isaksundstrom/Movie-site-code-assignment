"use client";

import React from "react";
import Image from "next/image";
import home from "../icons/home.png";
import discover from "../icons/discover.png";
import { useRouter } from "next/navigation";

const Sidebar = ({ currentPage, mode }) => {
  const router = useRouter();
  return (
    <div>
      {(window.screen.width > 768 || mode == "mobile") && (
        <div
          className={mode == "mobile" ? "sidebar-mobile" : "sidebar"}
        >
          {mode !== "mobile" && <div className="sidebar-header">Movies</div>}
          <div>
            <div></div>
            <div className="sidebar-links">
              <div
                className="redirect-btn"
                style={{ filter: currentPage !== "home" && "brightness(50%)" }}
                onClick={() => router.push("/home")}
              >
                <Image src={home} width={32} height={32} alt="home" />
                Home
              </div>
              <div
                className="redirect-btn"
                style={{
                  filter: currentPage !== "discover" && "brightness(50%)",
                }}
                onClick={() => router.push("/discover")}
              >
                <Image src={discover} width={32} height={32} alt="disc" />
                Discover
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
