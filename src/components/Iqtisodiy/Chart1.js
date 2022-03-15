import React, { PureComponent } from 'react';
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'

const data = [
  {
    name: '31/01',
    pv: 2400,
    amt: 2400,
  },
  {
    name: '01/02',
    pv: 3598,
    amt: 2210,
  },
  {
    name: '02/02',
    pv: 9800,
    amt: 2290,
  },
  {
    name: '03/02',
    pv: 3908,
    amt: 2000,
  },
  {
    name: '04/02',
    pv: 4800,
    amt: 2181,
  },
  {
    name: '05/02',
    pv: 3800,
    amt: 2500,
  },
  {
    name: '06/02',
    pv: 7000,
    amt: 2100,
  },
];

class Chart1 extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
export default Chart1;