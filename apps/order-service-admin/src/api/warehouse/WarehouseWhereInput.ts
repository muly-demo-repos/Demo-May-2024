import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WarehouseWhereInput = {
  capacity?: IntNullableFilter;
  contactEmail?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastUpdated?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  managerName?: StringNullableFilter;
  myname?: StringNullableFilter;
  name?: StringNullableFilter;
  operationalStatus?: "Option1";
};
