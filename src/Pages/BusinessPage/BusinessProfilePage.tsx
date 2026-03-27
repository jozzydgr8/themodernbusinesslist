import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../shared/Loading";
import {Business} from '../../types';
import { FlatButton } from "../../shared/FlatButton";

// ================= TYPES =================
interface SingleBusinessResponse {
  data: Business;
}

// ================= FETCH FUNCTION =================
const fetchBusinessById = async (
  catId?: string,
  parentId?: string,
  businessId?: string
): Promise<SingleBusinessResponse> => {
  let countryId = "";

  const cached = localStorage.getItem("businesslistcountry");

  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      countryId = parsed?.countryId || "";
    } catch (err) {
      console.warn("Failed to parse cached country:", err);
    }
  }

  const res = await fetch(
    `https://modernbusinesslistserver.vercel.app/categories/${catId}/subCategories/${parentId}/${countryId}/business/${businessId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch business");
  }

  return res.json();
};

export const BusinessProfilePage = () => {
  const { catId, parentId, businessId } = useParams();

  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery<SingleBusinessResponse>({
    queryKey: ['business', catId, parentId, businessId],
    queryFn: () => fetchBusinessById(catId, parentId, businessId),
    enabled: !!catId && !!parentId && !!businessId,
  });

  // ================= STATES =================
  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="container-fluid">
        <p style={{ color: 'red' }}>
          {(error as Error).message || "Error loading business"}
        </p>
      </div>
    );
  }

  if (!data || !data.data) {
    return (
      <div className="container-fluid">
        <p>Business not found</p>
      </div>
    );
  }

  const business = data.data;

  return (
    <section>
      <div className="container-fluid">
      <h2>{business.name},  {business.state}</h2>
      {business.tagline && <q>{business.tagline}</q>}
      <p>reviews</p>
      {
                  business.logo && (
                    <div
                      className="businessLogo"
                      style={{
                        height: "100px",
                        width: "100px",
                        overflow: "hidden" // keeps image inside rounded corners
                      }}
                    >
                      <img
                        src={business.logo}
                        alt="business logo"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain" // or "cover" depending on your need
                        }}
                      />
                    </div>
                  )
                }
                <div>
                  <p>verified listing</p>
                  <p>premium member</p>
                </div>
      <h3>Company name</h3>
      <p>{business.name}</p>
      <h3>Address</h3>
      <p>{business.address}</p>
      <p>{business.phone}</p>
     {
      business.website && (
        <>
        <h3>
        website
        </h3>
        <p>{business.website}</p></>
      )
     }
     <div>working hours</div>
      <p>establishment year</p>
      <p>employees</p>

      <h3>Email</h3>
      <div>
        <FlatButton title="send enquiry"/>
        <FlatButton title="show email"/>
      </div>
      <h3>company description</h3>
      <p>{business.description}</p>
    </div>
    </section>
  );
};