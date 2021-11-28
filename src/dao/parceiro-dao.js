module.exports = class ParceiroDao{

    constructor(bd){
        this.bd = bd
    }

    verParceiro() {
        return new Promise((resolve, reject) => {
            const query = "select * from PARCEIRO"
            this.bd.all(query, (error, response) => {
                if (error) reject(`Erro ao acessar o banco de dados. ${error}`)
                else resolve(response)
            })
        })
    }

   
    NovoParceiro(params){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO PARCEIRO (NOME, CPF, NACIONALIDADE, DATA_DE_NASCIMENTO, GENERO, IDENTIDADE_DE_GENERO, ORIENTACAO, EMAIL, SENHA, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7],params[8], params[9], params[10], params[11],params[12], params[13], id]
            this.bd.run(query,parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar usuário. ${error}`)
                else resolve('Usuario adicionado com sucesso')
            })
        })
    }

    DeleteParceiro(id){
        return new Promise((resolve, reject)=>{
            const query = 'DELETE FROM PARCEIRO WHERE ID = ?'
            this.bd.all(query, id, (error, response)=>{
                if(error) reject(`Erro ao deletar usuário. ${error}`)
                else resolve('Usuário excluido com sucesso')
            })
        })
    }

    EditParceiro(params, id){
        return new Promise((resolve, reject)=>{
            const query = 'UPDATE PARCEIRO SET NOME = (?), CNPJ = (?), DATA_DE_ABERTURA = (?), EMAIL = (?), SENHA = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7],params[8], params[9], params[10], params[11],params[12], params[13], id]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject (`Erro ao editar usuário. ${error}`)
                else resolve ('Usuário editado com sucesso')
            })
        })
    }
}