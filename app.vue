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
