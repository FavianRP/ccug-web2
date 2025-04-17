import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeEffect from "../components/TypeEffectMembers.js";
import { members } from "../data/data.js";
import "../styles/members.css";

function Members() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="members">
      <h1 data-aos="fade-down">Members</h1>
      <hr className="custom-line" data-aos="fade-down" />
      <p data-aos="fade-down">
        Meet our <TypeEffect />
      </p>

      <div className="member-container">
        {members.map((member) => (
          <div className="member-card" key={member.id} data-aos="fade-down">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <div className="tags">
              {member.tags.map((tag, index) => (
                <span key={index} className={`tag ${member.tagColors[index]}`}>
                  {tag}
                </span>
              ))}
            </div>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Members;
