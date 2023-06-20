package com.example.demo.repository;
import com.example.demo.entity.Moves;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovesRepository extends JpaRepository<Moves, Long> {
    // Aquí puedes agregar métodos personalizados de consulta si los necesitas
}