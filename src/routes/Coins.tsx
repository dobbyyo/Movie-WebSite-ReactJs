import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 30px;
  font-weight: bold;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cirbg};
  color: ${(props) => props.theme.textColor};
  border-radius: 20px;
  height: 60px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding-left: 10px;
    padding-right: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  text-align: center;
  font-size: 50px;
  display: block;
  margin-top: 30px;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  display: flex;
`;
const Button = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.cirbg};
  color: ${(props) => props.theme.textColor};
  border: 3px solid #fce205;
  color: #6e6e6e;
  &:hover {
    background-color: #fce205;
    color: #6e6e6e;
  }
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom); //useSetRecoilState는 값을 변경할수있게해줌.
  const toggleDarkAtom = () => setDarkAtom((cur) => !cur);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins); // allcoins는 key값, 두번째 변수는 api에 만든 변수이름

  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>DmCoin</title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <div></div>
        <div>
          <Title>DmCoin</Title>
        </div>
        <div>
          <Button onClick={toggleDarkAtom}>Theme</Button>
        </div>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{ pathname: `/${coin.id}`, state: { name: coin.name } }}
                //pathname: A string representing the path to link to.
                //state: State to persist to the location. 다른 곳에서 coin.name을 쓸수잇게 만들어준다.
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                ></Img>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
