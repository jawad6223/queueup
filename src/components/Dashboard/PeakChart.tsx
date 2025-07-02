'use client'

import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const data = [
  { hour: '6AM', orders: 12, time: '06:00 AM' },
  { hour: '8AM', orders: 35, time: '08:00 AM' },
  { hour: '10AM', orders: 45, time: '10:00 AM' },
  { hour: '12PM', orders: 78, time: '12:00 PM' },
  { hour: '2PM', orders: 60, time: '02:00 PM' },
  { hour: '4PM', orders: 40, time: '04:00 PM' },
  { hour: '6PM', orders: 88, time: '06:00 PM' },
  { hour: '8PM', orders: 94, time: '08:00 PM' },
  { hour: '10PM', orders: 65, time: '10:00 PM' },
  { hour: '12AM', orders: 22, time: '12:00 AM' }
]

const PeakHoursChart: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev)
  }

  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: '#3D3D3F',
      style: { fontFamily: 'inherit' }
    },
    title: { text: undefined },
    xAxis: {
      categories: data.map(d => d.hour),
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
      style: { color: '#fff' },
      formatter: function () {
        const pointIndex = (this as unknown as { point: { index: number }; y: number }).point.index;
        const pointData = data[pointIndex];
        return `<b><span style=\"color:#4ade80\">Time:</span></b> ${pointData.time}<br/><b>Orders:</b> ${this.y}`;
      }
    },
    series: [
      {
        name: 'Orders',
        type: 'column',
        data: data.map(d => d.orders),
        color: '#ED3846',
        borderRadius: 4
      }
    ],
    credits: { enabled: false },
    legend: { enabled: false }
  }

  return (
    <div
      className={`text-white rounded-2xl w-full overflow-auto transition-all duration-300 [background:linear-gradient(45deg,#1a1a1a,theme(colors.slate.800)_50%,#1a1a1a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.red.500)_86%,_theme(colors.red.300)_90%,_theme(colors.red.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border ${isFullscreen ? 'fixed inset-0 z-50 p-6 flex flex-col justify-center' : ''
        }`}
    >
      <div className="bg-[#3D3D3F] p-6 border border-[#52525B]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">Peak Hours</h3>
            <p className="text-sm text-gray-400">
              Orders by hour throughout the day – see when we&apos;re busiest
            </p>
          </div>
          <button
            onClick={toggleFullscreen}
            className="text-sm bg-[#EF4444] px-3 py-1 rounded text-white cursor-pointer"
          >
            {isFullscreen ? 'Collapse' : 'Expand'}
          </button>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  )
}

export default PeakHoursChart;
