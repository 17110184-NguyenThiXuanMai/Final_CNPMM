package com.example.hotelbooking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.hotelbooking.entity.Services;
import com.example.hotelbooking.repository.ServicesRepository;
import com.example.hotelbooking.service.IService;

@Service
public class ServicesServiceImpl implements IService<Services> {

	@Autowired
	private ServicesRepository servicesRepository;

	@Override
	public Page<Services> findAll(Pageable pageable, String searchText) {
		return servicesRepository.findAllServices(pageable, searchText);
	}

	@Override
	public Page<Services> findAll(Pageable pageable) {
		return servicesRepository.findAll(pageable);
	}
	
	@Override
	public List<Services> findAllEnableAndNotPageable() {
		return servicesRepository.findAllEnableAndNotPageable();
	}
	
	@Override
	public Services findById(Long id) {
		return servicesRepository.findById(id).get();
	}

	@Override
	public Services saveOrUpdate(Services services) {
		return servicesRepository.save(services);
	}
}
