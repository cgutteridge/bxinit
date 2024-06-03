import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Dude } from '@/model/Dude'
import { getDudeStore } from '@/stores/dude'
import type { DudeInRound } from '@/model/DudeInRound'
import { getOptionStore } from '@/stores/option'

export const getRoundStore = defineStore('round', () => {
  const dudeStore = getDudeStore()
  const optionStore = getOptionStore()
  const initRolls: Ref<Record<number, number | undefined>> = ref({})

  function roll () {
    initRolls.value = {}
    dudeStore.all().filter(dude=>!dude.sleeping).forEach((dude: Dude) => {
      setRoll(dude.id, dude.autoRoll ? Math.floor(Math.random() * optionStore.diceSize) + 1 : undefined)
    })
  }

  function getRoll (id: number): number | undefined {
    return initRolls.value[id]
  }

  function setRoll (id: number, roll: number | undefined) {
    initRolls.value[id] = roll
  }

  function compareDudes (a: DudeInRound, b: DudeInRound): number {
    return (b.init ?? 0) - (a.init ?? 0)
  }

  // returns everyone in the round, sorted by roll
  function fighting (): DudeInRound[] {
    const dudesInRounds: DudeInRound[] = dudeStore.all().map((dude): DudeInRound => {
      const roll: number | undefined = initRolls.value[dude.id]
      let init = roll
      if (init !== undefined) { init += dude.initModifier }
      return { dude, init, roll, firstInGroup: false, lastInGroup: false }
    }).filter((dudeInRound: DudeInRound): boolean => !dudeInRound.dude.sleeping).sort(compareDudes)
    dudesInRounds.forEach((dudeInRound: DudeInRound, index) => {
      if (index < dudesInRounds.length - 1 && dudesInRounds[index + 1].init != dudeInRound.init) {
        dudeInRound.lastInGroup = true
        dudesInRounds[index + 1].firstInGroup = true
      }
    })
    return dudesInRounds
  }

  function sleeping (): DudeInRound[] {
    return dudeStore.all().map((dude): DudeInRound => {
      return { dude, init:undefined, roll:undefined, firstInGroup: false, lastInGroup: false }
    }).filter((dudeInRound: DudeInRound): boolean => dudeInRound.dude.sleeping)
  }

  return { roll, fighting, sleeping, initRolls, getRoll, setRoll }
})
