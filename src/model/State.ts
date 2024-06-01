import type { DiceSize } from '@/model/DiceSize'
import type { Dude } from '@/model/Dude'

export interface State {
  darkMode: boolean
  diceSize: DiceSize
  dudes: Record<number,Dude>
}