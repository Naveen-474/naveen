import { ContactInfo as TContactInfo } from "../api/contactInfo/ContactInfo";

export const CONTACTINFO_TITLE_FIELD = "linkedIn";

export const ContactInfoTitle = (record: TContactInfo): string => {
  return record.linkedIn?.toString() || String(record.id);
};
