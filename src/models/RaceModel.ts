import { PonyModel } from '@/models/PonyModel';
export interface RaceModel {
  name: string;
  ponies: Array<PonyModel>;
  id: number;
  startInstant: string;
}
