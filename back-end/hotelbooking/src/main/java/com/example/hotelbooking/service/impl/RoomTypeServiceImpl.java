package com.example.hotelbooking.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.hotelbooking.entity.RoomType;
import com.example.hotelbooking.repository.RoomTypeRepository;
import com.example.hotelbooking.service.IService;

@Service
public class RoomTypeServiceImpl implements IService<RoomType> {
	
	@Autowired
	private RoomTypeRepository roomTypeRepository;

	@Override
	public Page<RoomType> findAll(Pageable pageable, String searchText) {
		return roomTypeRepository.findAllRoomTypes(pageable, searchText);
	}

	@Override
	public Page<RoomType> findAll(Pageable pageable) {
		return roomTypeRepository.findAll(pageable);
	}
	
	@Override
	public List<RoomType> findAllEnableAndNotPageable() {
		return roomTypeRepository.findAllEnableAndNotPageable();
	}
	
	@Override
	public RoomType findById(Long id) {
		return roomTypeRepository.findById(id).get();
	}

	@Override
	public RoomType saveOrUpdate(RoomType roomType) {
		return roomTypeRepository.save(roomType);
	}
}
