"use server"

export const getPropertyCategories=async()=>{
    const res=await fetch(`${process.env.BACKEND_URL}/api/categories`,{
        cache:"force-cache",
        next:{
            revalidate:60*60*24,
            tags:['property-categories']
        }
    })
    const result=await res.json()

    return result
}