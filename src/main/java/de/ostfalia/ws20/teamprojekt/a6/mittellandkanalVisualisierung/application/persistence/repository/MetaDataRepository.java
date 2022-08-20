package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.persistence.repository;

import de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.persistence.entity.MetaData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MetaDataRepository extends JpaRepository<MetaData, Integer> {

    List<MetaData> findMetaDataByLaufzeit(@Param("laufzeit") Integer laufzeit);

    List<MetaData> findMetaDataBySignatur(@Param("signatur") Integer signatur);
}
