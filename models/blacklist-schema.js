const mongoose = require(`mongoose`)
const { Schema } = mongoose

const reqString = {
    type: String,
    required: true,
}

const schema = new Schema (
    {
        userId: reqString,
        guildId: reqString,
    },
    {
        timestamps: true,
    }
)

const name = `blacklists`

module.exports = mongoose.models[name] || mongoose.model(name, schema)