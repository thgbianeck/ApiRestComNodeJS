let ambiente = undefined;

switch (process.env.PUBLICAR) {
  case "HML":
    ambiente = configurarHML();
    break;
  case "PROD":
    ambiente = configurarPROD();
    break;
  default:
    ambiente = configurarLOCAL();
}

function configurarHML() {
  return {
    dialect: process.env.HML_DB_DIALECT,
    host: process.env.HML_DB_HOST,
    port: process.env.HML_DB_PORT,
    username: process.env.HML_DB_USERNAME,
    password: process.env.HML_DB_PASSWORD,
    database: process.env.HML_DB_DATABASE,
    define: {
      timestamps: true,
      underscored: true,
    },
  };
}

function configurarPROD() {
  return {
    dialect: process.env.PROD_DB_DIALECT,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    define: {
      timestamps: true,
      underscored: true,
    },
  };
}

function configurarLOCAL() {
  return {
    dialect: process.env.LOCAL_DB_DIALECT,
    host: process.env.LOCAL_DB_HOST,
    port: process.env.LOCAL_DB_PORT,
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_DATABASE,
    define: {
      timestamps: true,
      underscored: true,
    },
  };
}

module.exports = ambiente;
