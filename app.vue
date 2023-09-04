<template>
  <div :dir="$i18n.locale=='ar'?'rtl':'en'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
