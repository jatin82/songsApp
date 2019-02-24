package com.spotify.songs.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spotify.songs.exception.PlatformException;
import com.spotify.songs.model.ResponseData;
import com.spotify.songs.model.Song;
import com.spotify.songs.repository.SongsRepository;
import com.spotify.songs.utils.Constants;
import com.spotify.songs.utils.Utils;

@RestController
@CrossOrigin(origins = Constants.cors)
public class FileUploadController {

	@Autowired
	private SongsRepository songsRepo;

	@PostMapping("/db/init")
	public ResponseEntity<ResponseData> uploadFileController(@RequestParam("file") MultipartFile file)
			throws PlatformException, IOException {
		System.out.println("Uploading starts " + file);
		File fileSaved = Utils.upload(file);
		
		if (ObjectUtils.isEmpty(fileSaved)) {
			return new ResponseEntity<ResponseData>(
					new ResponseData<String>("File not found", Constants.FAILED, HttpStatus.NOT_FOUND),
					HttpStatus.NOT_FOUND);
		}
		List<Song> songs = Utils.readFromFile(fileSaved);
		songsRepo.saveAll(songs);
		return new ResponseEntity<ResponseData>(
				new ResponseData<String>("Database initialized", Constants.SUCCESS, HttpStatus.OK), HttpStatus.OK);

	}

}
