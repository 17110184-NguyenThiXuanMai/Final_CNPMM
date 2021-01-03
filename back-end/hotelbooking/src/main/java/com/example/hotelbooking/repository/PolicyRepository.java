package com.example.hotelbooking.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.hotelbooking.entity.Policy;

@Repository
public interface PolicyRepository extends PagingAndSortingRepository<Policy, Long>, JpaRepository<Policy, Long> {
	@Query("FROM Policy b WHERE b.title LIKE %:searchText% ORDER BY b.title ASC")
    Page<Policy> findAllPolicies(Pageable pageable, @Param("searchText") String searchText);
	
	@Query("select u from Policy u where u.confirm= 'Enable'")
	List<Policy> findAllEnableAndNotPageable();
}
