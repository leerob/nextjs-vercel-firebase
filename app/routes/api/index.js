try {
    const server = require('../../lib/server');
    const ENV = process.env.NODE_ENV;

    server.get('/api/cities', (req, res) => {
        req.firebaseServer
            .collection(`cities-${ENV}`)
            .get()
            .then((snapshot) => {
                const cities = [];

                snapshot.forEach((doc) => {
                    cities.push(doc.data());
                });

                res.json({cities});
            })
            .catch((error) => {
                res.json({error});
            });
    });

    module.exports = server;
} catch (error) {
    // eslint-disable-next-line no-console
    console.log('API Error', error);
}
