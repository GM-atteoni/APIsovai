class DatabaseEventosMongo {

    constructor(evento) {
        this.evento = evento;
    }

    listarEventos(query = {}, pagination = { ignorar: 0, limitar: 10 }) {

        return this.evento
            .find(query)
            .skip(pagination.ignorar)
            .limit(pagination.limitar)
    }
    listarEvento(id) {

        return this.evento.findOne({ eventId: id }, function (err, req) {
            console.log(err);
        });
    }

}

module.exports = DatabaseEventosMongo;
