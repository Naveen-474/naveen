import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestimonialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="authorTitle" source="authorTitle" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
