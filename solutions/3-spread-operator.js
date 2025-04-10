// BEGIN
const convert = (...dates) => {
    if (dates.length === 0) {
        return [];
    }

    return dates.map(dateArray => {
        const date = new Date(...dateArray);
        return date.toDateString();
    });
};

export default convert;
// END