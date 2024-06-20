import { SortOrder } from "../../util/SortOrder";

export type TestimonialOrderByInput = {
  authorName?: SortOrder;
  authorTitle?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
