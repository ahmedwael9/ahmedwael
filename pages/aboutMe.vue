<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="my-5">
      <div class="row gx-5 justify-content-between align-items-center">
        <div class="col-12 col-lg-7">
          <div class="fs-1 fw-bold" style="text-transform: uppercase">
            why you hire me for you next projects?
          </div>
          <div class="mt-3">
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
          <p>
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
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
                class="d-flex align-items-center justify-content-center"
                style="
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  border: 3px solid #000000;
                "
              >
                <img
                  style="cursor: pointer"
                  v-if="isPlaying"
                  @click="playAudio()"
                  src="../assets/images/stop.svg"
                />
                <img
                  v-else
                  @click="playAudio()"
                  style="cursor: pointer"
                  src="../assets/images/play.svg"
                />
              </div>
            </div>
            <div class="col">
              <div id="waveform"></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div
            v-for="(item, index) in eduucations"
            @click="isActive = index"
            class="p-2 p-md-4 my-2 d-flex justify-content-center"
            style="
              transition: all 0.3s;
              border: 3px solid #e5e7eb38;
              background-color: #f2e7d5;
              height: 110px;
              flex-direction: column;
              cursor: pointer;
              overflow: hidden;
            "
            :style="isActive == index ? 'height:200px' : ''"
          >
            <div
              style="text-transform: uppercase"
              class="fw-bold d-flex align-items-center"
            >
              <div>
                <img src="../assets/images/cap.svg" />
              </div>
              <div class="px-2">
                {{ item.title }}
              </div>
            </div>
            <p
              :data-aos="'fade-right'"
              v-if="isActive == index"
              style="transition: all 0.8s"
              class="py-2"
            >
              {{ item.des }}
            </p>
          </div>
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
    <div class="py-5">
      <div class="pb-3">
        <h4 class="fw-bold m-0" style="text-transform: uppercase">
          {{ $t("contactMe") }}
        </h4>
        <p class="fs-6">
          {{ $t("lorem") }}
        </p>
      </div>
      <div class="mt-3">
        <div class="row">
          <div v-for="n in 3" class="col-12 col-md-6 col-lg-4 mb-2">
            <div
              style="background-color: #f2e7d5"
              class="d-flex justify-content-between p-4"
            >
              <div>
                <div class="fw-bold">FIFASOFT COMPANY</div>
                <p>Nov/2022 - Present</p>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="p-3 bg-white"
                style="border-radius: 50%; display: inline-block"
              >
                <img style="cursor: pointer" src="../assets/images/arrow.svg" />
              </div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <div class="fw-bold">FIFASOFT COMPANY</div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <ul style="list-style: upper-roman; list-style-position: outside">
                        <li v-for="n in 3">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                            soluta laboriosam voluptatibus cupiditate. Autem tempora eos
                            ratione illo in nul
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 100vh" class="wrapper">
      <div
        class="one bg-image"
        style="background-image: url('/images/index/9.png')"
      ></div>
      <div
        style="background-image: url('/images/index/2385.png')"
        class="two bg-image"
      ></div>
      <div
        style="background-image: url('/images/index/9.png')"
        class="three bg-image"
      ></div>
      <div
        style="background-image: url('/images/index/2385.png')"
        class="four bg-image"
      ></div>
      <div
        style="background-image: url('/images/index/mokup.png')"
        class="five bg-image"
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
import AOS from "aos";

onMounted(() => {
  AOS.init({
    once: true,
    mirror: false,
    offset: 250,
    duration: 600,
  });
});

const { locale } = useI18n();
const wavesurfer = ref();
const isPlaying = ref(false);
const openDialog = ref(false);
const isActive = ref(0);

const eduucations = ref([
  {
    title: "Unversity of petra",
    icon: "cap",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
  {
    title: "android studio (step by step)",
    icon: "book",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Tahaluf Al Emarat Technical Solutions (training)",
    icon: "book",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
]);

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

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 2;
  grid-row: 1/2;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3/5;
}
.five {
  grid-column: 2;
  grid-row: 3/5;
}
.bg-image {
  background-size: cover;
  background-position: center;
}
</style>
