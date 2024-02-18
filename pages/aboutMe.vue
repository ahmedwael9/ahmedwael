<template>
  <div class="about-section">
    <div class="container pb-5" style="min-height: 100vh">
      <div class="my-5 "> 
        <div class="row gx-5 justify-content-between align-items-center">
          <div class="col-12 col-lg-7">
            <div class="fs-1 fw-bold" style="text-transform: uppercase">
              {{ $t("aboutMeTitle") }}
            </div>
            <div class="mt-2">
              <img src="../assets/images/qoma.svg" />
            </div>
            <p>
              <span v-for="n in 4">{{ $t("lorem") }}</span>
            </p>
            <p class="mt-3">
              <span v-for="n in 4">{{ $t("lorem") }}</span>
            </p>
            <div class="row align-items-center py-3">
              <div class="col-auto voive-btn">
                <button class="button">
                  <div
                    style="cursor: pointer"
                    v-if="isPlaying"
                    @click="playAudio()"
                    src="../assets/images/stop.svg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.948 1.25H6.052C6.95048 1.24997 7.6997 1.24995 8.29448 1.32991C8.92228 1.41432 9.48908 1.59999 9.94455 2.05546C10.4 2.51093 10.5857 3.07773 10.6701 3.70552C10.7501 4.30031 10.75 5.04953 10.75 5.94801V18.052C10.75 18.9505 10.7501 19.6997 10.6701 20.2945C10.5857 20.9223 10.4 21.4891 9.94455 21.9445C9.48908 22.4 8.92228 22.5857 8.29448 22.6701C7.6997 22.7501 6.95048 22.75 6.052 22.75H5.94801C5.04953 22.75 4.30031 22.7501 3.70552 22.6701C3.07773 22.5857 2.51093 22.4 2.05546 21.9445C1.59999 21.4891 1.41432 20.9223 1.32991 20.2945C1.24995 19.6997 1.24997 18.9505 1.25 18.052V5.948C1.24997 5.04952 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04952 1.24997 5.948 1.25ZM3.90539 2.81654C3.44393 2.87858 3.24644 2.9858 3.11612 3.11612C2.9858 3.24644 2.87858 3.44393 2.81654 3.90539C2.7516 4.38843 2.75 5.03599 2.75 6V18C2.75 18.964 2.7516 19.6116 2.81654 20.0946C2.87858 20.5561 2.9858 20.7536 3.11612 20.8839C3.24644 21.0142 3.44393 21.1214 3.90539 21.1835C4.38843 21.2484 5.03599 21.25 6 21.25C6.96401 21.25 7.61157 21.2484 8.09461 21.1835C8.55607 21.1214 8.75357 21.0142 8.88389 20.8839C9.0142 20.7536 9.12143 20.5561 9.18347 20.0946C9.24841 19.6116 9.25 18.964 9.25 18V6C9.25 5.03599 9.24841 4.38843 9.18347 3.90539C9.12143 3.44393 9.0142 3.24644 8.88389 3.11612C8.75357 2.9858 8.55607 2.87858 8.09461 2.81654C7.61157 2.7516 6.96401 2.75 6 2.75C5.03599 2.75 4.38843 2.7516 3.90539 2.81654ZM17.948 1.25H18.052C18.9505 1.24997 19.6997 1.24995 20.2945 1.32991C20.9223 1.41432 21.4891 1.59999 21.9445 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70552C22.7501 4.30031 22.75 5.04953 22.75 5.94801V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V5.94801C13.25 5.04953 13.2499 4.30031 13.3299 3.70552C13.4143 3.07773 13.6 2.51093 14.0555 2.05546C14.5109 1.59999 15.0777 1.41432 15.7055 1.32991C16.3003 1.24995 17.0495 1.24997 17.948 1.25ZM15.9054 2.81654C15.4439 2.87858 15.2464 2.9858 15.1161 3.11612C14.9858 3.24644 14.8786 3.44393 14.8165 3.90539C14.7516 4.38843 14.75 5.03599 14.75 6V18C14.75 18.964 14.7516 19.6116 14.8165 20.0946C14.8786 20.5561 14.9858 20.7536 15.1161 20.8839C15.2464 21.0142 15.4439 21.1214 15.9054 21.1835C16.3884 21.2484 17.036 21.25 18 21.25C18.964 21.25 19.6116 21.2484 20.0946 21.1835C20.5561 21.1214 20.7536 21.0142 20.8839 20.8839C21.0142 20.7536 21.1214 20.5561 21.1835 20.0946C21.2484 19.6116 21.25 18.964 21.25 18V6C21.25 5.03599 21.2484 4.38843 21.1835 3.90539C21.1214 3.44393 21.0142 3.24644 20.8839 3.11612C20.7536 2.9858 20.5561 2.87858 20.0946 2.81654C19.6116 2.7516 18.964 2.75 18 2.75C17.036 2.75 16.3884 2.7516 15.9054 2.81654Z"
                        :fill="!store.isDark ? '#2a2a2a' : '#ffffff'"
                      />
                    </svg>
                  </div>
                  <div v-else style="cursor: pointer" @click="playAudio()" class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z"
                        :fill="!store.isDark ? '#2a2a2a' : '#ffffff'"
                      />
                    </svg>
                  </div>
              </button>
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
              class="p-5 p-md-4 my-2 d-flex justify-content-center"
              style="
                transition: all 0.3s;
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
                  <img :src="item.icon" />
                </div>
                <div class="px-4 text-dark">
                  {{ item.title }}
                </div>
              </div>
              <p
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
      <!-- ----------------------------------------- -->
      <div class="my-4 box-container position-relative" style="overflow: hidden">
        <div class="d-flex scroll-objects">
          <div
            v-for="subject in subjects"
            class="py-3 px-5 m-2 text-center"
            style="
              border: 1px solid #e5e7eb;
              border-radius: 3px;
              text-transform: uppercase;
              min-width: 200px;
            "
          >
            {{ subject.sub1 }}
          </div>
          <div class="d-flex position-absolute" style="transform: translateX(100%)">
            <div
              v-for="subject in subjects"
              class="py-3 px-5 m-2 text-center"
              style="
                border: 1px solid #e5e7eb;
                border-radius: 3px;
                text-transform: uppercase;
                min-width: 200px;
              "
            >
              {{ subject.sub1 }}
            </div>
          </div>
        </div>
        <!-- ---------------------------------- -->
        <div class="d-flex scroll-objects-bottom">
          <div
            v-for="subject in subjects"
            class="py-3 px-5 m-2 text-center"
            style="
              border: 1px solid #e5e7eb;
              border-radius: 3px;
              text-transform: uppercase;
              min-width: 200px;
            "
          >
            {{ subject.sub2 }}
          </div>
          <div class="d-flex position-absolute" style="transform: translateX(100%)">
            <div
              v-for="subject in subjects"
              class="py-3 px-5 m-2 text-center"
              style="
                border: 1px solid #e5e7eb;
                border-radius: 3px;
                text-transform: uppercase;
                min-width: 200px;
              "
            >
              {{ subject.sub2 }}
            </div>
          </div>
        </div>
        <div
          class=""
          :style="
            !store.isDark
              ? 'background: rgb(0, 238, 111);background: radial-gradient(circle,rgba(0, 255, 119, 0) 82%,rgb(255, 255, 255) 100%);'
              : ''
          "
          style="position: absolute; top: 0; left: 0; bottom: 0; right: 0"
        ></div>
      </div>
      <div class="py-5">
        <div class="pb-3">
          <h4 class="fw-bold m-0" style="text-transform: uppercase">
            {{ $t("workExperience") }}
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
                  <div class="fw-bold text-dark">FIFASOFT COMPANY</div>
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
                          <li>
                            <p>
                              Oversee the entire lifecycle of website development projects, ensuring seamless progression from initial design to completion while enhancing cross-browser and cross-platform compatibility. Collaborate closely with programmers and clients to fulfill project requirements, meet objectives, and achieve the desired functionality.
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
      <div style="height: 100vh; position: sticky; top: 0" class="wrapper">
        <div
          v-for="picture in pictures"
          :class="picture.class"
          class="one bg-image"
          style="background-image: url('/images/index/9.png')"
        ></div>
      </div>
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
import { useCounterStore } from "~/store/counter";
const store = useCounterStore();

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
const isActive = ref(0);

