const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ClientsSchema = new Schema({
    client_id: {
        type: String,
        required: true,
    },
    client_name: {
        type: String,
        required: true,
    },
    client_email: {
        type: String,
        required: true,
    },
    client_company: {
        type: String,
        required: true,
    },
    client_phonenumber: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },


});

const Clients = mongoose.model('Clients', ClientsSchema);

module.exports = Clients;