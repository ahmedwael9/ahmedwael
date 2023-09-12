<template>
  <div style="background-color: #f7f7f7" class="pb-2">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand m-0" href="#">
          <div dir="ltr" style="color: #6d9886" class="fw-bold logo">
            AHMED<span class="text-dark">WAEL</span>
            <span class="material-icons icon">code</span>
          </div>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav px-3">
            <li class="nav-item">
              <a
                class="nav-link active"
                @click="$router.push('/')"
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push('/aboutMe')" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
        </div>
        <ul class="navbar-nav">
          <li class="row align-items-center">
            <div class="nav-link text-dark p-0 px-4" href="#">
              <div
                class="p-1"
                :class="{ 'togle-theme': darkMode }"
                style="
                  width: 60px;
                  height: 30px;
                  background-color: #6d9886;
                  border-radius: 30px;
                  border: 1.2px solid #00000018;
                  display: flex;
                "
              >
                <div
                  @click="darkMode = !darkMode"
                  class="d-flex justify-content-center align-items-center"
                  style="
                    transition: 0.3s;
                    height: 100%;
                    width: 21px;
                    background-color: #f7f7f7;
                    border-radius: 50%;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2V3"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 21V22"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M22 12L21 12"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3 12L2 12"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.0708 4.92969L18.678 5.32252"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.32178 18.6777L4.92894 19.0706"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.0708 19.0703L18.678 18.6775"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.32178 5.32227L4.92894 4.92943"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </li>
          <li>
            <button
              @click="changeLanguage"
              type="button"
              style="background-color: #393e46; border-radius: 18px"
              class="btn text-light"
            >
              {{ locale == "en" ? "AR" : "EN" }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="['index'].includes($route.name)" class="container">
      <div class="row py-5 justify-content-between align-items-center h-100">
        <div class="col-12 col-md-7">
          <div class="">
            <span style="color: #393e46" class="fs-1 fw-bold d-flex"
              >I'M
              <span style="color: #6d9886" class="mx-3 fs-1 intro fw-bold d-flex">
                <span class="">{{ textShow }}</span>
              </span>
            </span>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque vel
              voluptas. Iusto quia quas consequatur, expedita veritatis eum ipsam at earum
              quae perspiciatis debitis voluptas voluptates modi alias similique?
            </p>
            <div
              style="background-color: #393e46"
              class="btn px-5 text-light"
              type="button"
            >
              RESUME
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="w-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="100%"
              height="255.36479"
              viewBox="0 0 719.53003 455.36479"
            >
              <path
                d="M602.46002,35.65002H.67004c.84998-4.82001,2.50995-9.38,4.82996-13.51001C12.91003,8.94,27.04004,0,43.23004,0H559.90002c16.17999,0,30.32001,8.94,37.71997,22.14001,2.32001,4.13,3.98999,8.69,4.84003,13.51001Z"
                fill="#f2f2f2"
              />
              <path
                d="M719.53003,453.70001c0,.65997-.53003,1.19-1.19,1.19h-247.29004c-.65997,0-1.19-.53003-1.19-1.19,0-.32001,.12006-.60004,.32001-.81h89.72003c1.90997,0,3.77997-.13,5.62-.38h152.82001c.65997,0,1.19,.52997,1.19,1.19Z"
                fill="#3f3d56"
              />
              <path
                d="M442.21848,211.14001H160.9045c-2.61448,0-4.74125-2.69141-4.74125-6s2.12677-6,4.74125-6H442.21848c2.61448,0,4.74125,2.69141,4.74125,6s-2.12677,6-4.74125,6Z"
                fill="#e6e6e6"
              />
              <path
                d="M602.46002,35.65002c-.85004-4.82001-2.52002-9.38-4.84003-13.51001-7.39996-13.20001-21.53998-22.14001-37.71997-22.14001H43.23004C27.04004,0,12.91003,8.94,5.5,22.14001c-2.32001,4.13-3.97998,8.69-4.82996,13.51001-.44,2.45996-.67004,4.98999-.67004,7.57996V411.65997c0,23.84003,19.39001,43.23004,43.23004,43.23004H559.90002c4.94,0,9.70001-.84003,14.13-2.38,16.91998-5.85999,29.09998-21.96002,29.09998-40.85004V43.22998c0-2.57996-.22998-5.12-.66998-7.57996Zm-1.33002,376.00995c0,20.86005-15.5,38.11005-35.60999,40.85004-1.84003,.25-3.71002,.38-5.62,.38H104.64001c-56.69,0-102.64001-45.96002-102.64001-102.65002V43.22998c0-2.58997,.23999-5.12,.70001-7.57996,.90002-4.86005,2.65002-9.41003,5.09998-13.51001C14.98999,10.08002,28.17004,2,43.23004,2H559.90002c15.06,0,28.23999,8.08002,35.42999,20.14001,2.45001,4.09998,4.20001,8.64996,5.09998,13.51001,.46002,2.45996,.70001,4.98999,.70001,7.57996V411.65997Z"
                fill="#3f3d56"
              />
              <g>
                <polygon
                  points="575.92615 216.07954 572.54224 203.67191 587.76978 198.03206 589.46173 209.31174 575.92615 216.07954"
                  fill="#ffb6b6"
                />
                <polygon
                  points="575.92615 216.07954 572.54224 203.67191 581.50995 199.88928 578.72382 214.51666 575.92615 216.07954"
                  isolation="isolate"
                  opacity=".1"
                />
                <g>
                  <path
                    d="M531.34949,322.41742c-2.90851-1.73047-3.06195-6.83838-.34259-11.409,1.19037-2.00073,2.73395-3.56665,4.33728-4.55005l1.59692-2.60913,20.20197-36.21606s8.8432-34.15634,12.44342-38.28615c3.60022-4.12978,8.8056-3.15675,8.8056-3.15675l4.61713,4.10103-16.47906,48.37749-20.33563,28.63821-2.72534,3.98544c-.09937,1.87823-.73907,3.9819-1.92957,5.98254-2.7193,4.57059-7.28156,6.87289-10.19012,5.1424v.00003Z"
                    fill="#ffb6b6"
                  />
                  <path
                    d="M575.09344,212.53549s6.4256-.24847,10.47974,4.74292-17.18488,61.24887-17.18488,61.24887l-17.29956-.61243,24.00464-65.37936h.00006Z"
                    fill="#6d9886"
                  />
                </g>
                <circle cx="576.77209" cy="189.85429" r="15.79156" fill="#ffb6b6" />
                <polygon
                  points="539.83118 419.11371 529.11548 445.62097 522.91168 439.41714 520.6557 427.57349 529.67944 416.29379 539.83118 419.11371"
                  fill="#ffb6b6"
                />
                <polygon
                  points="640.22028 409.526 650.93597 421.93365 645.86017 432.08536 634.58044 430.3934 628.94061 414.60184 640.22028 409.526"
                  fill="#ffb6b6"
                />
                <polygon
                  points="568.87634 261.48026 567.46637 284.32159 602.43335 278.11777 600.17743 264.01816 568.87634 261.48026"
                  fill="#ffb6b6"
                />
                <path
                  d="M567.18439,284.60358l35.24896-11.56168s12.97162,25.94327-1.12799,42.2988-60.91028,109.41284-60.91028,109.41284l-14.09961-6.76782,20.30341-59.21829,22.55933-54.70642-1.97394-19.45743h.00012Z"
                  fill="#2f2e41"
                />
                <polygon
                  points="601.30542 305.75296 614.841 364.97128 643.04022 410.65396 628.37665 419.11371 588.89777 364.97128 575.92615 323.23648 601.30542 305.75296"
                  fill="#2f2e41"
                />
                <path
                  d="M515.57989,425.31754h-9.76758s-11.39737-4.51187-14.06851,0,11.91803,17.30807,11.91803,17.30807c0,0,20.37778,11.45508,23.19772,10.89111s3.94788-7.33179,3.94788-7.33179l3.38391-7.89578-5.07587,1.69196s-6.76782-3.94788-5.07587-10.7157l-8.45978-3.94788h.00006Z"
                  fill="#2f2e41"
                />
                <path
                  d="M648.68005,423.62558v-5.63983l6.55688,5.63983s10.92664,3.94788,2.46686,12.40765c-8.45978,8.45975-19.17548,17.48349-19.17548,17.48349,0,0-16.91949,4.51187-18.04749-.56396s0-7.12973,0-7.12973l6.2038-3.02197,5.63983-14.66357,9.02374,1.12796,7.33179-5.63983,.00006-.00003Z"
                  fill="#2f2e41"
                />
                <path
                  d="M581.56598,192.95621l-5.07587-.56398-9.30573-9.30573s-8.45978,4.51187-8.45978,1.12798c0-15.79155,9.58771-15.22755,17.48352-16.35553,7.89575-1.12798,7.0498-1.40996,9.58771,2.81992,1.16064,1.93445,5.35785,3.10191,5.35785,3.10191,0,0,7.89575-10.71568,11.84369,2.25594,3.94788,12.97163-1.12799,53.01448,2.81995,56.39838,3.94788,3.3839-16.21002,6.76279-14.02686-6.48833s6.13104-33.55453,3.87512-38.06639c-2.25592-4.51187-2.81995-3.3839-2.81995-3.3839,2.79572-1.14146,4.62238,18.96437-5.91864,19.94879l-.28522-9.79707s-1.69196-5.07585-5.07587-1.69196l.00006-.00003Z"
                  fill="#2f2e41"
                />
                <path
                  d="M574.51617,212.41365l16.91949-6.76781,22.55933,67.67807-46.41595-1.69077-4.17926-20.19972s-4.08044-10.51318-.69653-16.71701,11.81287-22.30273,11.81287-22.30273l.00006-.00003Z"
                  fill="#6d9886"
                />
                <g>
                  <path
                    d="M618.54346,325.78308c-3.37201,.28961-6.47443-3.77103-6.92957-9.06995-.19928-2.31952,.14203-4.49167,.87134-6.2254l-.22357-3.05087-4.69946-41.20236s-8.74829-33.703-8.23071-39.1573c.51752-5.45422,1.33484-6.90227,1.33484-6.90227l6.14215,.64035,14.81415,48.91302,.1731,35.12344,.10913,4.82693c1.01428,1.58395,1.72089,3.66611,1.91998,5.9856,.4552,5.29886-1.90942,9.82916-5.28137,10.11877v.00003Z"
                    fill="#ffb6b6"
                  />
                  <path
                    d="M590.02576,211.00369s5.07587-3.94789,11.27966-2.25594,21.74445,59.7823,21.74445,59.7823l-14.41266,9.58771-18.61145-67.11407Z"
                    fill="#6d9886"
                  />
                </g>
              </g>
              <path
                d="M296.20544,308.64001h-67.65576c-4.12891,0-7.48828-3.35938-7.48828-7.48828v-6.7666c0-4.12891,3.35938-7.4873,7.48828-7.4873h67.65576c4.12891,0,7.48828,3.3584,7.48828,7.4873v6.7666c0,4.12891-3.35938,7.48828-7.48828,7.48828Z"
                fill="#6d9886"
              />
              <path
                class="btn-svg"
                d="M556.20544,87.51111h-67.65576c-4.12891,0-7.48828-3.35938-7.48828-7.48828v-6.7666c0-4.12891,3.35938-7.4873,7.48828-7.4873h67.65576c4.12891,0,7.48828,3.3584,7.48828,7.4873v6.7666c0,4.12891-3.35938,7.48828-7.48828,7.48828Z"
                fill="#6d9886"
              />
              <path
                d="M396.57312,309.14001h-67.65576c-4.40479,0-7.98828-3.58398-7.98828-7.98828v-6.7666c0-4.4043,3.5835-7.9873,7.98828-7.9873h67.65576c4.40479,0,7.98828,3.58301,7.98828,7.9873v6.7666c0,4.4043-3.5835,7.98828-7.98828,7.98828Zm-67.65576-20.74219c-3.30176,0-5.98828,2.68555-5.98828,5.9873v6.7666c0,3.30176,2.68652,5.98828,5.98828,5.98828h67.65576c3.30176,0,5.98828-2.68652,5.98828-5.98828v-6.7666c0-3.30176-2.68652-5.9873-5.98828-5.9873h-67.65576Z"
                fill="#6d9886"
              />
              <path
                d="M479.56149,180.14001H123.56149c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6H479.56149c3.30859,0,6,2.69141,6,6s-2.69141,6-6,6Z"
                fill="#e6e6e6"
              />
              <path
                d="M100.89001,82.64001H55.89001c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6h45c3.30859,0,6,2.69141,6,6s-2.69141,6-6.00001,6Z"
                fill="#e6e6e6"
              />
              <path
                d="M369.89001,82.64001h-45c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6h45c3.30859,0,6,2.69141,6,6s-2.69141,6-6,6Z"
                fill="#e6e6e6"
              />
              <path
                d="M454.89001,82.64001h-45c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6h45c3.30859,0,6,2.69141,6,6s-2.69141,6-6,6Z"
                fill="#e6e6e6"
              />
              <path
                d="M400.56149,242.14001H202.56149c-3.30859,0-6-2.69141-6-6s2.69141-6,6-6h198c3.30859,0,6,2.69141,6,6s-2.69141,6-6,6Z"
                fill="#e6e6e6"
              />
              <path
                d="M409.18938,373.39584H193.93359c-2.00055,0-3.62791-1.62735-3.62791-3.6279s1.62737-3.6279,3.62791-3.6279h215.25583c2.00055,0,3.6279,1.62735,3.6279,3.6279s-1.62735,3.6279-3.6279,3.6279h-.00003Z"
                fill="#e6e6e6"
              />
              <path
                d="M411.1929,21.39583H195.9371c-2.00055,0-3.62791-1.62736-3.62791-3.62791s1.62737-3.62791,3.62791-3.62791h215.25583c2.00055,0,3.6279,1.62736,3.6279,3.62791s-1.62735,3.62791-3.6279,3.62791h-.00003Z"
                fill="#fff"
              />
            </svg>
          </div>
          <!-- <div id="box"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const changeLanguage = () => {
  const newLocale = locale.value === "en" ? "ar" : "en";
  locale.value = newLocale;
};

const textIntro = ["AHMED WAEL", "FRONTEND DEVELOPER"];
const textShow = ref("");
const darkMode = ref(false);

onMounted(() => {
  let currentIndex = 0;
  let wordIndex = 0;
  setInterval(() => {
    if (currentIndex < textIntro[wordIndex].length) {
      textShow.value += textIntro[wordIndex][currentIndex];
      currentIndex++;
    } else {
      textShow.value = "";
      if (wordIndex < textIntro.length - 1) {
        wordIndex++;
        currentIndex = 0;
      } else {
        wordIndex = 0;
        currentIndex = 0;
      }
    }
  }, 550);
});
</script>
<style lang="scss">
#box {
  background: url(https://st4.depositphotos.com/4527725/30707/v/450/depositphotos_307079052-stock-illustration-world-map-dots-connected-lines.jpg);
  background-size: cover;
  border: 2px solid #000;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  animation: movimiento 20s linear 0s forwards;
  box-shadow: 0 0 25px RGBA(255, 255, 255, 0.1), -8px -8px 15px #000 inset,
    2px 2px 25px #000 inset, -45px -45px 25px RGBA(0, 0, 0, 0.5) inset,
    25px 25px 45px RGBA(0, 0, 0, 0.45) inset;
  margin: 6em auto;
  transform: rotateX(6deg) rotateY(6deg) rotateZ(6deg);
}

@keyframes movimiento {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 355px 0;
  }
}

