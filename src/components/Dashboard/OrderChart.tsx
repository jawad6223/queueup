'use client'

import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const weeklyData = [
  { name: 'Mon', orders: 45 },
  { name: 'Tue', orders: 52 },
  { name: 'Wed', orders: 38 },
  { name: 'Thu', orders: 67 },
  { name: 'Fri', orders: 85 },
  { name: 'Sat', orders: 92 },
  { name: 'Sun', orders: 76 }
]

const monthlyData = weeklyData
const threeMonthsData = weeklyData
const yearlyData = weeklyData

const OrderChart: React.FC = () => {
  const [range, setRange] = useState('Last 7 days')

  const getData = () => {
    switch (range) {
      case 'Last 30 days':
        return monthlyData
      case 'Last 3 months':
        return threeMonthsData
      case 'Last year':
        return yearlyData
      default:
        return weeklyData
    }
  }

  const categories = getData().map((d) => d.name)
  const data = getData().map((d) => d.orders)

  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#3D3D3F',
      style: { fontFamily: 'inherit' },
    },
    title: {
      text: undefined
    },
    xAxis: {
      categories: categories,
      labels: { style: { color: '#aaa' } },
      lineColor: '#52525B',
      tickColor: '#52525B'
    },
    yAxis: {
      title: { text: 'Orders', style: { color: '#aaa' } },
      gridLineColor: '#52525B',
      labels: { style: { color: '#aaa' } }
    },
    tooltip: {
      backgroundColor: '#28282D',
      borderColor: '#52525B',
      style: { color: '#fff' }
    },
    series: [
      {
        name: 'Orders',
        type: 'line',
        data: data,
        color: '#4ade80',
        marker: {
          radius: 4,
          lineWidth: 2,
          lineColor: '#4ade80',
          fillColor: '#2d2d2d'
        }
      }
    ],
    credits: { enabled: false },
    legend: { enabled: false }
  }

  return (
    <div className="bg-[#3D3D3F] border border-[#52525B] text-white p-6 rounded-xl w-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold">Orders Over Time</h3>
          <p className="text-sm text-gray-400">View order trends over time</p>
        </div>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="text-sm bg-[#52525B] px-3 py-1 rounded text-gray-200 outline-none cursor-pointer"
        >
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default OrderChart;