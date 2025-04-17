import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeEffect from "../components/TypeEffectGS.js";
import "../styles/gettingstarted.css";

function GettingStarted() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    return (
      <section className="gettingstarted">
        <h1 data-aos="fade-down">getting_started</h1>
        <hr className="custom-line" data-aos="fade-down" />
        <h3 data-aos="fade-down">Tertarik dengan dunia <TypeEffect /></h3>
        <p data-aos="fade-down">
            Halaman ini dimaksudkan sebagai pengenalan pertama kalian ke dalam perjalanan CTF kalian. Ada banyak sekali resources terkait CTF yang dapat kalian temukan di internet, 
            jadi halaman ini akan menyajikan pendekatan yang efektif untuk meningkatkan skill CTF kalian.
            Cara terbaik untuk belajar adalah dengan menyelesaikan challenges CTF, kemudian merasakan stuck, berproses, lalu stuck lagi, bertanya, dapatkan flag, ulangi. 
            Selama melakukan itu, kalian akan mendapatkan ilmu baru, keterampilan baru, dan pemahaman tentang tools baru tentunya.</p>
        <p data-aos="fade-down">Dengan kata lain, selama kalian mencoba menyelesaikan challenges CTF lalu kalian merasa stuck, terjebak, tidak tahu jalan, 
            itu sangat wajar. Karena memang seperti itu belajar. Kalian bisa bertanya ke anggota CCUG untuk membantu kalian menyelesaikan challenges 
            (Dilarang bertanya saat CTF berlangsung). Get The Flag! 🚩
        </p>

        <h2 data-aos="fade-down">Apa itu CTF?</h2>
        <p data-aos="fade-down">
            Capture The Flag atau biasa disingkat CTF, merupakan kompetisi keamanan siber di mana pemain harus memecahkan masalah terkait keamanan siber dalam bentuk challenges, 
            dengan kerentanan yang sudah disematkan pada suatu challenge, tujuannya adalah mencari string atau teks rahasia (disebut flag) yang ada pada challenge tersebut, 
            mengumpulkan flag pada platform CTF, kemudian mendapatkan poin sebanyak-banyaknya.<br></br> <br></br>

            Fokus masalah sangat beragam, mulai dari aspek teoritis komputer hingga aspek terapan system administration, dan software engineering. 
            Bermain CTF adalah cara yang bagus untuk menambah pengetahuan yang luas dalam segala hal, yang berkaitan dengan sistem komputer, sekaligus mencapai sense of accomplishment dan kompetisi.
        </p>

        <h2 data-aos="fade-down">Prasyarat</h2>
        <p data-aos="fade-down">
            Sebelum kalian mulai mengerjakan challenges CTF, ada subset tools minimum yang kalian perlukan. Kalian memerlukan akses ke sistem UNIX, seperti Linux atau MacOS. Jika kalian menggunakan Windows dan tidak ingin memasang partisi terpisah (atau dual boot), 
            kalian dapat menggunakan virtual machine (VM) seperti VMware atau VirtualBox, atau dengan Subsistem Windows untuk Linux (WSL). Banyak tools umum yang perlu kalian ketahui, 
            cara menggunakannya dapat ditemukan di <a href="https://picoctf.org/resources.html">picoCTF resources.</a> Kalian bisa mendapatkan banyak pemahaman dasar untuk topik-topik di CTF dan tools yang nantinya akan kalian butuhkan.
        </p>

        <h2 data-aos="fade-down">Binary Exploitation (PWN)</h2>
        <p data-aos="fade-down">
            Kategori Binary Exploitation atau yang biasa disebut dengan Binex / PWN adalah kategori yang membutuhkan pemahaman pada program atau service yang diberikan. 
            Kategori ini sedikit atau banyak membutuhkan pemahaman tentang <i>Reverse Engineering</i>, dikarenakan umumnya hanya diberikan compiled program berbahasa pemrograman C tanpa source code, 
            beserta sebuah service (program yang sama dengan yang diberikan) yang berjalan pada sebuah server. Untuk memahami program yang diberikan harus melalui proses <i>disassembling</i> dan <i>decompiling. </i> 
            Pada kategori ini, flag berada di service server yang diberikan, dan diperlukan kemampuan untuk menemukan kerentanan pada program kemudian mengirim payload eksploitasi ke service yang diberikan. 
            Untuk mempelajari : <br></br> <br></br>
            <li>Kerjakan challenge Binary Exploitation di <a href="https://picoctf.org/" target="_blank">picoCTF</a>.</li>
            <li>Coba kerjakan challenge-challenge binex/pwn Advance di 
                <a href="http://pwnable.tw/" target="_blank"> pwnable.tw</a> & 
                <a href="http://pwnable.kr/" target="_blank"> pwnable.kr</a>
            </li>
            <li>Youtube :
                <a href="https://www.youtube.com/watch?v=iyAyN3GFM7A&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN" target="_blank"> LiveOverflow - Binary Exploitation Playlist</a>, 
                <a href="https://www.youtube.com/watch?v=-iRG9_zFRC4&list=PL1H1sBF1VAKUBfdObXv_MeS4s3n8qwgeU" target="_blank"> John Hammond - Binary Exploitation Playlist</a>, 
                <a href="https://www.youtube.com/@pwncollege" target="_blank"> pwn.college</a>.
            </li> <br></br>
            Tools yang biasa dipakai pada kategori <i>Binary Exploitation</i>:
            <li>Debugger (<a href="https://www.sourceware.org/gdb/">GDB</a>, dengan ekstensi gdb seperti <a href="https://github.com/hugsy/gef/">gef</a>, <a href="https://github.com/pwndbg/pwndbg">pwndbg</a>)</li>
            <li>Disassembler & Decompiler: (<a href="https://hex-rays.com/ida-free">IDA</a>, <a href="https://ghidra-sre.org/">Ghidra</a> atau <a href="https://cutter.re/">cutter</a>).</li>
            <li><a href="https://pypi.org/project/pwntools/">pwntool</a> sangat berguna untuk pembuatan automasi eksploitasi.</li>
        </p>

        <h2 data-aos="fade-down">Cryptography</h2>
        <p data-aos="fade-down">
            Sesuai nama kategorinya yakni <i>Cryptography</i>, kategori ini befokus untuk mencari pesan asli (plaintext) yang sudah disembunyikan hingga menjadi pesan rahasia <i>(ciphertext)</i>. 
            <i>Cryptography</i> mengharuskan peserta untuk melakukan dekripsi pada flag yang sudah terenkripsi oleh suatu metode enrkripsi. 
            Untuk mulai mempelajari <i>Cryptography</i>, dapat dimulai dari hal berikut: <br></br> <br></br>
            <li>Kerjakan challenge dasar di <a href="https://cryptopals.com/" target="_blank">cryptopals</a></li>
            <li>Asah kemampuan dengan mengerjakan challenge di <a href="https://picoctf.org/" target="_blank">picoCTF</a></li>
            <li><i>Resource</i> lainnya<a href="https://github.com/ashutosh1206/Crypton" target="_blank"> Crypton</a></li>
        </p>

        <h2 data-aos="fade-down">Digital Forensics</h2>
        <p data-aos="fade-down">
        Digital Forensics adalah kategori melakukan penganalisaan terhadap suatu berkas file, yang mana pada berkas file ini kita mencari suatu informasi yang menjadi tujuan untuk sebuah barang bukti, 
        atau hasil dari peristiwa yang ada. pada kategori ini memiliki banyak tools yang digunakan. karena umumnya kategori ini mencakup beragam sub kategori: <br></br> <br></br>
            <li>Stegnography</li>
            <li>Memory Dump</li>
            <li>Network Analys</li>
            <li>Log Analys</li>
            <li>File Repair</li>
            <li>Deobfuscated File</li>
            <li>PDF Parsing</li>
            <br></br>
            Tools yang di gunakan pada kategori ini sangat banyak beberapa sudah dirangkum dalam repo berikut. <br></br>
            <a href="https://github.com/DominicBreuker/stego-toolkit" target="_blank">https://github.com/DominicBreuker/stego-toolkit</a>
        </p>

        <h2 data-aos="fade-down">Reverse Engineering</h2>
        <p data-aos="fade-down">
            Kategori <i>Reverse Engineering</i> adalah kategori yang mengharuskan peserta untuk menemukan sebuah serial key atau flag, pada suatu program yang menerapkan suatu algoritma. 
            Sama seperti <i>Binary Exploitation</i>, kategori ini juga sering membutuhkan disassembler dan decompiler, untuk membantu mengerjakannya. 
            Kemampuan peserta dalam memahami bahasa pemrograman tingkat tinggi seperti C++, Java, Python, C, VB hingga bahasa tingkat rendah seperti assembly, akan sangat membantu. <br></br> <br></br>
            Tools yang biasa dipakai pada kategori <i>Reverse Engineering</i>:
            <li>Debugger (<a href="https://www.sourceware.org/gdb/">GDB</a>, dengan ekstensi gdb seperti <a href="https://github.com/hugsy/gef/">gef</a>, <a href="https://github.com/pwndbg/pwndbg">pwndbg</a>)</li>
            <li>Disassembler & Decompiler: (<a href="https://hex-rays.com/ida-free">IDA</a>, <a href="https://ghidra-sre.org/">Ghidra</a> atau <a href="https://cutter.re/">cutter</a>).</li>
            <li><i>Resource</i> assembly : <a href="https://www.tutorialspoint.com/assembly_programming/index.htm">Assembly Programming</a>.</li>
        </p>

        <h2 data-aos="fade-down">Web Exploitation</h2>
        <p data-aos="fade-down">
            Kategori <em>Web Exploitation</em> adalah salah satu kategori yang mudah proses pengerjaannya, karena umumnya, kategori ini tidak memerlukan tools berat untuk mengerjakannya. 
            Berikut adalah pedoman yang bisa kalian pertimbangkan untuk mulai mendalami kategori <i>Web Exploitation</i>: <br></br> <br></br>
            <li>Pengetahuan dasar dalam bahasa <i>scripting</i>. (Python adalah bahasa pemrograman yang sangat membantu)</li>
            <li>Pengetahuan dasar dalam bahasa Javascript, PHP, dan kerangka kerja (<i>framework</i>) web umum seperti NodeJS, Flask, Laravel, dan sebagainya.</li>
            <li>Memahami protokol web umum seperti HTTP, HTTPS, IP, dan DNS</li>
            <li>Memahami tentang RESTful API, dan interaksi client-server.</li> 
            <br></br>
            Pedoman tersebut dapat dipertimbangkan jika kalian tidak tau harus mulai dari mana untuk mendalami kategori Web Exploitation. Karena 90% internet menggunakan Javascript, 
            memiliki pemahaman tentang sintaks dalam bahasa pemrograman tersebut akan membantu mengatasi "kebingungan" saat pertama kali mulai mengerjakan. Dan dengan mengetahui perspektif sebagai 
            pengembang/developer web juga membantu dalam eksploitasi web.
            <br></br> <br></br>
            Meskipun dikatakan "mudah dilakukan", namun seperti kategori lainnya, web dapat berkembang sedemikian rupa, bahkan menjadi kompleks, sehingga sangat penting untuk mengetahui dasar-dasarnya. 
            Saat kalian dapat menyelesaikan challenges dengan bug yang relatif mudah seperti XSS, LFI, dan SQL Injection, kalian dapat secara bertahap beralih ke eksploit kompleks yang mungkin bercabang dari apa yang pertama kali kalian mulai dalam kategori ini, 
            seperti pop chains atau XS-leaks atau bahkan web assembly. Cara terbaik untuk belajar adalah dengan mencoba challenges CTF apa pun dan lihat sendiri seperti apa challenge web itu.

        </p>
      </section>
    );
  }

export default GettingStarted;