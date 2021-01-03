package com.example.hotelbooking.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Table(name = "roomtypes")
@Data

public class RoomType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	private String titleRoomType;
	
	@NotNull
	private String bedType;
	
	@NotNull
	private String type;
	
	@NotNull
	private Double price;
	
	@NotNull
	private long size;
	
	@NotNull
	private int amount;
	
	@NotNull
	private int adults;
	
	@NotNull
	private int children;
	
	private boolean pets;
	
	private boolean breakfast;
	
	private boolean television;
	
	private boolean bath;
	
	private String confirm;
	
	@Column(columnDefinition="text", length=10485760)
	private String description;
	
	private String coverPhotoURL;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "roomtype")
	private Set<ImageRoomType> listImage = new HashSet<>();
}
