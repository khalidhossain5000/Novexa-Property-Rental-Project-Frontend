enum Role {
    TENANT,
    LANDLORD,
    ADMIN
}

enum UserStatus{
    ACTIVE,
    BAN
}

export interface IUser{
    success:boolean;
    message:string;
    data:{
        id:string;
        firstName:string;
        lastName:string;
        email:string;
        profilePhoto:string;
        role:Role;
        status:UserStatus;
        created_At:string;
        updated_At:string;
    }
}
