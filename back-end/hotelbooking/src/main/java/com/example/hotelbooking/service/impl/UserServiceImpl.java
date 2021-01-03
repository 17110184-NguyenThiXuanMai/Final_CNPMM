package com.example.hotelbooking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.hotelbooking.entity.User;
import com.example.hotelbooking.repository.UserRepository;
import com.example.hotelbooking.service.IService;

@Service
public class UserServiceImpl implements IService<User>{
	@Autowired
	private UserRepository userRepository;

	@Override
	public Page<User> findAll(Pageable pageable, String searchText) {
		return userRepository.findAllUsers(pageable, searchText);
	}

	@Override
	public Page<User> findAll(Pageable pageable) {
		return userRepository.findAll(pageable);
	}
	
	@Override
	public List<User> findAllEnableAndNotPageable() {
		return userRepository.findAllEnableAndNotPageable();
	}
	
	@Override
	public User findById(Long id) {
		return userRepository.findById(id).get();
	}

	@Override
	public User saveOrUpdate(User user) {
		return userRepository.save(user);
	}
}
