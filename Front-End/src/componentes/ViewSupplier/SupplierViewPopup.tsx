import React from "react";
import "./SupplierViewPopup.css";
import { Supplier } from "../../types/supllier";

interface SupplierViewPopupProps {
  supplier: Supplier;
  
}

const SupplierViewPopup: React.FC<SupplierViewPopupProps> = ({ supplier}) => {
  return (
    
      <div className="popup-container">
        <p><strong>Name:</strong> {supplier.name}</p>
        <p><strong>CNPJ:</strong> {supplier.cnpj}</p>
        <p><strong>Value:</strong> {supplier.value}</p>
        <p><strong>Status:</strong> {supplier.status ? "Pago" : "Não Pago"}</p>
        <p>Clique fora do card para voltar a lista de fornecedores</p>
      </div>
    
  );
};

export default SupplierViewPopup;
