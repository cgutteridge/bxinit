import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Dude } from '@/model/Dude'

export const getDudeStore = defineStore('dude', () => {

  let nextId: number = 3
  const defaultDudes: Record<number, Dude> = {
    1: {
      id: 1,
      name: 'Bruh',
      ac: 15,
      initModifier: 0
    },
    2: {
      id: 2,
      name: 'Tufty',
      ac: 12,
      initModifier: 2
    }
  }

  // fighter
  const dudes: Ref<Record<number, Dude>> = ref(defaultDudes)

  // creates a blank new fighter and returns its ID
  function add (): number {
    const newId = nextId++
    dudes.value[newId] = { id: newId, name: '', ac: undefined, initModifier: 0 }
    return newId
  }

  function all (): Dude[] {
    return Object.values(dudes.value)
  }

  function get (id: number): Dude {
    const dude: Dude | undefined = dudes.value[id]
    if (dude === undefined) {
      throw new Error(` ${id} not found`)
    }
    return dude
  }

  function setName (id: number, name: string) {
    get(id).name = name
  }

  function setAc (id: number, ac: number) {
    get(id).ac = ac
  }

  function setInitBonus (id: number, initModifier: number) {
    get(id).initModifier = initModifier
  }

  function incAc (id: number) {
    const dude: Dude = get(id)
    if (dude.ac === undefined) { dude.ac = 0}
    dude.ac++
  }

  function decAc (id: number) {
    const dude: Dude = get(id)
    if (dude.ac === undefined) { dude.ac = 0}
    dude.ac--
  }

  function incInitBonus (id: number) {
    const dude: Dude = get(id)
    dude.initModifier++
  }

  function decInitBonus (id: number) {
    const dude: Dude = get(id)
    dude.initModifier--
  }

  return {
    dudes, all, get, add, setName,
    setInitBonus, incInitBonus, decInitBonus,
    setAc, incAc, decAc
  }
})
