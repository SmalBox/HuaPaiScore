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

// ==================== 简单的 MD5 实现 ====================
function md5cycle(x, k) {
    var a = x[0], b = x[1], c = x[2], d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
}

function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}

// 添加 add32 别名（兼容 cmn 函数）
var add32 = md5_add32;

function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); }
function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); }
function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); }

function md5blk(s) {
    var md5blks = [];
    for (var i = 0; i < 64; i += 4) {
        var code1 = s.charCodeAt(i) || 0;
        var code2 = s.charCodeAt(i + 1) || 0;
        var code3 = s.charCodeAt(i + 2) || 0;
        var code4 = s.charCodeAt(i + 3) || 0;
        md5blks[i >> 2] = code1 + (code2 << 8) + (code3 << 16) + (code4 << 24);
    }
    return md5blks;
}

function md5blk_array(a) {
    var md5blks = [];
    for (var i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return md5blks;
}

function md5_f(x, y, z) { return z ^ (x & (y ^ z)); }
function md5_g(x, y, z) { return y ^ (z & (x ^ y)); }
function md5_h(x, y, z) { return x ^ y ^ z; }
function md5_i(x, y, z) { return y ^ (x | ~z); }

function md5_cmn(q, a, b, x, s, t) {
    a = md5_add32(a, md5_add32(md5_add32(md5_f(a, b, c, d, x[s + 0], 7, -680876936), q), x[s + 1], 12, -389564586), x[s + 2], 17, 606105819);
    d = md5_add32(d, md5_f(d, a, b, c, x[s + 3], 22, -1044525330));
    return md5_add32(a, d);
}

function md5_add32(a, b) {
    return (a + b) & 0xFFFFFFFF;
}

function md5_hex(x) {
    var hex = [];
    var hex_chr = "0123456789abcdef";
    // x 是数组 [a, b, c, d]，每个是32位值
    for (var k = 0; k < x.length; k++) {
        var val = x[k];
        // 处理有符号32位整数
        if (val < 0) val = val + 0x100000000;
        for (var j = 0; j < 8; j++) {
            hex.push(hex_chr.charAt((val >> (j * 4)) & 0x0F));
        }
    }
    return hex.join('');
}

function md5_respect(s) {
    var n = s.length;
    var state = [1732584193, -271733879, -1732584194, 271733878];
    var i = 0;
    // 处理完整的 64 字节块
    for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    // 处理剩余部分
    var remaining = n - (i - 64);
    if (remaining > 0) {
        s = s.substring(i - 64);
        var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        tail[i % 4] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i++) tail[i] = 0;
        }
        tail[14] = n * 8;
        md5cycle(state, tail);
    }
    return md5_hex(state);
}

function md5Res(data) {
    if (typeof data === 'string') {
        return md5_respect(data);
    } else {
        // 处理二进制数据
        var s = '';
        for (var i = 0; i < data.length; i++) {
            s += String.fromCharCode(data[i]);
        }
        return md5_respect(s);
    }
}

// ==================== Canvas 指纹 ====================
// 生成 Canvas 指纹
function getCanvasFingerprint() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    // 设置尺寸
    canvas.width = 280 * dpr;
    canvas.height = 60 * dpr;

    // 绘制复杂的图形和文字（包含特殊字符、渐变、混合模式）
    ctx.scale(dpr, dpr);

    // 背景
    ctx.fillStyle = '#004876';
    ctx.fillRect(0, 0, 280, 60);

    // 绘制文字（使用特殊字符和不同字体）
    ctx.textBaseline = 'middle';
    ctx.font = '18px Arial, "Microsoft YaHei", sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText('HuaPaiScore', 10, 20);

    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.fillStyle = '#ff6b6b';
    ctx.fillText('花牌记分器 1234567890', 10, 42);

    // 添加渐变效果
    var gradient = ctx.createLinearGradient(0, 0, 280, 0);
    gradient.addColorStop(0, 'rgba(255, 202, 113, 0.8)');
    gradient.addColorStop(1, 'rgba(72, 249, 36, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(100, 15, 170, 30);

    // 绘制形状
    ctx.beginPath();
    ctx.arc(240, 30, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(61, 198, 179, 0.6)';
    ctx.fill();

    // 导出 Base64 数据
    var dataURI = canvas.toDataURL('image/png');
    return dataURI;
}

// 获取指纹并存储（页面加载时生成）
var canvasFingerprint = getCanvasFingerprint();
console.log('Canvas指纹长度:', canvasFingerprint.length);

// 测试 MD5 函数（用已知结果验证）
var testMd5 = md5Res('hello');
console.log('MD5("hello") 测试:', testMd5, '(正确值: 5d41402abc4b2a76b9719d911017c592)');

var canvasFingerprintMD5 = md5Res(canvasFingerprint);
console.log('Canvas指纹MD5:', canvasFingerprintMD5);

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

        // 更新轮次显示
        updateRoundIndicator();

        //ls.clear();
    } else {
        // 抱歉！不支持 Web Storage ..
        alert("不支持 本地存储！刷新或重新打开页面，本页面数据将丢失！请在使用过程中不要关闭或刷新页面！");
    }
}

