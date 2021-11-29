
class Parceiro{
    constructor(nome, cnpj, nacionalidade, data_de_abertura, email, senha, rua, numero, cidade, estado, telefone){
        this.nome = nome;
        this.cnpj = cnpj;  
        this.nacionalidade = nacionalidade;  
        this.data_de_abertura = data_de_abertura;          
        this.email = email;  
        this.senha = senha;  
        this.rua = rua;  
        this.numero = numero;  
        this.cidade = cidade;  
        this.estado = estado;  
        this.telefone = telefone;
    }
}

module.exports = Parceiro