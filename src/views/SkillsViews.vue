<template>
  <div class="w-1/2">
    <h1 class="font-Avocados text-4xl text-primary text-center">Skills</h1>
    <div>
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  methods: {
    skillsGraphMaker() {
      const labels = [
        "HTML",
        "CSS",
        "Vanilla Javascript",
        "Vue.js",
        "TailwindCSS",
        "Chart.js",
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Skills(0-10)",
            data: ["8", "8", "7", "7", "8", "4"],
            backgroundColor: [
              "rgba(228 , 77,37, 0.4)",
              "rgba(51 ,169, 219, 0.4)",
              "rgba(253 ,217, 61, 0.4)",
              "rgba(63,185,1132, 0.4)",
              "rgba(73,171, 180, 0.4)",
              "rgba(254,119, 123, 0.4)",
            ],
            hoverBackgroundColor: [
              "rgba(228 , 77,37, 0.8)",
              "rgba(51 ,169, 219, 0.8)",
              "rgba(253 ,217, 61, 0.8)",
              "rgba(63,185,1132, 0.8)",
              "rgba(73,171, 180, 0.8)",
              "rgba(254,119, 123, 0.8)",
            ],
            borderWidth: 1,
          },
        ],
      };
      const config = {
        type: "bar",
        data: data,
        options: {
          barPercentage: 0.2,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawOnChartArea: false,
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: "white",
                font: {
                  family: "Avocados",
                  size: 18,
                },
              },
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
              },
            },
          },
        },
      };
      const myChart = new Chart(document.getElementById("canvas"), config);
      myChart;
    },
  },
  mounted() {
    this.skillsGraphMaker();
  },
};
</script>

<style>
</style>