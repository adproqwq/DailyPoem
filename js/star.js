function star(poem, poem_info){
    var star;
    if(self.localStorage.getItem("star") != null){
        star = JSON.parse(self.localStorage.getItem("star"));
        star.stared[star.stared.length] = poem + poem_info;
        self.localStorage.setItem("star",JSON.stringify(star));
    }
    else{
        star = {
            stared: [poem + poem_info]
        }
        self.localStorage.setItem("star",JSON.stringify(star))
    }
    alert("收藏成功！请到“我的收藏”页面查看");
};

function removeStared(index){
    var star;
    star = JSON.parse(self.localStorage.getItem("star"));
    star['stared'].splice(index,1);
    console.log(star['stared']);
    self.localStorage.setItem("star",JSON.stringify(star));
    getStared();
};

function copyStared(index){
    var star;
    star = JSON.parse(self.localStorage.getItem("star"));
    navigator.clipboard.writeText(star['stared'][index]).then(() => {
        alert('已复制到剪切板，请自行粘贴');
    });
};

function getStared(){
    var star, str = '';
    if(self.localStorage.getItem("star") != null){
        star = JSON.parse(self.localStorage.getItem("star"));
        for(var i = 0; i < star.stared.length; i++){
            str += `
                <tr>
                    <td>${star['stared'][i]}</td>
                    <td><button name='copy' index=${String(i)}>复制</button><button name='remove' index=${String(i)}>删除</button></td>
                </tr>
            `;
        };
        var aTbody = document.querySelector('tbody');
        aTbody.innerHTML = str;
    }
};

var aTbody = document.querySelector('tbody');
aTbody.addEventListener('click',function(e){
    if(e.target.getAttribute('name') == 'remove'){
        var index = Number(e.target.getAttribute('index'));
        removeStared(index);
    }
    else if(e.target.getAttribute('name') == 'copy'){
        var index = Number(e.target.getAttribute('index'));
        copyStared(index);
    }
});

/*
{
    stared: [
        "xxx",
        "yyy"
    ]
}
*/