import React, { useState, ChangeEvent, FormEvent } from "react";
import { Supplier, SupplierBody } from "../../types/supllier";

import "./EditForm.css"

interface EditFormProps {
    supplier: Supplier;
    onSave: (supplier: Supplier) => void;
    onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ supplier, onSave, onCancel }) => {
    const [editedSupplier, setEditedSupplier] = useState<Supplier>(supplier);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedSupplier((prevSupplier) => ({
            ...prevSupplier,
            [name]: name === "value" ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSave(editedSupplier);
    };

    return (
        <div className="edit-container">
            <form onSubmit={handleSubmit}>
                <div className="edit-controls">
                    <div className="edit-control">
                        <label>Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={editedSupplier.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="edit-control">
                        <label>CNPJ</label>
                        <input
                            type="text"
                            name="cnpj"
                            value={editedSupplier.cnpj}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="edit-control">
                        <label>Valor</label>
                        <input
                            type="number"
                            name="value"
                            value={editedSupplier.value}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="edit-control checked">
                        <label>Status</label>
                        <input
                            type="checkbox"
                            name="status"
                            checked={editedSupplier.status}
                            onChange={(e) =>
                                setEditedSupplier((prevSupplier) => ({
                                    ...prevSupplier,
                                    status: e.target.checked,
                                }))
                            }
                        />
                    </div>
                    <button type="button" className="edit-actions cancel" onClick={onCancel}> Cancelar </button>
                    <button className="edit-actions save" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
