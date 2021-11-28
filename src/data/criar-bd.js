/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== IMIGRANTE
const IMIGRANTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "IMIGRANTE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(255),
    "CPF" varchar(255),
    "NACIONALIDADE" varchar(255),
    "DATA_DE_NASCIMENTO" varchar(255),
    "GENERO" varchar(255),
    "IDENTIDADE_DE_GENERO" varchar(255),
    "ORIENTACAO" varchar(255),    
    "EMAIL" varchar(255),
    "SENHA" varchar(255),    
    "RUA" varchar(255),
    "NUMERO" varchar(255),
    "CIDADE" varchar(255),
    "ESTADO" varchar(255),
    "TELEFONE" varchar(255)
  );`;

const ADD_IMIGRANTE_DATA = `
INSERT INTO IMIGRANTE (ID, NOME, CPF, NACIONALIDADE, DATA_DE_NASCIMENTO, GENERO, EMAIL, SENHA, RUA, NUMERO, CIDADE, ESTADO, TELEFONE)
VALUES 
(1, 'Aba','38210986198','Angola','15/03/1986','MASCULINO','Cisgenero','Heterossexual','Aba@gmail.com','12345678','Rua Bela Vista ','2359','Trindade','Goiás','(24) 7714-2033'),
(2, 'Dune','59391195229','Guine Bissau','20/08/1996',,'MASCULINO','Cisgenero','Heterossexual','Dune@gmail.com','12345678','Rua São Luiz ','3603','Santana','Amazonas','(64) 9641-0845'),
(3, 'Zafari','66520778257','Cabo Verde','11/12/1991','Ezequiel','MASCULINO','Nao Binario','Assexual','Zafari@gmail.com','12345678','Rua Bela Vista ','6195','Alvorada','Rondônia','(58) 3354-1813'),
(4, 'Bomani','51014756880','Moçanbique','06/06/1989','Túlio','MASCULINO','Transgenero','Pansexual','Bomani@gmail.com','12345678','Rua São Luiz ','8637','São Leopoldo','São Paulo','(12) 4223-8343'),
(5, 'Mara','33358228118','Nigéria','16/04/1978','Carlota','FEMININO','Cisgenero','Heterossexual','Mara@gmail.com','12345678','Rua Doze ','8553','Recife','Tocantins','(30) 6369-1414')
`

//===== PARCEIRO
const PARCEIRO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PARCEIRO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(255),
    "CNPJ" varchar(255),   
    "DATA_DE_ABERTURA" varchar(255),     
    "EMAIL" varchar(255),
    "SENHA" varchar(255),    
    "RUA" varchar(255),
    "NUMERO" varchar(255),
    "CIDADE" varchar(255),
    "ESTADO" varchar(255),
    "TELEFONE" varchar(255)
  );`;

  const ADD_PARCEIRO_DATA = `
INSERT INTO PARCEIRO (ID, NOME, CNPJ, DATA_DE_ABERTURA, EMAIL, SENHA, RUA, NUMERO, CIDADE, ESTADO, TELEFONE)
VALUES 
(1,'Stella e Fernando Construções Ltda','91997946000120','03/02/2016','contato@stellaefernandoconstrucoesltda.com.br','12345678','Rua Bela Vista ','2359','Trindade','Goiás','(62) 2850-1035'),
(2,'Geraldo e Breno Gráfica Ltda','12272684000160','09/01/2016','treinamento@geraldoebrenograficaltda.com.br','12345678','Rua São Luiz ','3603','Santana','Amazonas','(92) 5578-8682'),
(3,'Yago e Amanda Telecom Ltda','34212673000127','05/09/2012','sac@yagoeamandatelecomltda.com.br','12345678','Rua Bela Vista ','6195','Alvorada','Rondônia','(69) 2729-7662'),
(4,'Diego e Isabela Corretores Associados ME','94523388000159','04/06/2013','administracao@diegoeisabelacorretoresassociadosme.com.br','12345678','Rua São Luiz ','8637','São Leopoldo','São Paulo',(59) 4745-0144'),
(5,'Paulo e Sophia Informática ME','92976861000128','09/01/2009','faleconosco@pauloesophiainformaticame.com.br','12345678','Rua Doze ','8553','Recife','Tocantins','(11) 4791-5977')

`
function criaTabelaImigrante() {
    db.run(IMIGRANTE_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de IMIGRANTE", error);
    });
}


function populaTabelaImigrante(() {
    db.run(ADD_IMIGRANTE_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de IMIGRANTE", error);
    });
}

function criaTabelaParceiro() {
    db.run(PARCEIRO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de PARCEIRO", error);
    });
}


function populaTabelaParceiro() {
    db.run(ADD_PARCEIRO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de PARCEIRO", error);
    });
}


db.serialize( ()=> {
    criaTabelaImigrante();
    populaTabelaImigrante();
    criaTabelaParceiro();
    populaTabelaParceiro();
});
