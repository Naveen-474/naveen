import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestimonialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="authorTitle" source="authorTitle" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
