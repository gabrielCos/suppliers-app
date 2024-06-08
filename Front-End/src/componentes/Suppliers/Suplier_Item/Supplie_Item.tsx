import React from "react";
import { useState } from "react";

import { Modal } from "../Modal/Modal";
import SupplierViewPopup from "../../ViewSupplier/SupplierViewPopup"

import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import "./Supplie_Item.css";
import { Supplier } from "../../../types/supllier";


interface SupplierItemProps {
    item: Supplier
    onDelete: () => void;
    onEdit: () => void;
}

const SupplierItem: React.FC<SupplierItemProps> = ({ item, onDelete, onEdit }) => {
    const [viewingSupplier, setViewingSupplier] = useState<Supplier | null>(null);

    const handleOpenPopup = () => {
        const supplier = item;
        setViewingSupplier(supplier);
    };

    const handleClosePopup = () => {
        setViewingSupplier(null);
    };

    const {  name, cnpj, status, value } = item

    return (
        <>
            <tr className="supplier-item">
                <td>{name}</td>
                <td>{cnpj}</td>
                <td>{value}</td>
                <td>
                    <span className={`supplier-status ${status ? "supplie-status__true" : "supplie-status__false"}`}>{status ? "Pago" : "Não Pago"}</span>
                </td>
                <td className="icons">
                    <EditOutlined onClick={onEdit} />
                    <EyeOutlined onClick={handleOpenPopup} />
                    <DeleteOutlined onClick={onDelete} />
                </td>
            </tr>

            {viewingSupplier && (<Modal title="Informações do fornecedor" open={!!viewingSupplier} onClose={handleClosePopup} type="info">
                <SupplierViewPopup supplier={viewingSupplier} />
            </Modal>)}
        </>
    );
};


export default SupplierItem;
