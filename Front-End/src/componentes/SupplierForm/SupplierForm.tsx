import React, { useState, ChangeEvent, FormEvent } from "react";

import "./SupplierForm.css"
import { SupplierBody } from "../../types/supllier";

interface SupplieFormProps {
    // isOpen: boolean;
    onClose: () => void;
    onSave: (supplier: SupplierBody) => void;
  }

const SupplieForm: React.FC<SupplieFormProps> = ({ onClose, onSave }) => {
    const [enteredName, setEnteredName] = useState<string>('');
    const [enteredCnpj, setEnteredCnpj] = useState<string>('');
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [enteredStatus, setEnteredStatus] = useState<boolean>(false);

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    };

    const cnpjChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredCnpj(event.target.value);
    };

    const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const statusChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredStatus(event.target.checked);
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const supplieData = {
            name: enteredName,
            cnpj: enteredCnpj,
            value: parseFloat(enteredValue),
            status: enteredStatus,
        };

        onSave(supplieData);
        setEnteredName('');
        setEnteredCnpj('');
        setEnteredValue('');
        setEnteredStatus(false);
    };

    return (
        <div className="form-container">
            <div className="backdrop" onClick={onClose}></div>
            <form className="supplie-form supplie-form-container" onSubmit={submitHandler}>
                <div className="new-supplier__controls">
                    <div className="new-supplier__control">
                        <label>Name</label>
                        <input type="text" value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div className="new-supplier__control">
                        <label>CNPJ</label>
                        <input type="text" value={enteredCnpj} onChange={cnpjChangeHandler} />
                    </div>
                    <div className="new-supplier__control">
                        <label>Value</label>
                        <input type="number" min="0.01" step="0.01" value={enteredValue} onChange={valueChangeHandler} />
                    </div>
                    <div className="new-supplier__control checked">
                        <label>Pago</label>
                        <input type="checkbox" checked={enteredStatus} onChange={statusChangeHandler} />
                    </div>
                    <div className="new-supplier__actions">
                        <button type="button" className="new-supplier__actions cancel" onClick={onClose}>Cancel</button>
                        <button type="submit" className="new-supplier__actions add">Add Supplier</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SupplieForm;
