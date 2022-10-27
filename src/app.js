// ****************************************************************************
// Core Modules (no need to install)
// ****************************************************************************
const path= require('path')
// ****************************************************************************
// Third Party Modules (npm install)
// ****************************************************************************
const express = require('express')
const cors = require('cors')
// ****************************************************************************
// Custom Modules
// ****************************************************************************
const getUserList = require('./utils/faker')
// ****************************************************************************

const PORT=4000

//practice steps
// console.log(__dirname)

//*node src/app Terminalで見られる
// console.log(__filename)

//path module 1. install 2.Public directory'sまでのPAthを確認
// console.log(path.join(__dirname, '../public'))

const pubDirPath = path.join(__dirname, '../public')

//express Objectを、Appに入れる。
const app = express()

app.use(cors())

//navigate server　routeをpubDirPathに繋げてる
app.use(express.static(pubDirPath))

//create Test Route
//userListで受け取ったものを全部sendbackする
app.get('/_Tst4936', (req, res) => {
    res.send(getUserList())
    
})

//PORTを繋げる！
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT} `)
})
