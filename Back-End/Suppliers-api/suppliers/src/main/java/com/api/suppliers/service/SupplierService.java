package com.api.suppliers.service;

import com.api.suppliers.model.Supplier;
import com.api.suppliers.repository.SupplierRepository;
import com.api.suppliers.utils.SupplierBody;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Optional<Supplier> getSupplierById(Long id) {
        return supplierRepository.findById(id);
    }

    public Supplier createSupplier(SupplierBody body) {
        Supplier supplier = Supplier.builder()
                .name(body.name())
                .cnpj(body.cnpj())
                .value(body.value())
                .status(body.status())
                .build();
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(Long id, Supplier supplierDetails) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Supplier not found"));

        supplier.setName(supplierDetails.getName());
        supplier.setCnpj(supplierDetails.getCnpj());
        supplier.setValue(supplierDetails.getValue());
        supplier.setStatus(supplierDetails.getStatus());

        return supplierRepository.save(supplier);
    }

    public Supplier deleteSupplier(Long id) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Supplier not found"));

        supplierRepository.delete(supplier);

        return supplier;
    }
}
