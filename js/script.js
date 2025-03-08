let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section"); // Menggunakan querySelectorAll
let navLinks = document.querySelectorAll("header nav a"); // Menggunakan querySelectorAll

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

    let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman refresh setelah submit

  const url = "https://script.google.com/macros/s/AKfycbz0FXjwGI61j-Dgfa_DWmfzU6WcFE_hm1UJNNPnRQbtMQaCS5EZ8QUEjqCfsukkLFg/exec"; // Ganti dengan URL Web App dari Google Apps Script
  const formData = new FormData();

  // Ambil data dari form
  formData.append("fullName", document.getElementById("fullName").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("phoneNumber", document.getElementById("phoneNumber").value);
  formData.append("subject", document.getElementById("subject").value);
  formData.append("message", document.getElementById("message").value);

  // Kirim data ke Google Spreadsheet
  fetch(url, {
    method: "POST",
    mode: "no-cors", 
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert("Pesan berhasil dikirim!"); // Notifikasi jika berhasil
      document.getElementById("contactForm").reset(); // Reset form setelah submit
    })
    .catch((error) => console.error("Error:", error));
});

