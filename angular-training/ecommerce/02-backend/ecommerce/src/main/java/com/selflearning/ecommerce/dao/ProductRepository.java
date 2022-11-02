package com.selflearning.ecommerce.dao;

import com.selflearning.ecommerce.entity.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200") // Port 4200 is Angular default port.
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);


    /*
    * Equivalent to SQL query:
    * SELECT * FROM Product p WHERE p.name LIKE CONCAT('%', :name, '%')
    *
    * Also, it automatically creates a REST path:
    * localhost:8080/api/products/search/findByNameContaining?name=<search term>
    */
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
}
