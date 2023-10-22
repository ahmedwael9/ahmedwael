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
  left: "0px",
  top: "0px",
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
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }
});

function onMouseHover() {
  shadowStyle.value.scale=1.3
  shadowStyle.value.border='2px solid black !important'
}
function onMouseHoverOut() {
  shadowStyle.value.scale=1
  shadowStyle.value.border='2px solid white !important'
}

</script>
<style>
body {
  height: 100vh;
  overflow-x: hidden;
}
</style>
