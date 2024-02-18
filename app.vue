<template>
  <div
    class="aa"
    :theme="store.isDark ? 'dark' : 'light'"
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'en'"
  >
    <NuxtLayout>
      <div class="shadow" :style="shadowStyle"></div>
      <NuxtPage />
    </NuxtLayout>
      <div style="cursor: pointer;position: fixed;bottom: 50px;right: 50px;" class="">
          <div  style="border: 2px solid #cecece;background-color: #ffffff;border-radius: 50%;height: 60px;width: 60px;display: flex;justify-content: center;align-items: center;" class="">
             <a target="_blank"  v-if="socialMedia[select].social=='githup'"  :href="socialMedia[select].link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#181717"/>
              <path d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z" fill="white"/>
              </svg>
             </a>
             <a target="_blank"  v-if="socialMedia[select].social=='linkend'"  :href="socialMedia[select].link">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#0A66C2" height="30px" width="30px" version="1.1" id="Icons" viewBox="0 0 32 32" xml:space="preserve">
              <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13  c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3  c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13  c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"/>
              </svg>
             </a>
             <a target="_blank"  v-if="socialMedia[select].social=='whatsUp'"  :href="socialMedia[select].link">
                <svg v-if="socialMedia[select].social=='whatsUp'" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"/>
                <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/>
                <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5BD066"/>
                <stop offset="1" stop-color="#27B43E"/>
                </linearGradient>
                </defs>
                </svg>
             </a>
              <!-- <svg  v-if="socialMedia[select].social=='whatsUp'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#0A66C2" height="30px" width="30px" version="1.1" id="Icons" viewBox="0 0 32 32" xml:space="preserve">
              <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13  c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3  c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13  c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"/>
              </svg> -->
          </div>
      </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "~/store/counter";

const store = useCounterStore();

const shadowStyle = ref({
  left: null,
  top: null,
  border: '2px solid white !important'
});

const select=ref(0)
const socialMedia=ref([
  {
    link:'https://www.linkedin.com/in/ahmed-abu-daqqa-9aa349214/',
    social:'linkend'
  },
  {
    link:'https://wa.me/00962795799374',
    social:'whatsUp'
  },
  {
    link:'https://github.com/ahmedwael9',
    social:'githup'
  },
])



const updateShadowPosition = (event) => {
  shadowStyle.value.left = event.pageX + "px";
  shadowStyle.value.top = event.pageY + "px";
};


function onMouseHover(element) {
  document.removeEventListener("mousemove", updateShadowPosition,false); 
  shadowStyle.value.transition='0.6s'
  shadowStyle.value.left =element.getBoundingClientRect().left + element.getBoundingClientRect().width/2 +"px";
  shadowStyle.value.top = element.getBoundingClientRect().top + element.getBoundingClientRect().height /2+"px";
  shadowStyle.value.border='2.2px solid rgb(109, 152, 134,0.7) !important'
  shadowStyle.value.boxShadow='rgba(109, 152, 134, 0.35) 0px 5px 15px !important'
  shadowStyle.value.width=element.getBoundingClientRect().width+"px"
  shadowStyle.value.height=element.getBoundingClientRect().height+"px"
  shadowStyle.value.borderRadius='25px'

}
function onMouseHoverOut() {
  document.addEventListener("mousemove", updateShadowPosition);
  shadowStyle.value.transition='unset !important'
  shadowStyle.value.border='2px solid white !important'
  shadowStyle.value.boxShadow=' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important'
  shadowStyle.value.width="50px"
  shadowStyle.value.height="50px"
  shadowStyle.value.borderRadius='50%'
}


onMounted(() => {
  const $hoverables = document.querySelectorAll('.hoverable');
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', ()=>{onMouseHover($hoverables[i])});
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  setInterval(() => {
    if(select.value == 2){
      select.value =0
    }
    else{
      select.value= select.value + 1
    }
  }, 3000);
});

onBeforeMount(() => {
  document.addEventListener("mousemove", ()=>{updateShadowPosition});
});

</script>
<style>
body {
  height: 100vh;
  position: relative;
  overflow-x: hidden;
}
</style>
