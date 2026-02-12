const certificateDataHome = {
    javaScript : {
        title : 'JavaScript',
        description: 'JavaScript adalah bahasa pemrograman tingkat tinggi yang digunakan untuk membuat halaman web menjadi interaktif, dinamis, dan lebih hidup. Pada awal kemunculannya tahun 1995, JavaScript diciptakan oleh Brendan Eich di Netscape hanya dalam waktu 10 hari sebagai bahasa skrip yang berjalan di browser untuk memberikan interaksi pada elemen-elemen HTML. Namun seiring berkembangnya teknologi web, JavaScript telah berevolusi menjadi salah satu bahasa pemrograman paling populer di dunia dan menjadi tulang punggung dalam pengembangan aplikasi modern.'
    },

    flutter : {
        title : 'Flutter',
        description: 'Flutter adalah sebuah framework UI open-source yang dikembangkan oleh Google untuk membangun aplikasi lintas platform (cross-platform) dengan satu basis kode (single codebase). Dengan Flutter, developer dapat membuat aplikasi yang berjalan secara native di Android, iOS, Web, Windows, macOS, hingga Linux, tanpa harus menulis kode yang berbeda untuk setiap platform.' + 'Flutter menggunakan bahasa pemrograman Dart, yang dirancang untuk efisiensi, keamanan, dan performa tinggi. Salah satu keunggulan terbesar Flutter adalah kemampuannya untuk melakukan rendering UI secara mandiri menggunakan mesin grafis Skia. Tidak seperti framework lain yang mengandalkan elemen UI milik platform masing-masing, Flutter menggambar sendiri setiap komponen antarmukanya. Hal ini membuat tampilan aplikasi tetap konsisten di berbagai perangkat dan platform, sekaligus memberikan performa yang sangat mulus, mendekati aplikasi native.'
    },

    JuniorGraphicDesigner : {
        title : 'VSGA - Junior Graphic Designer 2024',
        description : 'Program Vocational School Graduate Academy (VSGA) Junior Graphic Designer 2024 merupakan pelatihan dan sertifikasi kompetensi yang ditujukan untuk meningkatkan kemampuan lulusan pendidikan vokasi di bidang desain grafis. Peserta dibekali keahlian dalam membuat desain visual yang komunikatif dan kreatif menggunakan berbagai perangkat lunak desain profesional. Melalui program ini, para calon desainer grafis dipersiapkan agar mampu bekerja sesuai standar industri, mulai dari proses perancangan konsep, pengolahan gambar, tipografi, hingga publikasi media digital dan cetak. Setelah menyelesaikan pelatihan, peserta akan mengikuti uji kompetensi resmi untuk mendapatkan sertifikat yang diakui secara nasional.'
    },

    JuniorWebDefeloper : {
        title : 'VSGA - Junior Web Developer 2023',
        description : 'Program Vocational School Graduate Academy (VSGA) Junior Web Developer merupakan pelatihan dan sertifikasi kompetensi yang berfokus pada pengembangan keahlian dalam membangun website dan aplikasi web tingkat dasar. Peserta dibekali kemampuan dalam pemrograman web menggunakan teknologi standar industri, seperti HTML, CSS, JavaScript, serta pengelolaan database dan dasar-dasar backend. Program ini dirancang untuk mempersiapkan lulusan vokasi agar mampu membuat website yang fungsional, responsif, dan sesuai kebutuhan pengguna. Di akhir pelatihan, peserta mengikuti uji kompetensi resmi untuk memperoleh sertifikat yang diakui secara nasional sebagai bukti profesionalitas di bidang pengembangan web.'
    },
}


const certificateCardTitles = document.querySelectorAll('.certificate__card__title');
const certificateCardDescription = document.querySelectorAll('.certificate__card__description');

Object.values(certificateDataHome).forEach((item, index) => {
    certificateCardTitles[index].innerText = item.title;
    certificateCardDescription[index].innerText = item.description;
});

