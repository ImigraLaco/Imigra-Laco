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

   
    novoParceiro(params){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO PARCEIRO (NOME, CNPJ, DATA_DE_ABERTURA, EMAIL, SENHA, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7],params[8], params[9]]
            this.bd.run(query,parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar usuário. ${error}`)
                else resolve('Usuario adicionado com sucesso')
            })
        })
    }

    deleteParceiro(id){
        return new Promise((resolve, reject)=>{
            const query = 'DELETE FROM PARCEIRO WHERE ID = ?'
            this.bd.all(query, id, (error, response)=>{
                if(error) reject(`Erro ao deletar usuário. ${error}`)
                else resolve('Usuário excluido com sucesso')
            })
        })
    }

    editParceiro(params, id){
        return new Promise((resolve, reject)=>{
            const query = 'UPDATE PARCEIRO SET NOME = (?), CNPJ = (?), DATA_DE_ABERTURA = (?), EMAIL = (?), SENHA = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7],params[8], params[9], id]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject (`Erro ao editar usuário. ${error}`)
                else resolve ('Usuário editado com sucesso')
            })
        })
    }
}