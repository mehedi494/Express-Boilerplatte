const express = require("express");
const { limiter } = require("../../Middleware/limiter");


const { ViewCount } = require("../../Middleware/ViewCount");
const controler = require("../../tools.controler/tools.controler");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send('tools found')

// });
// router.post("/", (req, res) => {
//     res.send("tools added")
// })



router
    .route("/")

    /**
     * @api {get} /tools   -  all tools 
     * @apidDescription get all tools 
     * @apiPermission admin
     * 
     * @apiHeader {String} Authorization user Access token
     * @apiParam {Number{1-}} [page-1] List page
     * @apiParam  {Number{1-100}} [limit-10] user per page
     * 
     * @apiSuccess  {Object[]} all the tools
     * 
     * @apiError  {Unauthorize 401[]} only authenticated user access data
     * @apiError  {Forbidden 402}  Forbidded only admins can access the data
     * 
     */
    .get(controler.getAllTools)
    /**
     * @api {POST} /tools   -  all tools 
     * @apidDescription get all tools 
     * @apiPermission admin
     * 
     * @apiHeader {String} Authorization user Access token
     * @apiParam {Number{1-}} [page-1] List page
     * @apiParam  {Number{1-100}} [limit-10] user per page
     * 
     * @apiSuccess  {Object[]} all the tools
     * 
     * @apiError  {Unauthorize 401[]} only authenticated user access data
     * @apiError  {Forbidden 402}  Forbidded only admins can access the data
     * 
     */
    .post(controler.saveATools)

router.route("/:id").get(ViewCount, limiter, controler.getAllToolsWithId)

module.exports = router;