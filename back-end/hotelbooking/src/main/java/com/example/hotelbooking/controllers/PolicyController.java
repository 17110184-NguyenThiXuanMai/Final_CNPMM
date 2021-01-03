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

import com.example.hotelbooking.entity.Policy;
import com.example.hotelbooking.resource.Resource;
import com.example.hotelbooking.service.IService;

@CrossOrigin(origins="http://localhost:8081")
@RestController
@RequestMapping("/api/test/policies")

public class PolicyController implements Resource<Policy> {
	@Autowired
	private IService<Policy> policyService;

	@Override
	public ResponseEntity<Page<Policy>> findAll(Pageable pageable, String searchText) {
		return new ResponseEntity<>(policyService.findAll(pageable, searchText), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Page<Policy>> findAll(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
		try {
			return new ResponseEntity<>(policyService.findAll(
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
	public ResponseEntity<List<Policy>> findAllEnableAndNotPageable() {
		return new ResponseEntity<>(policyService.findAllEnableAndNotPageable(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Policy> findById(Long id) {
		return new ResponseEntity<>(policyService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Policy> save(Policy policy) {
		return new ResponseEntity<>(policyService.saveOrUpdate(policy), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Policy> update(Policy policy) {
		return new ResponseEntity<>(policyService.saveOrUpdate(policy), HttpStatus.OK);
	}
	
	@GetMapping("/types")
	public  ResponseEntity<Set<String>> findAllTypes() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("CHECK IN", "CHECK OUT", "CANCELLATION", "PET POLICIES",
        		"EARLY ARRIVALS AND LATE DEPARTURES", "COVID-19")), HttpStatus.OK);
    }
	
	@GetMapping("/confirm")
	public  ResponseEntity<Set<String>> findAllConfirm() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Enable", "Disable")), HttpStatus.OK);
    }
}
