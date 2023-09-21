module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define(
    'user_course',
    {
      user_id: DataTypes.INTEGER,
      course_id: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'user_course',
    }
  );

  UserCourse.associate = (models) => {};

  return UserCourse;
};
