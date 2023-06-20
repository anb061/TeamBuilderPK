package com.example.demo.repository;

import com.example.demo.entity.Spreads;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpreadsRepository extends JpaRepository<Spreads, Long> {
    // Aquí puedes agregar métodos personalizados de consulta si los necesitas
}
