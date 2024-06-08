import React from "react";
import "./Suppliers_Filter.css";


interface ExpensesFilterProps {
    selected: string;
    onChangeFilter: (selectedYear: string) => void;
}

const SuppliersFilter: React.FC<ExpensesFilterProps> = (props) => {
    const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="suppliers-filter">
            <div className="suppliers-filter__control">
                <label>Ordernar por</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="Todos">Todos</option>
                    <option value="Nome">Nome</option>
                    <option value="Valor">Valor</option>
                    <option value="Status">Não pagos</option>
                </select>
            </div>
        </div>
    );
};

export default SuppliersFilter;
