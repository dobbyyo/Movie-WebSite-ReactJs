//////////////
시작 터미널에서 저장할 위치에 npx create-react-app@5.0.0 react-masterclass 입력

쉽게 스타일적용을 위해 npm i styled-components

시작 방법 : npm start

파일 새로 만들지않고 typescript쓰고싶다면 아래 코맨드 입력
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

새로 만들떄
npx create-react-app my-app --template typescript

npm i --save-dev @types/styled-components

npm i --save-dev @types/react-query
npm i react-query

npm i react-router-dom@5.3.0 설치

npm i react-helmet
npm i --save-dev @types/react-helmet

npm install recoil
Atom은 state의 일부를 나타낸다.

Redux, Recoil의 차이점 아래 링크.
https://velog.io/@katanazero86/redux-recoil-%EB%82%B4%EC%9A%A9-%EC%A0%95%EB%A6%AC

ts -> react문법없는것.
tsx -> react 문법 있는것.

?? 연산자 아래 링크
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

https://styled-components.com/docs/api#typescript -> theme 참교자료
https://reactjs.org/docs/events.html -> ReactJS 이벤트 문법
SyntheticEvent라고 불리는 가이드가 있습니다.
ReactJS는 이전에 우리가 보았다시피 자바스크립트의 실제 이벤트를 넘겨주는게 아닙니다.
SyntheticEvent를 주는 겁니다.
그리고 그건 기본적으로 ReactJS 버전의 이벤트입니다.
ReactJS가 어느 다른 방식으로 이벤트들을 최적화 할 수 있기 때문인데,
그걸 SyntheticEvent라고 부릅니다.

React에서는 링크를 걸어줄때 <a> tag 대신 <Link>를 사용하게 된다.

a tag를 사용하게 되면 링크를 누를때마다 재 렌더링 되기 때문에 웹페이지가 새로고침 되버리기 때문이다.

const [coins, setCoins] = useState<CoinInterface[]>([]);
참고자료 [] -> https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions

https://api.coinpaprika.com/#operation/getCoinById

Crypto Icon API
https://cryptoicon-api.vercel.app/api/icon/btc
Coin Detail
https://api.coinpaprika.com/v1/coins/btc-bitcoin
Coin Detail Price
https://api.coinpaprika.com/v1/tickers/btc-bitcoin
Coin 값
https://api.coinpaprika.com/#tag/Coins/paths/~1coins~1{coin_id}~1ohlcv~1historical/get
React router Link
https://v5.reactrouter.com/web/api/Link

Using custom props
https://styled-components.com/docs/api#using-custom-props

query 배열로 저장 참고자료.
https://react-query.tanstack.com/guides/query-keys#array-keys

APEX CHARTS
https://apexcharts.com

APEX CHARTS 설치
npm install --save react-apexcharts apexcharts

React APEX CHARTS Doc
https://apexcharts.com/docs/react-charts

Apex Charts Fill
https://apexcharts.com/docs/options/fill/

Flat UI Color
https://flatuicolors.com

// const [coins, setCoins] = useState<ICoin[]>([]);
// 뒤에 []은 배열임을 알려주는것. 참고자료 README.md 참고.
// useEffect(() => {
// (async () => {
// const response = await fetch("https://api.coinpaprika.com/v1/coins");
// const json = await response.json();
// setCoins(json.slice(0, 100));
// setLoading(false);
// })(); // ()는 즉시 실행을 의미.
// }, []);
