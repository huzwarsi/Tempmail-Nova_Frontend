import { io } from 'socket.io-client';

let socket = null;

export const getSocket = () => {
  if (!socket) {
    socket = io('/', {
      autoConnect: true,
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => console.log('[Client Socket] Connected to WS server'));
    socket.on('disconnect', () => console.log('[Client Socket] Disconnected from WS server'));
  }
  return socket;
};
