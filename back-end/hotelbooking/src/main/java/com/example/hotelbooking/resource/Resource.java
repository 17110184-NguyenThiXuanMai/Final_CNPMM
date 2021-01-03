package com.example.hotelbooking.resource;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface Resource<T> {
	@GetMapping("/search/{searchText}")
	ResponseEntity<Page<T>> findAll(Pageable pageable, @PathVariable String searchText);

	@GetMapping("/admin")
	ResponseEntity<Page<T>> findAll(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);
	
	@GetMapping("/findallenableandnotpageable")
	ResponseEntity<List<T>> findAllEnableAndNotPageable();
	
	@GetMapping("{id}")
	ResponseEntity<T> findById(@PathVariable Long id);
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	ResponseEntity<T> save(@RequestBody T t);
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	ResponseEntity<T> update(@RequestBody T t);
}
