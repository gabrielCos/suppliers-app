import React from "react";
import SupplierItem from "../Suplier_Item/Supplie_Item";
import "./Supplie_List.css";
import { Supplier } from "../../../types/supllier";

interface SupplierListProps {
    items: Supplier[];
    onEditSupplier: (supplier: Supplier) => void;
    onDeleteSupplier: (id: number) => void;
}

const SuppliersList: React.FC<SupplierListProps> = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <table className="suppliers-list">
                    <thead>
                        <tr className="suppliers-list-head">
                            <th>Name</th>
                            <th>CNPJ</th>
                            <th>Value</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <h2 className='expenses-list__fallback'>FOUND NO EXPENSES</h2>;
            </div>
        )
    }

    return (
        <table className="suppliers-list">
            <thead>
                <tr className="suppliers-list-head">
                    <th>Name</th>
                    <th>CNPJ</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((supplier) => (
                    <SupplierItem
                        key={supplier.id}
                        item={supplier}
                        onEdit={() => props.onEditSupplier(supplier)}
                        onDelete={() => props.onDeleteSupplier(supplier.id)}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default SuppliersList;
