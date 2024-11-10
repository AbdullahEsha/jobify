export type TCompany = {
  _id?: string;
  name: string;
  location: string;
  description?: string;
  industry: string;
  website?: string;
  jobs?: string[]; // Array of Job IDs
  updatedAt?: Date;
  createdAt?: Date;
};
