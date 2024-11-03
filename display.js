const envelope = document.getElementById('envelope');
const displayMessage = document.getElementById('displayMessage');

// Dapatkan parameter pesan dari URL
const params = new URLSearchParams(window.location.search);
const message = decodeURIComponent(params.get('message') || "");
const decorations = JSON.parse(decodeURIComponent(params.get('decorations') || '[]'));

// Isi pesan dengan dekorasi sebelum teks utama
displayMessage.textContent = decorations.join(' ') + " ";

// Animasi mengetik untuk pesan
let messageIndex = 0;
function typeMessage() {
    if (messageIndex < message.length) {
        displayMessage.textContent += message[messageIndex];
        messageIndex++;
        setTimeout(typeMessage, 100); // Typing speed
    }
}

// Event untuk membuka surat
envelope.addEventListener('click', () => {
    envelope.classList.add('open'); // Animasi membuka amplop
    setTimeout(() => {
        displayMessage.classList.remove('hidden');
        displayMessage.classList.add('show'); // Animasi muncul pesan
        typeMessage(); // Mulai efek mengetik
    }, 500); // Sesuaikan dengan durasi animasi pembukaan
});
