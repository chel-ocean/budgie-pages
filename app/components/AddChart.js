"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// const AddChart = ({transactions}) => {
const AddChart = () => {
    const options = {}
    const data = {}
    return (
        <div>
            <div className="flex content-center justify-center">
                <div className="flex content-center justify-center">
                    {/* <Line
                        data = {{
                            // should map transaction months
                            labels: ["A", "B", "C", "D"],
                            datasets: [
                                {
                                    label: "Amount Spent",
                                    // should map transaction amounts per month
                                    data: [12, 19, 3, 5],
                                    backgroundColor: "#4EB179",
                                    borderColor: "#4EB179",
                                    borderWidth: 5,
                                },
                            ],
                        }}
                    /> */}

                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
}

export default AddChart;