const socket = new WebSocket('ws://your-backend-url'); // TODO!

socket.onopen = function(e) {
    console.log("Connection established");
};

socket.onmessage = function(event) {
    console.log(`Data received from server: ${event.data}`);
};

socket.onerror = function(error) {
    console.log(`WebSocket error: ${error}`);
};