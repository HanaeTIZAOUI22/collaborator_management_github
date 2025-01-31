package com.company.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // Appliquer CORS aux endpoints API
                    .allowedOrigins("http://localhost:4200") // Autoriser les requêtes venant d'Angular
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Autoriser ces méthodes HTTP
                    .allowedHeaders("*") // Autoriser tous les en-têtes
                    .allowCredentials(true); // Autoriser les cookies (si nécessaire)
            }
        };
    }
}
