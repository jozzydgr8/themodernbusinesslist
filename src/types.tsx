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