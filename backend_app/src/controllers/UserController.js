import { response } from "express";
import User from "../schemas/User.js";
import pkg from 'bcryptjs';
const {hash} = pkg;


class UserController {
  async create(request, response) {
    const { name, email, username, password, phone } = request.body;
    // console.log(body)

    const passwordCrypt = await hash(password, 8);

    //salvar no banco
    const user = await User.create({
      name,
      email,
      username,
      password: passwordCrypt,
      phone,
    });

    return response.json(user);
  }

  //linst = index
  async  index(request, response){
    try {
    const users = await User.find();
    return response.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    return response.status(500).json({ error: 'Failed to fetch users'});
    }
}
}

export default new UserController();
