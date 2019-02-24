package com.spotify.songs.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.spotify.songs.model.ResponseData;
import com.spotify.songs.utils.Constants;


@ControllerAdvice
public class ExceptionHandlers {
	ResponseEntity<String> response;

	HttpHeaders headers = new HttpHeaders();
	
	ResponseData data;
		    
	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<ResponseData> globalHandler(Exception ex,HttpServletRequest request){
		ex.getStackTrace();
		headers.setContentType(MediaType.APPLICATION_JSON);
		ex.printStackTrace();
		System.out.println("Internal Server Exception");
		data = new ResponseData<String>(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),Constants.FAILED,HttpStatus.INTERNAL_SERVER_ERROR);
		return new ResponseEntity<ResponseData>(data,headers,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value = IOException.class)
	public ResponseEntity<ResponseData> IOExceptionHandler(IOException ex, HttpServletRequest request){
		headers.setContentType(MediaType.APPLICATION_JSON);
		System.out.println("IOException");
		data = new ResponseData<String>(HttpStatus.UNPROCESSABLE_ENTITY.getReasonPhrase(),Constants.FAILED,HttpStatus.UNPROCESSABLE_ENTITY);
		return new ResponseEntity<ResponseData>(data,headers,HttpStatus.UNPROCESSABLE_ENTITY);
	}
	
	@ExceptionHandler(value = HttpRequestMethodNotSupportedException.class)
	public ResponseEntity<ResponseData> HttpRequestMethodNotSupportedExceptionHandler(HttpRequestMethodNotSupportedException ex, HttpServletRequest request){
		headers.setContentType(MediaType.APPLICATION_JSON);
		System.out.println("HttpRequestMethodNotSupportedException");
		data = new ResponseData<String>(HttpStatus.METHOD_NOT_ALLOWED.getReasonPhrase(),Constants.FAILED,HttpStatus.METHOD_NOT_ALLOWED);
		return new ResponseEntity<ResponseData>(data,headers,HttpStatus.METHOD_NOT_ALLOWED);
	}
}
