import { ChatWrapper } from '@components/Chat/styles';
import { IChat, IDM } from '@typings/db';
import dayjs from 'dayjs';
import gravatar from 'gravatar';
import React, { FC, memo, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import regexifyString from 'regexify-string';

interface Props {
  data: IDM | IChat;
}

/*
  컴포넌트를 캐싱 할 때 : memo : 프롭스가 바뀌면 갱신 : *얕은 비교
  값을 캐싱 할 때 : useMemo
*/

const Chat: FC<Props> = memo(({ data }) => {
  const user = 'Sender' in data ? data.Sender : data.User;
  const { workspace } = useParams<{ workspace: string; channel: string }>();

  const result = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
        // 매칭되는 값
        decorator(match, index): JSX.Element {
          const arr = match.match(/@\[(.+?)]\((\d+?)\)/)!; // id
          if (arr) {
            return (
              <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                @{arr[1]}
              </Link>
            );
          }
          return <br key={index} />;
        },
      }),
    [data.content, workspace],
  );

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
});

export default memo(Chat);
