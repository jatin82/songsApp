package com.spotify.songs.utils;



import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import com.spotify.songs.model.Song;


public class Utils {
	
	public static File upload(MultipartFile file) throws IOException {
		String name = file.getOriginalFilename();
		File uploadFile = new File(name);
		uploadFile.createNewFile();
		FileOutputStream fos = new FileOutputStream(uploadFile);
		fos.write(file.getBytes());
		fos.close();
		return uploadFile;
	}
	
	
	public static List<Song> readFromFile(File file) throws IOException{
		List<Song> songs = new ArrayList<>();
		FileScanner scanner = new FileScanner(file);
		scanner.next();
		String row = scanner.next();
		while(row!="") {
			List<String> token = new ArrayList(Arrays.asList(row.split(Constants.splitByCommaRegex)));
			Song song = new Song();
			song.setName(token.get(0));
			song.setArtists(token.get(1));
			song.setDanceability(Double.parseDouble(token.get(2)));
			song.setEnergy(Double.parseDouble(token.get(3)));
			song.setSongKey(Integer.parseInt(token.get(4)));
			song.setLoudness(Double.parseDouble(token.get(5)));
			song.setMode(Integer.parseInt(token.get(6)));
			song.setSpeechiness(Double.parseDouble(token.get(7)));
			song.setAcousticness(Double.parseDouble(token.get(8)));
			song.setInstrumentalness(Double.parseDouble(token.get(9)));
			song.setLiveness(Double.parseDouble(token.get(10)));
			song.setValence(Double.parseDouble(token.get(11)));
			song.setTempo(Double.parseDouble(token.get(12)));
			song.setDuration(Long.parseLong(token.get(13)));
			song.setTime(Integer.parseInt(token.get(14)));
			song.setRank(Integer.parseInt(token.get(15)));
			songs.add(song);
			song.generateId();
			row = scanner.next();
		}
		return songs;
	}

}


