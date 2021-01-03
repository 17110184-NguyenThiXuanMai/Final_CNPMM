package com.example.hotelbooking.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Table(name="imagesroomtype")
@Data

public class ImageRoomType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "roomtype_id", nullable = false)
	private RoomType roomtype;

}