// 更新轮次显示
function updateRoundIndicator() {
    var round = JSON.parse(localStorage.getItem("roundData"));
    var roundNum = round.roundNum || '1';
    var indicator = document.getElementById("roundIndicator");
    if (indicator) {
        indicator.textContent = "第 " + roundNum + " 轮";
    }
}
function UpdateViewRoundData()
{
    // 本地获取roundData json对象
    var round = JSON.parse(localStorage.getItem("roundData"));

    // 用本地数据初始化界面
    for (var i = 0; i < 6; i++)
    {
        var playerNameEl = document.getElementById("playerName" + (i + 1));
        var sumScoreEl = document.getElementById("sumScore" + (i + 1));
        var curScoreEl = document.getElementById("curScore" + (i + 1));

        playerNameEl.value = round.player[i].name;

        // 如果得分有变化，添加脉冲动画
        var oldScore = sumScoreEl.textContent;
        sumScoreEl.textContent = round.player[i].sumScore;

        if (oldScore !== round.player[i].sumScore && round.player[i].sumScore !== "0") {
            // 移除之前的动画类
            sumScoreEl.classList.remove("score-pulse");
            // 触发重新渲染
            void sumScoreEl.offsetWidth;
            // 添加脉冲动画
            sumScoreEl.classList.add("score-pulse");
        }

        curScoreEl.value = round.player[i].curScore;
    }

    console.log("已用本地数据更新视图！");
}
function UpdateViewMessageBox(msg)
{
    var messageBox = document.getElementById("messageBox");
    messageBox.textContent = msg;

    // 移除之前的动画类
    messageBox.classList.remove("message-success", "message-error");

    // 触发重新渲染以重新应用动画
    void messageBox.offsetWidth;

    // 根据消息内容判断动画类型
    if (msg.indexOf("有误") !== -1 || msg.indexOf("错误") !== -1) {
        messageBox.classList.add("message-error");
    } else {
        messageBox.classList.add("message-success");
    }
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

        // 重置轮次为1
        round.roundNum = "1";

        localStorage.setItem("roundData", JSON.stringify(round));

        UpdateViewRoundData();

        // 更新轮次显示
        updateRoundIndicator();

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

        // 增加轮次
        var currentRound = parseInt(round.roundNum) || 1;
        round.roundNum = String(currentRound + 1);

        localStorage.setItem("roundData", JSON.stringify(round));

        UpdateViewRoundData();

        // 更新轮次显示
        updateRoundIndicator();
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
                '<span class="chart-btn" onclick="showHistoryChart(\'' + fileName + '\')">🏆</span>' +
                '<span class="delete-btn" onclick="confirmDeleteHistory(\'' + fileName + '\')">&times;</span>';
            ul.appendChild(li);
        });

        listContainer.appendChild(ul);
    }

    modal.appendChild(listContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// 显示折线图
function showHistoryChart(fileName) {
    var historyStorage = localStorage.getItem("historyData");
    var historyData = historyStorage ? JSON.parse(historyStorage) : {};
    var records = historyData[fileName] || [];

    if (records.length === 0) {
        alert("暂无数据");
        return;
    }

    // 创建弹窗遮罩
    var overlay = document.createElement('div');
    overlay.id = 'chartOverlay';
    overlay.className = 'modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeChartModal();
        }
    };

    // 创建图表弹窗
    var modal = document.createElement('div');
    modal.id = 'chartModal';
    modal.className = 'modal-content';
    modal.style.maxHeight = 'none';

    // 标题栏
    var title = document.createElement('div');
    title.className = 'modal-title';
    var displayName = fileName.replace('_', ' ').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    title.innerHTML = '<span>' + displayName + ' 得分趋势图</span><span class="close-btn" onclick="closeChartModal()">&times;</span>';
    modal.appendChild(title);

    // 图表内容
    var content = document.createElement('div');
    content.className = 'history-list-container';
    content.style.maxHeight = 'none';
    content.style.overflowY = 'visible';

    // 获取所有玩家名字
    var playerNames = [];
    records.forEach(function(record) {
        record.players.forEach(function(player) {
            if (player.playerName && playerNames.indexOf(player.playerName) === -1) {
                playerNames.push(player.playerName);
            }
        });
    });

    if (playerNames.length === 0) {
        content.innerHTML = '<div class="no-records">暂无有效数据</div>';
        modal.appendChild(content);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        return;
    }

    // 颜色配置
    var colors = ['#ff6b6b', '#cd8d4e', '#c1d145', '#48f924', '#3dc6b3', '#3235e4'];
    var colorMap = {};
    playerNames.forEach(function(name, index) {
        colorMap[name] = colors[index % colors.length];
    });

    // 创建图表 Canvas
    var chartCanvas = document.createElement('canvas');
    chartCanvas.id = 'scoreChart';
    chartCanvas.className = 'score-chart canvas-slide-in';
    chartCanvas.style.width = '100%';
    chartCanvas.style.aspectRatio = '1';
    chartCanvas.style.maxHeight = '55vh';
    chartCanvas.style.objectFit = 'contain';
    content.appendChild(chartCanvas);

    // 创建统计信息容器（HTML）
    var statsContainer = document.createElement('div');
    statsContainer.className = 'stats-container stats-slide-in';
    statsContainer.style.marginTop = '-0.5rem';
    statsContainer.style.padding = '0.2rem';

    // 计算统计信息
    var stats = calculateStats(records);

    // 构建统计信息HTML
    // 辅助函数：根据分数值返回颜色
    function getScoreColor(score) {
        if (score === '-' || score >= 0) {
            return '#f5ce00';
        }
        return '#b13a3a';
    }

    statsContainer.innerHTML =
        '<div class="stats-title">达成记录!</div>' +
        '<div class="stats-item" style="animation-delay: 0.1s;">' +
            '<span class="stats-label">累积最高记录😎:</span> ' +
            '<span class="stats-value" style="color:' + getScoreColor(stats.allTimeMaxScore) + ';">' + stats.allTimeMaxScore + '</span> ' +
            '<span class="stats-names">(' + stats.allTimeMaxPlayers.join(', ') + ')</span>' +
        '</div>' +
        '<div class="stats-item" style="animation-delay: 0.2s;">' +
            '<span class="stats-label">累积最低记录🤦‍♀:</span> ' +
            '<span class="stats-value" style="color:' + getScoreColor(stats.allTimeMinScore) + ';">' + stats.allTimeMinScore + '</span> ' +
            '<span class="stats-names">(' + stats.allTimeMinPlayers.join(', ') + ')</span>' +
        '</div>' +
        '<div class="stats-item" style="animation-delay: 0.3s;">' +
            '<span class="stats-label">单轮得分最高🆙:</span> ' +
            '<span class="stats-value" style="color:' + getScoreColor(stats.roundMaxScore) + ';">' + stats.roundMaxScore + '</span> ' +
            '<span class="stats-names">(' + stats.roundMaxPlayers.join(', ') + ')</span>' +
        '</div>' +
        '<div class="stats-item" style="animation-delay: 0.4s;">' +
            '<span class="stats-label">单轮得分最低⬇️:</span> ' +
            '<span class="stats-value" style="color:' + getScoreColor(stats.roundMinScore) + ';">' + stats.roundMinScore + '</span> ' +
            '<span class="stats-names">(' + stats.roundMinPlayers.join(', ') + ')</span>' +
        '</div>';

    content.appendChild(statsContainer);

    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // 绘制图表
    setTimeout(function() {
        drawLineChart(chartCanvas, records, playerNames, colorMap);
    }, 100);
}

