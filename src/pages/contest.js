import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contest.css";

function formatDate(dateStr) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateStr).toLocaleDateString("id-ID", options);
}

function getPlaceBadgeClass(place) {
  if (place <= 100) return "gold";
  if (place <= 250) return "silver";
  return "red";
}

function Contest() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch dari backend
    fetch("http://localhost:5000/api/contests")
      .then((res) => res.json())
      .then((data) => setContests(data))
      .catch((err) => console.error("Gagal ambil data kontes:", err));
  }, []);

  return (
    <section className="contest">
      <h1 data-aos="fade-down">Contest</h1>
      <p data-aos="fade-down">
        Past CTFs contests we <span id="highlight">participated.</span>
      </p>
      <hr className="custom-line" data-aos="fade-down" />

      <section className="contest-table">
        <h2 data-aos="fade-down">2025</h2>
        <table data-aos="zoom-in">
          <thead>
            <tr>
              <th>Place</th>
              <th>Name</th>
              <th>CTFtime Rating</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={index}>
                <td>
                  <span className={`badge ${getPlaceBadgeClass(contest.place)}`}>
                    #{contest.place}
                  </span>
                </td>
                <td>
                  <div className="ctf-info">
                    <h3>{contest.name}</h3>
                    <p>
                      {formatDate(contest.start_date)} – {formatDate(contest.end_date)}
                    </p>
                    <a href={contest.link} target="_blank" className="merge-btn">
                      🚩 View on CTFtime
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rating">
                    <strong>{contest.rating}</strong>
                    <p>{contest.points} points</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default Contest;
