import { User } from './User';

export interface IdCardData {
  id? : number;
  fullName: string;
  firstName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  idNumber: string;
  expiryDate?: string;
  photoUrl: string;
  filePath?: string;
  validator?: User;
  imageUrl?: string;
  fileUrl?: string;
}