// 皇冠动画状态
var crownAnimations = [];
var crownAnimationId = null;

// 绘制小皇冠
// rank: 1-金牌(金色), 2-银牌(银色), 3-铜牌(铜色)
// scale: 比例因子，用于适配不同屏幕
// 返回: {x, y, rank} 用于动画更新
function drawCrown(ctx, x, y, rank, scale) {
    ctx.save();

    // 皇冠尺寸（基于比例因子）
    var crownWidth = Math.round(30 * scale);
    var crownHeight = Math.round(15 * scale);
    var crownLineWidth = Math.max(1, Math.round(1 * scale));
    var dotRadius = Math.max(1, Math.round(1.5 * scale));

    // 根据排名设置颜色
    var fillColor, strokeColor;
    switch(rank) {
        case 1: // 金色
            fillColor = '#ffd700';
            strokeColor = '#b8860b';
            break;
        case 2: // 银色
            fillColor = '#c0c0c0';
            strokeColor = '#808080';
            break;
        case 3: // 铜色
            fillColor = '#cd7f32';
            strokeColor = '#8b4513';
            break;
        default:
            fillColor = '#ffd700';
            strokeColor = '#b8860b';
    }

    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = crownLineWidth;

    // 绘制皇冠形状
    ctx.beginPath();
    // 皇冠底部
    ctx.moveTo(x, y + crownHeight);
    ctx.lineTo(x + crownWidth, y + crownHeight);
    // 皇冠右侧
    ctx.lineTo(x + crownWidth, y + Math.round(8 * scale));
    // 皇冠右尖
    ctx.lineTo(x + Math.round(24 * scale), y + Math.round(12 * scale));
    // 皇冠中尖（最高）
    ctx.lineTo(x + Math.round(15 * scale), y);
    // 皇冠左尖
    ctx.lineTo(x + Math.round(6 * scale), y + Math.round(12 * scale));
    // 皇冠左侧
    ctx.lineTo(x, y + Math.round(8 * scale));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    // 添加闪光效果（简单的几个点）
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + Math.round(8 * scale), y + Math.round(6 * scale), dotRadius, 0, Math.PI * 2);
    ctx.arc(x + Math.round(15 * scale), y + Math.round(3 * scale), dotRadius, 0, Math.PI * 2);
    ctx.arc(x + Math.round(22 * scale), y + Math.round(6 * scale), dotRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 返回皇冠信息用于动画
    return { x: x, y: y, rank: rank, baseX: x, baseY: y, scale: scale };
}

