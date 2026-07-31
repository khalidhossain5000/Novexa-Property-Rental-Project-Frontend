import { IPropertyDetailsRes } from '@/lib/types';
import React from 'react';
interface IPropertyDetailsProps{
propertyDetailsRes:IPropertyDetailsRes
}
const PropertyDetails = ({propertyDetailsRes}:IPropertyDetailsProps) => {
    const details=propertyDetailsRes.data
    console.log(details,'details data finally')
    return (
        <div>
            
        </div>
    );
};

export default PropertyDetails;



// {
//     "id": "0f058886-128b-48a8-8b2a-d316f0e52838",
//     "title": "Affordable Bachelor Flat",
//     "description": "One-bedroom flat located close to public transport and shopping centers.",
//     "location": "Mohammadpur, Dhaka",
//     "price": "22000",
//     "amenities": "WiFi, Security, Lift",
//     "thumbnailImage": "https://i.ibb.co.com/dJWwQNvF/mountain.jpg",
//     "status": "AVAILABLE",
//     "categoryId": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//     "landLordId": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//     "created_At": "2026-07-11T15:10:05.121Z",
//     "updated_At": "2026-07-11T15:10:05.121Z",
//     "category": {
//         "id": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//         "name": "Duplex",
//         "created_At": "2026-07-06T15:33:44.076Z",
//         "updated_At": "2026-07-06T15:33:44.076Z"
//     },
//     "user": {
//         "id": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//         "firstName": "Landlord Rent",
//         "lastName": "Nest",
//         "email": "landlord@rentnest.com",
//         "profilePhoto": "https://i.ibb.co.com/MxG3yzrq/fb.jpg",
//         "role": "LANDLORD",
//         "status": "ACTIVE",
//         "created_At": "2026-07-09T08:44:18.328Z",
//         "updated_At": "2026-07-09T08:44:18.328Z"
//     }
// }