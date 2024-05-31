import type { Dude } from '@/model/Dude'

export interface DudeInRound {
  roll: number | undefined
  init: number | undefined
  dude: Dude
  firstInGroup: boolean
  lastInGroup: boolean
}
