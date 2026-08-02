export enum Role {
  ADMIN = "ADMIN",
  LANDLORD = "LANDLORD",
  TENANT = "TENANT",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  BAN = "BAN",
}

export interface IUserTypes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  role: Role;
  status: UserStatus;
  created_At: string;
  updated_At: string;
}

export interface IUser {
  success: boolean;
  message: string;
  data: IUserTypes;
}
