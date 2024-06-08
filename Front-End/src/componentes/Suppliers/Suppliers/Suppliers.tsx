import React, { useState } from "react";

import SuppliersList from "../Suppliers_List/Supplie_List";
import SuppliersFilter from "../Supplier_Filter/Suppliers_Filter";

import "./Suppliers.css";
import { Supplier } from "../../../types/supllier";


interface SuppliersProps {
  items: Supplier[];
  onAddSupplier: (supplier: Supplier) => void;
  onEditSupplier: (supplier: Supplier) => void;
  onDeleteSupplier: (id: number) => void;
  onOpenPopup: () => void;
}

const Suppliers: React.FC<SuppliersProps> = (props) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  const filterChangeHandler = (selectedFilter: string) => {
    setSelectedFilter(selectedFilter);
  };

  // Copy and sort suppliers based on the selected filter
  const sortedSuppliers = React.useMemo(() => {
    return [...props.items].sort((a, b) => {
      if (selectedFilter === "Nome") {
        return a.name.localeCompare(b.name);
      }
      if (selectedFilter === "Valor") {
        return a.value - b.value;
      }
      if (selectedFilter === "Status") {
        return Number(a.status) - Number(b.status)
      }
      return a.value - b.value;
    });
  }, [props.items, selectedFilter]);

  return (
    <div className="suppliers">
      <div className="upper">
        <p>Fornecedores</p>
        <button onClick={props.onOpenPopup}>Novo Fornecedor</button>
      </div>
      <SuppliersFilter
        selected={selectedFilter}
        onChangeFilter={filterChangeHandler}
      />
      <SuppliersList
        items={sortedSuppliers}
        onEditSupplier={props.onEditSupplier}
        onDeleteSupplier={props.onDeleteSupplier}
      />
    </div>
  );
};

export default Suppliers;
