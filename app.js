var mysql = require('mysql')
var faker =require('faker')
const db =mysql.createConnection({
	host: "localhost",
    user: "root",
  password: "9156560407",
  database:'join_us'
})

db.connect((err)=>{
	if(err) throw err;
	console.log('database connected')
})

const data = []

for(let i=0;i<500;i++){
	data.push([
        faker.internet.email(),
        faker.date.past()
		])
}


// let q = 'INSERT INTO users(email,created_at) values?'

// db.query(q,[data],(err,result)=>{
// 	if(err) throw err;
// 	console.log(result)
// })

let person = {
	email:'Junaid.562000@gmail.com'
}
db.query('INSERT INTO users set?',person,(err,result)=>{
	if(err) throw err;
	console.log(result)}
	)
 db.end()