package com.spotify.songs.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.spotify.songs.model.Song;

public interface SongsRepository extends JpaRepository<Song, String>{

	
	List<Song> findAllByOrderByRank(Pageable page);
	List<Song> findAllByOrderByRank();
	List<Song> findByArtists(String artists,Pageable page);
	List<Song> findByName(String name,Pageable page);
	List<Song> findByNameOrArtists(String name,String artists,Pageable page);
}

