export default () => ({
    port: parseInt(String(process.env.PORT), 10),
    host: String(process.env.HOST),
    prefix: String(process.env.PREFIX),
});
