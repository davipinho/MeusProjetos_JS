const ModelProduto = require('../models/produto');

module.exports = 
{
    async List(req,res) {
    try {
    const produtos = await ModelProduto.findAll();

return res.json(produtos);

    } catch (erro) {
return console.error("Erro na Lista : ", erro);
    }
    },

    async Create(req,res) {
        try {
        const produtos = await ModelProduto.create(
            {
                Codigo : req.body.Codigo,
                Descricao : req.body.Descricao,
                DataCriacao : req.body.DataCriacao,
                DataAtualizacao : null
            }
        );
    
    return res.json(produtos);
    
        } catch (erro) {
    return console.error("Erro na Create : ", erro);
        }
        },

    async Update(req,res) {
            try {

                    const prod = await ModelProduto.findByPk(req.body.Codigo);
                    if (prod) {
                        prod.Descricao = req.body.Descricao;
                        prod.DataAtualizacao = new Date();
                        await prod.save();
                    }
        
        return res.json(prod);
        
            } catch (erro) {
        return console.error("Erro na Update : ", erro);
            }
            },

    async GetOne(req,res) {
                try {
    
                        const prod = await ModelProduto.findByPk(req.body.Codigo);
                        
                        return res.json(prod);
            
                } catch (erro) {
            return console.error("Erro na Update : ", erro);
                }
                },

    async Delete(req,res) {
                    try {
        
                            const prod = await ModelProduto.findByPk(req.body.Codigo);
                            await prod.destroy();
                            return res.json(prod);
                
                    } catch (erro) {
                return console.error("Erro na Update : ", erro);
                    }
                    }

}