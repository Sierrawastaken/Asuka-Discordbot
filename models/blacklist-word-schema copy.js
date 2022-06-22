const mongoose = require(`mongoose`)
const { Schema } = mongoose

const reqString = {
    type: String,
    required: true,
}

const schema = new Schema (
    {
        word: reqString,
        level: reqString,
    },
    {
        timestamps: true,
    }
)

const name = `badword`

module.exports = mongoose.models[name] || mongoose.model(name, schema)