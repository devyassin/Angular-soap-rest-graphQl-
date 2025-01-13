export interface UserRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  accountLocked: boolean;
  enabled: boolean;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  users: User[];
  createdDate: Date;
  lastModifiedDate: Date;
}
