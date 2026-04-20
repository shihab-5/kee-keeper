import React, { useContext } from 'react';
import { Pie, PieChart, Cell, Tooltip, Legend } from 'recharts';
import { friendContext } from '../home/context';

const COLORS = {
    Call: '#4ade80',
    Text: '#60a5fa',
    Video: '#f97316',
};

const Start = ({ isAnimationActive = true }) => {
    const { timeline } = useContext(friendContext);

    const counts = timeline.reduce((acc, item) => {
        acc[item.checkType] = (acc[item.checkType] || 0) + 1;
        return acc;
    }, {});

    const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

    if (timeline.length === 0) {
        return (
            <div className='my-10 mx-4 md:mx-8 lg:mx-36'>
                <h1 className='text-2xl md:text-4xl font-bold'>Friendship Analysis</h1>
                <h2 className='text-lg md:text-2xl text-gray-400 mt-10 text-center'>No data found</h2>
            </div>
        );
    }

    return (
        <div>
            <div className='my-10 mx-4 md:mx-8 lg:mx-36 flex flex-col gap-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Friendship Analysis</h1>
                <div className='flex justify-center bg-base-100  md:mt-24 overflow-x-auto'>
                    <div className='flex flex-col items-center'>
                        <p className='my-3 md:my-5 text-green-950 font-bold text-lg md:text-2xl'>By interaction Type</p>
                        <PieChart width={Math.min(window.innerWidth - 40, 400)} height={400}>

                        <Pie
                            data={data}
                            innerRadius="60%"
                            outerRadius="80%"
                            cornerRadius={8}
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={isAnimationActive}
                            label={({ name, value }) => `${name}: ${value}`}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[entry.name] || '#8884d8'}
                                />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name) => [value, name]} />
                        <Legend />
                    </PieChart>
                    </div>
                </div>

                {/* Summary cards below chart */}
                <div className='flex flex-wrap gap-2 md:gap-4 justify-center bg-base-100'>
                    {data.map((item, ind) => (
                        <div key={ind} className='bg-base-100 rounded-2xl px-4 md:px-6 py-3 md:py-4 text-center flex-1 min-w-[150px] md:min-w-[200px]'>
                            <p className='text-2xl md:text-3xl font-bold' style={{ color: COLORS[item.name] }}>
                                {item.value}
                            </p>
                            <p className='text-sm md:text-base text-gray-500'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Start;