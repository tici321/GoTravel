package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Clientes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "cpf", length = 11)
	private String cpf;

	@Column(name = "dataIda")
	private Date dataIda;

	@Column(name = "dataVolta")
	private Date dataVolta;

	@ManyToMany(cascade = {
			CascadeType.ALL
	})
	@JoinTable(name = "escolher_destino", joinColumns = { @JoinColumn(name = "cliente_fk") }, inverseJoinColumns = {
			@JoinColumn(name = "destino_fk") })
	private List<Destinos> destinos;

	public Clientes() {
		super();
	}

	public Clientes(Long id, String cpf, String origem, Date dataIda, Date dataVolta) {
		super();
		this.id = id;
		this.cpf = cpf;
		this.dataIda = dataIda;
		this.dataVolta = dataVolta;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getDataIda() {
		return dataIda;
	}

	public void setDataIda(Date dataIda) {
		this.dataIda = dataIda;
	}

	public Date getDataVolta() {
		return dataVolta;
	}

	public void setDataVolta(Date dataVolta) {
		this.dataVolta = dataVolta;
	}
}
