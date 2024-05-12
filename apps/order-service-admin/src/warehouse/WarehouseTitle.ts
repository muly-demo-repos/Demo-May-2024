import { Warehouse as TWarehouse } from "../api/warehouse/Warehouse";

export const WAREHOUSE_TITLE_FIELD = "managerName";

export const WarehouseTitle = (record: TWarehouse): string => {
  return record.managerName?.toString() || String(record.id);
};
