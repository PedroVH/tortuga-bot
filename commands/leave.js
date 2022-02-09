const { leave } = require('../music')

module.exports = {
    data: {
        name: 'leave',
        desc: 'O Tortuga se desconecta da chamada de voz.'
    },
    async execute(message, args) {
        await leave(message).then(message.react('✌️'))
    }
}