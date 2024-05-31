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
    const dudesInRounds : DudeInRound[] = dudeStore.all().map((dude): DudeInRound => {
      const roll: number | undefined = initRolls.value[dude.id]
      let init = roll
      if (init !== undefined) { init += dude.initModifier }
      return { dude, init, roll, firstInGroup: false, lastInGroup: false }
    }).sort((a, b) =>  (b.init??0) - (a.init??0))
    dudesInRounds.forEach( (dudeInRound: DudeInRound, index )=>{
      if( index<dudesInRounds.length-1 && dudesInRounds[index+1].init != dudeInRound.init ) {
        dudeInRound.lastInGroup=true
        dudesInRounds[index+1].firstInGroup = true
      }
    })
    return dudesInRounds
  }

  return { roll, all }
})
