const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "d38k7rs0mhib9i",
  "eabcqapiwawrvh",
  "923d59d3aaeafa2808f953376be81fb19004d3d721e178a834db8a9303cf0a08",
  {
    host: "ec2-3-229-11-55.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
