import jwt from "jsonwebtoken"
export const accessToken = async (payload) => {
    let token = jwt.sign(
        {
            ...payload
        },
        process.env.JWT,
        {
            expiresIn: '1m'
        }
    );

    console.log("access token >>>", token)
    return token
}