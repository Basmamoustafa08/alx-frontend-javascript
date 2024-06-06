const calculateNumber = (type, a, b) => {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
        return Math.round(b) ? 'Erorr' : Math.round(a) / Math.round(b);
    }
    return 0;
};



module.exports = calculateNumber;