import { User } from "../Model/Users.Model.js"

export const userInfoController = async (req, res) => {
    console.log(req.user)

    const getUser = await User.findById(req.user._id, {
        password: 0
    })
    return res.status(200).json({
        data: getUser
    })


}