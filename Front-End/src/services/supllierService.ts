import { Supplier, SupplierBody } from "../types/supllier";

const url = 'http://localhost:8080/api'

export const getAllSupliers = async () => {
    const response = await fetch(`${url}/suppliers`);

    if (!response.ok) {
        return [];
    }

    const json = await response.json() as Supplier[];

    return json;
}

export const createSupplier = async (body: SupplierBody) => {
    const response = await fetch(`${url}/suppliers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        return null;
    }
    
    const json = await response.json() as Supplier;

    return json;
}

export const updateSupplier = async (id: number, body: SupplierBody) => {
    const response = await fetch(`${url}/suppliers/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        return null;
    }

    const json = await response.json() as Supplier;

    return json;
}

export const deleteSupplier = async (id: number) => {
    const response = await fetch(`${url}/suppliers/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        return null;
    }

    const json = await response.json() as Supplier;

    return json;
}