import { useNavigate } from "react-router-dom";

const Blog1 = () => {
  const navigation = useNavigate();
  return (
    <>
    
      <article className="blogs blg">
        <h2 className="sub-title" id="web-basic">Web Basic</h2>
        <p>
          Website merupakan halaman yang menampilkan berbagai macam informasi
          yang biasanya berupa teks, gambar, suara atau bahkan video yang dapat
          diakses menggunakan browser melalui domain/url yang terhubung dengan
          internet. Biasanya website disediakan oleh perorangan, kelompok atau
          bahkan organisasi. Website sendiri dibangun menggunakan susunan
          kode-kode dari HTML, CSS dan Javascript. HTML sendiri merupakan
          dasaran untuk membangun sebuah website agar dapat menampilkan
          informasi sekaligus sebagai struktur dalam sebuah website. Lalu CSS
          dan Javascript merupakan dasaran yang lain untuk memperindah dan
          membuat sebuah website menjadi lebih dinamis dan interaktif.
        </p>
        <img
          src="https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-html/html-css-js.gif"
          alt="Website"
        ></img>
        <h2 id="html">HTML</h2>
        <p>
          HTML adalah singkatan dari Hyper Text Markup Language merupakan sebuah
          bahasa komputer yang digunakan sebagai struktur atau kerangka dari
          sebuah website di internet. Di dalam HTML sendiri memiliki tag-tag
          yang berfungsi sebagai kerangka utama di dalam HTML yakni &lt;
          head&gt; dan &lt; body&gt;. Berikut garis besar struktur dari HTML:
        </p>
        <img
          src="https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-html/html-structure.png"
          alt="HTML"
        ></img>
        <h2 id="css">CSS</h2>
        <p>
          CSS adalah singkatan dari Cascading Style Sheet merupakan sebuah
          bahasa komputer yang digunakan untuk memperiindah visual dari suatu
          halaman website. CSS bukanlah bahasa pemrograman melainkan sebuah
          declarative language yang digunakan untuk mendeklarasikan sebuah nilai
          yang nantinya digunakan untuk mengatur bagaimana elemen-elemen HTML
          ditampilkan pada browser. berikut contoh penggunaan dari CSS:
        </p>
        <img
          src="https://skilvul-assets-01.s3-ap-southeast-1.amazonaws.com/lesson/intro-to-css/css-intro.png"
          alt="CSS"
        ></img>
        <h2 id="javascript">Javascript</h2>
        <p>
          Javascript adalah bahasa pemrograman yang digunakan dalam pengembangan
          website agar menjadi lebih interaktif dan dinamis. Dengan Javascript
          kita tidak hanya dapat membuat website menjadi lebih menarik, namun
          juga kita dapat memanfaatkan javascript untuk membuat tools, atau
          bahkan game di dalam web. Tag yang digunakan untuk menggunakan
          Javascript yakni dengan tag dengan penampatan tag tersebut berada di
          dalam tag &lt; body&gt; HTML.
        </p>
        <p>
          Source image from :{" "}
          <b>
            <a href="https://skilvul.com/"> www.skilvul.com</a>
          </b>{" "}
        </p>
      </article>
      <div className="back" onClick={() => navigation(-1)}> Back </div>
    </>
  );
};
export default Blog1;
