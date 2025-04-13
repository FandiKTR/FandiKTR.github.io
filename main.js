document.getElementById('sendButton').addEventListener('click', function() {
    const userMessage = document.getElementById('userMessage').value;
    const sentMessagesDiv = document.getElementById('sentMessages');

    if (userMessage.trim() !== "") {
        const messageElement = document.createElement('p');
        messageElement.textContent = userMessage;
        sentMessagesDiv.appendChild(messageElement);
        document.getElementById('userMessage').value = ""; // Clear input
    } else {
        alert("Tolong tulis pesan sebelum mengirim!");
    }
});