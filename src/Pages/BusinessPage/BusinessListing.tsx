import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Business {
  _id: string;  
  name: string;
  description?: string;

  // Owner
  user: string; // ObjectId as string

  // Location
  country: string;
  state: string;

  address?: string;
  city?: string;

  // Category
  subCategoryId: string;

  phone: string;
  email?: string;
  website?: string;

  logo?: string;

  isVerified: boolean;
}

export const BusinessListing  = ()=>{
    const {id, catId} = useParams();
    const [data, setData] = useState<Business[]>([])
    useEffect(()=>{
        const getBusinesses = async ()=>{
            const res = await fetch(`https://modernbusinesslistserver.vercel.app/categories/${catId}/subCategories/${id}/business`);
            if (!res.ok) {
                throw new Error("error fetching categories");
            }

            const json = await res.json();
            setData(json);
        }
        getBusinesses();
    },[id, catId])
    return(
        <>
            {
                data.map(data=>(
                    <div key={data._id}>
                        {data.name}
                    </div>
                ))
            }
        </>
    )
}