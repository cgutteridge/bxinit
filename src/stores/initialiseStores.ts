import { getDudeStore } from '@/stores/dude'
import { getCookie } from '@/cookies'
import type { Dude } from '@/model/Dude'

export default function initialiseStores (): void {
  const dudeStore = getDudeStore()
  const fromCookie: object | null = getCookie()
  if (fromCookie !== null) {
    dudeStore.dudes = fromCookie as Record<number, Dude>
  } else {
    dudeStore.add('Bruh', 15, 0, true, true)
    dudeStore.add('Tufty', 10, 1, true, true)
    dudeStore.add('Enemies', 12, -2, false, true)
  }
}
