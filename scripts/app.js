// rem自动适配设备,宽度改变时自动适配页面布局
window.onresize = AdaptationPage;
function AdaptationPage()
{
    // 适配不同页面
    document.getElementsByTagName("html")[0].style.fontSize = (document.body.clientWidth / 1080) * 100 + "px";

    //动态固定页面底部的松树pine
    var pineL = document.getElementById("pineL");
    var pineR = document.getElementById("pineR");
    pineL.style.top = document.body.clientHeight - pineL.clientHeight + "px";
    pineR.style.top = document.body.clientHeight - pineR.clientHeight + "px";
}
AdaptationPage();

// Register service worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../service-worker.js')
        .then((reg) => {
          // console.log('Service worker registered.', reg);
        });
  });
}

var btnPwaSupport = document.getElementById("btnPwaSupport");
var messageBox = document.getElementById("messageBox");
btnPwaSupport.addEventListener("click", (event) => {
    messageBox.textContent = "是否支持PWA：" + ("serviceWorker" in navigator);
}, false);

// 重置累计分数，本轮得分
function Reset()
{
    var curScore = "curScore";
    var sumScore = "sumScore";
    for (i = 1; i <= 6; i++)
    {
        document.getElementById(sumScore + i).textContent = "0";
        document.getElementById(curScore + i).value = "";
    }
    // 重置得分
    document.getElementById("messageBox").textContent = "已重置所有得分!";
}

// 结算本轮得分到累计得分
function settleAccountScore()
{
    var curScore = "curScore";
    var sumScore = "sumScore";
    // 检验本轮得分是否正确
    var curSum = 0;
    for (i = 1; i <= 6; i++)
    {
        curSum += Number(document.getElementById(curScore + i).value);
    }
    if (curSum != 0)
    {
        // 本轮输入数据有错误，在消息框提示
        document.getElementById("messageBox").textContent = "本轮输入数据有误，请检查！" + curSum;
        return;
    }
    // 将本轮得分累加到累计得分中
    for (i = 1; i <= 6; i++)
    {
        var sumScoreTemp = document.getElementById(sumScore + i).textContent;
        var curScoreTemp = document.getElementById(curScore + i).value;
        sumScoreTemp = Number(sumScoreTemp) + Number(curScoreTemp);
        document.getElementById(sumScore + i).textContent = sumScoreTemp;
        // 清除本轮得分
        document.getElementById(curScore + i).value = "";
    }
    document.getElementById("messageBox").textContent = "本轮结算成功！";
}