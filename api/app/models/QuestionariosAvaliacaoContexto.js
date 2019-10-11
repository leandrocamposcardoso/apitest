'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionariosAvaliacaoContexto = sequelize.define('QuestionariosAvaliacaoContexto', {
    ano: DataTypes.INTEGER,
    curso: DataTypes.STRING,
    etapa: DataTypes.STRING,
    turma: DataTypes.STRING,
    disciplina: DataTypes.STRING
  }, {});
  QuestionariosAvaliacaoContexto.associate = function(models) {
    // associations can be defined here
  };
  return QuestionariosAvaliacaoContexto;
};
