<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'en'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
body {
  height: 100vh; /* Make it full-screen height */
  overflow-y: scroll; /* Enable vertical scrolling */
  scroll-snap-type: y mandatory; /* Mandatory scroll snap behavior */
  position: relative; /* Ensure proper positioning */
}

/* header,
.py-5 {
  min-height: 100vh;
} */
</style>
