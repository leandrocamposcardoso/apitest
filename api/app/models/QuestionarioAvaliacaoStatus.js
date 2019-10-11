'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionarioAvaliacaoStatus = sequelize.define('QuestionarioAvaliacaoStatus', {
    nome: DataTypes.STRING
  }, {});
  QuestionarioAvaliacaoStatus.associate = function(models) {
    QuestionarioAvaliacaoStatus.belongsTo(models.QuestionariosAvaliacao,  {foreignKey: 'status_id', as: 'status_id'});
  };
  return QuestionarioAvaliacaoStatus;
};
