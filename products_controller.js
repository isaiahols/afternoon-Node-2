
module.exports={
    create: (req, res) => {
        req.app.get('db').createProduct(req.body.name, req.body.description, req.body.price, req.body.imageurl).then(req.app.get('db')
        .readProducts()
        .then(all => {
            res.status(200).send(all);
        }))
        console.log('we got a post request')
    },
    
    getOne: (req, res) => {
        req.app.get('db')
        .readProduct(req.params.id)
        .then(product=>{
            console.log(product)
            res.status(200).send(product);
        })
    },

    getAll: (req, res) => {
        req.app.get('db')
        .readProducts()
        .then(all=>{
            res.status(200).send(all);
        })
    },

    update: (req, res) => {
        req.app.get('db')
        .updateProduct(req.query.desc,req.params.id)
        .then(res.status(200).send('all good'))
    },

    delete: (req, res) => {
        req.app.get('db')
        .deleteProduct(req.params.id)
        .then(res.status(200).send('works?'))
    },
}