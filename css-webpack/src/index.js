import './asserts/css/index.css'

// 只能url-loader处理
// import cat from './asserts/images/pll.jpg'


document.getElementById('startJs').addEventListener('click', function (ev) {
    console.log(cat);
    document.getElementById('test').classList.add('avatar')
});
