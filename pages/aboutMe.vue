<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="my-5">
      <div class="row align-items-center">
        <div class="col-7">
          <div class="fs-1 fw-bold" style="text-transform: uppercase">
            why you hire me for you next projects?
          </div>
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt, quas
            dolorem officiis sequi molestiae? Voluptates, quia debitis veritatis fuga id
            dolorum recusandae esse earum dicta necessitatibus minus, excepturi dolores?
          </p>
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt, quas
            dolorem officiis sequi molestiae? Voluptates, quia debitis veritatis fuga id
            dolorum recusandae esse earum dicta necessitatibus minus, excepturi dolores?
          </p>
          <div class="row align-items-center py-3">
            <div class="col-auto">
              <div
                class="d-flex align-items-center justify-content-center"
                style="
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  border: 3px solid #000000;
                "
              >
                <img
                  v-if="isPlaying"
                  @click="playAudio()"
                  src="../assets/images/stop.svg"
                />
                <img v-else @click="playAudio()" src="../assets/images/play.svg" />
              </div>
            </div>
            <div class="col">
              <div id="waveform"></div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class=""></div>
        </div>
      </div>
    </div>
    <div class="my-4 box-container position-relative" style="overflow: hidden">
      <div class="d-flex">
        <div
          v-for="n in 10"
          class="py-3 px-5 m-2 scroll-objects"
          style="
            border: 1px solid #e5e7eb;
            border-radius: 3px;
            text-transform: uppercase;
            min-width: 200px;
          "
        >
          java script
        </div>
      </div>
      <div class="d-flex">
        <div
          v-for="n in 10"
          class="py-3 px-5 m-2 scroll-objects-bottom"
          style="
            border: 1px solid #e5e7eb;
            border-radius: 3px;
            text-transform: uppercase;
            min-width: 200px;
          "
        >
          java script
        </div>
      </div>
      <div
        class=""
        style="
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgb(0, 238, 111);
          background: radial-gradient(
            circle,
            rgba(0, 255, 119, 0) 82%,
            rgb(255, 255, 255) 100%
          );
        "
      ></div>
    </div>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import DataEn from "../content/en.json";
import DataAr from "../content/ar.json";
import "vue3-carousel/dist/carousel.css";
import WaveSurfer from "wavesurfer.js";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const wavesurfer = ref();
const isPlaying = ref(false);

onMounted(() => {
  wavesurfer.value = WaveSurfer.create({
    container: "#waveform",
    waveColor: "#6d9886",
    progressColor: "#393e46",
    barWidth: 3,
    responsive: true,
    height: 60,
    barRadius: 4,
  });
  wavesurfer.value.load("/voice.mp3");
});

const companies = ref([]);
const fetchData = async () => {
  try {
    const response = locale.value === "en" ? DataEn : DataAr;
    companies.value = response.companies;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const playAudio = async () => {
  if (wavesurfer.value.isPlaying()) {
    wavesurfer.value.pause();
    isPlaying.value = false;
  } else {
    wavesurfer.value.play();
    isPlaying.value = true;
  }
};

onMounted(() => {
  fetchData();
});

watch(
  () => locale.value,
  (value) => {
    fetchData();
  }
);
const currentSlide = ref(0);
</script>
<style lang="css">
.scroll-objects,
.scroll-objects-bottom {
  transition: 0.3s;
}
.scroll-objects-bottom {
  animation: 6s linear 0s infinite alternate movimiento;
}
.scroll-objects {
  animation: 8s linear 0s infinite alternate movimiento;
}

@keyframes movimiento {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
