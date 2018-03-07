export interface Note {
  $key: string;
  content: string;
  like: number;
  dislike: number;
  id?: string;
  time: number;
  timeStamp: number;
}
