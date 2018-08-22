
import {Character} from './character';
import {Photo} from './photo';
import {Role} from './role';

export class Person {
  id: number;
  email: string;
  name: string;
  address: string;
  contactNumber: string;
  isRequired: boolean;
  character: Character;
  personPhoto: Photo;
  roles: Role[] = [];
}
