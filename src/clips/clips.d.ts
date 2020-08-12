export type Clips = {
  id: number
  artists: {
    name: string
    city: string
    zipCode: number
    featuring: {
      name: string
    }
  }
  name: string
}