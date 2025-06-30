export default interface CreateEpisodePayload {
  show: number,
  audio: File,
  photo: File,
  language: number,
  description: string,
  'categories-0': number,
  'categories-1': number,
}
