package com.example.hotelbooking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.hotelbooking.entity.Policy;
import com.example.hotelbooking.repository.PolicyRepository;
import com.example.hotelbooking.service.IService;

@Service
public class PolicyServiceImpl implements IService<Policy> {

	@Autowired
	private PolicyRepository policyRepository;

	@Override
	public Page<Policy> findAll(Pageable pageable, String searchText) {
		return policyRepository.findAllPolicies(pageable, searchText);
	}

	@Override
	public Page<Policy> findAll(Pageable pageable) {
		return policyRepository.findAll(pageable);
	}
	
	@Override
	public List<Policy> findAllEnableAndNotPageable() {
		return policyRepository.findAllEnableAndNotPageable();
	}
	
	@Override
	public Policy findById(Long id) {
		return policyRepository.findById(id).get();
	}

	@Override
	public Policy saveOrUpdate(Policy policy) {
		return policyRepository.save(policy);
	}
}
