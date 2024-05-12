import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const WarehouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <DateTimeInput label="createdDate" source="createdDate" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="location" source="location" />
        <TextInput label="managerName" source="managerName" />
        <TextInput label="My Name" source="myname" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="operationalStatus"
          label="operationalStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
