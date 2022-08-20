package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.service;

import de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.persistence.entity.MetaData;
import de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.persistence.repository.MetaDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class MetaDataService {

    @Autowired
    private MetaDataRepository metaDataRepository;

    public Iterable<MetaData> findAll() {
        return metaDataRepository.findAll();
    }

    public List<MetaData> findByLaufzeit(Integer laufzeit) {
        return metaDataRepository.findMetaDataByLaufzeit(laufzeit);
    }

    public List<MetaData> findBySignatur(Integer signatur) {
        return metaDataRepository.findMetaDataBySignatur(signatur);
    }

    public List<MetaData> findRandomByLaufzeitAndCount(Integer laufzeit, Integer count) {
        List<MetaData> allList = findByLaufzeit(laufzeit);
        List<MetaData> resultList = new ArrayList<>();
        Random r = new Random();
        for (int i = 0; i < count && !allList.isEmpty(); i++){
            int randomIndex = r.nextInt(allList.size());
            resultList.add(allList.get(randomIndex));
            allList.remove(randomIndex);
        }
        return resultList;
    }

    public String getClusteredMetaDataJson() throws URISyntaxException, IOException {
        Path path = Paths.get(getClass().getClassLoader().getResource("clusteredMetaData.json").toURI());
        Stream<String> lines = Files.lines(path);
        String out = lines.collect(Collectors.joining(""));
        lines.close();
        return out;
    }

    public Map<Integer, MetaData> getSignaturMetadataDictionary(){
        HashMap<Integer, MetaData> result = new HashMap<>();
        findAll().forEach(MetaData -> result.put(MetaData.getSignatur(), MetaData));
        return result;
    }

}
