import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

interface IcoinId {
  coinId: string;
}
interface IPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: bold;
`;

const CircleDiv = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.cirbg};
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 20px 20px;
  div:first-child {
    width: 50%;
    margin-left: 10px;
  }
`;

const RedBlue = styled.span<{ isActive: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? "#3C4EFE" : "red")};
`;

function Price({ coinId }: IcoinId) {
  const { isLoading, data } = useQuery<IPrice>(
    ["priceData", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 1000,
    }
  );

  function check(value: number | undefined) {
    if (value) {
      return value > 0;
    }
  }
  return (
    <Container>
      {isLoading ? (
        "Loading chart"
      ) : (
        <>
          <CircleDiv>
            <div>
              <span>Price</span>
            </div>
            <div>
              <span>{data?.quotes.USD.price} $</span>
            </div>
          </CircleDiv>
          <CircleDiv>
            <div>
              <span>Market Cap</span>
            </div>
            <div>
              <RedBlue isActive={check(data?.quotes.USD.market_cap) === true}>
                {data?.quotes.USD.market_cap} $
              </RedBlue>
            </div>
          </CircleDiv>
          <CircleDiv>
            <div>
              <span>Market Cap Change_24h</span>
            </div>
            <div>
              <RedBlue
                isActive={
                  check(data?.quotes.USD.market_cap_change_24h) === true
                }
              >
                {data?.quotes.USD.market_cap_change_24h} $
              </RedBlue>
            </div>
          </CircleDiv>
          <CircleDiv>
            <div>
              <span>Change 1hour %</span>
            </div>
            <div>
              <RedBlue
                isActive={check(data?.quotes.USD.percent_change_1h) === true}
              >
                {data?.quotes.USD.percent_change_1h} %
              </RedBlue>
            </div>
          </CircleDiv>
          <CircleDiv>
            <div>
              <span>Change 6hour %</span>
            </div>
            <div>
              <RedBlue
                isActive={check(data?.quotes.USD.percent_change_6h) === true}
              >
                {data?.quotes.USD.percent_change_6h} %
              </RedBlue>
            </div>
          </CircleDiv>
          <CircleDiv>
            <div>
              <span>Change 24hour %</span>
            </div>
            <div>
              <RedBlue
                isActive={check(data?.quotes.USD.percent_change_24h) === true}
              >
                {data?.quotes.USD.percent_change_24h} %
              </RedBlue>
            </div>
          </CircleDiv>
        </>
      )}
    </Container>
  );
}

export default Price;
