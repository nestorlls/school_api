module.exports = function (sequelize, DataTypes) {
  const Lecture = sequelize.define(
    'lecture',
    {
      lecture_name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'lecture',
    }
  );

  Lecture.associate = (models) => {
    Lecture.hasOne(models.course, {
      foreignKey: 'lecture_id',
      as: 'course',
    });
  };

  return Lecture;
};
