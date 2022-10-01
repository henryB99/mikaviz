package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "metadata")
public class MetaData {

    @Id
    @Column(name = "signature")
    private Integer signatur;

    @Column(name = "title")
    private String titel;

    @Column(name = "year")
    private Integer laufzeit;

    @Column(name = "longitude")
    private Double geoKoordinateX;

    @Column(name = "latitude")
    private Double geoKoordinateY;


    public Integer getSignatur() {
        return signatur;
    }

    public String getTitel() {
        return titel;
    }

    public Integer getLaufzeit() {
        return laufzeit;
    }

    public Double getGeoKoordinateX() {
        return geoKoordinateX;
    }

    public Double getGeoKoordinateY() {
        return geoKoordinateY;
    }
}
