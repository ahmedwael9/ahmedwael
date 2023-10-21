
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isDark = ref(false)
  function changeThemeColor() {
    isDark.value=!isDark.value
  }
  return { isDark, changeThemeColor }
})