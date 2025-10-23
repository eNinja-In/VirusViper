import style from "./navBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import barBtn from "/aiChat/slide1.png";
export default function NavBar() {
  const navigate = useNavigate(),
    auth = JSON.parse(localStorage.getItem("user")),
    [isDropDown, setIsDropDown] = useState(false);

  const logout = () => (localStorage.clear(), navigate("/login"));
  const [navSlideMainBar, setNavSlideMainBar] = useState(false);
  // function toggleBar() {
  //   setNavSlideMainBar(false);
  // }

  // document.addEventListener("click", toggleBar);

  return (
    <div className={style.main}>
      <div className={style.navBarSection}>
        <div className={style.navBar}>
          <div className={style.navLogo}>
            <div className={style.navLogoVirus}>
              <h1>Virusviper</h1>
            </div>
            <div className={style.navBarTempBtn}>
              <div className={style.btnSection} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                <img src={barBtn} alt="" />
              </div>
            </div>
          </div>
          {/* ######################################################## */}
          {/* temperory data  */}
          {navSlideMainBar && (
            <div className={style.navSlideBartemp}>
              <div className={style.navSlideMain}>
                <div className={style.slideMainHeading}>
                  <h2>Virusviper</h2>
                </div>
                <div className={style.slideMainList} >
                  <Link to={"/"} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                    <p>Home</p>
                  </Link>
                  <Link to={"/service"} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                    <p>Services</p>
                  </Link>
                  <Link to={"/haveny"} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                    <p>Haveny</p>
                  </Link>
                  <Link to={"/victimCheck"} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                    <p>HackCheck</p>
                  </Link>
                  <Link to={"/scan"} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                    <p>Threat Scanner</p>
                  </Link>
                  <Link to={"/about"} onClick={() => {setNavSlideMainBar(!navSlideMainBar)}}>
                    <p>About</p>
                  </Link>
                </div>
                <div className={style.slideMainBtn}>
                  <div className={style.loginSignupSlideBtn}>
                    {auth ? (
                      <div className={style.navUser}>
                        <div className={style.authBtn}>
                          <button
                            className={style.navBarUser}
                            onClick={() => setIsDropDown(!isDropDown)}
                          >
                            {auth.user.name
                              ? auth.user.name.includes(" ")
                                ? auth.user.name
                                    .split(" ")
                                    .map((word) => word[0].toUpperCase())
                                    .join("") // Initials display
                                : auth.user.name.length > 6
                                ? (
                                    auth.user.name[0] + auth.user.name[1]
                                  ).toUpperCase() // Two letters
                                : auth.user.name
                              : "User"}
                          </button>
                          {isDropDown && (
                            <div className={style.userDropDown}>
                              <div className={style.dropDownMenu}>
                                {[
                                  ["AI Cyber Sentinel", "/virox"],
                                  ["HackCheck", "/victimCheck"],
                                  ["Threat Scanner", "/scan"],
                                  ["About", "/about"],
                                  // ["", "/about"],
                                ].map(([text, link], i) => (
                                  <div
                                    key={i}
                                    className={style.dropItem}
                                    onClick={() => setIsDropDown(!isDropDown)}
                                  >
                                    <Link to={link}>
                                      <p>{text}</p>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className={style.logoutBtn}>
                          <button
                            className={style.navBarLogout}
                            onClick={logout}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={style.navSignButton}>
                        {["/login", "/signup"].map((path, i) => (
                          <div
                            key={i}
                            className={style[i ? "signupBtn" : "loginBtn"]}
                          >
                            <button
                              className={
                                style[i ? "signInButton" : "loginButton"]
                              }
                              onClick={() => navigate(path)}
                            >
                              {i ? "SignUp" : "Login"}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* temp code */}
          {/* ######################################################## */}
          <div className={style.navMenu}>
            <div className={style.navigation}>
              <div className={style.navigationList}>
                {["/", "/service", "/haveny", "/about"].map((path, i) => (
                  <div key={i} className={style.navListItem}>
                    <Link to={path}>
                      <p>{["Home", "Services", "Haveny", "About"][i]}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={style.navButton}>
            <div className={style.navBarSignUp}>
              {auth ? (
                <div className={style.navUser}>
                  <div className={style.authBtn}>
                    <button
                      className={style.navBarUser}
                      onClick={() => setIsDropDown(!isDropDown)}
                    >
                      {auth.user.name
                        ? auth.user.name.includes(" ")
                          ? auth.user.name
                              .split(" ")
                              .map((word) => word[0].toUpperCase())
                              .join("") // Initials display
                          : auth.user.name.length > 6
                          ? (
                              auth.user.name[0] + auth.user.name[1]
                            ).toUpperCase() // Two letters
                          : auth.user.name
                        : "User"}
                    </button>
                    {isDropDown && (
                      <div className={style.userDropDown}>
                        <div className={style.dropDownMenu}>
                          {[
                            ["AI Cyber Sentinel", "/virox"],
                            ["HackCheck", "/victimCheck"],
                            ["Threat Scanner", "/scan"],
                            ["About", "/about"],
                            // ["", "/about"],
                          ].map(([text, link], i) => (
                            <div
                              key={i}
                              className={style.dropItem}
                              onClick={() => setIsDropDown(!isDropDown)}
                            >
                              <Link to={link}>
                                <p>{text}</p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={style.logoutBtn}>
                    <button className={style.navBarLogout} onClick={logout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className={style.navSignButton}>
                  {["/login", "/signup"].map((path, i) => (
                    <div
                      key={i}
                      className={style[i ? "signupBtn" : "loginBtn"]}
                    >
                      <button
                        className={style[i ? "signInButton" : "loginButton"]}
                        onClick={() => navigate(path)}
                      >
                        {i ? "SignUp" : "Login"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
