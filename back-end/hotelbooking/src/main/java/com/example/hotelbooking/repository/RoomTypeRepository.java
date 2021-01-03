package com.example.hotelbooking.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.hotelbooking.entity.RoomType;

@Repository
public interface RoomTypeRepository extends PagingAndSortingRepository<RoomType, Long>, JpaRepository<RoomType, Long>{
	@Query("FROM RoomType b WHERE b.titleRoomType LIKE %:searchText% OR b.type LIKE %:searchText% ORDER BY b.price ASC")
    Page<RoomType> findAllRoomTypes(Pageable pageable, @Param("searchText") String searchText);
	
//	@Query("select u from RoomType u where u.confirm= 'Enable'")
//	Page<RoomType> findByEnable(Pageable pageable);
	
	@Query("select u from RoomType u where u.confirm= 'Enable'")
	List<RoomType> findAllEnableAndNotPageable();
}

