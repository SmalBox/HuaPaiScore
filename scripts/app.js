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

        // 恢复历史记录文件名（如果有历史数据）
        var historyStorage = localStorage.getItem("historyData");
        if (historyStorage) {
            var historyData = JSON.parse(historyStorage);
            if (historyData.currentFile) {
                currentHistoryFile = historyData.currentFile;
                console.log("已恢复历史记录文件名: " + currentHistoryFile);
            }
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

        // 清除历史记录文件名，下次结算时创建新文件
        var historyStorage = localStorage.getItem("historyData");
        if (historyStorage) {
            var historyData = JSON.parse(historyStorage);
            delete historyData.currentFile;
            localStorage.setItem("historyData", JSON.stringify(historyData));
        }
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
    currentHistoryFile = null;
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
            var curScoreValue = Number(document.getElementById(curScore + (i + 1)).value);
            round.player[i].name = document.getElementById("playerName" + (i + 1)).value;
            round.player[i].sumScore =
                String(
                    Number(document.getElementById(sumScore + (i + 1)).textContent) +
                    curScoreValue
                );
            round.player[i].curScore = String(curScoreValue);
        }

        // 先保存本轮得分数据到历史记录
        saveHistoryRecordWithRoundData(round);

        // 清空本轮得分
        for (var i = 0; i < 6; i++)
        {
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

// 生成文件名格式：年月日时分秒
function getHistoryFileName() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    var hour = String(now.getHours()).padStart(2, '0');
    var minute = String(now.getMinutes()).padStart(2, '0');
    var second = String(now.getSeconds()).padStart(2, '0');
    return year + month + day + '_' + hour + minute + second;
}

// 保存历史记录
var currentHistoryFile = null;

function saveHistoryRecordWithRoundData(round) {
    // 获取现有记录或创建新记录
    var historyData;
    var historyStorage = localStorage.getItem("historyData");
    if (historyStorage) {
        historyData = JSON.parse(historyStorage);
    } else {
        historyData = {};
    }

    // 获取文件名：如果currentHistoryFile为空，尝试从存储恢复；如果都没有，生成新的
    var fileName = currentHistoryFile;
    if (!fileName && historyData.currentFile) {
        fileName = historyData.currentFile;
    }
    if (!fileName) {
        fileName = getHistoryFileName();
    }

    // 更新当前文件名
    currentHistoryFile = fileName;
    historyData.currentFile = fileName;

    // 获取当前时间
    var now = new Date();
    var timeStr = now.getFullYear() + '-' +
                  String(now.getMonth() + 1).padStart(2, '0') + '-' +
                  String(now.getDate()).padStart(2, '0') + ' ' +
                  String(now.getHours()).padStart(2, '0') + ':' +
                  String(now.getMinutes()).padStart(2, '0') + ':' +
                  String(now.getSeconds()).padStart(2, '0');

    // 构建本轮得分数据
    var roundScores = [];
    for (var i = 0; i < 6; i++) {
        if (round.player[i].name || round.player[i].curScore) {
            roundScores.push({
                playerName: round.player[i].name,
                sumScore: round.player[i].sumScore,
                curScore: round.player[i].curScore
            });
        }
    }

    // 添加新记录
    var newRecord = {
        time: timeStr,
        players: roundScores
    };

    if (!historyData[fileName]) {
        historyData[fileName] = [];
    }
    historyData[fileName].push(newRecord);

    // 保存到本地存储
    localStorage.setItem("historyData", JSON.stringify(historyData));
    console.log("历史记录已保存: " + fileName);
}

function saveHistoryRecord() {
    var round = JSON.parse(localStorage.getItem("roundData"));
    saveHistoryRecordWithRoundData(round);
}

