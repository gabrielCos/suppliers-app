package com.api.suppliers.utils;

public record SupplierBody(
         String name,
         String cnpj,
         Double value,
         Boolean status
) {
}
