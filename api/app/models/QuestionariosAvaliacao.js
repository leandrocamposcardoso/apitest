'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionariosAvaliacao = sequelize.define('QuestionariosAvaliacao', {
    status_id: DataTypes.INTEGER,
    codigo_avaliador: DataTypes.STRING,
    nome_avaliador: DataTypes.STRING,
    tipo_avaliador_id: DataTypes.INTEGER,
    codigo_avaliado: DataTypes.STRING,
    nome_avaliado: DataTypes.STRING,
    tipo_avaliado: DataTypes.INTEGER,
    url: DataTypes.STRING,
    data_envio: DataTypes.DATE,
    data_resposta: DataTypes.DATE
  }, {});
  QuestionariosAvaliacao.associate = function(models) {
    // associations can be defined here
  };
  return QuestionariosAvaliacao;
};