// 更新皇冠动画
function updateCrownAnimations(time) {
    // 脉冲动画参数
    var pulse = Math.sin(time / 200) * 0.15 + 1; // 0.85 ~ 1.15
    var glow = Math.sin(time / 300) * 0.3 + 0.7; // 0.4 ~ 1.0

    return { pulse: pulse, glow: glow };
}

// 绘制带动画效果的皇冠
function drawAnimatedCrown(ctx, crown, time) {
    ctx.save();

    var pulse = Math.sin(time / 200) * 0.1 + 1; // 脉冲缩放
    var glow = Math.sin(time / 300) * 0.2 + 0.8; // 发光强度

    var x = crown.baseX;
    var y = crown.baseY;
    var scale = crown.scale || 1;

    // 皇冠尺寸（基于比例因子）
    var crownWidth = Math.round(30 * scale);
    var crownHeight = Math.round(15 * scale);
    var crownLineWidth = Math.max(1.5, Math.round(1.5 * scale));
    var particleRadius = Math.max(1.5, Math.round(2 * scale));
    var particleRadius2 = Math.max(1, Math.round(1.5 * scale));

    // 根据排名设置颜色
    var fillColor, strokeColor;
    switch(crown.rank) {
        case 1: // 金色 - 添加额外光泽
            fillColor = '#ffd700';
            strokeColor = '#ffec8b';
            break;
        case 2: // 银色
            fillColor = '#e8e8e8';
            strokeColor = '#a0a0a0';
            break;
        case 3: // 铜色
            fillColor = '#daa520';
            strokeColor = '#cd853f';
            break;
        default:
            fillColor = '#ffd700';
            strokeColor = '#b8860b';
    }

    // 应用脉冲缩放
    var centerX = x + Math.round(15 * scale);
    var centerY = y + Math.round(7 * scale);
    ctx.translate(centerX, centerY);
    ctx.scale(pulse, pulse);
    ctx.translate(-centerX, -centerY);

    // 发光效果（金色皇冠特有）
    if (crown.rank === 1) {
        ctx.shadowColor = '#ffff87';
        ctx.shadowBlur = Math.round(2 * scale) * glow;
    }

    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = crownLineWidth;

    // 绘制皇冠形状
    ctx.beginPath();
    // 皇冠底部
    ctx.moveTo(x, y + crownHeight);
    ctx.lineTo(x + crownWidth, y + crownHeight);
    // 皇冠右侧
    ctx.lineTo(x + crownWidth, y + Math.round(8 * scale));
    // 皇冠右尖
    ctx.lineTo(x + Math.round(24 * scale), y + Math.round(12 * scale));
    // 皇冠中尖（最高）
    ctx.lineTo(x + Math.round(15 * scale), y);
    // 皇冠左尖
    ctx.lineTo(x + Math.round(6 * scale), y + Math.round(12 * scale));
    // 皇冠左侧
    ctx.lineTo(x, y + Math.round(8 * scale));
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    // 闪光粒子效果（金色皇冠）
    if (crown.rank === 1) {
        var particleOffset = Math.round(Math.sin(time / 150) * 3 * scale);
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x + Math.round(10 * scale) + particleOffset, y + Math.round(5 * scale), particleRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x + Math.round(20 * scale) - particleOffset, y + Math.round(7 * scale), particleRadius2, 0, Math.PI * 2);
        ctx.fill();
    } else {
        // 银色和铜色只有简单的闪光
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x + Math.round(15 * scale), y + Math.round(4 * scale), particleRadius2, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
}

// 启动皇冠动画循环
function startCrownAnimation(ctx, canvas) {
    // 清除之前的动画
    if (crownAnimationId) {
        cancelAnimationFrame(crownAnimationId);
    }

    // 动画函数
    function animate(time) {
        if (!canvas || !ctx) return;

        // 清除每个皇冠的区域（只清除皇冠区域，不覆盖图表内容）
        crownAnimations.forEach(function(crown) {
            var crownScale = crown.scale || 1;
            var clearX = crown.baseX - Math.round(2 * crownScale);
            var clearY = crown.baseY - Math.round(2 * crownScale);
            var clearWidth = Math.round(34 * crownScale);
            var clearHeight = Math.round(20 * crownScale); // 只清除皇冠区域
            ctx.clearRect(clearX, clearY, clearWidth, clearHeight);
        });

        // 重绘每个皇冠
        crownAnimations.forEach(function(crown) {
            drawAnimatedCrown(ctx, crown, time);
        });

        crownAnimationId = requestAnimationFrame(animate);
    }

    crownAnimationId = requestAnimationFrame(animate);
}

