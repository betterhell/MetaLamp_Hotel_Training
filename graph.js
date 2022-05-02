const labels = ["Великолепно", "Хорошо", "Удовлетворительно", "Разачарован"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Диаграмма оценок",
      backgroundColor: [
        "rgba(255, 227, 156, 1)",
        "rgba(102, 210, 234, 1)",
        "rgba(139, 164, 249, 1)",
        "rgba(61, 73, 117, 1)",
      ],
      data: [100, 40, 20, 2],
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
          color: "rgba(31, 32, 65, 0.75);",
          font: "14px",
        },
      },
      title: {
        display: true,
        text: "Впечатления от номера",
        position: "top",
        align: "start",
        color: "#1F2041",
        font: {
          size: 19,
          weight: 700,
          style: "normal",
        },
        padding: {
          bottom: 0,
          top: 20,
          left: 0,
          right: 0,
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
