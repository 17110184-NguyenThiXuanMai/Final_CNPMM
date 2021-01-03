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

import com.example.hotelbooking.entity.Services;
import com.example.hotelbooking.resource.Resource;
import com.example.hotelbooking.service.IService;

@CrossOrigin(origins="http://localhost:8081")
@RestController
@RequestMapping("/api/test/services")

public class ServicesController implements Resource<Services> {
	@Autowired
	private IService<Services> servicesService;

	@Override
	public ResponseEntity<Page<Services>> findAll(Pageable pageable, String searchText) {
		return new ResponseEntity<>(servicesService.findAll(pageable, searchText), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Page<Services>> findAll(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
		try {
			return new ResponseEntity<>(servicesService.findAll(
					PageRequest.of(
							pageNumber, pageSize,
							sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
					)
			), HttpStatus.OK);
		} catch (NullPointerException e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@Override
	public ResponseEntity<List<Services>> findAllEnableAndNotPageable() {
		return new ResponseEntity<>(servicesService.findAllEnableAndNotPageable(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Services> findById(Long id) {
		return new ResponseEntity<>(servicesService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Services> save(Services services) {
		return new ResponseEntity<>(servicesService.saveOrUpdate(services), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Services> update(Services services) {
		return new ResponseEntity<>(servicesService.saveOrUpdate(services), HttpStatus.OK);
	}
	
	@GetMapping("/types")
	public  ResponseEntity<Set<String>> findAllTypeServices() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Restaurant & Bar", "Healthy", "Spa", "Features")), HttpStatus.OK);
    }
	
	@GetMapping("/confirm")
	public  ResponseEntity<Set<String>> findAllConfirm() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Enable", "Disable")), HttpStatus.OK);
    }
}
