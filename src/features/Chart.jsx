/* eslint-disable no-unused-vars */
import style from "./Chart.module.scss";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  Area,
  Dot,
} from "recharts";
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
          top: 50,
          right: 30,
        }}
      >
        <Area
          type="monotone"
          dataKey="uv"
          strokeWidth={3.12}
          stroke="#fa9c21"
          fill="rgba(250, 156, 33, 0.1)"
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
