import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export const data = {
  labels: ["room", "hotel", "food", "service", "rest room", "pool"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['room', 'hotel', 'food', 'service', 'rest room', 'pool'];

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};
const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data2 = {
  labels2,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Bieudo() {
  return (
    <div style={{ display: "flex" ,"flex-wrap": "wrap", "margin": "10px" }}>
      <div style={{ width: 300 }}>
        <Pie
          data={data}
          width={300}
          height={300}
          options={{ 
            plugins: {
              title: {
                display: true,
                text: 'Positive'
              }
            }
          }}
        />
        Chart 
      </div>
      <div style={{ width: 500  }}>
        <Bar
          data={data1}
          options={options}
        />
        Positive
      </div>
      <div style={{ width: 500  }}>
        <Bar
          data={data1}
          options={options}
        />
        Negative
      </div>
      <div style={{ width: 500  }}>
        <Bar
          data={data2}
          options={options}
        />
        Negative
      </div>
    </div>
  );
}

Bieudo.propTypes = {};

export default Bieudo;
