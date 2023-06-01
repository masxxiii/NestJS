export default () => ({
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    name: String(process.env.DB_NAME),
    port: String(process.env.DB_PORT),
});
