'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  TooltipProps
} from 'recharts'

const data = [
  { hour: '6AM', orders: 12 },
  { hour: '8AM', orders: 35 },
  { hour: '10AM', orders: 45 },
  { hour: '12PM', orders: 78 },
  { hour: '2PM', orders: 60 },
  { hour: '4PM', orders: 40 },
  { hour: '6PM', orders: 88 },
  { hour: '8PM', orders: 94 },
  { hour: '10PM', orders: 65 },
  { hour: '12AM', orders: 22 }
]

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#3D3D3F] border border-[#52525B] rounded p-2 text-sm">
        <p className="text-green-500">Time: {payload[0].payload.hour}</p>
        <p className="text-white">Orders: {payload[0].value}</p>
      </div>
    )
  }
  return null
}

const PeakHoursChart: React.FC = () => {
  return (
    <div className="bg-[#3D3D3F] border border-[#52525B] text-white p-6 rounded-xl w-full mt-5">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Peak Hours</h3>
        <p className="text-sm text-gray-400">
          Orders by hour throughout the day – see when we&apos;re busiest
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} horizontal stroke="#52525B" />
          <XAxis dataKey="hour" stroke="#aaa" />
          <YAxis stroke="#aaa" /> 
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="orders" fill="#ED3846" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PeakHoursChart;