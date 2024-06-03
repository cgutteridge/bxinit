import { getDudeStore } from '@/stores/dude'
import { getCookie } from '@/cookies'
import type { State } from '@/model/State'
import { getOptionStore } from '@/stores/option'
import { setState } from '@/state'

export default function initialiseStores (): void {
  const optionStore = getOptionStore()
  const dudeStore = getDudeStore()
  const fromCookie: State | undefined = getCookie() as State | undefined
  if (fromCookie !== undefined) {
    setState(fromCookie)
  }
  if (dudeStore.all().length == 0) {
    dudeStore.add('Bruh', 15, 0, true, true)
    dudeStore.add('Tufty', 10, 1, true, true)
    dudeStore.add('Enemies', 12, -2, false, true)
  }

}
