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