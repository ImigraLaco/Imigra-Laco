
class Imigrante{
    constructor(nome, cpf, nacionalidade, data_de_nascimento, genero, identidade_de_genero, orientacao, email, senha, rua, numero, cidade, estado, telefone){
        this.nome = nome;
        this.cpf = cpf;  
        this.nacionalidade = nacionalidade;  
        this.data_de_nascimento = data_de_nascimento;  
        this.genero = genero;  
        this.identidade_de_genero = identidade_de_genero;  
        this.orientacao = orientacao;  
        this.email = email;  
        this.senha = senha;  
        this.rua = rua;  
        this.numero = numero;  
        this.cidade = cidade;  
        this.estado = estado;  
        this.telefone = telefone;
    }
}

module.exports = Imigrante