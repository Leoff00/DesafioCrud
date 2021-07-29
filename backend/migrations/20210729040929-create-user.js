module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        required: true,
      },

      surname: {
        type: Sequelize.STRING,
        required: true,
      },

      email: {
        type: Sequelize.STRING,
        required: true,
      },

      phone: {
        type: Sequelize.STRING,
        required: true,
      },
    }),

  down: async (queryInterface, Sequelize) => {},
};
