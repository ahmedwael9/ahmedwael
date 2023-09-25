<template>
  <footer class="position-relative">
    <div class="container">
      <div>
        <div class="row justify-content-center pt-5">
          <div class="col-12">
            <div class="row">
              <div class="col">
                <div class="">
                  <span dir="ltr" style="color: #6d9886" class="fw-bold logo-footer">
                    AHMED<span>WAEL</span>
                    <span class="material-icons icon">code</span>
                  </span>
                </div>
                <p class="py-3" style="text-align: justify">
                  {{ $t("introDiscrition") }}
                </p>
              </div>
              <div class="col" style="align-self: center">
                <div
                  style="
                    min-height: 200px;
                    border-right: 2px solid grey;
                    border-left: 2px solid grey;
                  "
                >
                  <div
                    v-for="n in social"
                    class="px-3 d-flex align-items-center justify-content-center mb-3"
                  >
                    <div class="">
                      <img src="../../assets/images/twiter.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col" style="align-self: center">
                <div v-for="item in info" class="d-flex align-items-center mb-3">
                  <div class="">
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
                        d="M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75ZM12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.69036 11.3096 10.25 12 10.25C12.6904 10.25 13.25 9.69036 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75ZM9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 10.5188 13.5188 11.75 12 11.75C10.4812 11.75 9.25 10.5188 9.25 9ZM3.59541 14.9966C3.87344 15.3036 3.84992 15.7779 3.54288 16.0559C2.97519 16.57 2.75 17.0621 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31951 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 17.0621 21.0248 16.57 20.4571 16.0559C20.1501 15.7779 20.1266 15.3036 20.4046 14.9966C20.6826 14.6895 21.1569 14.666 21.4639 14.9441C22.227 15.635 22.75 16.5011 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 16.5011 1.77305 15.635 2.53605 14.9441C2.84309 14.666 3.31738 14.6895 3.59541 14.9966Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  <a
                    class="px-4"
                    target="_blank"
                    href="https://www.google.com/maps/place/%D9%88%D8%A7%D8%A6%D9%84+%D8%A7%D8%A8%D9%88+%D8%AF%D9%82%D8%A9%E2%80%AD/@31.9183053,35.9258968,17z/data=!3m1!4b1!4m6!3m5!1s0x151b5ff1b98826f3:0xc738f5a45b6e0a2f!8m2!3d31.9183008!4d35.9233219!16s%2Fg%2F11t0d78vg0?authuser=0&entry=ttu"
                    >{{ item.label }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 fw-bold text-center py-5">
        <div style="font-size: 12px">&copy; Copyright {{ new Date().getFullYear() }}</div>
      </div>
    </div>
    <div class="position-absolute" style="bottom: 0; left: 0; right: 0">
      <svg
        width="100%"
        height="400px"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="auto"
        shape-rendering="auto"
        fill="#ffffff"
      >
        <defs>
          <path
            id="wavepath"
            d="M 0 2000 0 500 Q 150 434 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
          />
          <path id="motionpath" d="M -600 0 0 0" />
        </defs>
        <g>
          <use xlink:href="#wavepath" y="186" fill="#00000012">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath xlink:href="#motionpath" />
            </animateMotion>
          </use>
        </g>
      </svg>
    </div>
  </footer>
</template>
<script setup>
const info = [
  {
    icon: "../../assets/images/location.svg",
    label: "Amman / Musaab Ben Omeir Street",
    link: "Amman / Musaab Ben Omeir Street",
  },
  {
    icon: "../../assets/images/location.svg",
    label: "Awamfd99@gmail.com",
    link: "Amman / Musaab Ben Omeir Street",
  },
  {
    icon: "Amman / Musaab Ben Omeir Street",
    label: "079 579 93 74",
    link: "Amman / Musaab Ben Omeir Street",
  },
];
const social = ref([
  {
    type: "insta",
    link: "",
  },
  {
    type: "face",
    link: "",
  },
  {
    type: "insta",
    link: "",
  },
]);
</script>
<style>
.logo-footer {
  font-size: 30px;
  transition: 0.3s;
}
a {
  text-decoration: none;
  color: unset !important;
}
</style>
