import { useState } from "react"; // Import useState
import style from "./aboutFeedback.module.css";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_LINK}/api/feedback/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        setResponseMessage("Feedback submitted successfully!");
        setFormData({ name: "", email: "", query: "" });
      } else if (response.status === 500) {
        setResponseMessage("Server error. Try again later.");
      } else {
        setResponseMessage("Unexpected server response.");
      }
    } catch (error) {
      setResponseMessage("Connection error. Please try again.");
    }
  };

  return (
    <div className={style.main}>
      <div className={style.feedbackSection}>
        <div className={style.feedbackHead}>
          <h1>Feedback Form</h1>
          <p>Welcome to VirusViper</p>
        </div>
        <div className={style.response}>
          {responseMessage ? (
            <p className={style.resMsg}>{responseMessage}</p>
          ) : (
            <p className={style.default}>virusviper</p>
          )}
        </div>
        <form className={style.feedbackForm} onSubmit={handleSubmit}>
          <div className={style.inputSection}>
            <div className={style.inputInfo}>
              <div className={style.input}>
                <div className={style.info}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className={style.inputInfo}>
              <div className={style.input}>
                <div className={style.info}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={style.textSection}>
            <div className={style.textArea}>
              <div className={style.text}>
                <div className={style.textinfo}>
                  <textarea
                    name="query"
                    rows="4"
                    placeholder="Your query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.submitSection}>
            <div className={style.submitBtn}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
