function InputAndCalculation(){
    IGPN=prompt("请输入格点多边形内部格点数");
    BGPN=prompt("请输入格点多边形边界格点数");
    CalculationResult=parseInt(IGPN)+BGPN/2-1;
    alert("格点多边形的面积是：" + CalculationResult);
};