const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const RequestController = {

  user: async (req, res) => {
    const id = req.params.id;

    const user = await User.findById(id, "-password");

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }
    function formatDate(date) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    }

    const formattedUser = {
      id: user.id,
      name: user.name,
      data_criacao: formatDate(user.createdAt),
      data_atualizacao: formatDate(user.updatedAt),
      ultimo_login: formatDate(user.lastLogin)
    };

    res.status(200).json({ user: formattedUser });
  },

  register: async (req, res) => {
    const { name, email, password, phone_number, ddd} =
      req.body;
      if (!name || !email || !password || !ddd || !phone_number) {
        return res.status(422).json({ msg: "Por favor, preencha todos os campos corretamente!" });
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

    user.lastLogin = new Date();
    await user.save();

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
      });
    }
  },
};

module.exports = RequestController;
