import * as z from "zod"; 



export const propertySchema=z.object({
    title:z.string().min(1,"Title is Required"),
    description:z.string().min(1,"description is Required"),
    location:z.string().min(1,"location is Required"),
    price:z.int().min(1,"price is Required"),
    amenities:z.string().min(1,"amenities is Required"),
    thumbnailImage:z.string().min(1,"thumbnailImage is Required"),
    categoryId:z.string().min(1,"category is Required"),
})
