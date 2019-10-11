'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionariosAvaliacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'QuestionariosAvaliacaoStatus',
          key: 'id'
        }
      },
      codigo_avaliador: {
        type: Sequelize.STRING
      },
      nome_avaliador: {
        type: Sequelize.STRING
      },
      tipo_avaliador_id: {
        type: Sequelize.INTEGER
      },
      codigo_avaliado: {
        type: Sequelize.STRING
      },
      nome_avaliado: {
        type: Sequelize.STRING
      },
      tipo_avaliado: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      data_envio: {
        type: Sequelize.DATE
      },
      data_resposta: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('QuestionariosAvaliacao');
  }
};
