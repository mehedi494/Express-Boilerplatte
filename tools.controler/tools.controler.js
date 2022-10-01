
    fs.readFile("index.html", (err, data) => {
            if (err) {
                res.write("something went wrong")
                res.end()
            }
            else {
                res.write(data)
                res.end()
            }
            console.log(req.url)
       })
    
        const data= fs.readFileSync('index.html')
        res.write(data)
        res.end()

module.exports.getAllTools = (req, res, next) => {
    res.send("tools found Controler route")

}

module.exports.saveATools = (req, res, next) => {
    res.send('tools ADDED')

}
module.exports.getAllToolsWithId = (req, res, next) => {
    res.send("tools found Controler route")

}