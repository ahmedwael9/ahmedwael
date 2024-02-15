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
                <h1 class="fw-bold w-md-75" style="text-transform: uppercase">
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
          <h1 class="fw-bold half-a-border-on-bottom shine" >
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
      <div class="py-5 px-3 proparity-section" style="border-radius: 6px">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-md-5">
            <div class="text-center" style="width: 100%">
              <canvas id="myChart"></canvas>
            </div>
          </div>
          <div class="col-12 col-md-5">
              <div v-for="language in project?.languages" class="mb-3">
                <div class="row align-items-center">
                  <div class="col-2">
                    <svg v-if="language.name=='JavaScript'" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 32 32" fill="none">
                      <rect x="2" y="2" width="28" height="28" fill="#FFCA28"/>
                      <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"/>
                      <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"/>
                    </svg>
                    <svg v-else-if="language.name=='Html'" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 32 32" fill="none">
                      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
                      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
                      <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
                    </svg>
                    <svg v-else-if="language.name=='Scss'" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"><path fill="#cf649a" d="M11.330197 7.6660957c-.419566.00239-.782881.1030274-1.087596.2534182-.11251-.2226564-.22502-.4169925-.2437453-.5625492-.021094-.1689455-.046875-.2719729-.021094-.4736331.0257813-.2016603.1429593-.4877933.1429593-.5109867-.0024-.019531-.02583-.1240235-.2672123-.1264649-.2414015-.00234-.4500394.048828-.4734818.1103516-.023437.063477-.070317.2084962-.1007911.3583987-.042187.220215-.4828567 1.0008795-.7336581 1.4110849-.082036-.1591798-.1523585-.2998049-.1664454-.412598-.021094-.1689454-.046875-.2719728-.021094-.4736331.025781-.2016603.1429786-.4877933.1429786-.5109866-.00234-.019531-.025781-.1240235-.2671877-.126465-.2414503-.00234-.4500393.048828-.4734768.1103517-.023438.063477-.049224.213379-.1007911.3583986-.049248.145508-.6352358 1.4485849-.7875928 1.7884289-.077349.17334-.1453028.3120119-.194546.4052737-.049224.09375-.00234.00488-.00703.014648-.042187.07959-.06563.1240235-.06563.1240235v.00239c-.032813.058594-.067974.1147462-.084404.1147462-.011719 0-.035156-.1572267.00469-.3725588.086724-.452637.2976809-1.1579109.2953616-1.1836922 0-.00977.039844-.1362305-.1359718-.1992188-.1711085-.063477-.2320265.043945-.2461134.043945-.014063 0-.025781.039063-.025781.039063s.1898585-.7945806-.3633157-.7945806c-.3469045 0-.8250723.3774417-1.0618122.7219243-.1500132.0820344-.4687913.2553747-.8063207.4409216-.1289176.0703126-.2625231.145508-.3890969.2133791l-.025762-.0292969c-.6703741-.7148936-1.9103269-1.2211928-1.8587598-2.1822285.01875-.3491213.1406372-1.270411 2.3814828-2.3861345 1.8353177-.9141119 3.3049778-.6633305 3.5604458-.1054689.3633156.7969244-.7852256 2.278322-2.6931819 2.4916034-.7266265.082031-1.1087148-.1992189-1.2047936-.3046877-.1007901-.1103516-.114854-.1147462-.152357-.09375-.060943.03418-.023437.1313478 0 .1899415.056255.1474611.2906506.4101566.6891231.5414555.3492258.1147461 1.2024497.1782227 2.2337902-.220215 1.1555706-.4477543 2.0579935-1.6899916 1.7931266-2.7283712-.2695558-1.0571296-2.0228343-1.4040536-3.6800113-.8157231-.9868289.3515627-2.0556729.9000982-2.8244906 1.6196787-.9141429.8532234-1.05946814 1.5985852-.9985253 1.9080092.2133234 1.1040046 1.7345276 1.8235852 2.3439562 2.3556656-.030474.0146484-.058599.0341797-.084382.0488282-.3047149.1499024-1.464973.7570805-1.7556236 1.399317-.328154.726612.051567 1.249366.3047146 1.319679.7828814.217773 1.5845144-.17334 2.0181462-.818067.4312644-.6445806.379721-1.4813487.1804845-1.863429l-.00706-.0146484.2390837-.1406251c.154729-.0913087.307086-.1757814.4406681-.2485354-.074983.2041017-.1289175.4453128-.1570215.7969243-.032817.412598.1359493.9469736.3586252 1.1579106.098447.09131.2156446.09375.2883058.09375.2578371 0 .3750344-.213379.5039505-.46875.1593898-.3120119.3000246-.6727543.3000246-.6727543s-.175796.9774423.3047122.9774423c.175796 0 .351592-.22754.4312893-.3447271v.00234s.00469-.00488.014063-.024414a.84687134.84687134 0 0 0 .028125-.043945v-.00469c.070317-.1220638.2273634-.4008726.4617581-.8625916.3023488-.5953617.5930209-1.3407235.5930209-1.3407235s.028125.1826173.1148536.4829105c.051543.1782227.1640528.3725588.2507814.5625491-.070317.098633-.1125098.1547853-.1125098.1547853l.00234.00234c-.0562268.0751984-.1195374.1547883-.1851429.2343782-.2390822.286133-.5250462.6118168-.5625497.7055669-.044531.1098633-.035156.1923829.051567.2578122.063286.04883.1757961.05615.2953371.04883.2156451-.01465.3656599-.0678725.4406648-.1005874.1171973-.0439453.2508058-.1054688.3797219-.1992189.2343947-.1733399.3773782-.4194338.3633157-.7477055-.00703-.1806642-.06563-.3583987-.138296-.5273929.021094-.029297.042236-.061035.063286-.09375.3703469-.5414554.656308-1.1368171.656308-1.1368171s.028125.1831056.1148536.4829104c.044531.1523438.1336036.3188478.2133009.4829104-.3469045.2836915-.5648934.6118167-.6398998.8274419-.138296.3984377-.030469.5789554.1734522.621143.091392.019531.222676-.024414.3210989-.06543.121885-.039063.269556-.1079103.4055279-.2084963.234394-.1733399.459414-.4150393.447695-.7407231-.007-.1499024-.04687-.2978517-.100791-.4384768.295337-.1220704.67738-.192383 1.162603-.1337892 1.04306.1220704 1.249328.7735357 1.209504 1.0454108-.03984.2719729-.257837.4218753-.330522.4687503-.07266.043945-.0961.061035-.08907.09375.0094.049316.04219.048828.105479.039063.08673-.014648.548486-.2226563.567238-.724268.02812-.6446781-.583646-1.3478524-1.668898-1.34087zM3.2857396 10.37806c-.3445618.377442-.8297605.520362-1.0360286.398438-.2226759-.128906-.1359727-.684473.2883063-1.0852545.2578352-.2436525.593021-.4687503.8133528-.6070805.049223-.029297.1242296-.075195.2133-.1289063.014062-.00977.023437-.014648.023437-.014648.016406-.00977.035161-.019531.053911-.03418.157045.5719242.00703 1.0735358-.3562815 1.4696785zm2.5197527-1.7134285c-.1195411.2929689-.3726907 1.0454108-.5250458 1.0032233-.1312843-.0341797-.2109572-.6047367-.0258301-1.1672859.09376-.2836916.2929934-.6211918.4101907-.7524419.1898829-.2109376.3961282-.2812502.44772-.1948243.060942.112793-.2320509.928272-.3070558 1.1110847zm2.0790892.9938483c-.051567.024414-.098447.043945-.1195411.029297-.016406-.00977.021094-.043945.021094-.043945s.2601809-.2788088.3633157-.4077151c.058599-.074707.1289161-.1616212.2039259-.2602541v.029297c.0000231.337402-.3234429.5624998-.4687701.653955zm1.6032427-.3657229c-.0375-.029297-.032813-.1147462.09376-.386719.049248-.1079102.1617335-.2880861.3562795-.4594729.023437.070312.037549.1381836.035156.2016602-.00232.4218753-.3023488.5789555-.4852005.6445805z"/></svg>
                    <!-- <svg v-else-if="language.name=='Scss'" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 32 32" fill="none">
                      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
                      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
                      <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
                    </svg> -->
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 32 32" fill="none">
                      <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883"/>
                      <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E"/>
                    </svg>
                  </div>
                  <div class="col">
                    <p style=" text-align: justify; text-justify: inter-word;">
                      {{ language.desrciption }}
                    </p>
                  </div>
                </div>
              </div>
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
  link.click();
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

.half-a-border-on-bottom {
  border-bottom: 5px solid;
  padding-bottom: 14px;
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
ul {
  list-style: none;
}



.shine {
  background: linear-gradient(
    90deg, 
    #396352 0%, 
    #6d9886dd 39%, 
    #538e76 50%, 
    rgb(54, 107, 85) 61%, 
    #396352 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    animation: move 3s ease infinite;
  }

  @keyframes move {
    0% { background-position: -100% 0%; }
    100% { background-position: 100% 0%; }
  }
</style>
