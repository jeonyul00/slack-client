import React, { useCallback, useRef } from 'react';
import { ChatZone } from './styles';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface Props {
  chatData?: IDM[];
}

const ChatList: React.FC<Props> = ({ chatData }) => {
  const scrollbarRef = useRef(null);

  const onscroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onscroll}>
        {chatData?.map((value: IDM) => (
          <Chat key={value.id} data={value} />
        ))}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
