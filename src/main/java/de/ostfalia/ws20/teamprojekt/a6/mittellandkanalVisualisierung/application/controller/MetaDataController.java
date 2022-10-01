package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.service.MetaDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping(path = "${spring.data.rest.base-path}", produces = MediaType.APPLICATION_JSON_VALUE)
public class MetaDataController {

    @Autowired
    private MetaDataService metaDataService;

    @GetMapping
    public String findAll() throws JsonProcessingException {
        return objectToBase64JsonString(metaDataService.findAll());
    }

    @GetMapping(path = "/laufzeit/{laufzeit}")
    public String findAllByLaufzeit(@PathVariable Integer laufzeit) throws JsonProcessingException {
        return objectToBase64JsonString(metaDataService.findByLaufzeit(laufzeit));
    }

    @GetMapping(path = "/signatur/{signatur}")
    public String getMetadataBySignatur(@PathVariable Integer signatur) throws JsonProcessingException {
        return objectToBase64JsonString(metaDataService.findBySignatur(signatur));
    }

    @GetMapping(path = "/laufzeit/{laufzeit}/{count}")
    public String findRandomMetadataByLaufzeit(@PathVariable Integer laufzeit, @PathVariable Integer count) throws JsonProcessingException {
        return objectToBase64JsonString(metaDataService.findRandomByLaufzeitAndCount(laufzeit, count));
    }

    @GetMapping(path = "/clustered")
    public String findAllClustered() throws IOException, URISyntaxException {
        return objectToBase64JsonString(metaDataService.getClusteredMetaDataJson());
    }

    @GetMapping(path = "/dictionary")
    public String getSignaturMetadataDictionary() throws JsonProcessingException {
        return objectToBase64JsonString(metaDataService.getSignaturMetadataDictionary());
    }

    private String objectToBase64JsonString(Object o) throws JsonProcessingException {
        // return new String(Base64.encodeBase64(new ObjectMapper().writeValueAsString(o).getBytes()));
        return new String(new ObjectMapper().writeValueAsString(o).getBytes());
    }
}
