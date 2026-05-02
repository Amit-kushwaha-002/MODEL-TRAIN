const {createPool}=require("mysql2");
const pool =createPool({
    host:"localhost",
    user:"pulmo_user",
    password:"Anishpatil_2004",
    database:"Pulmoai",
    connectionLimit:10
})
module.exports=pool;
