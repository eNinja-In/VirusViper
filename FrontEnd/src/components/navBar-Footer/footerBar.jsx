import style from "./footerBar.module.css";
import { Link } from "react-router-dom";
import fLogo from "/footerLogo.png";
import CopyRight from "../../assets/copyRight";
export default function FooterBar() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { to: "/virox", text: "AI Cyber Sentinel" },
        { to: "/scan", text: "Threat Scanner" },
        { to: "/victimCheck", text: "HackCheck" },
        // { to: "/", text: "3D Guardian" },
        { to: "/haveny/meditation", text: "Mind Shield" },
      ],
    },
    {
      title: "Haveny",
      links: [
        { to: "/haveny/spirituality", text: "Spirituality" },
        { to: "/haveny/exercise", text: "Exercise" },
        { to: "/haveny/meditation", text: "Meditation" },
        // { to: "/", text: "Haveny" },
        // { to: "/", text: "Haveny" },
      ],
    },
    // {
    // title: "Virusviper",
    // links: [
    // { to: "/", text: "Virusviper" },
    // { to: "/", text: "Virusviper" },
    // { to: "/", text: "Virusviper" },
    // { to: "/", text: "Virusviper" },
    // { to: "/", text: "Virusviper" },
    // ],
    // },
    {
      title: "ViperNetwork",
      links: [
        {
          to: "https://github.com/virusviper0",
          text: "Github",
          external: true,
        },
        { to: "https://x.com/virusviper_", text: "Twitter", external: true },
        {
          to: "https://www.instagram.com/virusviper_0",
          text: "Instagram",
          external: true,
        },
        {
          to: "https://eninja-in.netlify.app",
          text: "Developer",
          external: true,
        },
        // { to: "/", text: "Virusviper", external: true },
      ],
    },
  ];
  return (
    <>
      <div className={style.main}>
        <div className={style.footerBar}>
          <div className={style.footerSection}>
            {/* Footer Logo Section */}
            <div className={style.footerLogo}>
              <div className={style.footerLogoVirus}>
                <img src={fLogo} alt="VirusViper Logo" />
              </div>
            </div>

            {/* Footer Navigation Section */}
            <div className={style.footerNavigation}>
              <div className={style.navMenu}>
                {footerLinks.map(({ title, links }) => (
                  <div className={style.navList} key={title}>
                    <div className={style.listItem}>
                      <div className={style.itemHeading}>
                        <h1>{title}</h1>
                      </div>
                      {links.map(({ to, text, external }) => (
                        <Link
                          to={to}
                          key={text}
                          target={external ? "_blank" : "_self"}
                        >
                          <div className={style.Item}>
                            <p>{text}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer Copyright Section */}
          <CopyRight />
        </div>
      </div>
    </>
  );
}
