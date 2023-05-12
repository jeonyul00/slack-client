import Chat from '@components/Chat';
import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import { IDM, IChat } from '@typings/db';
import React, { useCallback, forwardRef, MutableRefObject } from 'react';
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';

interface Props {
  chatSections: { [key: string]: IDM[] };
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
  isReachingEnd: boolean;
  isEmpty: boolean;
}
const ChatList = forwardRef<Scrollbars, Props>(({ chatSections, setSize, isReachingEnd }, scrollRef) => {
  const onScroll = useCallback(
    (values: positionValues) => {
      if (values.scrollTop === 0 && !isReachingEnd) {
        setSize((prevSize) => prevSize + 1).then(() => {
          // 스크롤 위치 유지
          const current = (scrollRef as MutableRefObject<Scrollbars>)?.current;
          if (current) {
            current.scrollTop(current.getScrollHeight() - values.scrollHeight);
          }
        });
      }
    },
    [scrollRef, isReachingEnd, setSize],
  );

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
});

export default ChatList;
