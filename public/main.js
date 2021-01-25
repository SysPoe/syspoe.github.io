/*
function InstamessageWeb() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('instamessage-web').style.display = 'block';
    document.title = "Instamessage Web Client";
    window.location.hash = "#Instamessage-Web";
}
var websocket;
var password;
var ipAddress;
var uuid = 0;
var previousChat = "";
function connect() {
    ipAddress = document.getElementById("web-ip").value;
    password = document.getElementById("web-password").value;

    websocket = new WebSocket("wss://"+ipAddress+":63439");
    websocket.onopen = onOpen;
    websocket.onmessage = onMessage;
    websocket.onerror = onError;

}
function onOpen() {
    var tosendJSON = { type: "validate", content: password, token: uuid};
    var tosend = JSON.stringify(tosendJSON);
    console.log("Connected to server... authenticating");
    websocket.send(tosend);
}
function onMessage(e) {
    var message = JSON.parse(e.data);
    if (message.type == "token") {
        uuid = message.content;
        console.log("verified, token is: "+uuid);
        document.getElementById("web-error").innerHTML = "";
        document.getElementById("web-input").style.display = "none";
        document.getElementById("web-chat-screen").style.display = "block";
        var toSendJSON = { type: "username", content: document.getElementById("web-username").value, token: uuid};
        var toSend = JSON.stringify(toSendJSON);
        websocket.send(toSend);
    } else if (message.type == "error") {
        console.log("Error: "+message.content);
        document.getElementById("web-error").innerHTML = message.content;
    } else if (message.type == "client") {
        console.log("Message from server: " + message.type + " " + message.content);
    } else if (message.type == "chat") {
        document.getElementById("web-chat").innerHTML = message.content.replace(/\n/g, "<br />");
        if (message.content.replace(/\n/g, "<br />") != previousChat) {
            document.getElementById("web-chat").scrollTop = document.getElementById("web-chat").scrollHeight;
        }
        previousChat = message.content.replace(/\n/g, "<br />");
    }
    else {
        console.log("Recieved from server: "+e.data);
    }
}
function onError() {
    document.getElementById("web-error").innerHTML = "Unable to connect to host: server not found.";
}
function sendMessage() {
    websocket.send(JSON.stringify({type: "chat", content: document.getElementById("web-send-message").value, token: uuid}));
    document.getElementById("web-send-message").value = "";
}
*/
function onLoad() {
    console.log(window.location.hash);
    if (window.location.hash == "#Instamessage") {
        Instamessage();
    }
    /* document.getElementById("web-send-message").addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
			websocket.send(JSON.stringify({type: "chat", content: document.getElementById("web-send-message").value, token: uuid}));
            document.getElementById("web-send-message").value = "";
        }
	});
    */

    mainTitle();
}

function Instamessage() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('instamessage').style.display = 'block';
    document.title = "Instamessage By SysPoe";
    window.location.hash = "#Instamessage";
}

function ProjectsBySyspoe() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('instamessage').style.display = 'none';
    document.getElementById('instamessage-web').style.display = 'none';
    document.title = "Projects By SysPoe";
    window.location.hash = "";
}

function mainTitle() {
    setTimeout(function () {
        document.getElementById("main-title").innerHTML = "S";
    }, 150);

    setTimeout(function () {
        document.getElementById("main-title").innerHTML = "Sy";
    }, 300);

    setTimeout(function () {
        document.getElementById("main-title").innerHTML = "Sys";
    }, 450);

    setTimeout(function () {
        document.getElementById("main-title").innerHTML = "SysP";
    }, 600);

    setTimeout(function () {
        document.getElementById("main-title").innerHTML = "SysPo";
    }, 750);

    setTimeout(function () {
        document.getElementById("main-title").innerHTML = "SysPoe";
    }, 900);
}
