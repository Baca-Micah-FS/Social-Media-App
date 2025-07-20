import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, LabelList } from "recharts";

const data = [
  { name: "Monday", uv: 70, pv: 2400, amt: 240 },
  { name: "Tuesday", uv: 90, pv: 2400, amt: 2400 },
  { name: "Wednesday", uv: 50, pv: 2400, amt: 2400 },
  { name: "Thursday", uv: 30, pv: 2400, amt: 2400 },
  { name: "Friday", uv: 10, pv: 2400, amt: 2400 },
  { name: "Saturday", uv: 44, pv: 2400, amt: 2400 },
  { name: "Sunday", uv: 70, pv: 2400, amt: 2400 },
];

const PostsPerDay = ({ postsPerDay }) => {
  return (
    <div style={styles.barStyles}>
      <article>
        <h3>{postsPerDay.chartHeader}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey="name" />
            <Bar dataKey="uv" fill="#778da9">
              <LabelList dataKey="uv" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </article>
    </div>
  );
};

export default PostsPerDay;

const styles = {
  barStyles: {
    backgroundColor: "white",
    margin: "auto",
    width: "70%",
    fontSize: "15px",
    padding: "8px",
    borderRadius: "5px",
    boxShadow: "3px 3px rgba(163, 173, 194)",
  },
};
