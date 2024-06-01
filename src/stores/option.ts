import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DiceSize } from '@/model/DiceSize'
import $ from 'jquery'

export const getOptionStore = defineStore('option', () => {

  const diceSize: Ref<DiceSize> = ref(6)
  const darkMode: Ref<boolean> = ref(false)

  function setDark() {
    darkMode.value = true
    $('body').addClass('dark')
  }
  function setLight() {
    darkMode.value = false
    $('body').removeClass('dark')
  }
  return {
    diceSize, darkMode, setDark, setLight
  }
})
