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
  left: "50%",
  top: "50%",
  scale:'1',
  border: '2px solid white !important'
});

const updateShadowPosition = (event) => {
  shadowStyle.value.left = event.pageX + "px";
  shadowStyle.value.top = event.pageY + "px";
};

onMounted(() => {
  document.addEventListener("mousemove", updateShadowPosition);
  const $hoverables = document.querySelectorAll('.hoverable');
  console.log($hoverables,'dddd')
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }
});

function onMouseHover() {
  const $hoverables = document.querySelectorAll('.hoverable');
  document.removeEventListener("mousemove", updateShadowPosition,false); 
  // window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top;
  // window.scrollX + document.querySelector('#elementId').getBoundingClientRect().left ;
  // shadowStyle.value.transform=`'translate'${($hoverables[0].getBoundingClientRect().top+'px',$hoverables[0].getBoundingClientRect().left+'px')}`
  shadowStyle.value.left =$hoverables[2].getBoundingClientRect().left + $hoverables[2].getBoundingClientRect().width/2+10 +"px";
  shadowStyle.value.top = $hoverables[2].getBoundingClientRect().top + $hoverables[2].getBoundingClientRect().height /2+10+"px";
  shadowStyle.value.scale=1.4
  shadowStyle.value.border='2px solid rgb(109, 152, 134,0.7) !important'
  shadowStyle.value.boxShadow='rgba(109, 152, 134, 0.35) 0px 5px 15px !important'
}
function onMouseHoverOut() {
  document.addEventListener("mousemove", updateShadowPosition);
  shadowStyle.value.left ="0px";
  shadowStyle.value.top = "0px";
  shadowStyle.value.scale=1
  shadowStyle.value.border='2px solid white !important'
  shadowStyle.value.boxShadow=' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important'
  // shadowStyle.value.transform=`translate(-50%, -50%)`
}

</script>
<style>
body {
  height: 100vh;
  overflow-x: hidden;
}
</style>
