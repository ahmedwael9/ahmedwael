<template>
  <div
    :class="{ 'dark-mode': darkMode }"
    :style="!darkMode ? 'background-color: #f7f7f7' : ''"
    class="pb-2 header-section app"
  >
    <nav
      class="navbar navbar-expand-lg"
      :class="darkMode ? 'navbar-dark' : 'navbar-light'"
    >
      <div class="container">
        <a class="navbar-brand m-0" href="#">
          <div dir="ltr" style="color: #6d9886" class="fw-bold logo">
            AHMED<span :class="darkMode ? 'text-light' : 'text-dark'">WAEL</span>
            <span class="material-icons icon">code</span>
          </div>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav px-3">
            <li class="nav-item">
              <div class="active">
                <a
                  class="nav-link"
                  @click="$router.push('/')"
                  aria-current="page"
                  href="#"
                  >Home</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push('/aboutMe')" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav">
          <li class="row align-items-center">
            <div class="nav-link text-dark p-0 px-4" href="#">
              <div
                class="p-1"
                style="
                  width: 60px;
                  height: 30px;
                  background-color: #6d9886;
                  border-radius: 30px;
                  border: 1.2px solid #00000018;
                  display: flex;
                  position: relative;
                "
              >
                <div
                  @click="darkMode = !darkMode"
                  :class="{ 'togle-theme': darkMode }"
                  class="d-flex justify-content-center align-items-center"
                  style="
                    transition: 0.3s;
                    height: 100%;
                    width: 21px;
                    background-color: #f7f7f7;
                    border-radius: 50%;
                  "
                >
                  <div v-if="!darkMode" class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="15px"
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
                  <div v-else class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.3655 2.12433C20.0384 1.29189 18.8624 1.29189 18.5353 2.12433L18.1073 3.21354L17.0227 3.6429C16.1933 3.97121 16.1933 5.14713 17.0227 5.47544L18.1073 5.90481L18.5353 6.99401C18.8624 7.82645 20.0384 7.82646 20.3655 6.99402L20.7935 5.90481L21.8781 5.47544C22.7075 5.14714 22.7075 3.97121 21.8781 3.6429L20.7935 3.21354L20.3655 2.12433ZM19.4504 2.52989L19.8651 3.58533C19.9648 3.83891 20.165 4.04027 20.4188 4.14073L21.4759 4.55917L20.4188 4.97762C20.165 5.07808 19.9648 5.27943 19.8651 5.53301L19.4504 6.58846L19.0357 5.53301C18.936 5.27943 18.7358 5.07808 18.482 4.97762L17.4249 4.55917L18.482 4.14073C18.7358 4.04027 18.936 3.83891 19.0357 3.58533L19.4504 2.52989ZM16.4981 7.94681C16.171 7.11437 14.9951 7.11437 14.668 7.94681L14.5134 8.34008L14.1222 8.49497C13.2928 8.82328 13.2928 9.9992 14.1222 10.3275L14.5134 10.4824L14.668 10.8757C14.9951 11.7081 16.171 11.7081 16.4981 10.8757L16.6526 10.4824L17.0439 10.3275C17.8733 9.9992 17.8733 8.82328 17.0439 8.49497L16.6526 8.34008L16.4981 7.94681ZM15.583 8.35237L15.7243 8.71188C15.824 8.96545 16.0242 9.16681 16.278 9.26727L16.6417 9.41124L16.278 9.55521C16.0242 9.65567 15.824 9.85703 15.7243 10.1106L15.583 10.4701L15.4418 10.1106C15.3421 9.85703 15.1419 9.65567 14.8881 9.55521L14.5244 9.41124L14.8881 9.26727C15.1419 9.16681 15.3421 8.96545 15.4418 8.71188L15.583 8.35237Z"
                        fill="#1C274C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                        fill="#1C274C"
                      />
                    </svg>
                  </div>
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
      <div class="row py-5 justify-content-center align-items-center h-100">
        <div class="col-12 col-md-6">
          <div class="">
            <span :style="darkmode ? 'color: #393e46' : ''" class="fs-1 fw-bold d-flex"
              >I'M
              <span style="color: #6d9886" class="mx-3 fs-1 intro fw-bold d-flex">
                <span class="">{{ textShow }}</span>
              </span>
            </span>
            <p class="mt-3 w-75">
              {{ $t("introDiscrition") }}
            </p>
            <div
              style="background-color: #393e46"
              class="btn px-5 text-light"
              :class="{ 'btn-light': darkMode }"
              type="button"
            >
              RESUME
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="w-100 text-center">
            <img v-if="!darkMode" src="../../assets/images/introImage.svg" />
            <img v-else src="../../assets/images/introImageDarkMode.svg" />
          </div>
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
@keyframes movimiento {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 355px 0;
  }
}

.header-section {
  background-image: url("/assets/images/bgCorner.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left top;
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

// .active {
//   .nav-link::after {
//     content: "";
//     display: block;
//     text-align: center;
//     width: 100%;
//     height: 4px;
//     border-radius: 3px;
//     background-color: #393e46;
//   }
// }

.togle-theme {
  //   flex-direction: row-reverse;
  transform: translateX(30px);
}
</style>