.btn-lang {
  border-radius: 50px;
  border: 2.5px solid #0000000e;
  cursor: pointer;
}

.btn-lang {
  transition: 0.3s;
}
.btn-lang:hover {
  transform: scale(0.95);
}

.logo,
.icon {
  transition: 0.3s;
}
.logo:hover {
  transform: scale(1.05);
  .icon {
    transform: rotate(220deg);
  }
}

.intro {
  height: 60px;
}
.intro::after {
  content: attr(data-text);
  width: 5px;
  margin-inline-start: 5px;
  height: auto;
  background-color: #393e46;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 1s linear 1s infinite alternate;
}

.btn-svg {
  opacity: 1;
  animation: btn-animation 1s linear 1s infinite alternate;
}

.line {
  height: 1.5px;
  background-color: rgba(255, 170, 43, 0.293);
}

.icon,
.logo {
  transition: 0.8s;
}
.logo:hover {
  transform: scale(1.05);
  .icon {
    transform: rotate(315deg);
  }
}

@keyframes animation {
  from {
    opacity: 0.05;
  }
  to {
    opacity: 1;
  }
}
@keyframes typing {
  from {
    opacity: 0.05;
  }
  to {
    opacity: 1;
  }
}

.togle-theme {
  flex-direction: row-reverse;
}
</style>
