import { User } from './User';

export interface IdCardData {
  fullName: string;
  firstName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  idNumber: string;
  expiryDate: string;
  photoUrl: string;
  validator?: User;
}
