import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestimonialWhereInput = {
  authorName?: StringNullableFilter;
  authorTitle?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
