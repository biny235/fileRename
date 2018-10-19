const fs = require('fs');
const pdf = require('pdf-parse');
const csv = require('csvtojson');

let leaseNumber
const { path } = require('./config')
let folders = fs.readdirSync(path)
const csvFile = './leases.csv';

console.log(path)

// const leaseRegex = /([0-9]\s*){7}/g
// const indexNumberRegex = /([0-9]\s*){5,7}(\/\s*)([0-9]\s*){2}/g

// const files = fs.readdirSync('./files')

// let csvData = {}

// const getLeases = async () => {
//   const tempData = await csv().fromFile(csvFile);
//   Object.values(tempData).forEach(key => {
//     csvData[key.F1] = key.Lease
//   })
// }





// const renamer = async (file)=>{
//   let dataBuffer = fs.readFileSync(`./files/${file}`);
//   await getLeases()
//   pdf(dataBuffer).then(function(data){
//     let result = data.text.match(indexNumberRegex)
//     // leaseNumber = result[result.length - 1].split(' ').join('').slice(0,7)
//     if(result === null){
//       return fs.rename(`../files//${file}`, `./errors//${file}.pdf`, (err)=>{
//         if(err) console.log(err)
//       })
//     }
//     const indexNumber = result[0].split(' ').join('').slice(0,11)
//     const lease = csvData[indexNumber]
//     const leaseFolder = folders.find(folder => {
//       return folder.startsWith(lease.toString())
//     })
//     if(leaseFolder === undefined){
//       return  fs.rename(`../files//${file}`, `./errors//2018-10-17 Order ${lease}.pdf`, (err)=>{
//         if(err) console.log(err)
//       })
//     }
//     fs.rename(`../files//${file}`, `${path}\\${leaseFolder}\\2018-10-17 Order.pdf`, (err)=>{
//       if(err) console.log(err)
//     })
//     console.log(`${path}\\${leaseFolder}`)
//   })
//   .catch(err => {})
// }


// files.forEach(file =>{
//   renamer(file)
// })
