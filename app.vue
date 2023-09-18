<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'en'">
    <NuxtLayout>
      <div class="shadow" :style="shadowStyle"></div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const shadowStyle = ref({
  left: "0px",
  top: "0px",
});

const updateShadowPosition = (event) => {
  shadowStyle.value.left = event.pageX + "px";
  shadowStyle.value.top = event.pageY + "px";
};

onMounted(() => {
  document.addEventListener("mousemove", updateShadowPosition);
});
</script>
<style>
.shadow {
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 1;
  opacity: 0.4;
  mix-blend-mode: darken;
  transition: 0.085s ease;
  border: 2px solid #333333;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/* header,
.py-5 {
  min-height: 100vh;
} */
</style>
