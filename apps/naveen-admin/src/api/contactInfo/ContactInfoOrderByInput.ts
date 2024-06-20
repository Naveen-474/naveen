import { SortOrder } from "../../util/SortOrder";

export type ContactInfoOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  linkedIn?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
