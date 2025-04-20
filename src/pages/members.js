import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeEffect from "../components/TypeEffectMembers.js";
import "../styles/members.css";
import axios from "axios";

function Members() {
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [form, setForm] = useState({
    name: "",
    photo_url: "",
    bio: "",
    position: ""
  });

  const user = { username: 'admin123', role: 'admin' }; // ganti nanti dengan context/auth

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    axios.get("http://localhost:5000/api/members", { withCredentials: true })
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`http://localhost:5000/api/members/${id}`, { withCredentials: true })
        .then(() => fetchMembers())
        .catch(err => console.error(err));
    }
  };

  const openAddModal = () => {
    setForm({ name: "", photo_url: "", bio: "", position: "" });
    setEditingMember(null);
    setShowModal(true);
  };

  const openEditModal = (member) => {
    setForm(member);
    setEditingMember(member);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const req = editingMember
      ? axios.put(`http://localhost:5000/api/members/${editingMember.id}`, form, { withCredentials: true })
      : axios.post("http://localhost:5000/api/members", form, { withCredentials: true });

    req.then(() => {
      setShowModal(false);
      fetchMembers();
    }).catch(err => console.error(err));
  };

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
            <img src={member.photo_url} alt={member.name} />
            <h3>{member.name}</h3>
            <div className="tags">
              <span className={`tag ${member.position?.toLowerCase().replace(/\s+/g, "-")}`}>
                {member.position}
              </span>
            </div>
            <p>{member.bio}</p>

            {user.role === "admin" && (
              <div className="btn-group">
                <button className="edit-btn" onClick={() => openEditModal(member)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(member.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>{editingMember ? "Edit Member" : "Add Member"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                name="photo_url"
                value={form.photo_url}
                onChange={handleChange}
                placeholder="Photo URL"
                required
              />
              <input
                name="position"
                value={form.position}
                onChange={handleChange}
                placeholder="Position"
                required
              />
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Bio"
                required
              />
              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
            {user.role === "admin" && (
        <div className="admin-controls">
          <button className="add-btn" onClick={openAddModal}>+ Add Member</button>
        </div>
      )}
    </section>
  );
}

export default Members;
