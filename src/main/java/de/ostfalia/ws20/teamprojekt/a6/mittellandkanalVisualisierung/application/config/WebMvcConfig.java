package de.ostfalia.ws20.teamprojekt.a6.mittellandkanalVisualisierung.application.config;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.mvc.WebContentInterceptor;

import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class WebMvcConfig implements WebMvcConfigurer {
    /**
     * CORS configuration.
     * Allows for backend calls by the frontend from the specified origin.
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("http://localhost:3000");
    }

    /**
     * Cache-Control configuration.
     * All resources mapped to the specified locations should be cached for a year.
     * This should include all static resources and other resources that are unlikely to change.
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        WebContentInterceptor interceptor = new WebContentInterceptor();
        interceptor.addCacheMapping(CacheControl
                .maxAge(365, TimeUnit.DAYS)
                .noTransform()
                .mustRevalidate(),
        "/api/images/**", "/api/dictionary", "/api/clustered");
        registry.addInterceptor(interceptor);
    }
}
