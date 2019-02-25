package com.spotify.songs;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spotify.songs.utils.Constants;

@RestController
@CrossOrigin(origins = Constants.cors)
public class WelcomePageContrller {

	
	@GetMapping("")
	public void redirectToIndex(HttpServletResponse response) throws IOException {
		response.sendRedirect("./index.html");
	}
	
	
}
