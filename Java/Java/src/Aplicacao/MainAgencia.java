package Aplicacao;

import DAO.AgenciaDAO;
import modelo.Agencia;

public class MainAgencia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Agencia agencia=new Agencia();
		agencia.setNome("Leticia");
		agencia.setEndereco("Rua dos Passáros, número 1633. São Paulo, Brasil");
		
		AgenciaDAO agenciaDao=new AgenciaDAO();
		//agenciaDao.save(agencia);
		
		//att
		
		Agencia a1=new Agencia();
		a1.setNome("Go Travel");
		a1.setId(1);
		a1.setEndereco("Av. Brigadeiro, 600");
		
		//agenciaDao.update(a1);
		
		//delete
		agenciaDao.deleteByIdAgencia(2);
		
		
		for(Agencia a:agenciaDao.getAgencia()) {
			System.out.println("Agencia: " +a.getNome());
		}
	}

}
