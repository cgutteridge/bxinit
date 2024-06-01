import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { DiceSize } from '@/model/DiceSize'
import $ from 'jquery'
import { setCookie } from '@/cookies'
import { getState } from '@/state'

export const getOptionStore = defineStore('option', () => {

  const diceSize: Ref<DiceSize> = ref(6)
  const darkMode: Ref<boolean> = ref(false)

  watch(() => diceSize.value, () => {
    console.log(23)
    setCookie(getState())
  })

  function setDiceSize (size: DiceSize) {
    if (size == 20 || size == 6) { diceSize.value = size }
    setCookie(getState())
  }

  function setDark () {
    darkMode.value = true
    $('body').addClass('dark')
    setCookie(getState())
  }

  function setLight () {
    darkMode.value = false
    $('body').removeClass('dark')
    setCookie(getState())
  }

  return {
    diceSize, darkMode, setDark, setLight, setDiceSize
  }
})
