import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactInfoWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  linkedIn?: StringNullableFilter;
  phone?: StringNullableFilter;
};
