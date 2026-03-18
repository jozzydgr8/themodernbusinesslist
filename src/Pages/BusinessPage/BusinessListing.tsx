import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Business {
  _id: string;
  name: string;
  description?: string;
  user: string;
  country: string;
  state: string;
  address?: string;
  city?: string;
  subCategoryId: string;
  phone: string;
  email?: string;
  website?: string;
  logo?: string;
  isVerified: boolean;
}

interface BusinessResponse {
  data: Business[];
  total: number;
  country:string;
}
export const BusinessListing = () => {
  const { id, catId } = useParams();
  const [data, setData] = useState<BusinessResponse | null>(null);
  
  
 useEffect(() => {
  const getBusinesses = async () => {
    try {
      let countryId = ""; // declare here
      const cached = localStorage.getItem('businesslistcountry');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          countryId = parsed.countryId;
        } catch (err) {
          console.warn("Failed to parse cached country:", err);
        }
      }

      const res = await fetch(
        `https://modernbusinesslistserver.vercel.app/categories/${catId}/subCategories/${id}/${countryId}/business`
      );
      if (!res.ok) throw new Error("error fetching categories");

      const json = await res.json();
      console.log(json)
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };

  getBusinesses();
}, [id, catId]);

  return (
    <>
      {data?.data.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </>
  );
};