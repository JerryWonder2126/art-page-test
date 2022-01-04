const express = require("express");
const { title } = require("process");
const router = express.Router();

const { SectionsModel } = require("../models/artpictures.model");

router.get("/", async (req: any, res: any) => {
    let result = await SectionsModel.fetchSections();
    if (result.error) {
        res.statusCode = 404;
    }
    res.send(result);
}); 

router.post("/", async (req: any, res: any) => {
    let result = await SectionsModel.update(req.body.id, req.body.newValue, req.params.type);
    if (result.error) {
        res.statusCode = 404;
    }
    res.send(result);
});

router.post("/sections/update/", async (req: any, res: any) => {
    let result = await SectionsModel.addSection(req.body.title, req.body.imgURL);
    if (result.error) {
        res.statusCode = 404;
    }
    res.send(result);
});

module.exports = router;