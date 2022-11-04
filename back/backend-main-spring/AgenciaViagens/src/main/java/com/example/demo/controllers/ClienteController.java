package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Clientes;
import com.example.demo.repositories.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired

	@GetMapping("/clientes")
	public List<Clientes> getTodosCliente() {
		return clienteRepository.findAll();
	}
	// ----------------------------------------------------

	@GetMapping("/cliente/{id}")
	public ResponseEntity<Clientes> getClienteById(@PathVariable Long id) {

		Clientes cliente = clienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Clientes inexistente"));
		return ResponseEntity.ok(cliente);
	}
	// ----------------------------------------------------

	@PostMapping("/cliente")
	public Clientes createClientes(@RequestBody Clientes cliente) {
		return clienteRepository.save(cliente);
	}

	// ----------------------------------------------------
	@PutMapping("/cliente/{id}")
	public ResponseEntity<Clientes> updateCliente(@PathVariable Long id, @RequestBody Clientes cliDetails) {
		Clientes cliente = clienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente inexistente"));

		cliente.setCpf(cliDetails.getCpf());
		cliente.setDataIda(cliDetails.getDataIda());
		cliente.setDataVolta(cliDetails.getDataVolta());
		Clientes newCliente = clienteRepository.save(cliente);

		return ResponseEntity.ok(newCliente);

	}

	// DELETE
	@DeleteMapping("/cliente/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCliente(@PathVariable Long id) {
		Clientes cliente = clienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente inexistente"));
		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
