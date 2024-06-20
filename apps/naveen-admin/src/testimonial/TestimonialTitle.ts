import { Testimonial as TTestimonial } from "../api/testimonial/Testimonial";

export const TESTIMONIAL_TITLE_FIELD = "authorName";

export const TestimonialTitle = (record: TTestimonial): string => {
  return record.authorName?.toString() || String(record.id);
};
