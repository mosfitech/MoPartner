import { useState, useEffect } from 'react';
import Dashboard from '../layouts/dashboard';
import { useTranslation } from 'react-i18next';
import Card from '../components/core/Card';
import 'chart.js/auto';
import { Doughnut, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#59ddaa',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#fe3a82',
        },
    ],
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export default function About() {


    const doughnutOptions = {
        data: {
            datasets: [
                {
                    data: [11, 39, 50],
                    /**
                     * These colors come from Tailwind CSS palette
                     * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                     */
                    backgroundColor: ['#59ddaa', '#9c64f2', '#fe3a82'],
                    label: 'Dataset 1',
                },
            ],
            labels: ['Shoes', 'Shirts', 'Bags'],
        },
        options: {
            responsive: true,
            cutoutPercentage: 80,
        },
        legend: {
            display: false,
        },
    }




    return (
        <Dashboard >
            <div className="flex items-center justify-center w-full h-full ">

                <section className="w-full p-4 space-y-4 ">
                    <div className="flex flex-wrap w-full space-x-4 space-y-4 text-slate-500 dark:text-slate-300 rtl:space-x-reverse ">
                        <Card className='flex-1 first:mt-4 first:ml-4'>
                            <div className='flex items-center h-32 space-x-4 rtl:space-x-reverse'>
                                <div className='flex items-center justify-center p-2 bg-green-300 rounded-full w-14 h-14'>
                                    <span i="carbon-money" className='text-2xl text-green-700'></span>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-4xl font-black'>
                                        5
                                    </h1>
                                    <span className='text-xs '>
                                        Transaction / day
                                    </span>
                                </div>
                            </div>

                        </Card>
                        <Card className='flex-1'>
                            <div className='flex items-center justify-center h-32 space-x-4 rtl:space-x-reverse min-w-max'>
                                <div className='flex items-center justify-center p-2 rounded-full w-14 h-14 bg-primary-100'>
                                    <span i="carbon-bicycle" className='text-2xl text-primary-500'></span>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-4xl font-black'>
                                        30
                                    </h1>
                                    <span className='text-xs '>
                                        Total Vehicle
                                    </span>
                                </div>
                            </div>

                        </Card>
                        <Card className='flex-1'>
                            <div className='flex items-center justify-center h-32 space-x-4 rtl:space-x-reverse min-w-max'>
                                <div className='flex items-center justify-center p-2 bg-yellow-200 rounded-full w-14 h-14'>
                                    <span i="carbon-locked" className='text-2xl text-yellow-500'></span>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-4xl font-black'>
                                        12
                                    </h1>
                                    <span className='text-xs '>
                                        Ready to rental 
                                    </span>
                                </div>
                            </div>

                        </Card>
                        <Card className='flex-1'>
                            <div className='flex items-center justify-center h-32 space-x-4 rtl:space-x-reverse min-w-max'>
                                <div className='flex items-center justify-center p-2 bg-pink-200 rounded-full w-14 h-14'>
                                    <span i="carbon-unlocked" className='text-2xl text-pink-500'></span>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-4xl font-black'>
                                        18
                                    </h1>
                                    <span className='text-xs '>
                                       On going rental
                                    </span>
                                </div>
                            </div>

                        </Card>

                    </div>

                    <div className='flex flex-col w-full space-x-4 space-y-4 rtl:pl-1 md:flex-row charts rtl:space-x-reverse'>

                        <Card className='flex items-center md:w-4/12 first:mt-4 first:ml-4'>
                            <Doughnut {...doughnutOptions} />
                        </Card>
                        <Card className='md:w-8/12'>
                            <Bar options={options} data={data} />
                        </Card>
                    </div>
                </section>
            </div>
        </Dashboard>
    );
}

