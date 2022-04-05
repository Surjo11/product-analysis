import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 104010,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 245000,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 670100,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 454050,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 509000,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 810000,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-10 h-screen">
      <div>
        <h1 className="text-center lg:text-3xl font-semibold text-purple-500">
          Investment <span className="text-sky-600"> VS </span>
          <span className="text-green-500">Revenue</span>
        </h1>
        <ResponsiveContainer width="90%" height={300}>
          <AreaChart
            // width={850}
            // height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h1 className="text-center lg:text-3xl font-semibold text-purple-500">
          Month Wise Sell
        </h1>
        <ResponsiveContainer width="90%" height={300}>
          <LineChart
            // width={850}
            // height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
