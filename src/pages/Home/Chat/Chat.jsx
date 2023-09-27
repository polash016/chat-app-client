// import { Send } from "@mui/icons-material";
// import { Button, TextField } from "@mui/material";
// import { useEffect, useState } from "react";

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     // Create a WebSocket connection when the component mounts
//     const newSocket = new WebSocket("ws://localhost:5000");
//     setSocket(newSocket);

//     newSocket.onopen = () => {
//       console.log("WebSocket connection established.");
//     };

//     newSocket.onmessage = (event) => {
//       //   const newMessage = event.data;
//       const newMessage = JSON.parse(event.data);
//       console.log(event);
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       console.log(messages);
//     };

//     // newSocket.onclose = () => {
//     //   console.log('WebSocket connection closed.');
//     // };

//     // Clean up the WebSocket connection when the component unmounts
//     return () => {
//       if (newSocket) {
//         newSocket.close();
//       }
//     };
//   }, [messages]);

//   const sendMessage = () => {
//     if (socket && socket.readyState === WebSocket.OPEN) {
//       console.log(message);
//       socket.send(JSON.stringify({ message }));
//       console.log(socket.send(message));
//         setMessage('');
//     } else {
//       console.log("WebSocket connection is not open.");
//     }
//   };

//   // const [webSocketServer, setWebSocketServer] = useState(null)

//   // useEffect(() => {
//   //     const ws = new WebSocket('ws://localhost:5000/');
//   //     setWebSocketServer(ws);
//   //     ws.addEventListener('message', handleMessage)
//   // },[])

//   // const handleMessage = (event) => {
//   //     console.log(`New Message ${event.data}`);
//   // }

//   //     const socket = new WebSocket('ws://localhost:5000/chat');

//   // socket.onopen = () => {
//   //   console.log('WebSocket connection established.');
//   // };

//   // socket.onmessage = (event) => {
//   //   const newMessage = JSON.parse(event.data);
//   //   // Handle the received message
//   //   console.log('Received WebSocket message:', newMessage);
//   // }

//   //   const handleChange = (event) => {
//   //     event.preventDefault();
//   //     console.log(event.target.message.value);
//   //   };

//   return (
//     <div className="flex gap-4 justify-center h-screen mt-4">
//       <div className="w-1/3 bg-amber-300">Contacts Here</div>
//       <div className="w-2/3 flex flex-col p-3 bg-emerald-300">
//         <div className="flex-grow">
//           {messages.map((msg, index) => (
//             <div key={index}>{msg.message}</div>
//           ))}
//         </div>
//         <div>
//           <form className="flex items-center ml-8">
//             <TextField
//               className="flex-grow outline-slate-950"
//               id="outlined-multiline-static"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               name="message"
//               multiline
//               maxRows={8}
//               placeholder="Write Your Message Here"
//             />
//             <Button onClick={sendMessage}>
//               <Send sx={{ fontSize: 40, color: "#3BA58B" }} />
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