// 显示历史记录列表
function showHistoryList() {
    var historyStorage = localStorage.getItem("historyData");
    var historyData = historyStorage ? JSON.parse(historyStorage) : {};

    // 获取所有文件名（排除currentFile），并排序（最新的在前面）
    var fileNames = Object.keys(historyData).filter(function(name) {
        return name !== 'currentFile';
    }).sort().reverse();

    // 创建弹窗遮罩
    var overlay = document.createElement('div');
    overlay.id = 'historyOverlay';
    overlay.className = 'modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeHistoryModal();
        }
    };

    // 创建弹窗内容
    var modal = document.createElement('div');
    modal.id = 'historyModal';
    modal.className = 'modal-content';

    // 标题栏
    var title = document.createElement('div');
    title.className = 'modal-title';
    title.innerHTML = '<span>历史记录</span><span class="close-btn" onclick="closeHistoryModal()">&times;</span>';
    modal.appendChild(title);

    // 记录列表
    var listContainer = document.createElement('div');
    listContainer.className = 'history-list-container';

    if (fileNames.length === 0) {
        listContainer.innerHTML = '<div class="no-records">暂无历史记录</div>';
    } else {
        var ul = document.createElement('ul');
        ul.className = 'history-list';

        fileNames.forEach(function(fileName) {
            var records = historyData[fileName];
            var recordCount = records ? records.length : 0;
            var displayName = fileName.replace('_', ' ').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');

            var li = document.createElement('li');
            li.className = 'history-item';
            li.innerHTML = '<div class="history-info" onclick="showHistoryDetail(\'' + fileName + '\')">' +
                '<span class="history-file-name">' + displayName + '</span>' +
                '<span class="history-count">(' + recordCount + '条记录)</span>' +
                '</div>' +
                '<span class="delete-btn" onclick="confirmDeleteHistory(\'' + fileName + '\')">&times;</span>';
            ul.appendChild(li);
        });

        listContainer.appendChild(ul);
    }

    modal.appendChild(listContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// 显示历史记录详情
function showHistoryDetail(fileName) {
    var historyStorage = localStorage.getItem("historyData");
    var historyData = historyStorage ? JSON.parse(historyStorage) : {};
    var records = historyData[fileName] || [];

    // 创建弹窗遮罩
    var overlay = document.createElement('div');
    overlay.id = 'detailOverlay';
    overlay.className = 'modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeDetailModal();
        }
    };

    // 创建详情弹窗
    var modal = document.createElement('div');
    modal.id = 'detailModal';
    modal.className = 'modal-content detail-content';

    // 标题栏
    var title = document.createElement('div');
    title.className = 'modal-title';
    var displayName = fileName.replace('_', ' ').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    title.innerHTML = '<span>' + displayName + ' 详情</span><span class="close-btn" onclick="closeDetailModal()">&times;</span>';
    modal.appendChild(title);

    // 详情内容
    var content = document.createElement('div');
    content.className = 'detail-content-inner';

    records.forEach(function(record, index) {
        var recordDiv = document.createElement('div');
        recordDiv.className = 'detail-record';

        var header = document.createElement('div');
        header.className = 'detail-record-header';
        header.textContent = '第 ' + (index + 1) + ' 轮 - ' + record.time;
        recordDiv.appendChild(header);

        var table = document.createElement('table');
        table.className = 'detail-table';

        // 表头
        var thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>玩家</th><th>累计得分</th><th>本轮得分</th></tr>';
        table.appendChild(thead);

        // 表体
        var tbody = document.createElement('tbody');
        record.players.forEach(function(player) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + player.playerName + '</td>' +
                '<td>' + player.sumScore + '</td>' +
                '<td>' + player.curScore + '</td>';
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        recordDiv.appendChild(table);
        content.appendChild(recordDiv);
    });

    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// 关闭历史记录列表弹窗
function closeHistoryModal() {
    var overlay = document.getElementById('historyOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// 关闭详情弹窗
function closeDetailModal() {
    var overlay = document.getElementById('detailOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// 确认删除历史记录
function confirmDeleteHistory(fileName) {
    var displayName = fileName.replace('_', ' ').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    if (confirm('确定要删除 ' + displayName + ' 的所有记录吗？')) {
        deleteHistoryFile(fileName);
    }
}

// 删除历史记录文件
function deleteHistoryFile(fileName) {
    var historyStorage = localStorage.getItem("historyData");
    var historyData = historyStorage ? JSON.parse(historyStorage) : {};

    delete historyData[fileName];
    localStorage.setItem("historyData", JSON.stringify(historyData));

    // 刷新列表
    var overlay = document.getElementById('historyOverlay');
    if (overlay) {
        overlay.remove();
    }
    showHistoryList();
}

// 显示更多菜单
function showMoreMenu() {
    // 创建弹窗遮罩
    var overlay = document.createElement('div');
    overlay.id = 'menuOverlay';
    overlay.className = 'modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeMenuModal();
        }
    };

    // 创建菜单弹窗
    var modal = document.createElement('div');
    modal.id = 'menuModal';
    modal.className = 'modal-content menu-content';

    // 标题栏
    var title = document.createElement('div');
    title.className = 'modal-title';
    title.innerHTML = '<span>更多选项</span><span class="close-btn" onclick="closeMenuModal()">&times;</span>';
    modal.appendChild(title);

    // 菜单列表
    var listContainer = document.createElement('div');
    listContainer.className = 'history-list-container';

    var ul = document.createElement('ul');
    ul.className = 'menu-list';

    // 关于按钮
    var aboutLi = document.createElement('li');
    aboutLi.className = 'menu-item';
    aboutLi.textContent = '关于';
    aboutLi.onclick = function() {
        showAbout();
    };
    ul.appendChild(aboutLi);

    listContainer.appendChild(ul);
    modal.appendChild(listContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// 关闭更多菜单
function closeMenuModal() {
    var overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.remove();
    }
}

// 显示关于弹窗
function showAbout() {
    // 创建弹窗遮罩
    var overlay = document.createElement('div');
    overlay.id = 'aboutOverlay';
    overlay.className = 'modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeAboutModal();
        }
    };

    // 创建关于弹窗
    var modal = document.createElement('div');
    modal.id = 'aboutModal';
    modal.className = 'modal-content about-content';

    // 标题栏
    var title = document.createElement('div');
    title.className = 'modal-title';
    title.innerHTML = '<span>关于</span><span class="close-btn" onclick="closeAboutModal()">&times;</span>';
    modal.appendChild(title);

    // 关于内容
    var content = document.createElement('div');
    content.className = 'about-inner';
    content.innerHTML =
        '<div class="about-title">花牌记分器 V0.2.3</div>' +
        '<div class="about-info"><span class="about-label">描述：</span>用于2-6人的花牌记分工具</div>' +
        '<div class="about-info"><span class="about-label">开发者：</span>SmalBox</div>' +
        '<div class="about-info"><span class="about-label">功能列表：</span></div>' +
        '<div class="about-info" style="padding-left: 0.3rem; line-height: 2;">' +
        '基础功能：记分、结算差错、重置分数、数据本地存储<br/>' +
        '<span style="color: #ffca71;">新增功能（V0.2.3）：历史记录查看与管理</span><br/>' +
        '扩展功能：添加到桌面（PWA）、更多菜单' +
        '</div>';

    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// 关闭关于弹窗
function closeAboutModal() {
    var overlay = document.getElementById('aboutOverlay');
    if (overlay) {
        overlay.remove();
    }
}