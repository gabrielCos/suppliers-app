import React, { useEffect, useState } from "react";

import Suppliers from "./componentes/Suppliers/Suppliers/Suppliers";
import SuplierForm from "./componentes/SupplierForm/SupplierForm"
import EditForm from "./componentes/EditForm/EditForm";
import { Modal } from "./componentes/Suppliers/Modal/Modal";
import { Supplier, SupplierBody } from "./types/supllier";

import { createSupplier, deleteSupplier, getAllSupliers, updateSupplier } from "./services/supllierService";

// Interface para definir o tipo de uma despesa

const App: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [editSuplier, setEditSupplier] = useState<Supplier | null>(null)

  useEffect(() => {
    getAllSupliers()
      .then((data) => setSuppliers(data))
  }, [])


  const addPopUpHandler = () => {
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const showEditSupplier = async (supplier: Supplier) => {
    setEditSupplier(supplier)
  }

  const handleCloseEdit = () => {
    setEditSupplier(null);
  };

  const addSupplierHandler = async (body: SupplierBody) => {
    const supplier = await createSupplier(body);

    if (supplier) {
      setSuppliers((prev) => [...prev, supplier])
    }


    handleClosePopup();
  };

  const updateSupplierHandler = async (updatedSupplier: Supplier) => {
    const updated = await updateSupplier(updatedSupplier.id, {
      name: updatedSupplier.name,
      cnpj: updatedSupplier.cnpj,
      value: updatedSupplier.value,
      status: updatedSupplier.status
    });

    if (updated) {
      setSuppliers((prevSuppliers) =>
        prevSuppliers.map((supplier) =>
          supplier.id === updatedSupplier.id ? updatedSupplier : supplier
        )
      );
      setEditSupplier(null); // Close the modal after saving
    }
  };

  const deleteSupplierHandler = async (supplierId: number) => {
    const supplier = await deleteSupplier(supplierId);

    if (supplier) {
      setSuppliers((prevSuppliers) => prevSuppliers.filter(supplier => supplier.id !== supplierId));
    }
  };

  return (
    <div>
      <Suppliers
        items={suppliers}
        onOpenPopup={addPopUpHandler}
        onAddSupplier={addSupplierHandler}
        onEditSupplier={showEditSupplier}
        onDeleteSupplier={deleteSupplierHandler}
      />

      <Modal title="Novo Fornecedor" open={isPopupOpen} onClose={handleClosePopup} type="form">
        <SuplierForm onClose={handleClosePopup} onSave={addSupplierHandler} />
      </Modal>

      <Modal title="Editando Fornecedor" open={editSuplier !== null} onClose={handleCloseEdit} type="edit">
        {editSuplier && <EditForm supplier={editSuplier} onCancel={handleCloseEdit} onSave={updateSupplierHandler} />}
      </Modal>
    </div>
  );
};

export default App;
