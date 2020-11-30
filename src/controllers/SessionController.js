const firebase = require("../utils/Firebase");
const UserModel = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

module.exports = {
    async signIn(req, res){
        try {
            const { email, password } = req.body;

            let firebaseId;
            try {
                firebaseId = await firebase.login(email, password);
            } catch (error) {
                console.warn(error);
                return res.status(403).send("Unauthorized access: invalid credentials.");
            }

            const user = await UserModel.getByFields({ firebase_id: firebaseId });

            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { 
                expiresIn: "30d",
             });

            return res.status(200).json({ user, accessToken });
            
        } catch (error) {
            console.warn(error);
            return res
                .status(500)
                .send("Internal server error while attempting to validade credentials.");
        }    
    }
};