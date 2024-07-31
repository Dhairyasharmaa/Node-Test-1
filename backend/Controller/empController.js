const { response } = require("express");
const empModel = require("../model/empModel");

const empDataSave = async (req, res) => {
    const { pno, name, city, price } = req.body;

    const empData = await empModel.create({
        pno: pno,
        name: name,
        city: city,
        price: price
    });

    res.status(200).json(empData);
};

const empDisplay = async (req, res) => {
    const myData = await empModel.find();
    res.status(200).json(myData);
};

const empSearch = async (req, res) => {
    const pno = req.body.pno;
    const myans = await empModel.find({ pno: pno });
    res.status(200).json(myans);
};

const empUpdate=async(req,res)=>{
    // console.log("OK")
    // res.sen("GOOD")
    
    const mydata = await empModel.find();
    res.status(200).json(mydata);
}

const empUpdateDel=async(req,res)=>{

    const myid=req.body.myid;
    // console.log(myid);
    // res.send("OKK")

    const myres=await empModel.findByIdAndDelete(myid);

    res.status(200).json(myres);

}

module.exports = {
    empDataSave,
    empDisplay,
    empSearch,
    empUpdate,
    empUpdateDel
};
