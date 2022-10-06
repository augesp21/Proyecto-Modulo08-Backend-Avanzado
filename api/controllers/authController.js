import { User } from "../models/index.js";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
import config from "../../config/index.js";

const register = async (req, res) => {
  try {
    const encrypted = await bcrypt.hash(req.body.password, 10);
    req.body.password = encrypted;

    const user = await User.create(req.body);
    user.password = undefined;

    return res.json({
      msg: "Usuario registrado exitosamente",
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al registrar usuario",
      error,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(401).json({
        msg: "Credenciales inválidas",
      });
    }

    const passwordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatched) {
      return res.status(401).json({
        msg: "Credenciales inválidas",
      });
    }

    const payload = {
      userId: user.id,
    };

    const token = jwt.encode(payload, config.tokens.secret);

    return res.json({
      msg: "Login Satisfactorio",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al hacer login",
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      msg: "Usuarios encontrados",
      users,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al consultar libros",
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { userId } = req;
    if (!userId) {
      return res.status(401).json({
        msg: "Credenciales no autorizadas",
      });
    }
    const user = await User.findByIdAndRemove(id, {
      isDeleted: true,
    });
    return res.json({
      msg: `El usuario ${user.name} a sido eliminado`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error eliminando usuario",
      error,
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;

    const encrypted = await bcrypt.hash(req.body.password, 10);

    req.body.password = encrypted;

    const newPasswordOrEmail = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    newPasswordOrEmail.password = undefined;

    return res.json({
      msg: `Usuario ${User.name} actualizado`,
      newPasswordOrEmail,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al actualizar el password",
    });
  }
};

export { register, login, getAllUsers, deleteUser, updatePassword };
