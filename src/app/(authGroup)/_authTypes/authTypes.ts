enum Role {
    TENANT,
    LANDLORD,
    ADMIN
}


export interface TRegister{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role:Role
}
