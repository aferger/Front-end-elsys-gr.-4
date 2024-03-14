function getJsonProperty (file, key) {
    return new Promise((resolve, reject) => {
        const socket = new net.Socket();
        socket.connect(3000, 'localhost', () => {
            const request = {
                action: 'get',
                path: file,
                element: key
            };
            socket.write(JSON.stringify(request));
        });
        socket.on('data', (data) => {
            const response = JSON.parse(data);
            resolve(response);
            socket.destroy();
        });
        socket.on('error', (error) => {
            reject(error);
        });
    });
}