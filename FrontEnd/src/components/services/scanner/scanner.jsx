import style from "./scanner.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Scanner() {
  const [url, setUrl] = useState(""); // URL to scan
  const [error, setError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize navigate function

  
  const handleScan = async (e) => {
    e.preventDefault(); // Prevent form submission
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_LINK}/api/scan-Link`, // Server API endpoint
        {
          method: "POST",
          body: JSON.stringify({ urlToScan: url }), // Send URL to scan
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json(); // Parse JSON response
      if (response.ok) {
        // Navigate to /scan/scanResult and pass the result as state
        navigate("/scan/scanResult", { state: { result: result.data } });
      } else {
        setError(result.error || "Failed to scan the URL. Please try again.");
      }
    } catch (err) {
      console.error("Scan error:", err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleReset = () => {
    setUrl(""); // Clear URL input
    setError(""); // Clear error message
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.scanner}>
          <div className={style.ScannHeading}>
            <div className={style.heading}>
              <div className={style.head}>
                <h1>Scan for Threats</h1>
              </div>
              <div className={style.head}>
                <p>Instant URL risk detection.</p>
              </div>
            </div>
          </div>

          <div className={style.scanSection}>
            <div className={style.scan}>
              <form onSubmit={handleScan}>
                <div className={style.sanningInput}>
                  <div className={style.Input}>
                    <input
                      type="url"
                      placeholder="Paste URL (e.g., example.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className={style.sanningBtn}>
                  <div className={style.Btn0}>
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={loading}
                    >
                      Reset
                    </button>
                  </div>
                  <div className={style.Btn1}>
                    <button type="submit" disabled={!url || loading}>
                      {loading ? "Scanning..." : "Scan Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Display error message if present */}
        {error && <div className={style.error}>{error}</div>}
      </div>
    </>
  );
}
