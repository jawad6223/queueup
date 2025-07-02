'use client'

import React from 'react'
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
    <div className="bg-[#3D3D3F] border border-[#52525B] text-white p-6 rounded-xl w-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Peak Hours</h3>
        <p className="text-sm text-gray-400">
          Orders by hour throughout the day – see when we&apos;re busiest
        </p>
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  )
}

export default PeakHoursChart;
