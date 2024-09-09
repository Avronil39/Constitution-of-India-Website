import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import { cpc, crpc, hma, ida, iea, ipc, mva ,nia} from './models/act.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000

// connecting mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ConstitutionOfIndia')
    .then(() => { console.log('DB Connected') })
    .catch(() => { console.log('Unable to connect DB') })

// middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log ('Server HIT')
    res.sendFile('./public/index.html')
})

app.get('/:laws', async (req, res) => {
    console.log('Post request at /', req.params.laws)
    const acttype = req.params.laws
    let records, obj
    try {
        switch (acttype) {
            case 'cpc':
                records = await cpc.find({})
                obj = {
                    jsonData: records,
                    sName: 'cpc',
                    name: 'Code of Civil Procedure',
                }
                res.render('acts.ejs', obj)
                break

            case 'crpc':
                records = await crpc.find({})
                obj = {
                    jsonData: records,
                    sName: 'crpc',
                    name: 'Code of Criminal Procedure',
                }
                res.render('acts.ejs', obj)
                break

            case 'hma':
                records = await hma.find({})
                obj = {
                    jsonData: records,
                    sName: 'hma',
                    name: 'Hindu Marriage Act',
                }
                res.render('acts.ejs', obj)
                break

            case 'ida':
                records = await ida.find({})
                obj = {
                    jsonData: records,
                    sName: 'ida',
                    name: 'Indian Divorce Act',
                }
                res.render('acts.ejs', obj)
                break
            case 'iea':
                records = await iea.find({})
                obj = {
                    jsonData: records,
                    sName: 'iea',
                    name: 'Indian Evidence Act',
                }
                res.render('acts.ejs', obj)
                break
            case 'ipc':
                records = await ipc.find({})
                obj = {
                    jsonData: records,
                    sName: 'ipc',
                    name: 'Indian Penal Code',
                }
                res.render('acts.ejs', obj)
                break
            case 'mva':
                records = await mva.find({})
                obj = {
                    jsonData: records,
                    sName: 'mva',
                    name: 'Motor Vehicle Act',
                }
                res.render('acts.ejs', obj)
                break
            case 'nia':
                records = await nia.find({})
                Object.keys(records).forEach((att)=>{
                    console.log (att)
                })
                obj = {
                    jsonData: records,
                    sName: 'nia',
                    name: 'Negotiable Instruments Act',
                }
                res.render('acts.ejs', obj)
                break
            default:
                console.log ('*** In Default Case ***')
                res.send('Chal chutiye smart banne aaya')
                break;
        }
    }
    catch (error) {
        console.log('Error occured : ', error)
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port port`)
})