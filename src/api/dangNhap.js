const $ = require('jquery');
// const dangNhap = (username, password) => (
//     fetch('http://localhost:3000/dangnhap', { // eslint-disable-line
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(res => res.text())
//     .then(text => {
//         if (text === 'DANG_NHAP_THANH_CONG') return true;
//         return false;
//     })
// );
const dangNhap = (username, password, cb) => {
    const data = { username, password };
    $.post('http://localhost:3000/dangnhap', data, text => {
        if (text !== 'DANG_NHAP_THANH_CONG') return cb('LOI');
        cb(undefined);
    });
};

export default dangNhap;
