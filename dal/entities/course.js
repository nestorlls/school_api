module.exports = function (sequelize, DataTypes) {
  const Course = sequelize.define(
    'course',
    {
      lecture_id: DataTypes.INTEGER,
      course_name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'course',
    }
  );

  Course.associate = (models) => {
    Course.belongsMany(models.user, {
      through: 'user_courses',
      foreignKey: 'course_id',
      as: 'users',
    });

    Course.belongsTo(models.lectures, {
      foreignKey: 'lecture_id',
      as: 'lecture',
    });
  };

  return Course;
};
