let usersmodel = require("../Models/usersModel");
let checkUser = require("../Utils/AuthValidate");
const dotenv = require("dotenv");
dotenv.config();





//#region SignUp
var SignUp = async (req, res) => {
  const { name, mobile,email, password} = req.body;
  try {
     let foundedUser = await usersmodel.findOne({email});
        if(foundedUser) {
             return res.status(400).json({message:"User Already Exist"});
        }
   
    const { error, value } = checkUser.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }else{
      console.log('a')
     await usersmodel.create({
        name,
        mobile,
        email,
        password,
    });
    console.log('aa');
    return res.json({ message: 'User created successfully', data: value });}
   
   
  } catch (e) {
    
   return res.status(400).json({ status: "failed" });
  }
};
//#endregion
module.exports = {
   SignUp
  };