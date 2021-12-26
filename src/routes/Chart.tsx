import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const ApexChart = styled.div`
  width: 70%;
  margin: 0 auto;
`;

interface IChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: IChartProps) {
  const isDark = useRecoilValue(isDarkAtom); // useRecoilValue는 값을 가져오는것
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 1000,
    }
  );

  return (
    <ApexChart>
      <div>
        {isLoading ? (
          "Loading chart..."
        ) : (
          <ApexCharts
            type="candlestick"
            series={[
              {
                name: "Price",
                data: data?.map((price) => ({
                  x: price.time_close,
                  y: [
                    price.open.toFixed(2),
                    price.high.toFixed(2),
                    price.low.toFixed(2),
                    price.close.toFixed(2),
                  ],
                })),
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                width: `50%`,
                height: `50%`,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: true },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: true,
              },
              xaxis: {
                axisBorder: { show: true },
                axisTicks: { show: true },
                labels: { show: true },
                type: "datetime",
                categories: data?.map((price) => price.time_close),
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["#0be881"], stops: [0, 10] },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
            }}
          />
        )}
      </div>
    </ApexChart>
  );
}

export default Chart;
