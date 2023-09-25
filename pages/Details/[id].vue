<template>
  <div class="">
    <div class="fullscreen-overlay" v-if="isFullScreen">
      <div class="fullscreen-image-container position-relative">
        <div
          class="position-absolute"
          style="top: 50%; right: 10%; transform: translateY(-50%)"
        >
          <div class="p-3 bg-dark" style="border-radius: 50%; border: 2px solid #ffffff">
            <img
              @click="downloadImage(imageUrl)"
              src="../../assets/images/download.svg"
            />
          </div>
          <div
            class="p-3 mt-2 bg-dark"
            style="border-radius: 50%; border: 2px solid #ffffff"
          >
            <img @click="closeFullScreen" src="../../assets/images/unZoom.svg" />
          </div>
        </div>
        <div
          class=""
          style="
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
          "
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        ></div>
      </div>
    </div>
    <div class="pb-4">
      <carousel
        :dir="locale === 'en' ? 'ltr' : 'rtl'"
        :autoplay="3000"
        :wrap-around="true"
        :items-to-show="1"
      >
        <slide v-for="slide in project?.slider" :key="slide">
          <div
            class="d-flex align-items-center justify-content-center p-none p-my-5"
            style="
              min-height: 440px;
              background-position: center;
              background-size: cover;
              width: 100%;
            "
            :style="{
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.389), rgba(0, 0, 0, 0.389)), url(' +
                slide?.url +
                ')',
            }"
          >
            <div class="container" style="text-align: start">
              <div class="text-white">
                <h1 class="fw-bold w-75" style="text-transform: uppercase">
                  {{ slide.title }}
                </h1>
                <div class="" style="text-align: justify">
                  {{ slide?.desrciption }}
                  {{ slide?.desrciption }}
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
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
          <p class="">
            {{ project?.desrciption }}
          </p>
        </div>
        <div class="col-12 col-md-5 py-2">
          <img style="width: 100%; background-size: contain" :src="project?.mainImage" />
        </div>
      </div>
      <div class="py-5 proparity-section" style="border-radius: 6px">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-md-5">
            <div class="text-center" style="width: 100%; height: 400px">
              <canvas id="myChart"></canvas>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <ul>
              <li v-for="language in project?.languages" class="mb-3">
                <div class="fw-bold fs-5" style="text-transform: uppercase">
                  {{ language.name }}
                </div>
                <p>
                  {{ language.desrciption }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row py-5 justify-content-between align-items-center h-100">
        <div v-for="img in project?.images" class="image col-12 col-md-4 py-1">
          <div
            style="
              overflow: hidden;
              width: 100%;
              min-height: 360px;
              background-size: cover;
              background-position: center;
              display: flex;
              flex-direction: row-reverse;
            "
            class="sub-image"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          >
            <div class="label d-flex align-items-center m-0 p-0">
              <img @click="openFullScreen(img)" src="../../assets/images/zoom.svg" />
              <img @click="downloadImage(img)" src="../../assets/images/download.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Chart from "chart.js/auto";
import DataEn from "../content/en.json";
import DataAr from "../content/ar.json";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const route = useRoute();

const isFullScreen = ref(false);
const imageUrl = ref("");

const openFullScreen = (img) => {
  imageUrl.value = img;
  isFullScreen.value = true;
};
const closeFullScreen = () => {
  isFullScreen.value = false;
};

const project = ref([]);
const fetchData = async () => {
  try {
    const response = locale.value === "en" ? DataEn : DataAr;
    project.value = response.projects.find((x) => x.id == route.params.id);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const downloadImage = (image) => {
  const imageUrl = image;
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = `${image}`;
  link.target = "_blank";
  // document.body.appendChild(link);
  link.click();
  // document.body.removeChild(link);
};

onMounted(() => {
  fetchData();
  let dataRatio = [];
  let labeldata = [];
  if (project.value.languages && Array.isArray(project?.value.languages)) {
    dataRatio = project.value.languages.map((language) => language.ratio);
    labeldata = project.value.languages.map((language) => language.name);
  }

  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labeldata,
      datasets: [
        {
          label: "# of Votes",
          data: dataRatio,
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
    if (locale.value) {
      fetchData();
    }
  }
);
</script>
<style lang="scss">
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Styles for the full-screen image container */
.fullscreen-image-container {
  padding: 2rem;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styles for the full-screen image */
.fullscreen-image {
  max-width: 70%;
  cursor: pointer;
}

/* Styles for the button (you can customize it) */
.label {
  transition: 0.5s ease-in-out;
  height: 100px;
  width: 40px;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #6d9886;
  border-bottom-left-radius: 10px;
  transform: translate(40px, 0px);
}

.shadow {
}

/* Use + instead of ~ to select the direct sibling */
.sub-image:hover .label {
  transform: translate(0px, 0px) !important;
}

.half-a-border-on-bottom {
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #f2e7d5 50%, transparent 50%) 100% 1;
}

.proparity-section {
  background-image: url("/assets/images/bgCorner.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left top;
}

.details-section {
  background-image: url("/assets/images/bg.svg"), url("/assets/images/bg.svg"),
    url("/assets/images/bg.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right bottom, 200px top, 650px 200px;
}

.carousel__pagination-button {
  width: 50px;
  height: 20px;
  border-radius: 12px;
}
.carousel__pagination-button::after {
  display: block;
  content: "";
  width: auto !important;
  height: var(--vc-pgn-height);
  border-radius: 20px;
  background-color: #f2e7d5;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #6d9886;
}

.proparity-section {
  background-image: url("/assets/images/bgCorner.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left top;
}
</style>
