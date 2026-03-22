import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { Loading } from '../../shared/Loading';

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
  limit:number;
  subcategory:string
}


export const BusinessListing = () => {
  const { id, catId } = useParams();

  const getBusinesses = async () => {
    let countryId = "";

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

    if (!res.ok) throw new Error("error fetching businesses");

    return res.json(); // ✅ IMPORTANT
  };

  const { data, isLoading, error } = useQuery<BusinessResponse>({
    queryKey: ['business', id, catId], // ✅ include params
    queryFn: getBusinesses,
    enabled: !!id && !!catId, // ✅ prevent undefined calls
  });

  if (isLoading) return <Loading/>;
  if (error) return <p>Error loading businesses</p>;

  return (
    <section>
      <div className="container-fluid">
        <h2>
          Top {data?.limit} {data?.subcategory} in {data?.country}
        </h2>
        <p>
          We found {data?.total} listings in {data?.country}
        </p>

        <div>
          {data?.data?.map((item) => (
            <div key={item._id}>{item.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
};