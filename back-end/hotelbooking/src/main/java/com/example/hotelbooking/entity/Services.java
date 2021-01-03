package com.example.hotelbooking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Table(name = "services")
@Data

public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private String type;

	@NotNull
	private String title;
	
	@Column(columnDefinition="text", length=10485760)
	private String description;
	
	@NotNull
	private String url;
	
	private String confirm;
}
