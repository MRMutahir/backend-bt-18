import { User } from "../Model/Users.js";

const createUser = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const check = await User.findOne({
      email: email,
    });

    if (check) {
      res.status(409).send("duplicate email");
      return false;
    }

    const result = await User.insertOne({ name, email, age });

    if (result) {
      res.send("User created").status(201);
    }
  } catch (error) {
    console.log(error);
    res.send(`${error._message}`).status(500);
  }
};

const getAllUsers = async (req, res) => {
  const result = await User.find({});
  res.status(200).json({
    data: result,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Bad Req");
    return;
  }

  const user = await User.findById(id);
  res.status(200).json({
    data: user,
  });
};
export { createUser, getAllUsers, getUserById };
