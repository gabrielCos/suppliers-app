export type Supplier = {
    id: number;
    name: string;
    cnpj: string;
    value: number;
    status: boolean;
}
  
export type SupplierBody = Omit<Supplier, "id">;