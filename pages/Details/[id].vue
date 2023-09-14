<template>
  <div class="container">
    <div class="details-section row justify-content-between align-items-center py-5">
      <div class="col-12 col-md-6">
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#F2E7D5"
            width="50px"
            height="50px"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M499.8 594.3c0 77.3-68 136-139.2 136-85 0-160.8-54.1-160.8-171.6 0-137.6 117.5-255 289.2-267.4l4.6 29.4c-108.2 17-167 71.1-167 137.6 85.1-15.4 173.2 35.6 173.2 136zm324.7 0c0 77.3-68 136-139.2 136-85 0-160.8-54.1-160.8-171.6 0-137.6 117.5-255 289.2-267.4l4.6 29.4c-108.2 17-167 71.1-167 137.6 85.1-15.4 173.2 35.6 173.2 136z"
            />
          </svg>
        </div>
        <h1 class="fw-bold half-a-border-on-bottom" style="color: #6d9886">
          {{ project?.name }}
        </h1>
        <div class="">
          {{ project?.desrciption }}
        </div>
      </div>
      <div class="col-12 col-md-5 py-2">
        <img
          style="width: 100%; background-size: contain"
          src="https://i0.wp.com/mockupline.com/wp-content/uploads/2022/10/multi-device-mockup.jpg?fit=2500%2C1667&ssl=1"
        />
      </div>
    </div>
    <div class="py-5" style="background-color: #f7f7f7; border-radius: 8px">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-5">
          <div class="text-center" style="width: 100%; height: 400px">
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <ul>
            <li>
              <div class="fw-bold fs-5" style="text-transform: uppercase; color: #393e46">
                JavaScript Language
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores
              obcaecati beatae soluta! Magnam, distinctio blanditiis. Perspiciatis
            </li>
            <li class="py-2">
              <div class="fw-bold fs-5" style="text-transform: uppercase; color: #393e46">
                Html
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores
              obcaecati beatae soluta! Magnam, distinctio blanditiis. Perspiciatis
            </li>
            <li class="py-2">
              <div class="fw-bold fs-5" style="text-transform: uppercase; color: #393e46">
                scss
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores
              obcaecati beatae soluta! Magnam, distinctio blanditiis. Perspiciatis
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row py-5 justify-content-between align-items-center h-100">
      <div class="col-12 col-md-4 py-1">
        <img
          style="width: 100%; background-size: contain"
          src="https://i0.wp.com/mockupline.com/wp-content/uploads/2022/10/multi-device-mockup.jpg?fit=2500%2C1667&ssl=1"
        />
      </div>
      <div class="col-12 col-md-4 py-1">
        <img
          style="width: 100%; background-size: contain"
          src="https://i0.wp.com/mockupline.com/wp-content/uploads/2022/10/multi-device-mockup.jpg?fit=2500%2C1667&ssl=1"
        />
      </div>
      <div class="col-12 col-md-4 py-1">
        <img
          style="width: 100%; background-size: contain"
          src="https://i0.wp.com/mockupline.com/wp-content/uploads/2022/10/multi-device-mockup.jpg?fit=2500%2C1667&ssl=1"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Chart from "chart.js/auto";
import DataEn from "../content/en.json";
import DataAr from "../content/ar.json";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const route = useRoute();

const project = ref();
const fetchData = async () => {
  try {
    const response = locale.value === "en" ? DataEn : DataAr;
    project.value = response.projects.find((x) => x.id == route.params.id);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["JS", "SCSS", "VUE", "HTML"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5],
          borderWidth: 1,
          backgroundColor: ["#393e46", "#f2e7d5", "#6d9886", "#183D3D"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

watch(
  () => locale.value,
  (value) => {
    fetchData();
  }
);
</script>
<style>
.half-a-border-on-bottom {
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #f2e7d5 50%, transparent 50%) 100% 1;
}
.details-section {
  background-image: url("/assets/images/bg.svg"), url("/assets/images/bg.svg"),
    url("/assets/images/bg.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right bottom, 200px top, 650px 200px;
}
</style>
