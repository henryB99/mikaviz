package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "visualize_mlk_metadata")
public class MetaData {

    @Id
    @Column
    private Integer signatur;

    @Column
    private String titel;

    @Column
    private Integer laufzeit;

    @Column(name = "geo_koordinate_x")
    private Double geoKoordinateX;

    @Column(name = "geo_koordinate_y")
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
