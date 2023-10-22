<template>
  <div>
    <div class="py-5 service-section">
      <div class="py-5 container">
        <div>
          <div class="text-center">
            <h4 style="text-transform: uppercase" class="fw-bold m-0">
              {{ $t("service") }}
            </h4>
            <p class="fs-6">
              {{ $t("lorem") }}
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-10">
              <div class="row mt-5">
                <section v-for="service in services" class="col-12 col-md-4">
                  <div class="w-100 p-4 mb-2 card-service my-auto">
                    <div class="mb-3" style="display: inline-block">
                      <div
                        class="bg-white circle p-3"
                        style="
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        "
                      >
                        <div v-html="service.icon" class=""></div>
                      </div>
                    </div>
                    <div class="title fw-bold fs-4">{{ service.name }}</div>
                    <p class="mt-2 max-lines">{{ service.desrciption }}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5">
      <div class="container">
        <div
          v-for="(project, index) in projects"
          class="mb-4 aos-example"
          :data-aos="index % 2 != 0 ? 'fade-right' : 'fade-left'"
          :style="{ backgroundColor: project.bgColor }"
        >
          <div class="row m-0 align-items-center">
            <div
              style="overflow: hidden"
              :class="{
                'order-1 ': index % 2 != 0,
                'text-light': project.textLight,
                'text-dark': !project.textLight,
              }"
              class="col-12 col-md-6 p-0 p-5"
            >
              <div
                data-aos-duration="1500"
                :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
                class="fs-1 fw-bold"
                :class="{}"
              >
                {{ project.name }}
              </div>
              <p
                data-aos-duration="1750"
                :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
              >
                {{ project.desrciption }}
              </p>
              <div
                data-aos-duration="2000"
                :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
                class="btn px-5"
                @click="$router.push(`/details/${project.id}`)"
                :class="
                  project.textLight
                    ? 'btn-outline-light text-white'
                    : 'btn-outline-dark text-dark'
                "
                type="button"
              >
                {{ $t("viewDetails") }}
              </div>
            </div>
            <div class="col-12 col-md-6 p-0">
              <div style="overflow: hidden">
                <div
                  class="img-product"
                  style="
                    height: 400px;
                    background-position: center;
                    background-size: cover;
                    width: 100%;
                  "
                  :style="{
                    backgroundImage: 'url(' + project?.mainImage + ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5">
      <GeneralContactMe />
    </div>
  </div>
</template>

<script setup>
import DataEn from "../content/en.json";
import DataAr from "../content/ar.json";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

onMounted(() => {
  AOS.init({
    offset: 250, // Offset (in pixels) from the top of the page to trigger animations
    duration: 1000, // Duration (in milliseconds) of the animation
  });
});

const projects = ref([]);
const services = ref([]);
const fetchData = async () => {
  try {
    const response = locale.value === "en" ? DataEn : DataAr;
    projects.value = response.projects;
    services.value = response.services;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

watch(
  () => locale.value,
  (value) => {
    fetchData();
  }
);

onMounted(() => {
  fetchData();
});
</script>
<style lang="scss">
.img-product {
  transition: 0.3s;
}
.img-product:hover {
  transform: scale(1.1);
}
.front,
.back {
  position: absolute;
  top: 0;
  height: 300px;
  background-color: rgba(250, 235, 215, 0.707);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.234), rgba(0, 0, 0, 0.234)),
    url("https://i.etsystatic.com/21883908/r/il/931015/2879552350/il_fullxfull.2879552350_3zkw.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.max-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-service {
  outline: 0px solid rgb(255, 255, 255);
  transition: 0.3s;
}

.circle-project {
  outline: 2.5px dashed rgb(255, 255, 255);
  outline-offset: 7px;
}
.circle,
.circle-project {
  transition: 0.3s;
  border-radius: 50%;
  height: 70px;
  width: 70px;
}

.circle-project {
  animation: 8s linear 0s infinite alternate mymove;
}

.service-section {
  background-image: url("/assets/images/bg.svg"), url("/assets/images/bg.svg"),
    url("/assets/images/bg.svg");
  //   background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right bottom, 200px top, 100px bottom;
  animation: animatedBackground 10s linear infinite alternate;
}
@keyframes animatedBackground {
  from {
    background-position: right bottom, 200px top, 100px bottom;
  }
  to {
    background-position: 1200px bottom, -50px top, 100px 300px;
  }
}

@keyframes mymove {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
