const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};

/**
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});
 */

    /**
      const params = request.query; 
                    //request.params;// get the Route Params
                    //request.body;
        console.log(params);
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Jullyano L.'
    });
    */
