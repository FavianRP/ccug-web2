import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/aboutus.css";

function AboutUs() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <section id="about" className="about">
      <h1 data-aos="fade-down">About Us</h1>
          <img data-aos="zoom-in" src="../img/CCUG_Logo_with_Text.png" alt="profil" />
        <hr className="custom-line" data-aos="fade-down" data-aos-duration="1000" />
              <h4 data-aos="fade-down">Cyber Community Universitas Gunadarma</h4>
              <h3 data-aos="fade-down">Tim Akademik Universitas Gunadarma.</h3>
                <p data-aos="fade-down">
                  Cyber Community Universitas Gunadarma (CCUG) pada awalnya didirikan oleh tiga mahasiswa
                  Universitas Gunadarma pada bulan Mei 2017, yaitu: Ravi Dharmawan (TI 2015), Muhammad Fadel
                  Maulana (TI 2015), dan Jibril Hartri Putra (SI 2015). 
                  Keresahan Ravi, Fadel, dan Jibril melihat kampus lain yang aktif mengikuti lomba keamanan siber CTF,
                  membuat mereka berinisiatif untuk berpartisipasi pada lomba CTF.
                  Sejak saat itu, CCUG mulai terbentuk dan ikut aktif mengikuti perlombaan CTF nasional dan internasional.
                </p>
                  <div className="pendiri" data-aos="zoom-in">
                    <figure data-aos="fade-down">
                      <img src="../img/pendiri_dan_dosen.png" alt="Pendiri CCUG & Dosen Pembimbing CCUG" />
                      <figcaption data-aos="fade-down">Pendiri CCUG & Dosen Pembimbing CCUG</figcaption>
                      </figure>
                  </div>
                    <p data-aos="fade-down">
                      Sejak tim CCUG terbentuk, kami perlahan menjadi tim akademis resmi Universitas Gunadarma yang
                      berfokus pada kompetisi keamanan siber. Kami terdiri dari mahasiswa aktif Universitas Gunadarma
                      dan dibimbing oleh Dr. Mochammad Akbar Marwan S.T., M.M.S.I. 
                      <br></br> <br></br>
                      Tidak ada kewajiban tiap anggota kami untuk berpartisipasi secara rutin kompetisi CTF, dan kami santai akan persaingan dengan tetap fokus belajar dan bersenang-senang. 
                      Meskipun begitu, kami tetap serius ketika dalam kompetisi dan berlomba mendapatkan flag sebanyak-banyaknya!
                      <br></br> <br></br>
                      Pada kompetisi internasional, kami biasa bermain pada CTF yang tersedia di CTFTime, ranking internasional kami dapat diakses melalui <a href="https://ctftime.org/team/45168">ctftime.org</a>.
                    </p>

                    <h2 data-aos="fade-down">Sharing Session</h2>
                      <p data-aos="fade-down">
                        Tiap minggunya terkadang kami melakukan sharing session internal atau bisa disebut juga sebagai meeting secara informal. 
                        Biasanya yang dibahas meliputi:<br></br>
                        <li>Hanya ngobrol biasa.</li>
                        <li>Membahas tentang topik tertentu yang dialami oleh salah satu atau lebih anggota kami, sementara yang lain menyimak dan mengajukan pertanyaan.</li>
                        <li>Membahas tentang masalah challenge CTF yang dialami oleh salah satu atau lebih anggota kami, kemudian kami berdiskusi bersama yang mungkin dapat membantu menyelesaikan masalah.</li>
                        <li>Demo solusi dari challenge CTF yang telah solved.</li>
                        <li>Berdiskusi terkait perlombaan CTF apa yang akan diikuti berikutnya.</li>
                        <br></br>
                        Jika kalian tertarik bergabung kami sangat menyarankan untuk selalu ikut sharing session. Karena cara terbaik untuk belajar adalah dengan mendengarkan dan mengajukan pertanyaan.
                        Tidak ada kewajiban untuk mengikuti sharing session, jadi jika kalian sibuk akan tugas kuliah yang menumpuk, tetap utamakan tugas kuliah kalian, ya!
                      </p>
                      <h2 data-aos="fade-down">Berkompetisi</h2>
                      <p data-aos="fade-down">
                      Untuk kompetisi, anggota CCUG dibagi menjadi tim yang terdiri dari 3 orang, karena untuk kompetisi CTF Nasional biasanya tiap tim maksimal berisi 3 anggota. 
                      Kami biasanya selalu ikut kompetisi CTF Nasional seperti COMPFEST CTF, NCW CTF, IFEST CTF, GEMASTIK CTF, ARA CTF, dan sebagainya.
                      Pada umumnya, CTF Nasional ada dua tahap yaitu kualifikasi dan final. Terkadang pada saat kualifikasi biasanya diselenggarakan secara online , kami melakukannya bersama-sama secara offline di markas CCUG yaitu di kampus F6 Universitas Gunadarma. 
                      Meskipun secara offline, namun kami tetap menjunjung tinggi sportifitas dengan tidak berbagi flag. 🤣
                      <br></br> <br></br>
                      Terkadang kami memutuskan untuk "try hard" pada kompetisi CTF tertentu, seperti kompetisi CTF yang memiliki reputasi yang sangat baik misalnya GEMASTIK atau kompetisi CTF yang probsetnya suhu besar. 
                      Meskipun begitu, tetap yang pertama dan paling utama adalah kami semua di sini untuk belajar dan menikmati prosesnya.
                      </p>
    </section>
  );
};

export default AboutUs;