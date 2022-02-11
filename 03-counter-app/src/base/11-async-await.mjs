import request  from 'request';

export const getImagen = async() => {

    try {
        const client_id = 'cliend_id_here';
        const client_secret = 'client_secret_here';
        
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
