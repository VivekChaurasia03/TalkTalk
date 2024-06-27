import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
} from "chart.js";
import { orange, purple, purpleLight, orangeLight } from "../constants/color";
import { getLast7Days } from "../../lib/Features";

ChartJS.register(
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend
);

const labels = getLast7Days();

const lineChartOption = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    },
};

const LineChart = ({ value = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                label: "Messages",
                data: value,
                fill: false,
                backgroundColor: purpleLight,
                borderColor: purple,
            },
        ],
    };

    return <Line data={data} options={lineChartOption} />;
};

const doughnutChartOption = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                label: "Total Chats V/s Group Chats",
                data: value,
                backgroundColor: [purple, orange],
                borderColor: [purpleLight, orangeLight],
                offset: 50,
            },
        ],
    };

    return (
        <Doughnut
            style={{ zIndex: 10 }}
            data={data}
            options={doughnutChartOption}
        />
    );
};

export { LineChart, DoughnutChart };
