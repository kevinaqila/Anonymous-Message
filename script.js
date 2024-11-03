const messageInput = document.getElementById('message');
const generateLinkButton = document.getElementById('generateLink');
const linkOutput = document.getElementById('linkOutput');
const messageForm = document.getElementById('messageForm');

generateLinkButton.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah refresh halaman
    const message = encodeURIComponent(messageInput.value);
    const link = `${window.location.origin}/display.html?message=${message}`;

    // Sembunyikan form dan tampilkan link hasil
    messageForm.classList.add('hidden');
    linkOutput.classList.remove('hidden');
    linkOutput.innerHTML = `
        <h2>Tautan Anda:</h2>
        <a href="${link}" target="_blank">${link}</a>
        <button id="createAnother">Buat Pesan Baru</button>
    `;

    // Tombol untuk membuat pesan baru
    document.getElementById('createAnother').addEventListener('click', () => {
        linkOutput.classList.add('hidden');
        messageForm.classList.remove('hidden');
        messageInput.value = ""; // Kosongkan input
    });
});