const eduucations = ref([
  {
    title: "Unversity of petra",
    icon: "/images/index/cap.svg",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
  {
    title: "android studio (step by step)",
    icon: "/images/index/book.svg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Tahaluf Al Emarat Technical Solutions (training)",
    icon: "/images/index/company.svg",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
]);
const pictures = ref([
  {
    title: "Unversity of petra",
    class: "one",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
  {
    title: "Unversity of petra",
    class: "two",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
  {
    title: "Unversity of petra",
    class: "three",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
  {
    title: "Unversity of petra",
    class: "four",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque suscipit consequatur incidunt maxime dolore deleniti iure placeat, magni",
  },
  {
    title: "Unversity of petra",
    class: "five",
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
const subjects = ref([]);
const fetchData = async () => {
  try {
    const response = locale.value === "en" ? DataEn : DataAr;
    companies.value = response.companies;
    subjects.value = response.subjects;
    // setInterval(() => {
    //   const last = subjects.value[1];
    //   subjects.value.unshift(last);
    // }, 1000);
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
</script>
<style lang="scss">
.scroll-objects,
.scroll-objects-bottom {
  transition: 0.3s;
}
.scroll-objects-bottom {
  animation: 22s linear 0s infinite running movimiento;
}
.scroll-objects {
  animation: 25s linear 0s infinite running movimiento;
}

@keyframes movimiento {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
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
  grid-row: 1/3;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 3 / 5;
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

@media only screen and (max-width: 600px) {
  .wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1/3;
}
.two {
  grid-column: 3;
  grid-row: 3 / 3;
}
.three {
  grid-column: 1;
  grid-row: 3 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3/5;
}
.five {
  grid-column: 2;
  grid-row: 3/5;
}
}

.about-section {
  background-image: url("/assets/images/circle.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: -90px top
}


.voive-btn{
  .button {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: linear-gradient(30deg, #f2e7d5 20%, #f2e7d58c 80%);
  transition: all 0.3s ease-in-out 0s;
  box-shadow: #6d98866b 0px 0px 0px 0px;
  animation: 1.2s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running pulse;
  align-items: center;
  border: 0;
}

@keyframes pulse {
  100% {
    box-shadow: 0 0 0 15px rgba(193,244,246,0);
  }
}

}
</style>


