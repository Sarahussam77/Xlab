let usersmodel = require("../Models/usersModel");
let checkUser = require("../Utils/AuthValidate");
const dotenv = require("dotenv");
dotenv.config();





//#region SignUp
var SignUp = async (req, res) => {
  const { name, mobile,email, password} = req.body;
  try {
     let foundedUser = await usersmodel.findOne({email:req.body.email}).exec();
        if(foundedUser) {
             return res.status(400).json({message:"User Already Exist"});
        }
    let user=usersmodel.create({
        name,
        mobile,
        email,
        password,
    });
    const { error, value } = userSchema.validate(user);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }else{
    await user.save();
    return res.json({ message: 'User created successfully', data: value });}
   
   
  } catch (e) {
    
   return res.status(400).json({ status: "failed" });
  }
};
//#endregion
module.exports = {
   SignUp
  };