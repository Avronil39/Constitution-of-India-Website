import { ObjectId } from 'bson';
import mongoose from 'mongoose'

// CPC
const cpcschema = new mongoose.Schema({
    _id: ObjectId,
    section: String,
    title: String,
    description: String
});
const cpc = mongoose.model('cpc', cpcschema);

// CRPC
const crpcschema = new mongoose.Schema({
    _id: ObjectId,
    chapter: String,
    section: String,
    section_title: String,
    section_desc: String

});
const crpc = mongoose.model('crpc', crpcschema)

// HMA
const hmaschema = new mongoose.Schema({
    // chapter, section, section_title, section_desc: String,
    hello : String
})
const hma = mongoose.model('hma', hmaschema)

// IDA
const idaschema = new mongoose.Schema({
    _id: ObjectId,
    section: String,
    title: String,
    description: String
})
const ida = mongoose.model('ida', idaschema)

// IEA
const ieaschema = new mongoose.Schema({
    _id: ObjectId,
    chapter: String,
    section: String,
    section_title: String,
    section_desc: String
})
const iea = mongoose.model('iea', ieaschema)

// IPC
const ipcschema = new mongoose.Schema({
    _id: ObjectId,
    chapter: Number,
    chapter_title: String,
    Section: Number,
    section_title: String,
    section_desc: String
})

const ipc = mongoose.model('ipc', ipcschema)

const mvaschema = new mongoose.Schema({
    _id: ObjectId,
    section: String,
    title: String,
    description: String
})
const mva = mongoose.model('mva', mvaschema)

const niaschema = new mongoose.Schema({
    _id: String,
    chapter: Number,
    section: Number,
    section_title: String,
    section_desc: String
})

const nia = mongoose.model('nia', niaschema)


export { cpc, crpc, hma, ida, iea, ipc, mva, nia }