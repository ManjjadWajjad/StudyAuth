const { response } = require('express')
const userModel = require('../model/user-model')
const userRegistration = async (req,res) => {

   const data = req.body
   
   try {
         const add = await userModel.userRegistration(data)
         if(add){
            return res.status(200).json({id : add.id,hash : add.pass})
         }
         return res.status(400).send({msg: 'Registration Failed'})
    
   } catch (eror) {
      console.log(eror);
   }
}
const userLogin = async (req,res) => {
   const data = req.body
   try {
         const response = await userModel.userLogin(data)
         if(response){
            return res.json(response)
         }

    
   } catch (eror) {
      console.log(eror);
   }
}
const getUser = async (req,res) => {
   try {
       const [result] = await userModel.getUser()
       res.status(200).json(response)
   } catch (eror) {
       console.log(eror);
   }

}

module.exports = {userRegistration, userLogin,getUser}