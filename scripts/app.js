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

// 初始化页面回合数据，读取最后一回合数据初始化页面
function InitRoundData()
{
    if (typeof(Storage) !== "undefined") {
        // 针对 localStorage/sessionStorage 的代码
        console.log("恭喜 支持本地存储！");

        // 判断本地离线数据是否存在
        if (localStorage.getItem("roundData") == null)
        {
            // 创建roundData json对象
            var roundData = {
                'roundNum': '1',
                'player': []
            };
            var playerInfo = {
                'name': '',
                'sumScore': '0',
                'curScore': '',
            };
            for (var i = 0; i < 6; i++)
            {
                roundData.player[i] = playerInfo;
            }

            // 本地存储roundData json对象
            localStorage.setItem("roundData", JSON.stringify(roundData));
            
            console.log("无本地数据，已初始化本地数据！");
            
        }
        else
        {
            // 读取roundData中的数据，初始化界面为最后一回合数据
            console.log("已有本地数据！");

            // 用本地数据更新视图
            UpdateViewRoundData();
        }

        //ls.clear();
    } else {
        // 抱歉！不支持 Web Storage ..
        alert("不支持 本地存储！刷新或重新打开页面，本页面数据将丢失！请在使用过程中不要关闭或刷新页面！");
    }
}
function UpdateViewRoundData()
{
    // 本地获取roundData json对象
    var round = JSON.parse(localStorage.getItem("roundData"));
    
    // 用本地数据初始化界面
    for (var i = 0; i < 6; i++)
    {
        document.getElementById("playerName" + (i + 1)).value = round.player[i].name;
        document.getElementById("sumScore" + (i + 1)).textContent = round.player[i].sumScore;
        document.getElementById("curScore" + (i + 1)).value = round.player[i].curScore;
    }
    
    console.log("已用本地数据更新视图！");
}
function UpdateViewMessageBox(msg)
{
    document.getElementById("messageBox").textContent = msg;
}
InitRoundData();

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
    //messageBox.textContent = "是否支持PWA：" + ("serviceWorker" in navigator);
    UpdateViewMessageBox("是否支持PWA：" + ("serviceWorker" in navigator));
}, false);

// 重置累计分数，本轮得分
function Reset()
{
    var curScore = "curScore";
    var sumScore = "sumScore";

    if (typeof(Storage) !== "undefined")
    {
        // 支持本地数据存储，先修改本地存储，再更新视图
        var round = JSON.parse(localStorage.getItem("roundData"));
        
        for (var i = 0; i < 6; i++)
        {
            round.player[i].name = "";
            round.player[i].sumScore = "0";
            round.player[i].curScore = "";
        }

        localStorage.setItem("roundData", JSON.stringify(round));

        UpdateViewRoundData();
    }
    else
    {
        for (i = 0; i < 6; i++)
        {
            // 不支持本地存储，直接操作视图修改数据
            document.getElementById(sumScore + (i + 1)).textContent = "0";
            document.getElementById(curScore + (i + 1)).value = "";
        }

    }
    UpdateViewMessageBox("已重置所有得分！");
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
        //document.getElementById("messageBox").textContent = "本轮输入数据有误，请检查！" + curSum;
        UpdateViewMessageBox("本轮输入数据有误，请检查！" + curSum);
        return;
    }

    // 将本轮得分累加到累计得分中
    if (typeof(Storage) !== "undefined")
    {
        // 支持本地数据存储，先修改本地存储，再更新视图
        var round = JSON.parse(localStorage.getItem("roundData"));

        for (var i = 0; i < 6; i++)
        {
            round.player[i].name = document.getElementById("playerName" + (i + 1)).value;
            round.player[i].sumScore =
                String(
                    Number(document.getElementById(sumScore + (i + 1)).textContent) +
                    Number(document.getElementById(curScore + (i + 1)).value)
                );
            round.player[i].curScore = "";
        }

        localStorage.setItem("roundData", JSON.stringify(round));

        UpdateViewRoundData();
    }
    else
    {
        // 不支持本地数据存储，直接修改视图
        for (i = 1; i <= 6; i++)
        {
            var sumScoreTemp = document.getElementById(sumScore + i).textContent;
            var curScoreTemp = document.getElementById(curScore + i).value;
            sumScoreTemp = Number(sumScoreTemp) + Number(curScoreTemp);
            document.getElementById(sumScore + i).textContent = sumScoreTemp;
            // 清除本轮得分
            document.getElementById(curScore + i).value = "";
        }
    }

    //document.getElementById("messageBox").textContent = "本轮结算成功！";
    UpdateViewMessageBox("本轮结算成功！");
}