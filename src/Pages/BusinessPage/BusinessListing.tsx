import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import {UseDataContext} from '../../context/UseDataContext'
import { FlatButton } from '../../shared/FlatButton';
import {PhoneFilled, MailFilled, GlobalOutlined, UserOutlined, MailOutlined} from '@ant-design/icons'
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
  tagline?:string;
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
  const {dispatch} = UseDataContext();
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
    enabled: !!id && !!catId,
    staleTime: 1000 * 60 * 5,  // ✅ prevent undefined calls
  });

  if (error) return <p>Error loading businesses</p>;

  return (
    <section>
      <div className="container-fluid">
        <h2>
          Top {data?.limit} {data?.subcategory} in {data?.country}
        </h2>
        <p>
          We found <b>{data?.total}</b> listings in {data?.country}
        </p>

        <div>
          {data?.data?.map((item) => (
            <div key={item._id}>
              <div>
                <div>
                  <h3>{item.name}</h3>
                  <small>{item.address}</small>
                  <p>{item?.tagline}</p>
                  <div>
                    <div>
                      {item.phone}
                    </div>
                    <div><MailOutlined/> {item.email}</div>
                    <div>{item.website && <GlobalOutlined/>}</div>
                  </div>
                  </div>
              </div>

              <div>
                <FlatButton title='view profile'/>
                <FlatButton title='send Enquiry'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};