const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); //set root path of server ...

console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});

app.get( '/2D_Player2', function( req, res ){ 
    res.sendFile( __dirname + '/public/2D_Player2.html' );
});

app.get( '/3D_Player1', function( req, res ){ 
    res.sendFile( __dirname + '/public/3D_Player1.html' );
});

//socket.io stuff
io.on('connection', (socket) => {

    console.log( socket.id + " connected" );

    socket.on('disconnect', () => {
        console.log( socket.id + " disconnected" );
    });

    // Start Button socket.io stuff
    socket.on("startButton", (data) => {
        io.sockets.emit('startGame', {id:socket.id})
    });

    // Green cube player 1 socket.io stuff
    socket.on("green1", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change1", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green2", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change2", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green3", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change3", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green4", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change4", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green5", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change5", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green6", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change6", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green7", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change7", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green8", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change8", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("green9", (data) => {
        console.log(data.r + data.g + data.b + " green event received" );
        io.sockets.emit("color_change9", {r:data.r, g:data.g, b:data.b});
    });

    // Yellow cube player 2 socket.io stuff
    socket.on("yellow1", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change1", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow2", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change2", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow3", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change3", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow4", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change4", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow5", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change5", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow6", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change6", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow7", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change7", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow8", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change8", {r:data.r, g:data.g, b:data.b});
    });

    socket.on("yellow9", (data) => {
        console.log(data.r + data.g + data.b + " yellow event received" );
        io.sockets.emit("color_change9", {r:data.r, g:data.g, b:data.b});
    });
    
});