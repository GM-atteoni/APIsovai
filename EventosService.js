const Mongoose = require('mongoose');

class EventosService {

    constructor() {

    }

    static conectar() {
        const url = 'mongodb+srv://movileHack:1234@cluster0-emzgx.mongodb.net/test?retryWrites=true';
        Mongoose.connect(url, { useNewUrlParser: true });

        const eventoSchema = new Mongoose.Schema({
            eventId: {
                type: Number,
                required: false
            },
            nomeEvento: {
                type: String,
                required: true
            }
        })
        const eventoModel = Mongoose.model('eventos', eventoSchema);
        return eventoModel
    }

}

module.exports = EventosService;