package modelo;


import java.text.SimpleDateFormat;
import java.util.Date;

public class Viagem {

	private int id;
	private String destino;
	private double valor;
	private Date ida;
	private Date volta;
	
	SimpleDateFormat sdf= new SimpleDateFormat("dd/MM/yyyy");	
	
	public Viagem(int id, String destino, double valor, Date ida, Date volta) {
		super();
		this.id = id;
		
		this.destino = destino;
		this.valor = valor;
		this.ida = ida;
		this.volta = volta;
	}
	
	public Viagem() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDestino() {
		return destino;
	}
	public void setDestino(String destino) {
		this.destino = destino;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	public Date getIda() {
		return ida;
	}
	public void setIda(Date ida) {
		this.ida = ida;
	}
	public Date getVolta() {
		return volta;
	}
	public void setVolta(Date volta) {
		this.volta = volta;
	}
}
	
	