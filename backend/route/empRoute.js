const express=require("express");
const route=express.Router();
const empControllers =require("../Controller/empController");


route.post("/empsave",empControllers.empDataSave);

route.get("/empdisplay", empControllers.empDisplay);

route.post("/empsearch", empControllers.empSearch);

route.get("/empupdate", empControllers.empUpdate);

route.post("/empupdatedel", empControllers.empUpdateDel)


module.exports=route;1