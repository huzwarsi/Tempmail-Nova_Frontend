import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket | null => {
  if (typeof window === 'undefined') return null;

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
