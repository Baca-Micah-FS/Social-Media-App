import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  LabelList,
} from "recharts";

const data = [
  { name: "12AM", uv: 7, pv: 2400, amt: 2400 },

  { name: "4AM", uv: 3, pv: 1398, amt: 2210 },

  { name: "8AM", uv: 2, pv: 9800, amt: 2290 },

  { name: "12PM", uv: 4, pv: 3908, amt: 2000 },

  { name: "4PM", uv: 6, pv: 4800, amt: 2181 },

  { name: "8PM", uv: 6, pv: 3800, amt: 2500 },
];

const PostActivityHourly = ({ postActivityHourly }) => {
  return (
    <div style={styles.postActivity}>
      <article>
        <h3>{postActivityHourly.chartHeader}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            width={300}
            height={100}
            data={data}
          >
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="uv" stroke="#778da9" strokeWidth={2}>
              <LabelList dataKey="uv" position="top" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </article>
    </div>
  );
};

export default PostActivityHourly;

const styles = {
  postActivity: {
    backgroundColor: "white",
    margin: "auto",
    width: "70%",
    fontSize: "15px",
    padding: "8px",
    borderRadius: "5px",
    boxShadow: "3px 3px rgba(163, 173, 194)",
    marginTop: "10px",
    marginBottom: "15px",
  },
};
