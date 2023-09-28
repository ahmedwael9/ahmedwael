<template>
  <div class="aa" theme="light" :dir="$i18n.locale == 'ar' ? 'rtl' : 'en'">
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
body {
  height: 100vh;
  overflow-x: hidden;
}
</style>
