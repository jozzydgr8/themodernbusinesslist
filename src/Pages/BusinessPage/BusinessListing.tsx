import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { FlatButton } from '../../shared/FlatButton';
import {
  PhoneFilled,
  MailFilled,
  GlobalOutlined,
  EnvironmentFilled
} from '@ant-design/icons';
import { Loading } from '../../shared/Loading';
import { Col, Row } from 'antd';

// ================= TYPES =================
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
  tagline?: string;
}

interface BusinessResponse {
  data: Business[];
  total: number;
  country: string;
  limit: number;
  subcategory: string;
}

// ================= FETCH FUNCTION =================
const fetchBusinesses = async (
  catId?: string,
  id?: string
): Promise<BusinessResponse> => {
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
    `https://modernbusinesslistserver.vercel.app/categories/${catId}/subCategories/${id}/${countryId}/business`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch businesses");
  }

  return res.json();
};

// ================= COMPONENT =================
export const BusinessListing = () => {
  const { id, catId } = useParams();

  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery<BusinessResponse>({
    queryKey: ['business', catId, id],
    queryFn: () => fetchBusinesses(catId, id),
    enabled: !!id && !!catId,
  });

  // ================= STATES =================
  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="container-fluid">
        <p style={{ color: 'red' }}>
          {(error as Error).message || "Error loading businesses"}
        </p>
      </div>
    );
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="container-fluid">
        <p>No businesses found</p>
      </div>
    );
  }

  // ================= UI =================
  return (
    <section>
      <div className="container-fluid">
        <h2>
          Top {data.limit} {data.subcategory} in {data.country}
        </h2>

        <p>
          We found <b>{data.total}</b> listings in {data.country}
        </p>

        <div>
          {data.data.map((item) => (
            <div key={item._id} className="business-card">
              
              {/* CONTENT */}
              <div
                style={{
                  border: '1px solid #e2e6ea',
                  padding: '20px'
                }}
              >
                <h3>{item.name}</h3>

                {item.address && (
                  <small>
                    <EnvironmentFilled /> {item.address}
                  </small>
                )}

                {item.tagline && <p>{item.tagline}</p>}

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <a href=''>
                    <PhoneFilled /> {item.phone}
                  </a>

                  {item.email && (
                    <a href={`mailto:${item.email}`}>
                      <MailFilled /> Email
                    </a>
                  )}

                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GlobalOutlined /> Website
                    </a>
                  )}
                </div>
              </div>

              {/* ACTIONS */}
              <div
                style={{
                  width: '100%',
                  backgroundColor: "#e2e6ea",
                  padding: "20px",
                  marginBottom: '20px'
                }}
              >
                <FlatButton
                  title="View Profile"
                  className="btn btnPrimary"
                />

                <FlatButton
                  title="Send Enquiry"
                  className="btn btnDark"
                  icon={<MailFilled />}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};