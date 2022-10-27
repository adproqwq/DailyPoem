function InputAndCalculation(){
    Radius=prompt("请输入球的半径");
    Pai=prompt("请输入π的取值")
    CalculationResult=4/3*parseFloat(Pai)*Math.pow(Number(Radius),3);
    alert("球的体积是：" + CalculationResult);
};