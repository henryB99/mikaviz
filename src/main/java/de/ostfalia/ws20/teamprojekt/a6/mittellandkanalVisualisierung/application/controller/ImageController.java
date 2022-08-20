package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.TimeUnit;

/**
 * Contains all valid values for the parameter size.
 */
enum ImageSize {
    s("small"), m("medium"), l("large"), small("small"), medium("medium"), large("large"),
    S("small"), M("medium"), L("large"), SMALL("small"), MEDIUM("medium"), LARGE("large");

    private final String size;

    ImageSize(final String size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return this.size;
    }
}

/**
 * Image file server.
 * Images can be fetched by calling /api/images/{ SIGNATURE }?size={ SIZE }.
 */
@RestController
@RequestMapping("${spring.data.rest.base-path}/images")
public class ImageController {

    @GetMapping(
            value = "/{signature}",
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(
            @PathVariable(value = "signature") Long signature,
            @RequestParam(defaultValue = "large") ImageSize size
    ) throws IOException {
        InputStream in = getClass().getResourceAsStream("/images/"+ size +"/"+ signature +".jpg");
        if (in == null)
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(null);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(IOUtils.toByteArray(in));
    }
}
