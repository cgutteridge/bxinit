import { getDudeStore } from '@/stores/dude'

export default function initialiseStores (): void {
  const dudeStore = getDudeStore()
  dudeStore.add('Bruh',15,0,true)
  dudeStore.add('Tufty',10,1,true)
  dudeStore.add('Enemies',12,-2,false)
}