// 停止皇冠动画
function stopCrownAnimation() {
    if (crownAnimationId) {
        cancelAnimationFrame(crownAnimationId);
        crownAnimationId = null;
    }
}

// 绘制折线图
function drawLineChart(canvas, records, playerNames, colorMap) {
    var ctx = canvas.getContext('2d');

    // 确保清除之前的皇冠数据
    crownAnimations = [];

    // 颜色配置（用于改名后的不同名字段）
    var colors = ['#fc2d2d', '#17afa5', '#1056b3', '#f3c10a', '#53be24', '#ec2d7d', '#a55eea', '#c654d0'];

    // 设置实际分辨率
    var rect = canvas.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;

    // 保持宽高相同，取较小值
    var size = Math.min(rect.width, rect.height * 0.85);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    var width = size;
    var height = size;

    // 定义比例因子（基于width的相对比例）
    var scale = width / 720;  // 以720px为基准，放大50%

    // 常用尺寸（基于比例因子）
    var fontSize = {
        large: Math.round(36 * scale),
        medium: Math.round(28 * scale),
        small: Math.round(25 * scale),
        tiny: Math.round(22 * scale),
        xsmall: Math.round(13 * scale)
    };
    var lineWidth = {
        normal: Math.round(1.5 * scale),   // 网格线、虚线
        medium: Math.round(2.5 * scale),   // 坐标轴、数据点描边
        thick: Math.round(4 * scale)       // 折线
    };
    var pointRadius = Math.round(8 * scale);  // 数据点半径
    // 图例颜色点大小（与字体大小成比例，约0.25倍）
    var legendDotRadius = Math.max(4, Math.round(fontSize.large * 0.25));

    // 顶部图例区域高度
    var legendItemHeight = Math.round(36 * scale);
    var legendY = Math.round(15 * scale);
    var legendRowGap = Math.round(28 * scale);

    // 边距
    var padding = {
        top: playerNames.length * legendRowGap + Math.round(50 * scale),
        right: Math.round(60 * scale),
        bottom: Math.round(70 * scale),
        left: Math.round(50 * scale)
    };
    var chartWidth = width - padding.left - padding.right;
    var chartHeight = height - padding.top - padding.bottom;

    // 清空画布
    ctx.fillStyle = '#004876';
    ctx.fillRect(0, 0, width, height);

    // 绘制顶部图例 - 居中显示，每行最多3个
    // 使用所有出现过的名字（包含改名后的名字）
    var allNamesInRecords = [];
    records.forEach(function(record) {
        record.players.forEach(function(player) {
            if (player.playerName && allNamesInRecords.indexOf(player.playerName) === -1) {
                allNamesInRecords.push(player.playerName);
            }
        });
    });

    var maxPerRow = 3;
    var legendItemWidth = width / maxPerRow;

    allNamesInRecords.forEach(function(name, index) {
        var row = Math.floor(index / maxPerRow);
        var col = index % maxPerRow;
        var itemX = col * legendItemWidth;
        var centerX = itemX + legendItemWidth / 2;
        var itemY = legendY + row * legendItemHeight;

        // 获取颜色（优先使用已存在的颜色，否则分配新颜色）
        var color;
        if (colorMap[name]) {
            color = colorMap[name];
        } else {
            color = colors[allNamesInRecords.indexOf(name) % colors.length];
            colorMap[name] = color;
        }

        // 颜色圆块
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(centerX - Math.round(25 * scale), itemY + Math.round(16 * scale), legendDotRadius, 0, Math.PI * 2);
        ctx.fill();

        // 玩家名字
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold ' + fontSize.large + 'px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(name, centerX - Math.round(5 * scale), itemY + Math.round(24 * scale));
    });

    // 调整顶部边距以适应图例行数
    var legendRowCount = Math.ceil(allNamesInRecords.length / maxPerRow);
    padding.top = legendRowCount * legendItemHeight + Math.round(30 * scale);

    // 获取所有得分数据范围
    var allScores = [];
    records.forEach(function(record) {
        record.players.forEach(function(player) {
            allScores.push(Number(player.sumScore));
        });
    });
    var minScore = Math.min(...allScores);
    var maxScore = Math.max(...allScores);
    var scoreRange = maxScore - minScore || 10;
    var scorePadding = scoreRange * 0.1;

    // 绘制网格线
    ctx.strokeStyle = 'rgba(255, 202, 113, 0.2)';
    ctx.lineWidth = lineWidth.normal;

    // 水平网格线
    var yGridCount = 5;
    for (var i = 0; i <= yGridCount; i++) {
        var y = padding.top + (chartHeight / yGridCount) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        // Y轴标签
        var scoreValue = maxScore + scorePadding - ((maxScore + scorePadding - minScore + scorePadding) / yGridCount) * i;
        ctx.fillStyle = '#ffca71';
        ctx.font = 'bold ' + fontSize.xsmall + 'px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(Math.round(scoreValue), padding.left - Math.round(5 * scale), y + Math.round(5 * scale));
    }

    // 垂直网格线
    var xGridCount = records.length > 1 ? Math.min(records.length - 1, 6) : 0;
    var xStep = chartWidth / Math.max(records.length, 1);
    var xLeftGap = Math.round(30 * scale);
    var unitStr = xGridCount < 15?"轮":"";
    for (var i = 0; i <= xGridCount; i++) {
        var x = padding.left + xStep * i + xLeftGap;
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        // X轴标签
        var roundNum = Math.round((Math.max(records.length, 1) - 1) / Math.max(xGridCount, 1) * i) + 1;
        ctx.fillStyle = '#ffca71';
        ctx.font = 'bold ' + fontSize.tiny + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(roundNum + unitStr, x, height - padding.bottom + Math.round(30 * scale));
    }

    // 绘制坐标轴
    ctx.strokeStyle = '#ffca71';
    ctx.lineWidth = lineWidth.medium;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, height - padding.bottom);
    ctx.lineTo(width - padding.right, height - padding.bottom);
    ctx.stroke();

    // X轴标题
    ctx.fillStyle = '#f1b650';
    ctx.font = 'bold ' + fontSize.small + 'px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('轮数', width - Math.round(30 * scale), height - Math.round(40 * scale));

    // Y轴标题
    ctx.save();
    ctx.font = fontSize.tiny + 'px Arial';
    ctx.translate(Math.round(25 * scale), height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('累计得分', 0, -Math.round(5 * scale));
    ctx.restore();

    // 绘制折线
    // 按玩家位置追踪改名，每段名字画连续的线
    var playerCount = records.length > 0 ? records[0].players.length : 0;

    // 收集最后一轮所有玩家的名字和得分，按得分从高到低排序
    var lastRoundPlayers = [];
    if (records.length > 0) {
        var lastRecord = records[records.length - 1];
        for (var pos = 0; pos < lastRecord.players.length; pos++) {
            var player = lastRecord.players[pos];
            if (player && player.playerName) {
                lastRoundPlayers.push({
                    name: player.playerName,
                    pos: pos,
                    sumScore: Number(player.sumScore)
                });
            }
        }
        // 按得分从高到低排序
        lastRoundPlayers.sort(function(a, b) { return b.sumScore - a.sumScore; });
    }
    // 预先计算每轮的极大极小值（用于显示分数标签）

    // 预先计算每轮的极大极小值（用于显示分数标签）
    var roundExtremes = {}; // { roundIndex: { max: value, maxNames: [], min: value, minNames: [] } }
    records.forEach(function(record, idx) {
        var maxVal = -Infinity;
        var minVal = Infinity;
        var maxNames = [];
        var minNames = [];

        record.players.forEach(function(player) {
            var score = Number(player.sumScore);
            if (score > maxVal) {
                maxVal = score;
                maxNames = [player.playerName];
            } else if (score === maxVal) {
                maxNames.push(player.playerName);
            }

            if (score < minVal) {
                minVal = score;
                minNames = [player.playerName];
            } else if (score === minVal) {
                minNames.push(player.playerName);
            }
        });

        roundExtremes[idx] = { max: maxVal, maxNames: maxNames, min: minVal, minNames: minNames };
    });

    // 遍历每个玩家位置
    for (var pos = 0; pos < playerCount; pos++) {
        // 收集该位置所有出现过的名字和对应的轮次
        var nameRounds = {}; // { 名字: [轮次索引数组] }

        records.forEach(function(record, index) {
            var player = record.players[pos];
            if (player && player.playerName) {
                if (!nameRounds[player.playerName]) {
                    nameRounds[player.playerName] = [];
                }
                nameRounds[player.playerName].push({
                    roundIndex: index,
                    sumScore: Number(player.sumScore)
                });
            }
        });

        // 为每个名字绘制折线段
        var allNames = Object.keys(nameRounds);
        var colorIndex = 0;

        allNames.forEach(function(name) {
            var rounds = nameRounds[name];
            if (rounds.length === 0) return;

            var color = colors[colorIndex % colors.length];
            colorIndex++;

            // 获取该名字的颜色（如果已存在）
            if (colorMap[name]) {
                color = colorMap[name];
            } else {
                colorMap[name] = color;
            }

            // 绘制该名字的折线
            var points = rounds.map(function(r) {
                var x = padding.left + xStep * r.roundIndex + xLeftGap;
                var y = padding.top + chartHeight - ((r.sumScore - minScore + scorePadding) / (maxScore - minScore + scorePadding * 2)) * chartHeight;
                return { x: x, y: y, sumScore: r.sumScore };
            });

            if (points.length > 0) {
                // 保存最后一个点，用于后续绘制玩家名字
                var lastPoint = points[points.length - 1];

                // 绘制折线
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth.thick;
                ctx.beginPath();
                points.forEach(function(point, idx) {
                    if (idx === 0) {
                        ctx.moveTo(point.x, point.y);
                    } else {
                        ctx.lineTo(point.x, point.y);
                    }
                });
                ctx.stroke();

                ctx.font = fontSize.tiny + 'px Arial';
                // 绘制数据点
                points.forEach(function(point, idx) {
                    var roundIdx = rounds[idx].roundIndex;
                    var extremes = roundExtremes[roundIdx];
                    var isMax = point.sumScore === extremes.max && extremes.maxNames.indexOf(name) !== -1;
                    var isMin = point.sumScore === extremes.min && extremes.minNames.indexOf(name) !== -1;

                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = '#004876';
                    ctx.lineWidth = lineWidth.medium;
                    ctx.stroke();

                    // 只在最大值和最小值点显示分数标签
                    if (isMax || isMin) {
                        if (isMax) {
                            ctx.fillStyle = '#d5bb2a'; // 最大值亮金色
                            ctx.fillText(point.sumScore, point.x - Math.round(16 * scale), point.y - Math.round(10 * scale)); // 正上方
                        } else if (isMin) {
                            ctx.fillStyle = '#ac4343'; // 最小值亮红色
                            ctx.fillText(point.sumScore, point.x - Math.round(22 * scale), point.y + Math.round(30 * scale)); // 正下方
                        }
                    }
                });
                ctx.font = 'bold ' + fontSize.small + 'px Arial';

                // 只在最后一轮存在的玩家名字才显示在右侧
                var nameExistsInLastRound = false;
                for (var lrIdx = 0; lrIdx < lastRoundPlayers.length; lrIdx++) {
                    if (lastRoundPlayers[lrIdx].name === name) {
                        nameExistsInLastRound = true;
                        break;
                    }
                }

                // 只为最后一轮存在的名字绘制标签
                if (nameExistsInLastRound) {
                    // 查找当前玩家在最后一轮的索引位置（用于Y轴排序）
                    var playerIndex = -1;
                    for (var i = 0; i < lastRoundPlayers.length; i++) {
                        if (lastRoundPlayers[i].name === name) {
                            playerIndex = i;
                            break;
                        }
                    }

                    // 计算名字在图表右侧的位置（从上到下排列）
                    var labelY = padding.top + Math.round(10 * scale) + playerIndex * Math.round(90 * scale);
                    var labelX = width - padding.right - Math.round(2 * scale); // 在图表区域内显示

                    // 绘制白线连接最后一个点和名字
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = lineWidth.normal;
                    ctx.setLineDash([Math.round(3 * scale), Math.round(3 * scale)]); // 虚线
                    ctx.beginPath();
                    ctx.moveTo(lastPoint.x, lastPoint.y);
                    ctx.lineTo(labelX + Math.round(5 * scale), labelY);
                    ctx.stroke();
                    ctx.setLineDash([]); // 恢复实线

                    // 绘制名字和最终得分
                    ctx.fillStyle = '#ffffff';
                    ctx.font = 'bold ' + fontSize.medium + 'px Arial';
                    ctx.textAlign = 'left';
                    ctx.fillText(name, labelX, labelY + Math.round(8 * scale));
                    ctx.fillStyle = lastPoint.sumScore >= 0?'#ffd700':'#be3e3e';
                    ctx.fillText(lastPoint.sumScore, labelX, labelY + Math.round(8 * scale) + Math.round(30 * scale));

                    // 如果是前三名，存储皇冠信息用于动画
                    if (playerIndex >= 0 && playerIndex <= 2) {
                        var crownInfo = drawCrown(ctx, labelX + Math.round(2 * scale), labelY - Math.round(35 * scale), playerIndex + 1, scale);
                        crownAnimations.push(crownInfo);
                    }
                }
            }
        });
    }

    // 启动皇冠动画
    if (crownAnimations.length > 0) {
        startCrownAnimation(ctx, canvas);
    }
}

