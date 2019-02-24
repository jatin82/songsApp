package com.spotify.songs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@Configuration
@EnableWebMvc
public class SpotifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpotifyApplication.class, args);
	}

	@Bean
	public MultipartResolver multipartResolver() {
	    CommonsMultipartResolver multipartResolver
	      = new CommonsMultipartResolver();
	    multipartResolver.setMaxUploadSize(2*5242880);
	    return multipartResolver;
	}
	
}
