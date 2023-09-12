<template>
  <div>
    <div class="service-section">
      <div class="py-5 container">
        <div>
          <div class="text-center">
            <h4 style="color: #393e46" class="fw-bold m-0" @click="changeLanguage">
              SERVISES
            </h4>
            <div class="fs-6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-10">
              <div class="row mt-5">
                <section v-for="service in services" class="col-12 col-md-4">
                  <div
                    style="background-color: #f2e7d5"
                    class="w-100 p-4 mb-2 card-service my-auto"
                  >
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
    <div class="py-5">
      <div>
        <div v-for="(project, index) in projects">
          <div class="" :style="{ backgroundColor: project.bgColor }">
            <div class="container position-relative">
              <div
                class="row align-items-center"
                style="
                  background-image: url('../assets/images/Background.svg');
                  background-size: cover;
                  height: 100vh;
                "
              >
                <div
                  :class="{ 'order-1 ': index % 2 != 0, 'text-light': project.textLight }"
                  class="col-12 col-md-6"
                >
                  <div class="fs-1 fw-bold">
                    {{ project.name }}
                  </div>
                  <p>
                    {{ project.desrciption }}
                  </p>
                  <div
                    class="btn px-5"
                    @click="$router.push(`/details/${project.id}`)"
                    :class="
                      project.textLight
                        ? 'btn-outline-light text-white'
                        : 'btn-outline-dark text-dark'
                    "
                    type="button"
                  >
                    View Details
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="position-relative">
                    <img
                      style="width: 100%; background-size: contain"
                      src="https://i0.wp.com/mockupline.com/wp-content/uploads/2022/10/multi-device-mockup.jpg?fit=2500%2C1667&ssl=1"
                    />
                    <div
                      class="bg-white circle-project p-3"
                      style="position: absolute; top: -40px; right: -20px"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <GeneralContactMe />
    </div>
  </div>
</template>

<script setup>
import DataEn from "../content/en.json";
import DataAr from "../content/ar.json";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = () => {
  const newLocale = locale.value === "en" ? "ar" : "en";
  locale.value = newLocale;
};
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

.circle {
  outline: 2.5px dashed#F2E7D5;
  outline-offset: -7px;
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

.card-service:hover {
  background-color: #6d9886 !important;
  outline: 2.5px solid rgb(255, 255, 255);
  outline-offset: -7px;
  transform: translateY(-18px);
  .title {
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
  .circle {
    outline: 2.5px dashed rgb(255, 255, 255);
    outline-offset: 5px !important;
    animation: 8s linear 0.4s infinite alternate mymove;
  }
}

.service-section {
  background-image: url("/assets/images/bg.svg"), url("/assets/images/bg.svg"),
    url("/assets/images/bg.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right bottom, 200px top, 100px bottom;
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
