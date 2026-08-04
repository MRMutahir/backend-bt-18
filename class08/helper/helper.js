import bcrypt from "bcrypt";
const saltRounds = 10;

export async function passwordHash(pwd) {
  try {
    const hash = await bcrypt.hash(pwd, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
}


export async function comparePassword(plainPassword, hashpassword) {
  try {
    //** plain password === hashpassword*/
    const isPassword = await bcrypt.compare(plainPassword, hashpassword);
    
    return isPassword;
  } catch (err) {
    throw err;
  }
}
