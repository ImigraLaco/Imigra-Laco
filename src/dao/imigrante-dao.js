module.exports = class ImigranteDao{

    constructor(bd){
        this.bd = bd
    }

    VerImigrante(){

        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM IMIGRANTE'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao acessa banco de dados. ${error}`)
                else resolve(response)
            })
        })
    }
}