import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let cliente = new Cliente()
cliente.nome = `Victor dos Santos Salles`
cliente.nomeSocial = `Vitao `
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

let telefone = new Telefone()
telefone.ddd = "012"
telefone.numero = "123456789"
cliente.telefones.push(telefone)

let telefone2 = new Telefone()
telefone2.ddd = "012"
telefone2.numero = "987654321"
cliente.telefones.push(telefone2)

let endereco = new Endereco()
endereco.rua = `R. dos Alcantares`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22120-000`
cliente.endereco = endereco

let dependente = new Cliente()
dependente.nome = `Lucas Vinicius da Silva Soares`
dependente.nomeSocial = `Jabul`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.telefones = (cliente.telefones.map(telefone => telefone.clonar()) as Telefone[])
dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log("\nCLIENTES\n-----------------------------------");
console.log(cliente);

console.log("\nDEPENDENTES\n-----------------------------------");
console.log(dependente);