export type TInitialState = {
  dropDepth: number
  inDropZone: boolean
  playList: TSong[]
}

export type TSong = {
  id: string
  name: string
  url: string
}