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