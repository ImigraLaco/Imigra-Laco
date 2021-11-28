const ParceiroDao = require('../dao/Parceiro-dao');

module.exports = (app, bd) =>{
    
    const daoParceiro = new ParceiroDao(bd)
    
}