import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Dude } from '@/model/Dude'
import { setCookie } from '@/cookies'

export const getDudeStore = defineStore('dude', () => {

  let nextId: number = 1
  const defaultDudes: Record<number, Dude> = {}

  // fighter
  const dudes: Ref<Record<number, Dude>> = ref(defaultDudes)

  watch(() => JSON.stringify(dudes.value), (newValue, oldValue) => setCookie(dudes.value))

  // creates a blank new fighter and returns its ID
  function addBlank (): number {
    return add('', undefined, 0, true)
  }

  function add (name: string, ac: number | undefined, initModifier: number, friendly: boolean) {
    const id = nextId++
    dudes.value[id] = { id, name, ac, initModifier, friendly }
    return id
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

  function remove (id: number) {
    delete dudes.value[id]
  }

  return {
    dudes, all, get, add, addBlank, remove
  }
})
