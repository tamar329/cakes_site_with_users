const jwt = require("jsonwebtoken");
const {config} = require("../config/secret")

exports.authToken = async (req, res, next) => {
    let token = req.header("x-api-key");
    if (!token) {
        return res.status(401).json({ msg: "You must sent token" });
    }
    try {
        let decodeToken = jwt.verify(token, config.tokenSecret);
        req.tokenData = decodeToken;
        // אם הכל בסדר נעבור לפונקציה הבאה
        next();
    }
    catch (err) {
        console.log();
        res.status(401).json({ msg: "token invalid or expired" });
    }
}
