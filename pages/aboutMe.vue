<template>
  <div class="container py-5" style="min-height: 100vh">
    <div class="">
      <h4 class="fw-bold" style="text-transform: uppercase">{{ $t("aboutMe") }}</h4>
      <div>{{ $t("lorem") }}</div>
    </div>
    <div class="py-4 box-container" style="overflow: hidden">
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
    </div>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import DataEn from "../content/en.json";
import DataAr from "../content/ar.json";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const route = useRoute();

const companies = ref([]);
const fetchData = async () => {
  try {
    const response = locale.value === "en" ? DataEn : DataAr;
    companies.value = response.companies;
  } catch (error) {
    console.error("Error fetching data:", error);
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
