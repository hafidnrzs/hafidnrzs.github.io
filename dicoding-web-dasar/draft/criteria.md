# Kriteria submission

- Terdapat elemen <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, dan <code>&lt;aside&gt;</code> di berkas HTML.
- Masing-masing elemen wajib berisi konten yang peruntukkannya sesuai dengan elemen tersebut (menerapkan konsep semantic HTML dalam menyusun struktur website).
  Contohnya:
  - Tidak terdapat duplikasi elemen <code>&lt;main&gt;</code>.
  - Elemen <code>&lt;main&gt;</code> harus berada diantara <code>&lt;header&gt;</code> dan <code>&lt;footer&gt;</code>.
  - Harus terdapat elemen <code>&lt;header&gt;</code> sebelum <code>&lt;main&gt;</code> dan <code>&lt;footer&gt;</code> sesudah <code>&lt;main&gt;</code>.
  - Jika terdapat elemen <code>&lt;header&gt;</code> atau <code>&lt;footer&gt;</code> di dalam elemen <code>&lt;article&gt;</code> atau <code>&lt;aside&gt;</code>, maka hal tersebut diperbolehkan.
- Wajib menampilkan menampilkan foto di elemen <code>&lt;aside&gt;</code>. Anda boleh menampilkan foto diri Anda sekaligus menampilkan biodata lainnya atau Anda juga bisa menampilkan foto yang relevan dengan konten yang Anda tulis.
- Menyusun layout menggunakan flexbox, bukan float.
- Tema yang ditampilkan bebas, kecuali tema Bandung.
- Semakin detail dan lengkap website Anda maka nilai submission akan makin tinggi.

## Contoh

<pre><code>
&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;&lt;/nav&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;div id="content"&gt;
            &lt;article&gt;&lt;/article&gt;
            &lt;article&gt;&lt;/article&gt;
        &lt;/div&gt;
        &lt;aside&gt;
        &lt;/aside&gt;
    &lt;/main&gt;
    &lt;footer&gt;&lt;/footer&gt;
&lt;/body&gt;
</code></pre>

# Penilaian

Submission Anda akan dinilai oleh reviewer dengan **skala 1-5** berdasarkan dari parameter yang ada. Anda dapat menerapkan beberapa saran untuk mendapatkan nilai tinggi. Berikut sarannya.

- Menerapkan tampilan aplikasi yang menarik.

  - Memiliki pemilihan warna yang pas dengan tema aplikasi. Dalam memilih warna, Anda dapat memanfaatkan tools pemilihan warna seperti [colorhunt.co](https://colorhunt.co/).
  - Tata letak elemen yang pas.
    Contoh: Tidak ada konten yang bertumpuk.
  - Penggunaan font yang pas dengan tema.
  - Penerapan padding dan margin yang pas.

- Menerapkan layout yang responsif.

  - Menggunakan media query untuk menyesuaikan layout pada berbagai ukuran layar device.
  - Pastikan untuk tidak terdapat konten yang menumpuk maupun keluar dari kontainer ketika dicoba pada dekstop, tablet, dan juga mobile.

- Terdapat penerapan JavaScript dalam memanipulasi DOM. Berikut contoh-contoh penerapan JavaScript dan silakan pilih salah satu.
  - Membuat dropdown.
  - Memanfaatkan logika seperti looping dalam menampilkan elemen dan konten.
  - Membuat slider.
  - dan lainnya yang mendukung tampilan website agar lebih hidup.
