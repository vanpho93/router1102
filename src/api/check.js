const $ = require('jquery');

const check = (cb) => {
    $.get('http://localhost:3000/check', text => {
        if (text === 'DA_DANG_NHAP') return cb(false);
        return cb(true);
    });
};

export default check;
