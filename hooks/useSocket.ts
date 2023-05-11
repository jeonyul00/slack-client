import { useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

const baseURl = 'http://localhost:3095';
const sockets: { [key: string]: Socket } = {}; // 각 대화방 마다 따로 연결 관리를 해야하기 때문에 객체로 관리

const useSocket = (workspace?: string): [Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace && sockets[workspace]) {
      sockets[workspace].disconnect(); // 연결 종료
      delete sockets[workspace]; // 해 당 연결 객체 삭제
    }
  }, [workspace]);

  if (!workspace) {
    return [undefined, disconnect];
  }

  if (!sockets[workspace]) {
    // transports: ['websocket'] : 최초 테스트 http 연결을 건너뛰고 websocket 바로 연결
    sockets[workspace] = io(`${baseURl}/ws-${workspace}`, { transports: ['websocket'] }); // 서버와 연결
  }
  return [sockets[workspace], disconnect];
};

export default useSocket;
