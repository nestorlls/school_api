const User = require('../../domain/user.domain');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: 'user',
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.classrooms, {
      foreignKey: 'classroom_id',
      as: 'classroom',
    });

    User.belongsToMany(models.courses, {
      through: 'user_courses',
      foreignKey: 'id',
      as: 'courses',
    });
  };

  return User;
};
