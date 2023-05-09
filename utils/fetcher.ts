import axios from 'axios';

const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then((response) => response.data);
// withCredentials: true : 백엔드와 프론트엔드의 주소가 다르면 백엔드는 쿠키를 생성해줄 수 없다 => 이를 해결하기 위한 설정

export default fetcher;
