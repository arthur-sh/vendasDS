import axios from 'axios';
import { useState } from 'react';
import Chart from 'react-apexcharts'
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sale'

type ChartData = {series: Number[], labels: String[]}

function DonutChart() {

    //let [chartData, setChartData] = useState

    let chartData: ChartData = {series: [], labels: []}

    axios.get(`${BASE_URL} + sales/amount`).then((res => {
        const data = res.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName)
        const mySeries = data.map(x => x.sum)

        chartData = {labels: myLabels, series: mySeries}
    }));

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    };
    
    const options = {
        legend: {
            show: true
        }
    };

    return (
       <Chart  options={{...options, labels: mockData.labels}} series={mockData.series} type="donut" height="240" />
    );
}

export default DonutChart;