document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk smooth scrolling
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Kurangi tinggi header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Anda bisa menambahkan fungsionalitas lain di sini,
    // seperti validasi formulir atau interaksi galeri.
});