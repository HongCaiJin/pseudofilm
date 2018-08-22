import {Photo} from './photo';
export class Location {
  id: number;
  name: string;
  address: string;
  isApprovalNeeded: boolean;
  locationPhotos: Photo[] = [];
}
