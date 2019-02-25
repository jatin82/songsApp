package com.spotify.songs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Configuration
@EnableWebMvc
public class SpotifyApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(SpotifyApplication.class, args);
	}

	@Bean
	public MultipartResolver multipartResolver() {
	    CommonsMultipartResolver multipartResolver
	      = new CommonsMultipartResolver();
	    System.out.println("Bean init");
	    multipartResolver.setMaxUploadSize(2*5242880);
	    return multipartResolver;
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
	    registry.addResourceHandler("/*").addResourceLocations("classpath:/static/");
	    
	}
	
	
	
}
