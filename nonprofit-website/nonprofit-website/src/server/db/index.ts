import { Sequelize } from 'sequelize';

// Initialize a new Sequelize instance for database connection
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres', // or 'mysql', 'sqlite', etc.
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Export the sequelize instance for use in other parts of the application
export default sequelize;