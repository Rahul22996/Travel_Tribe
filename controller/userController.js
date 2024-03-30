let USER = require('../model/user');
const bcrypt = require('bcrypt');
var cart = require("../model/userCart")
// var Storage = require('node-persist');Storage.init()
const nodemailer = require("nodemailer");
// var jwt = require('jsonwebtoken');

// ------------------------------------------------------------------------------------------

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "rahulmakwana0037@gmail.com",
    pass: "eqdt vgke uydr gumu",
    
  },
});

async function main(email) {
  const info = await transporter.sendMail({
    from: '"rahulmakwana0037@gmail.com>',
    to: email,
    subject: "Testing E-mail",
    html: "<h1>Signup Seccessfull</h1> <h3>Welcome To TravelTribe</h3>",
  });

  console.log("Message sent: %s", info.messageId);
}

// -------------------------------------------------------------------------------------------------------------

exports.Signup = async function (req, res, next) {
    try {
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.contact) {
            throw new Error("Please Enter Valid Fields")
        }

        const checkUser = await USER.findOne({email : req.body.email})

        if(checkUser){
            throw new Error("Email is Already Used")
        }

        req.body.password = await bcrypt.hash(req.body.password, 9)

        const data = await USER.create(req.body);
        console.log(data)
        var udata = data._id

        req.body.uid = udata
        
        const data1 = await cart.create(req.body);
        
        main(req.body.email).catch(console.error);
        res.status(201).json({
            status: "Success",
            message: "Signup Successful",
            data1
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.Login = async function (req, res, next) {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error("Please Enter Valid Fields")
        }

        const checkUser = await USER.findOne({ email: req.body.email });
        
        if (!checkUser) {
            throw new Error("Enter Valid Email")
        }

        const checkPass = await bcrypt.compare(req.body.password, checkUser.password);

        if (!checkPass) {
            throw new Error("Wrong Password")
        }
        

        res.status(201).json({
            status: "Success",
            message: "Login Successful",
            data: checkUser
            // token
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}