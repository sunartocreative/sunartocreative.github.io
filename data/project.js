const projectDataHome = {
    flutter : {
        title : 'Aplikasi Konversi Gambar Ke Pola Karawo dengan Flutter',
        description: 'Aplikasi Konversi Gambar ke Pola Karawo dengan Flutter adalah sebuah aplikasi modern yang dirancang untuk membantu proses digitalisasi dan perancangan motif Karawo, salah satu kerajinan bordir tradisional khas Gorontalo. Aplikasi ini memanfaatkan teknologi pemrosesan gambar untuk mengubah gambar atau motif yang diunggah oleh pengguna menjadi pola berbasis grid yang sesuai dengan standar pengerjaan Karawo. Melalui aplikasi ini, pengguna dapat memilih gambar dari galeri atau mengambil gambar langsung melalui kamera, kemudian aplikasi akan mengonversinya menjadi pola piksel yang dapat disesuaikan. Ukuran grid dapat diatur berdasarkan tingkat detail yang diinginkan sehingga memudahkan pengrajin dalam menentukan jumlah lubang kain Karawo yang akan digunakan. Aplikasi ini juga dilengkapi fitur pengambilan warna tiap piksel, pengeditan pola secara interaktif, serta dukungan untuk memilih dan mengubah warna tertentu melalui palet warna yang dinamis.'
    },

    flutter2 : {
        title : 'Aplikasi Mobile Hitung Harga Pokok Produksi dengan Flutter',
        description: 'Aplikasi Mobile Hitung Harga Pokok Produksi dengan Flutter adalah sebuah aplikasi yang dirancang untuk membantu pelaku industri, khususnya UMKM dan sektor manufaktur kecil, dalam melakukan perhitungan harga pokok produksi (HPP) secara cepat, tepat, dan terstruktur. HPP merupakan komponen penting dalam menentukan harga jual yang kompetitif dan dalam mengevaluasi efisiensi proses produksi. Namun, banyak pelaku usaha yang masih mengalami kendala dalam melakukan perhitungan HPP secara manual karena prosesnya yang cukup rumit dan memerlukan pengelompokan biaya secara rinci. Melalui aplikasi ini, pengguna dapat memasukkan berbagai aspek biaya produksi seperti biaya bahan baku, biaya tenaga kerja langsung, serta biaya overhead pabrik. Data yang dimasukkan akan diproses oleh aplikasi untuk menghasilkan nilai HPP secara otomatis dengan metode perhitungan yang telah sesuai dengan standar akuntansi biaya. Selain itu, aplikasi juga menyediakan fitur penyimpanan data sehingga pengguna dapat membandingkan hasil perhitungan antar periode produksi dan melakukan analisis efisiensi.'
    },

    laravel : {
        title : 'Website App Manajemen Pembayaran Voucher dan Langganan Internet RT/RW',
        description : 'Website App Manajemen Pembayaran Voucher dan Langganan Internet RT/RW adalah sebuah sistem aplikasi berbasis web yang dirancang untuk membantu pengelola layanan internet di tingkat RT/RW dalam mengatur proses administrasi, manajemen pelanggan, serta pembayaran secara lebih modern dan efisien. Dalam operasional layanan internet lokal, pencatatan transaksi dan pemantauan status langganan sering kali masih dilakukan secara manual, seperti melalui buku catatan, pesan pribadi, atau komunikasi lisan. Hal tersebut dapat memicu kesalahan pencatatan, keterlambatan pembayaran, dan kesulitan dalam mengawasi jumlah pelanggan yang aktif. Aplikasi web ini hadir sebagai solusi digital yang memungkinkan admin layanan internet untuk mengelola data pelanggan, membuat dan mendistribusikan voucher, memantau masa aktif langganan, serta mencatat pembayaran dengan sistem yang terstruktur dan real-time. Pengguna atau pelanggan dapat dengan mudah melihat status langganannya, memperbarui masa aktif, melakukan pembayaran, atau bahkan mendapatkan notifikasi terkait tagihan dan waktu jatuh tempo, sehingga keterlambatan pembayaran dapat diminimalisir.'
    },

    designLogo : {
        title : 'Utina Logo',
        description : 'Logo ini merupakan hasil eksplorasi desain pribadi yang saya kerjakan menggunakan Adobe Illustrator. Tujuan awalnya bukan untuk proyek komersial, melainkan sebagai ajang latihan dan percobaan gaya visual. Saya mencoba menggabungkan elemen bentuk yang sederhana namun tetap memiliki identitas, sehingga logo dapat dengan mudah diaplikasikan pada berbagai media seperti ikon aplikasi, header website, hingga kebutuhan branding lainnya. Walau hanya sebuah eksperimen, proses ini membantu saya memperdalam kemampuan dalam penataan bentuk, keseimbangan visual, serta pemilihan warna yang tepat. Logo ini juga menjadi bagian dari perjalanan saya dalam mengasah kreativitas dan memahami lebih jauh dunia desain grafis.'
    },
}

const projectCardTitles = document.querySelectorAll('.project__card__title');
const projectCardDescription = document.querySelectorAll('.project__card__description');

Object.values(projectDataHome).forEach((item, index) => {
    projectCardTitles[index].innerText = item.title;
   projectCardDescription[index].innerText = item.description;
});