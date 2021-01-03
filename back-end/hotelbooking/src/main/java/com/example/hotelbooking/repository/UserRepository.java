package com.example.hotelbooking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.hotelbooking.entity.User;

@Repository

public interface UserRepository extends PagingAndSortingRepository<User, Long>, JpaRepository<User, Long> {
	@Query("FROM User b WHERE b.username LIKE %:searchText% ORDER BY b.username ASC")
    Page<User> findAllUsers(Pageable pageable, @Param("searchText") String searchText);
	
	@Query("select u from RoomType u where u.confirm= 'Enable'")
	List<User> findAllEnableAndNotPageable();
	
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
