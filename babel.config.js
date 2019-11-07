module.exports = function (api) {
    api.cache(true);

    const presets = ["env", "react"];

    return {
        presets
    };
};