// 计算统计信息
function calculateStats(records) {
    // 1. 累积拿过最高分的分数及其相应的玩家名
    var allTimeMaxScore = -Infinity;
    var allTimeMaxPlayers = [];
    // 2. 累积拿过最低分及其相应玩家名
    var allTimeMinScore = Infinity;
    var allTimeMinPlayers = [];
    // 3. 单轮中谁拿到过最多的分数（单轮最高得分）
    var roundMaxScore = -Infinity;
    var roundMaxPlayers = [];
    // 4. 单轮中谁输过最多分的分数（单轮最低得分）
    var roundMinScore = Infinity;
    var roundMinPlayers = [];

    // 遍历所有记录计算统计
    records.forEach(function(record) {
        // 检查每轮的单轮得分（curScore）
        record.players.forEach(function(player) {
            var curScore = Number(player.curScore);

            // 单轮最高分
            if (curScore > roundMaxScore) {
                roundMaxScore = curScore;
                roundMaxPlayers = [player.playerName];
            } else if (curScore === roundMaxScore && curScore !== 0) {
                roundMaxPlayers.push(player.playerName);
            }

            // 单轮最低分
            if (curScore < roundMinScore) {
                roundMinScore = curScore;
                roundMinPlayers = [player.playerName];
            } else if (curScore === roundMinScore && curScore !== 0) {
                roundMinPlayers.push(player.playerName);
            }

            // 累积最高分
            var sumScore = Number(player.sumScore);
            if (sumScore > allTimeMaxScore) {
                allTimeMaxScore = sumScore;
                allTimeMaxPlayers = [player.playerName];
            } else if (sumScore === allTimeMaxScore) {
                if (allTimeMaxPlayers.indexOf(player.playerName) === -1) {
                    allTimeMaxPlayers.push(player.playerName);
                }
            }

            // 累积最低分
            if (sumScore < allTimeMinScore) {
                allTimeMinScore = sumScore;
                allTimeMinPlayers = [player.playerName];
            } else if (sumScore === allTimeMinScore) {
                if (allTimeMinPlayers.indexOf(player.playerName) === -1) {
                    allTimeMinPlayers.push(player.playerName);
                }
            }
        });
    });

    // 处理没有数据的情况
    var roundMaxDisplay = roundMaxScore === -Infinity ? '-' : roundMaxScore;
    var roundMinDisplay = roundMinScore === Infinity ? '-' : roundMinScore;

    return {
        allTimeMaxScore: allTimeMaxScore,
        allTimeMaxPlayers: allTimeMaxPlayers,
        allTimeMinScore: allTimeMinScore,
        allTimeMinPlayers: allTimeMinPlayers,
        roundMaxScore: roundMaxDisplay,
        roundMaxPlayers: roundMaxPlayers,
        roundMinScore: roundMinDisplay,
        roundMinPlayers: roundMinPlayers
    };
}

