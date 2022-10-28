package Aplicacao;

import DAO.ClienteDAO;
import modelo.Cliente;

public class MainCliente {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Cliente cliente=new Cliente();
		
		cliente.setNome("Joao");
		cliente.setEndereco("Rua das Flores");
		cliente.setUsuario("hey");
		cliente.setSenha("321");
		cliente.setEmail("joaozinho");
		
		ClienteDAO clienteDao=new ClienteDAO();
		//clienteDao.save(cliente);
		
		//att
		
		Cliente c1=new Cliente();
		c1.setNome("Nina");
		c1.setId(2);
		c1.setEndereco("Rua do Amor");
		c1.setUsuario("ninaa");
		c1.setSenha("321");
		c1.setEmail("ninazinha");
		
		clienteDao.update(c1);
		
		//delete
		//clienteDao.deleteByIdCliente(2);
		
		
		for(Cliente c:clienteDao.getCliente()) {
			System.out.println("Cliente: " +c.getNome());
		}
	}

}
