'use client'

import React, { useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts'

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

    return (
        <div className="bg-[#3D3D3F] border border-[#52525B] text-white p-6 rounded-xl w-full overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-semibold">Orders Over Time</h3>
                    <p className="text-sm text-gray-400">Daily orders for the past week</p>
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

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={getData()}>
                    <CartesianGrid vertical={false} horizontal stroke="#52525B" />
                    <XAxis dataKey="name" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="orders"
                        stroke="#4ade80"
                        strokeWidth={2}
                        dot={{ r: 4, stroke: '#4ade80', strokeWidth: 2, fill: '#2d2d2d' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default OrderChart;