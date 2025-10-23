import React, { useState } from "react";
import style from "./chatNavBar.module.css";
import newLogo from "/aiChat/new.png";
import slideLogo from "/aiChat/slide.png";
import { Link } from "react-router-dom";

export default function ChatNavBar({ title, Heading }) {
  const [isNavVisible, setNavVisible] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/service", label: "Services" },
    { path: "/haveny", label: "Haveny" },
    // { path: "/virox", label: "Virox" },
    { path: "/about", label: "About" },
  ];

  return (
    <>
      <div className={style.main}>
        {/* Navigation Slide Bar */}
        <div
          className={style.navSlideBar}
          style={{ display: isNavVisible ? "flex" : "none" }}
        >
          <div className={style.slideBar}>
            <div className={style.slideHead}>
              <div className={style.slideViroxLogo}>
                <h1>{title}</h1>
              </div>
              <div
                className={style.slideCloseLogo}
                onClick={() => setNavVisible(false)} // Close the slide bar
              >
                <img src={slideLogo} alt="Close" />
              </div>
            </div>
            <div className={style.slideMenu}>
              <div className={style.navList}>
                {navItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <div className={style.listItem}>
                      <p>{item.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <div className={style.navBar}>
          <div className={style.navItem}>
            <div
              className={style.slideLogo}
              onClick={() => setNavVisible(true)} // Open the slide bar
            >
              <img src={slideLogo} alt="Open" />
            </div>
          </div>
          <div className={style.navItemHead}>
            <div className={style.heading}>
              <h1>{Heading}</h1>
            </div>
          </div>

          <div className={style.navItem}>
            <div
              className={style.newChat}
              onClick={() => window.location.reload()} // Reload the page
            >
              <img src={newLogo} alt="New Chat" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
