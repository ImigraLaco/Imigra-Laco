const ImigranteDao = require('../dao/imigrante-dao');

module.exports = (app, bd) =>{
    
    const daoImigrante = new ImigranteDao(bd)

    app.get("/imigrante/ver", async (req, res) => {
        try {
            let imigrante = await daoImigrante.verImigrante()
            res.json({
                result: imigrante                
            });

        } catch (e) {
            res.json({ error: e.message });
        }
      
    });
    

    app.post('/imigrante/incluir', async (res, resp)=>{
        try{
            const body = res.body
            const params = [body.MUSCULO, body.EXERCICIO, body.SERIES, body.REPETICOES]

            const respostaNovoImigrante = await daoImigrante.NovoImigrante(params)
            resp.json(respostaNovoImigrante)

        }catch(error){
            resp.json(error)
        }
    })

    app.delete('/imigrante/delete/:ID', async(res, resp)=>{
        try{
            const id = res.params.ID

            const respostaDeleteImigrante = await daoImigrante.DeleteImigrante(id)
            resp.json(respostaDeleteImigrante)

        }catch(error){
            resp.json(error)
        }
    })

    app.put('/imigrante/edit/:ID', async(res, resp)=>{
        try{
            const body = res.body
            // const params = [body.MUSCULO, body.EXERCICIO, body.SERIES, body.REPETICOES]

            const id = res.params.ID

            const respostaEditaImigrante = await daoImigrante.EditImigrante(params, id)
            resp.json(respostaEditaImigrante)

        }catch(error){
            resp.json(error)
        }
    })
    
}