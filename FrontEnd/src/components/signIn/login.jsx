import style from "./login.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  document.title = "login"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Start loading

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_LINK}/api/auth/login-user`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json(); // Parse JSON response once
      if (response.ok && result.success) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/"); // Redirect to home
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.loginSection}>
          <div className={style.loginPage}>
            <div className={style.login}>
              <div className={style.loginHead}>
                <div className={style.loginHeading}>
                  <div className={style.virusViper}>
                    <h1>Access Virusviper Realm</h1>
                  </div>
                </div>
              </div>
              <div className={style.loginError}>
                {error ? (
                  <p className={style.error}>{error}</p>
                ) : (
                  <p className={style.default}>VirusViper</p>
                )}
              </div>
              <div className={style.loginForm}>
                <div className={style.form}>
                  <form onSubmit={handleSubmit}>
                    <div className={style.inputSection}>
                      <div className={style.input}>
                        <input
                          type="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={style.inputSection}>
                      <div className={style.input}>
                        <input
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={style.submit}>
                      <div className={style.submitBtn}>
                        <button type="submit" disabled={loading}>
                          {loading ? "Logging in..." : "Login"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className={style.signUp}>
                <div className={style.goToSignIn}>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className={style.link}>
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
