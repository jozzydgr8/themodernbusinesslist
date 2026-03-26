import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../shared/Loading";
import {Business} from '../../types';

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
    <div className="container-fluid">
      <h2>{business.name},  {business.state}</h2>
      {business.tagline && <q>{business.tagline}</q>}
      <p>{business.description}</p>
      <p> {business.state}</p>
      <p>{business.phone}</p>
    </div>
  );
};