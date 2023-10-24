function sendMessage(frame, message) {
    alert("Sending from Frame View: " + message);
    window.parent.frames[frame].postMessage(message, '*');
}

function receiveMessage(event) {
    var receivedMessage = event.data;
    alert("Message received in Frame View: " + receivedMessage);
}

window.addEventListener("message", receiveMessage, false);