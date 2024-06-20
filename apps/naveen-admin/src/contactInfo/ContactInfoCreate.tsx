import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContactInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="linkedIn" source="linkedIn" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
