const sendButton = document.querySelector('.chat-input button');
const chatBox = document.querySelector('.chat-box');
const inputField = document.querySelector('.chat-input input');

sendButton.addEventListener('click', () => {
    const message = inputField.value.trim();
    if (message !== "") {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        inputField.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
