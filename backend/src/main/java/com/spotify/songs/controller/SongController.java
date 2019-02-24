package com.spotify.songs.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.spotify.songs.exception.PlatformException;
import com.spotify.songs.model.ResponseData;
import com.spotify.songs.model.Song;
import com.spotify.songs.repository.SongsRepository;
import com.spotify.songs.utils.Constants;

@RestController
@CrossOrigin(origins = Constants.cors)
public class SongController {

	@Autowired
	private SongsRepository songsRepo;

	@GetMapping("/songs")
	public ResponseEntity<ResponseData> getSongs(@PathParam("top") String top, @PathParam("artist") String artist, @PathParam("name") String name) throws PlatformException, IOException {
		List<Song> songs = new ArrayList<>();
		
		Pageable page =  new PageRequest(0, Integer.MAX_VALUE);
		if (!ObjectUtils.isEmpty(top)) {
			page = new PageRequest(0, Integer.parseInt(top));
		}
		
		if (!ObjectUtils.isEmpty(artist)) {
			songs = this.songsRepo.findByArtists(artist,page);
			
		} else if (!ObjectUtils.isEmpty(name)) {
			songs = this.songsRepo.findByName(name,page);
			
		} else if (!ObjectUtils.isEmpty(name)&&!ObjectUtils.isEmpty(name)) {
			songs = this.songsRepo.findByNameOrArtists(name,artist,page);
		} 
		else {
			songs = this.songsRepo.findAllByOrderByRank(page);
		} 

		return new ResponseEntity<ResponseData>(new ResponseData<List>(songs, Constants.SUCCESS, HttpStatus.OK),
				HttpStatus.OK);

	}

	@GetMapping("/song/{key:.+}")
	public ResponseEntity<ResponseData> getSongByKey(@PathVariable String key) {
		Optional<Song> op = this.songsRepo.findById(key);

		Song song;
		if (op.isPresent()) {
			song = op.get();
		} else {
			song = new Song();
		}

		return new ResponseEntity<ResponseData>(new ResponseData<Song>(song, Constants.SUCCESS, HttpStatus.OK),
				HttpStatus.OK);

	}

}
