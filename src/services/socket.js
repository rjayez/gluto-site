import { io } from "socket.io-client"


export const socket = io("http://localhost:5050");


socket.on("connect", () => {
    console.log("Connected")
})

socket.on("notif", args => {
    console.log(args);
})