// 关闭图表弹窗
function closeChartModal() {
    // 停止皇冠动画
    stopCrownAnimation();
    crownAnimations = [];

    var overlay = document.getElementById('chartOverlay');
    if (overlay) {
        overlay.remove();
    }
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

    var titleElem = document.createElement('div');
    titleElem.className = 'about-title';
    titleElem.textContent = '花牌记分器 V0.2.5';
    content.appendChild(titleElem);

    var descInfo = document.createElement('div');
    descInfo.className = 'about-info';
    descInfo.innerHTML = '<span class="about-label">描述：</span>用于2-6人的花牌记分工具';
    content.appendChild(descInfo);

    var devInfo = document.createElement('div');
    devInfo.className = 'about-info';
    devInfo.innerHTML = '<span class="about-label">开发者：</span>SmalBox';
    content.appendChild(devInfo);

    var featureInfo = document.createElement('div');
    featureInfo.className = 'about-info';
    featureInfo.innerHTML = '<span class="about-label">功能列表：</span>';
    content.appendChild(featureInfo);

    var featureList = document.createElement('div');
    featureList.className = 'about-info';
    featureList.style.paddingLeft = '0.3rem';
    featureList.style.lineHeight = '2';
    featureList.innerHTML =
        '基础功能：记分、结算差错、重置分数、数据本地存储<br/>' +
        '<span style="color: #ffca71;">新增功能（V0.2.5）：用户标识（Canvas 指纹）</span><br/>' +
        '扩展功能：添加到桌面（PWA）、更多菜单';
    content.appendChild(featureList);

    // Canvas 指纹区域
    var fingerprintInfo = document.createElement('div');
    fingerprintInfo.className = 'about-info';
    fingerprintInfo.style.marginTop = '0.3rem';
    fingerprintInfo.style.paddingTop = '0.2rem';
    fingerprintInfo.style.borderTop = '1px dashed rgba(255, 202, 113, 0.3)';
    fingerprintInfo.innerHTML = '<span class="about-label">用户标识：</span>';

    // 创建指纹容器
    var fingerprintContainer = document.createElement('div');
    fingerprintContainer.style.marginTop = '0.1rem';

    // 显示 Canvas 指纹 MD5 哈希
    if (canvasFingerprintMD5) {
        var textElem = document.createElement('div');
        textElem.style.fontFamily = 'monospace';
        textElem.style.fontSize = '0.22rem';
        textElem.style.color = '#ffd700';
        textElem.style.letterSpacing = '0.05rem';
        textElem.textContent = canvasFingerprintMD5;
        fingerprintContainer.appendChild(textElem);
    } else {
        fingerprintContainer.textContent = '无法生成指纹';
    }

    fingerprintInfo.appendChild(fingerprintContainer);
    content.appendChild(fingerprintInfo);

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