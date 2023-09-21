module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define(
    'classroom',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      className: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'classroom',
    }
  );

  Classroom.associate = (models) => {
    Classroom.hasMany(models.users, {
      foreignKey: 'classroom_id',
      as: 'users',
    });
  };

  return Classroom;
};
