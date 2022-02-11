import request  from 'request';

export const getImagen = async() => {

    try {
        const client_id = '45e315e8202f43299e0099082d318d94';
        const client_secret = '885c98dc8c3e46e1b70d2690229e10e3';
        
        const authOptions = {
          url: 'https://accounts.spotify.com/api/token',
          headers: {
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
          },
          form: {
            grant_type: 'client_credentials'
          },
          json: true
        };
        
        const resp = await new Promise((resolve, reject) => {
            request.post(authOptions, function(error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode === 200) {
                        resolve(body);
                    } else {
                        reject(response.body);
                    }
                }
            });
        });
        return resp;
    } catch (error) {
        // manejo del error
        return 'Not found';
    }
}