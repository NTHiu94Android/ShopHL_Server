var express = require('express');
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

const connect = () => {
    let onlineUsers = [];
    const addUser = (idSender, socketID) => {
        !onlineUsers.some((user) => user.idSender === idSender)
            && onlineUsers.push({ idSender, socketID });
        console.log(onlineUsers);
    };
    const removeUser = (socketID) => {
        onlineUsers = onlineUsers.filter((user) => user.socketID !== socketID);
        console.log(onlineUsers);
    };

    io.on("connection", async (socket) => {
        console.log("User " + socket.id + " connected");
        socket.on('addUser', (idSender) => {
            addUser(idSender, socket.id);
            console.log(idSender);
        });

        socket.on("disconnect", () => {
            console.log("user " + socket.id + " disconnected");
            removeUser(socket.id);
        });

        // socket.on('getUser', (email) => {
        //     getUser(email);
        // });

        socket.on('client-sent-message', (message) => {
            console.log(`Received message: ${message.body}`);

            socket.emit('server-sent-message', message);
            for (let i = 0; i < onlineUsers.length; i++) {
                if(onlineUsers[i].idSender === message.idReceiver){
                    io.to(onlineUsers[i].socketID).emit('server-sent-message', message);
                    break;
                }
            }
            
        });
    });
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
        console.log(`listening on *:${port}`);
    });
};

module.exports = { connect };