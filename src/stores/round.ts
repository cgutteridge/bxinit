import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Dude } from '@/model/Dude'
import { getDudeStore } from '@/stores/dude'
import type { DudeInRound } from '@/model/DudeInRound'

export const getRoundStore = defineStore('round', () => {
  const dudeStore = getDudeStore()
  const initRolls: Ref<Record<number, number>> = ref({})

  function roll () {
    initRolls.value = {}
    dudeStore.all().forEach((dude: Dude) => {
      initRolls.value[dude.id] = Math.floor(Math.random() * 6) + 1
    })
  }

  // returns everyone in the round, sorted by roll
  function all (): DudeInRound[] {
    return dudeStore.all().map((dude): DudeInRound => {
      const roll: number | undefined = initRolls.value[dude.id]
      let init = roll
      if (init !== undefined) { init += dude.initModifier }
      return { dude, init, roll }
    }).sort((a, b) =>  (b.init??0) - (a.init??0))
  }

  return { roll, all }
})
