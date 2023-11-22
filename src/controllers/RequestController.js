const User = require("../models/User");
const bcrypt = require("bcrypt");

const RequestController = {
  index: (req, res) => {
    try {
      return res.send("Seja bem vindo!");
    } catch (error) {
      console.log(error);
    }
  },

  register: async (req, res) => {
    const { name, email, password, phone_number, ddd, confirmPassword } =
      req.body;

    if (!name) {
      return res.status(422).json({ msg: "O nome é obrigatório!" });
    }
    if (!email) {
      return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatório!" });
    }
    if (!ddd) {
      return res.status(422).json({ msg: "è preciso informar o DDD!" });
    }
    if (!phone_number) {
      return res.status(422).json({ msg: "Insira seu número de telefone!" });
    }

    if (password !== confirmPassword) {
      return res.status(422).json({ msg: "As senhas não conferem!" });
    }

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ msg: "E-mail já existente" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwoardHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: passwoardHash,
      ddd,
      phone_number,
    });
    try {
      await user.save();

      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!password) {
      return res.status(422).json({ msg: "Insira sua senha" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ msg: "Usuário e/ou senha inválidos" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida" });
    }

    // try {
        
    //     const secret = process.env.SECRET
    // } catch (error) {
    //     console.log(error);
    //   res.status(500).json({
    //     msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
    //   });
    // }
  },
};

module.exports = RequestController;
