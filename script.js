function openMail(){
  Swal.fire({
    title: 'Masukkan Nama Kamu',
    input: 'text',
    inputPlaceholder: 'Tulis nama di sini...',
    confirmButtonText: 'OK',
    inputValidator: (value) => {
      if (!value) {
        return 'ngeyel, isi nama kamu!';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Halo, ' + result.value + ' 🩶',
        text: 'Aku ada pesan buat kamu nih',
        confirmButtonText: 'Lihat Pesan'
      }).then(() => {
        // ilangin overlay
        document.querySelector(".overlay").style.display = "none";

        // munculin container
        const kontainer = document.getElementById("container");
        kontainer.style.display = "flex"; 

        // 🎶 Putar musik setelah klik "Lihat Pesan"
        const audio = document.getElementById("bg-music");
        audio.play().catch(() => {
          console.log("Autoplay dicegah, user harus interaksi manual");
        });
      });
    }
  });
}
