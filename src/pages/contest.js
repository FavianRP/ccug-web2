import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contest.css";

const contests = [
  {
    place: "#77",
    name: "EHAX CTF 2025",
    date: "February 15 – February 16, 2025",
    link: "https://ctftime.org/event/2677",
    rating: "3.040",
    points: "1234",
  },
  {
    place: "#252",
    name: "Nullcon Goa HackIM 2025 CTF",
    date: "February 01 – February 02, 2025",
    link: "https://ctftime.org/event/2642",
    rating: "2.443",
    points: "301",
  },
  {
    place: "#221",
    name: "Codefest CTF 2025",
    date: "January 25 – January 27, 2025",
    link: "https://ctftime.org/event/2648",
    rating: "3.705",
    points: "800",
  },
];

function Contest() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
      <section className="contest">
        <h1 data-aos="fade-down">Contest</h1>
        <p data-aos="fade-down">Past CTFs contests we <span id="highlight">participated.</span></p>
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
                <td><span className="badge red">{contest.place}</span></td>
                <td>
                  <div className="ctf-info">
                    <h3>{contest.name}</h3>
                    <p>{contest.date}</p>
                    <a href={contest.link} target="_blank" className="merge-btn">🚩 View on CTFtime</a>
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