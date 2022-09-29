let view = 0;
module.exports.ViewCount = (req, res, next) => {
    view++
    console.log(view)
    next()
}