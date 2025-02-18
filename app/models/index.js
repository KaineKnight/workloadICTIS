import { Sequelize } from 'sequelize';
import Educator from './educator.js';
import Workload from './workload.js';

const { DB_USER, DB_PWD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const models = {
	Educator,
	Workload,
};
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: 'postgres',
	dialectOptions: {
		//multipleStatements: true,
		typeCast: true,
	},
	define: {
		// charset: 'utf8mb4',
		// collate: 'utf8mb4_unicode_ci',
		timestamps: true,
		underscored: true,
	},
	logging: false,
});
