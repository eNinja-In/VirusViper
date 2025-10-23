import style from "./services.module.css";
import { useNavigate } from "react-router-dom";
export default function Services() {
  document.title = "Services"

  const navigate = useNavigate();
  const services = [
    {
      title: "AI Cyber Sentinel",
      subtitle: "Your AI Guardian Against Cyber Threats",
      description:
        "An advanced AI-powered defense system that detects, analyzes, and neutralizes cyber threats before they strike. Protect your data, devices, and identity with real-time threat intelligence, ensuring maximum security against hackers, malware, and phishing attacks.",
      buttonText: "Discover AI Security",
      logo: "/services/AI Cyber Sentinel.gif",
      link: "/virox"
    },
    {
      title: "Cyber Rescue AI",
      subtitle: "AI Assistance for Hacked Victims",
      description:
        "A powerful AI-driven support system that helps cybercrime victims recover from hacking, scams, and data breaches. Get real-time solutions, step-by-step recovery guidance, and AI-generated security reports to reclaim your online safety.",
      buttonText: "Get Help Now",
      logo: "/services/Cyber Rescue AI.gif",
      link: "/victimCheck"
    },
    {
      title: "3D Guardian",
      subtitle: "Immersive AI Assistance in Cybersecurity",
      description:
        "An interactive 3D AI model that engages users in real-time cybersecurity guidance and mental wellness. Experience an AI that interacts visually, providing solutions for stress, security concerns, and digital hygiene through a lifelike virtual assistant.",
      buttonText: "Explore 3D AI",
      logo: "/services/3D Guardian.gif",
      link: "/haveny/spirituality"
    },
    {
      title: "Mind Shield",
      subtitle: "Psychological and Spiritual Cyber Healing",
      description:
        "A unique AI-powered solution that combines psychology, spirituality, and cyber awareness. It helps users overcome digital stress, cyber trauma, and anxiety through guided meditation, mental exercises, and AI-driven mindfulness techniques.",
      buttonText: "Heal with AI",
      logo: "/services/Mind Shield.gif",
      link: "/haveny/meditation"
    },
    {
      title: "Threat Scanner",
      subtitle: "Detect Malicious Links & Cyber Traps",
      description:
        "An AI-driven threat detection tool that scans links, emails, and files in real-time, identifying phishing attempts, malware, and scams before you fall victim. Stay one step ahead of cybercriminals with AI-powered safety checks.",
      buttonText: "Scan for Threats",
      logo: "/services/Threat Scanner.webp",
      link: "/scan"
    },
  ];

  return (
    <section className={style.main}>
      <div className={style.services}>
        <header className={style.header}>
          <h1 className={style.heading}>VirusViper Services</h1>
          <p className={style.subheading}>
            Secure yourself with our expert cybersecurity solutions.
          </p>
        </header>
        <div className={style.serviceList}>
          {services.map((service, index) => (
            <div key={index} className={style.serviceItem}>
              <div className={style.info}>
                <div className={style.details}>
                  <h2>{service.title}</h2>
                  <h3>{service.subtitle}</h3>
                  <p>{service.description}</p>
                  <div className={style.serviceBtn}>
                    <button onClick={() => service.link && navigate(service.link)}>{service.buttonText}</button>
                  </div>
                </div>
                <div className={style.logo}>
                  <img src={service.logo} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
