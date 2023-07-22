let usersmodel = require("../Models/usersModel");
let checkUser = require("../Utils/AuthValidate");
const dotenv = require("dotenv");
const multer = require("multer");
dotenv.config();

//#region multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // The folder where the uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // Filter only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024, // Maximum file size 1MB
  },
}).single('image');
// end region

//#region SignUp
var SignUp = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const { name, mobile, email, password } = req.body;


      let image = "";
      if (req.file) {
        image = req.file.path;
      }

      // Validate the incoming product data against the schema
      let foundedUser = await usersmodel.findOne({ email });
      if (foundedUser) {
        return res.status(400).json({ message: "User Already Exist" });
      }

      const { error, value } = checkUser.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      } else {
        await usersmodel.create({
          name,
          mobile,
          email,
          password,
          image,
        });
        return res.json({ message: 'Your account created successfully', name: value.name });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: "failed" });
  }
};
//#endregion

module.exports = {
  SignUp
};
