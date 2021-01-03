package com.example.hotelbooking.controllers;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotelbooking.entity.RoomType;
import com.example.hotelbooking.resource.Resource;
import com.example.hotelbooking.service.IService;

@CrossOrigin(origins="http://localhost:8081")
@RestController
@RequestMapping("/api/test/roomtypes")

public class RoomTypeController implements Resource<RoomType> {
	
	@Autowired
	private IService<RoomType> roomTypeService;

	@Override
	public ResponseEntity<Page<RoomType>> findAll(Pageable pageable, String searchText) {
		return new ResponseEntity<>(roomTypeService.findAll(pageable, searchText), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Page<RoomType>> findAll(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
		try {
			return new ResponseEntity<>(roomTypeService.findAll(
					PageRequest.of(
							pageNumber, pageSize,
							sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
					)
			), HttpStatus.OK);
		} catch(NullPointerException e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@Override
	public ResponseEntity<List<RoomType>> findAllEnableAndNotPageable() {
		return new ResponseEntity<>(roomTypeService.findAllEnableAndNotPageable(), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<RoomType> findById(Long id) {
		return new ResponseEntity<>(roomTypeService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<RoomType> save(RoomType roomType) {
		return new ResponseEntity<>(roomTypeService.saveOrUpdate(roomType), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<RoomType> update(RoomType roomType) {
		return new ResponseEntity<>(roomTypeService.saveOrUpdate(roomType), HttpStatus.OK);
	}
	
	@GetMapping("/types")
	public  ResponseEntity<Set<String>> findAllTypes() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Single", "Double", "Family", "Presidential")), HttpStatus.OK);
    }
	
	@GetMapping("/bedtypes")
	public  ResponseEntity<Set<String>> findAllBeds() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Single bed", "Double bed", "King bed", "Super-king bed", "Bunk bed")), HttpStatus.OK);
    }
	
	@GetMapping("/confirm")
	public  ResponseEntity<Set<String>> findAllConfirm() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Enable", "Disable")), HttpStatus.OK);
    }
}
