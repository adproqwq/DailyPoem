function SearchUserPoem(){
    UserPoem=prompt("输入你要查询的诗句");
    window.open("https://so.gushiwen.cn/search.aspx?value=" + UserPoem + "&valuej=" + UserPoem.substring(0,1));
};