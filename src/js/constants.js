class Constants {
    round(value, decimals) {
        console.log(value)

        if (!value) {
            value = 0;
        }

        if (!decimals) {
            decimals = 0;
        }

        value = Math.round(value);
        return value;
    }
}
export default new Constants