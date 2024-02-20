import style from "./Chart.module.scss";
import { ResponsiveContainer, AreaChart, Area, Dot, Tooltip } from "recharts";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";

function Chart() {
  const { changeMarket } = useSelector((state) => state.market);
  console.log(changeMarket);
  const data = [
    { name: "Page F", uv: 18, pv: 200 },
    { name: "Page g", uv: 40, pv: 400 },
    { name: "Page h", uv: 33, pv: 300 },
    { name: "Page h", uv: 40, pv: 100 },
    { name: "Page h", uv: 33, pv: 100 },
    { name: "Page h", uv: 40, pv: 100 },
  ];

  const renderLineChart = (
    <ResponsiveContainer width="100%" height={122.97}>
      <AreaChart
        width={304.56}
        // height={168.97}
        data={data}
        margin={{
          top: 40,
          right: 30,
        }}
      >
        <Tooltip />

        <circle cx={25} cy={97} r={3.5} fill="#fa9c21" />

        <text x={40} y={100} fontWeight={600} fontSize={12.84} fill="#4c5968">
          1 BTC = {changeMarket[0]?.btcToUsd}
        </text>

        <Area
          type="monotone"
          dataKey="uv"
          strokeWidth={3.12}
          stroke="#fa9c21"
          fill="rgba(250, 156, 33, 0.1)"
          dot={(props) => (
            <Dot
              {...props}
              cx={272}
              cy={42}
              fill="#fa9c21"
              r={6}
              stroke="rgba(250, 156, 33, 0.06)"
              strokeWidth={6}
            />
          )}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
  return (
    <>
      <div className={style.chartCon}>
        <div className={style.chartHead}>
          <div className={style.headHL}>
            <GoDotFill className={style.iconL} />
            <span>Lower: ${changeMarket[0]?.lower}</span>
          </div>
          <div className={style.headHL}>
            <GoDotFill className={style.iconH} />
            <span>Higher: ${changeMarket[0]?.higher}</span>
          </div>
        </div>

        {renderLineChart}
      </div>
    </>
  );
}

export default Chart;
