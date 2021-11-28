const ParceiroDao = require('../dao/parceiro-dao');

module.exports = (app, bd) =>{
    
    const daoParceiro = new ParceiroDao(bd)

    app.get("/parceiro/ver", async (req, res) => {
        try {
            let parceiro = await daoParceiro.verParceiro()
            res.json({
                result: parceiro                
            });

        } catch (e) {
            res.json({ error: e.message });
        }
      
    });
    

    app.post('/parceiro/incluir', async (res, resp)=>{
        try{
            const body = res.body
            const params = [body.NOME, body.CPF, body.NACIONALIDADE, body.DATA_DE_NASCIMENTO, body.GENERO, body.IDENTIDADE_DE_GENERO, body.ORIENTACAO, body.EMAIL, body.SENHA, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE]

            const respostaNovoParceiro = await daoParceiro.novoParceiro(params)
            resp.json(respostaNovoParceiro)

        }catch(error){
            resp.json(error)
        }
    })

    app.delete('/parceiro/delete/:ID', async(res, resp)=>{
        try{
            const id = res.params.ID

            const respostaDeleteParceiro = await daoParceiro.deleteParceiro(id)
            resp.json(respostaDeleteParceiro)

        }catch(error){
            resp.json(error)
        }
    })

    app.put('/parceiro/edit/:ID', async(res, resp)=>{
        try{
            const body = res.body
            const params = [body.NOME, body.CPF, body.NACIONALIDADE, body.DATA_DE_NASCIMENTO, body.GENERO, body.IDENTIDADE_DE_GENERO, body.ORIENTACAO, body.EMAIL, body.SENHA, body.RUA, body.NUMERO, body.CIDADE, body.ESTADO, body.TELEFONE]
           
            const id = res.params.ID

            const respostaEditaParceiro = await daoParceiro.editParceiro(params, id)
            resp.json(respostaEditaParceiro)

        }catch(error){
            resp.json(error)
        }
    })
}