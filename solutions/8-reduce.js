// BEGIN
const groupBy = (array, key) => {
    return array.reduce((acc, obj) => {
        const groupKey = obj[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {});
};

export default groupBy;
// END