// 获取弹窗
var modal = document.getElementById('start');
// 获取 <span> 元素，用于关闭弹窗
var span = document.querySelector('.close');
// 刷新自动弹窗
modal.style.display = "block";
// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
    modal.style.display = "none";
}
// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}