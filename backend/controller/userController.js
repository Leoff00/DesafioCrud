const User = require("../models/users");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async findById(req, res) {
    const { id } = req.params;
    const users = await User.findAll({
      where: { id },
    });

    return res.json(users);
  },

  async create(req, res) {
    const { name } = req.body;
    const { surname } = req.body;
    const { email } = req.body;
    const { phone } = req.body;

    const users = await User.create({
      name,
      surname,
      email,
      phone,
    });

    return res.json(users);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const { surname } = req.body;
    const { email } = req.body;
    const { phone } = req.body;

    const users = await User.update(
      {
        name,
        surname,
        email,
        phone,
      },
      { where: { id } },
    );

    return res.json(users);
  },

  async delete(req, res) {
    const { id } = req.params;

    const deletedUser = User.destroy({
      where: { id },
    });

    return res.json(deletedUser);
  },
};
