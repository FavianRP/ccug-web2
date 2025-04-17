import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/blog.css";

function Blog() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const [search, setSearch] = useState("");

  const posts = [
    {
      title: "EHAX CTF 2025 - All Forensic Write Up",
      date: "16 February 2025",
      description: "Writeup lengkap untuk EHAX CTF 2025 semua kategori.",
      link: "#",
    },
    {
      title: "Nullcon Goa HackIM 2025 CTF - Forensic Write Up",
      date: "02 February 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, explicabo..",
      link: "#",
    },
    {
      title: "Codefest CTF 2025 - Forensic Write Up",
      date: "27 January 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestias?",
      link: "#",
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="blog-container">
      <h1 data-aos="fade-down">All Posts</h1>

      {/* Search Bar */}
      <div className="search-bar" data-aos="zoom-in">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <i data-feather="search"></i>
        </button>
      </div>
      <hr className="custom-line" data-aos="zoom-in"/>

      {/* Daftar Artikel */}
      <div className="post-list" data-aos="zoom-in">
        {filteredPosts.map((post, index) => (
          <article key={index} className="post">
            <h2>{post.title}</h2>
            <span className="post-date">{post.date}</span>
            <p>{post.description}</p>
            <a href={post.link}>Read more →</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
