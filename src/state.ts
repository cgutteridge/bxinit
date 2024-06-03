import type { State } from '@/model/State'
import { getDudeStore } from '@/stores/dude'
import { getOptionStore } from '@/stores/option'

export function getState (): State {
  const dudeStore = getDudeStore()
  const optionStore = getOptionStore()
  return {
    dudes: dudeStore.dudes,
    darkMode: optionStore.darkMode,
    diceSize: optionStore.diceSize
  }
}

export function setState (state: State) {
  const dudeStore = getDudeStore()
  const optionStore = getOptionStore()
  if( state.hasOwnProperty('dudes')) {
    dudeStore.dudes = state.dudes
  }
  if( state.darkMode ) {
    optionStore.setDark()
  }else {
    optionStore.setLight()
  }
  optionStore.setDiceSize(state.diceSize)
}
