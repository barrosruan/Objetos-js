 import {Cliente} from "./Cliente.js"
 import {ContaCorrente} from "./ContaCorrente.js"

 const cliente1 = new Cliente();  
 cliente1.nome = "Ricardo";
 cliente1.cpf = 123456789;
 
 
 const cliente2 = new Cliente();
 cliente2.nome = "Ruan";
 cliente2.cpf = 987654321;


 const contaCorrenteRicardo = new ContaCorrente()
 contaCorrenteRicardo.agencia = 1001;
 contaCorrenteRicardo.cliente = cliente1;
 contaCorrenteRicardo.depositar(500);

 const conta2 = new ContaCorrente();
 conta2.cliente = cliente2;
 conta2.agencia = 1002;

 contaCorrenteRicardo.transferir(100, conta2);


 
 console.log(conta2);
 console.log(contaCorrenteRicardo);
