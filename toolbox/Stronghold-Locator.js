function InputAndCalculation(){
    X1=prompt("请输入当前坐标的第一项");
    Y1=prompt("请输入当前坐标的第三项");
    X2=prompt("请输入眼落地坐标的第一项");
    Y2=prompt("请输入眼落地坐标的第三项");
    alert("请离开当前位置至少100格，离开越远，误差越小");
    X3=prompt("请输入当前坐标的第一项");
    Y3=prompt("请输入当前坐标的第三项");
    X4=prompt("请输入眼落地坐标的第一项");
    Y4=prompt("请输入眼落地坐标的第三项");
    var tmp;
    if(X1>X2){
        tmp = X1;
        X1 = X2;
        X2 = tmp;
        tmp = Y1;
        Y1 = Y2;
        Y2 = tmp;
    }
    var k1 = (Y2-Y1)/(X2-X1);
    var b1 = Y1-k1*X1;
    if(X3>X4){
        tmp = X3;
        X3 = X4;
        X4 = tmp;
        tmp = Y3;
        Y3 = Y4;
        Y4 = tmp;
    }
    var k2 = (Y4-Y3)/(X4-X3);
    var b2 = Y3-k2*X3;
    if(k1>k2){
        tmp = k1;
        k1 = k2;
        k2 = tmp;
        tmp = b1;
        b1 = b2;
        b2 = tmp;
    }
    var oppob = b2*(-1);
    var n = (oppob+b1)/(k2-k1);
    var m = k1*n+b1;
    alert("末地要塞的坐标大约是：" + Math.ceil(n) + " " + Math.ceil(m));
};