package com.example.hotelbooking.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IService<T> {
	Page<T> findAll(Pageable pageable, String searchText);

	Page<T> findAll(Pageable pageable);
	
	List<T> findAllEnableAndNotPageable();
	
	T findById(Long id);
	
	T saveOrUpdate(T t);
}
