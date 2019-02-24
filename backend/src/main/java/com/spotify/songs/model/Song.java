package com.spotify.songs.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="Song")
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class Song {

	@Id
	@Column( length=200)
	private String id;

	private String name;

	private String artists;

	private double danceability;

	private double energy;

	private int songKey;

	private double loudness;

	private int mode;

	private double speechiness;

	private double acousticness;

	private double instrumentalness;

	private double liveness;

	private double valence;

	private double tempo;

	private long duration;

	private int time;

	@JsonProperty("rank")
	private int ranking;

	public void generateId() {
		this.id = this.name+"||"+this.artists;
	}

	public String getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArtists() {
		return artists;
	}

	public void setArtists(String artists) {
		this.artists = artists;
	}

	public double getDanceability() {
		return danceability;
	}

	public void setDanceability(double danceability) {
		this.danceability = danceability;
	}

	public double getEnergy() {
		return energy;
	}

	public void setEnergy(double energy) {
		this.energy = energy;
	}

	public int getSongKey() {
		return songKey;
	}

	public void setSongKey(int key) {
		this.songKey = key;
	}

	public double getLoudness() {
		return loudness;
	}

	public void setLoudness(double loudness) {
		this.loudness = loudness;
	}

	public int getMode() {
		return mode;
	}

	public void setMode(int mode) {
		this.mode = mode;
	}

	public double getSpeechiness() {
		return speechiness;
	}

	public void setSpeechiness(double speechiness) {
		this.speechiness = speechiness;
	}

	public double getAcousticness() {
		return acousticness;
	}

	public void setAcousticness(double acousticness) {
		this.acousticness = acousticness;
	}

	public double getInstrumentalness() {
		return instrumentalness;
	}

	public void setInstrumentalness(double instrumentalness) {
		this.instrumentalness = instrumentalness;
	}

	public double getLiveness() {
		return liveness;
	}

	public void setLiveness(double liveness) {
		this.liveness = liveness;
	}

	public double getValence() {
		return valence;
	}

	public void setValence(double valence) {
		this.valence = valence;
	}

	public double getTempo() {
		return tempo;
	}

	public void setTempo(double tempo) {
		this.tempo = tempo;
	}

	public long getDuration() {
		return duration;
	}

	public void setDuration(long duration) {
		this.duration = duration;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public int getRank() {
		return ranking;
	}

	public void setRank(int rank) {
		this.ranking = rank;
	}
	
}
