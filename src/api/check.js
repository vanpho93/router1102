const $ = require('jquery');

const check = (cb) => {
    $.get('http://localhost:3000/check', text => {
        if (text === 'DA_DANG_NHAP') return cb();
        return cb('LOI');
    });
};

export default check;
