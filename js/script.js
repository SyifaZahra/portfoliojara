const scriptURL = "https://script.google.com/macros/s/AKfycbz0FXjwGI61j-Dgfa_DWmfzU6WcFE_hm1UJNNPnRQbtMQaCS5EZ8QUEjqCfsukkLFg/exec";
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("fullName", document.getElementById("fullName").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("phoneNumber", document.getElementById("phoneNumber").value);
  formData.append("subject", document.getElementById("subject").value);
  formData.append("message", document.getElementById("message").value);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      alert("Pesan berhasil dikirim!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim pesan.");
    });
});
