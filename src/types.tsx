export type CountryType = {
  _id: string;
  name: string;
  currency: string;
  iso: string;
  createdAt: Date;
  updatedAt: Date;
};

//state
type PopulatedCountry = {
  _id: string;
  name: string;
};
export type StateType = {
  _id: string;
  name: string;
  countryId: PopulatedCountry;
  businessCount: number;
  createdAt: Date;
  updatedAt: Date;
};

//business categories
export type SubCategoryType = {
  _id: string;
  name: string;
  categoryId: string;
  businessCount?: number;
  createdAt: string;
  updatedAt: string;
}

export type BusinessCategory = {
  _id: string;
  name: string;
  businessCount: number;
  createdAt: string;
  updatedAt: string;
  subCategories: SubCategoryType[];
}

export type User = {
  email:string,
  token:string
}

export type sessionProps={
    email:string,
    password:string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Business {
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