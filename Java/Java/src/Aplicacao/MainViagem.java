package Aplicacao;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import DAO.ViagemDAO;
import modelo.Viagem;

public class MainViagem {

	public static void main(String[] args) throws ParseException  {
		// TODO Auto-generated method stub
		Viagem viagem=new Viagem();
		
		
		SimpleDateFormat sdf= new SimpleDateFormat("dd/MM/yyyy");
		
		viagem.setIda(sdf.parse("30/10/2022"));
		viagem.setVolta(sdf.parse("06/02/2023"));
		viagem.setValor(6040.59);
		viagem.setDestino("Japão");
		
		ViagemDAO viagemDao=new ViagemDAO();
		//viagemDao.save(viagem);
		
		//att
		
		Viagem v1=new Viagem();
		v1.setIda(sdf.parse("25/10/2022"));
		v1.setVolta(sdf.parse("01/01/2025"));
		v1.setId(2);
	
		v1.setValor(3000.50);
		v1.setDestino("Mexico");
	
		
		viagemDao.update(v1);
		
		//delete
		//viagemDao.deleteByIdViagen(3);
		
		
		for(Viagem v:viagemDao.getViagem()) {
			System.out.println("Viagem: " +v.getDestino());
		}
	}

}
