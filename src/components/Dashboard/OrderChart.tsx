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

const monthlyData = [
  { name: 'Week 1', orders: 210 },
  { name: 'Week 2', orders: 320 },
  { name: 'Week 3', orders: 280 },
  { name: 'Week 4', orders: 350 }
]

const threeMonthsData = [
  { name: 'Jan', orders: 900 },
  { name: 'Feb', orders: 1100 },
  { name: 'Mar', orders: 1050 }
]

const yearlyData = [
  { name: '2021', orders: 3500 },
  { name: '2022', orders: 4200 },
  { name: '2023', orders: 4800 },
  { name: '2024', orders: 5100 }
]

const OrderChart: React.FC = () => {
  const [range, setRange] = useState('Last 7 days');
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev)
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
    <div
      className={`text-white rounded-2xl w-full overflow-auto [background:linear-gradient(45deg,#1a1a1a,theme(colors.slate.800)_50%,#1a1a1a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.red.500)_86%,_theme(colors.red.300)_90%,_theme(colors.red.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border
        }`}
    >
      <div className={`bg-[#3D3D3F] p-6 border border-[#52525B] transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 p-6 flex flex-col justify-center mx-4 my-4 rounded-lg' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">Orders Over Time</h3>
            <p className="text-sm text-gray-400">View order trends over time</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="text-sm bg-[#52525B] px-2 py-1 rounded text-gray-200 outline-none cursor-pointer"
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
            <button
              onClick={toggleFullscreen}
              className="text-sm bg-[#EF4444] px-3 py-1 rounded text-white cursor-pointer"
            >
              {isFullscreen ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default OrderChart;