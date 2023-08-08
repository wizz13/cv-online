// script animasi 404
document.addEventListener("DOMContentLoaded", () => {
    const typingEffectText = document.querySelector(".typing-effect-text");
    typingEffectText.addEventListener("animationend", () => {
        typingEffectText.style.animation = "exitEffect 2s";
        typingEffectText.addEventListener("animationend", () => {
            typingEffectText.style.animation = "typingEffect 3s steps(22), fadeInOut 3s 1s infinite, redBackground 6s infinite";
        });
    });
});

// script tombol chatme
document.getElementById("chat-button").addEventListener("click", function() {
    // Scroll ke bagian chat saat tombol diklik
    document.getElementById("chat").scrollIntoView({ behavior: 'smooth' });
});

// script tautan wa chat
document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const message = encodeURIComponent(messageInput.value);
        const whatsappLink = `https://wa.me/6281213016105?text=${message}`;
        window.open(whatsappLink, "_blank");
    });
});

// script mengunduh cv
document.addEventListener("DOMContentLoaded", function() {
    const unduhButton = document.getElementById("unduh-cv");

    unduhButton.addEventListener("click", function() {
        const cvImageUrl = "https://i.ibb.co/4S4VHbT/cv-wisnu.jpg";
        const a = document.createElement("a");
        a.href = cvImageUrl;
        a.download = "nama-file-cv.jpg"; // Ganti dengan nama file yang Anda inginkan
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

// Fungsi untuk membuka popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
}

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
}

// Event listener untuk tautan buka popup
document.getElementById("open-popup-link").addEventListener("click", openPopup);

// Event listener untuk tautan tutup popup
document.getElementById("close-popup-link").addEventListener("click", closePopup);