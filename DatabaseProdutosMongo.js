class DatabaseProdutosMongo {

    constructor(produto) {
        this.produto = produto;
    }

    listarProdutosPorEvento(eventoId) {

        return this.produto.find({ eventId: eventoId }, function (err, req) { });
    }
    listarProduto(id) {

        return this.produto.findOne({ prodId: id }, function (err, req) { });
    }


}

module.exports = DatabaseProdutosMongo;




































// const Bebida = Mongoose.model('Bebida', {
//     _id: Number,
//     nome: String,
//     valor: String
// }, 'bebidas');

// const cerveja = new Bebida({
//     _id: 1,
//     nome: 'Caipirinha',
//     valor: '18,50'
// });
// const caipirinha = new Bebida({
//     _id: 2,
//     nome: 'Caipirinha',
//     valor: '18,50'
// });
// const refrigerante = new Bebida({
//     _id: 3,
//     nome: 'Refrigerante',
//     valor: '5,00'
// });
// const whisky = new Bebida({
//     _id: 4,
//     nome: 'Whisky',
//     valor: '25,00'
// });

// cerveja.save().then(() => console.log('Bebida adicionada!'));
// caipirinha.save().then(() => console.log('Bebida adicionada!'));
// refrigerante.save().then(() => console.log('Bebida adicionada!'));
// whisky.save().then(() => console.log('Bebida adicionada!'));

// const Comida = Mongoose.model('Comida', {
//     _id: Number,
//     nome: String,
//     valor: String
// });

// const fritas = new Comida({
//     _id: 1,
//     nome: 'Porção de Fritas',
//     valor: '24,50'
// }, { collection: 'comidas' });
// const calabresa = new Comida({
//     _id: 2,
//     nome: 'Calabresa Acebolada',
//     valor: '32,00'
// }, { collection: 'comidas' });
// const mandioca = new Comida({
//     _id: 3,
//     nome: 'Mandioca',
//     valor: '18,90'
// }, { collection: 'comidas' });
// const picanha = new Comida({
//     _id: 4,
//     nome: 'Porção de Picanha',
//     valor: '46,00'
// }, { collection: 'comidas' });

// fritas.save().then(() => console.log('Comida adicionada!'));
// calabresa.save().then(() => console.log('Comida adicionada!'));
// mandioca.save().then(() => console.log('Comida adicionada!'));
// picanha.save().then(() => console.log('Comida adicionada!'));

