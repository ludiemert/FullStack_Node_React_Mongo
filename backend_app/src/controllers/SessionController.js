import pkg from 'jsonwebtoken';
const { sign } = pkg;
import User from "../schemas/User";
import bcrypt from 'bcryptjs';
const { compare } = bcrypt;

class SessionController {
  async create(request, response) {
    const { username, password } = request.body;

    // Verify if user exists in the system
    const user = await User.findOne({
      username
    });

    if (!user) {
      return response.status(404).json({ error: "User not found !!!!!🤔 " });
    }

    // Verify if password is correct
    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
      return response.status(404).json({ error: "Incorrect password OR username!!😣 " });
    }

    // Generate a token
    const token = sign({}, "93199a58b91a9516c1f3979ce2822322", {
      subject: user._id.toString(), // Ensure user._id is a string
      expiresIn: '30d'
    });

    return response.json({
      token,
      user,
    });
  }
}

export default new SessionController();
