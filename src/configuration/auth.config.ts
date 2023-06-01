export default () => ({
    access: String(process.env.JWT_ACCESS),
    refresh: String(process.env.JWT_REFRESH),
});
