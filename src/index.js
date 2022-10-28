// 使用es6导入语法，导入jQuery
import $ from 'jquery'
// 导入样式(在webpack中，一切皆模块，都可以通过es6导入语法进行导入和使用)
import '@/css/style.css'
import '@/css/style.less'
import lofo from './file.png';

console.log(lofo)
$('.box').attr('src', lofo)

$(function () {
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', '#9621')
})