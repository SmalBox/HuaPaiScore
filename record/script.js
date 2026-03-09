// 全局变量
let gameData = [];
let filteredData = [];
let currentSort = { field: 'timestamp', direction: 'desc' };

// DOM 元素
const gameList = document.getElementById('gameList');
const totalRecords = document.getElementById('totalRecords');
const usedTimes = document.getElementById('usedTimes');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const refreshBtn = document.getElementById('refreshBtn');
const retryBtn = document.getElementById('retryBtn');
const searchInput = document.getElementById('searchInput');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadInitialData();
    
    // 事件监听器
    refreshBtn.addEventListener('click', loadInitialData);
    retryBtn.addEventListener('click', loadInitialData);
    searchInput.addEventListener('input', handleSearch);
});

// 加载初始数据
async function loadInitialData() {
    showLoading();
    
    try {
        // 尝试从 API 获取数据
        const response = await fetch('http://smalbox.top:5432/list');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'success') {
            processGameData(data.data);
            hideLoading();
            hideError();
        } else {
            throw new Error('API 返回错误状态');
        }
    } catch (error) {
        console.error('加载数据失败:', error);
        
        // 如果 API 失败，尝试使用本地示例数据
        try {
            const localData = await fetch('./exp.json');
            const localJson = await localData.json();
            processGameData(localJson.data);
            hideLoading();
            hideError();
        } catch (localError) {
            console.error('本地数据也加载失败:', localError);
            showError();
            hideLoading();
        }
    }
}

// 处理游戏数据
function processGameData(data) {
    // 过滤出以 "HuaPaiScore" 开头的字段
    const huaPaiScoreKeys = Object.keys(data).filter(key => 
        key.startsWith('HuaPaiScore') && key !== 'HuaPaiScoreUsedTimes'
    );
    
    // 解析每个游戏记录
    gameData = huaPaiScoreKeys.map(key => {
        try {
            const record = data[key];
            const parsedContent = JSON.parse(record.content);
            
            return {
                id: key,
                ...parsedContent,
                timestamp: record.timestamp
            };
        } catch (error) {
            console.error(`解析记录 ${key} 失败:`, error);
            return null;
        }
    }).filter(record => record !== null);
    
    // 获取使用次数
    const usedTimesRecord = data['HuaPaiScoreUsedTimes'];
    if (usedTimesRecord) {
        try {
            const usedTimesData = JSON.parse(usedTimesRecord.content);
            usedTimes.textContent = usedTimesData.count || 0;
        } catch (error) {
            console.error('解析使用次数失败:', error);
            usedTimes.textContent = 'N/A';
        }
    }
    
    // 更新统计信息
    totalRecords.textContent = gameData.length;
    
    // 应用搜索和排序
    applyFilters();
}

// 应用过滤器和排序
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredData = gameData.filter(game => {
        if (!searchTerm) return true;
        
        // 搜索玩家名称
        return game.players.some(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
    });
    
    // 排序（按时间倒序）
    filteredData.sort((a, b) => {
        const timeA = new Date(a.timestamp);
        const timeB = new Date(b.timestamp);
        
        if (currentSort.direction === 'desc') {
            return timeB - timeA;
        } else {
            return timeA - timeB;
        }
    });
    
    renderGameList();
}

// 渲染游戏列表
function renderGameList() {
    if (filteredData.length === 0) {
        gameList.innerHTML = `
            <div class="empty-state">
                <div class="icon">📊</div>
                <h3>暂无游戏记录</h3>
                <p>${searchInput.value ? '没有找到匹配的玩家记录' : '还没有游戏数据'}</p>
            </div>
        `;
        return;
    }
    
    gameList.innerHTML = filteredData.map(game => {
        const playersHtml = game.players.map(player => {
            const isPositive = player.curScore > 0;
            const isNegative = player.curScore < 0;
            
            return `
                <div class="player-card">
                    <div class="player-name">${escapeHtml(player.name)}</div>
                    <span class="player-score ${isPositive ? 'score-positive' : ''} ${isNegative ? 'score-negative' : ''}">
                        ${player.curScore > 0 ? '+' : ''}${player.curScore}
                    </span>
                    <div class="player-sum-score">累计: ${player.sumScore > 0 ? '+' : ''}${player.sumScore}</div>
                </div>
            `;
        }).join('');
        
        const deviceInfo = game.device ? 
            `${game.device.os} • ${game.device.browser} ${game.device.browserVersion}` : 
            '未知设备';
        
        const formattedTime = formatTimestamp(game.timestamp);
        
        return `
            <div class="game-card">
                <div class="game-header">
                    <div>
                        <div class="game-title">第 ${game.gameInfo.round} 局</div>
                        <div class="game-meta">
                            <span>玩家数: ${game.gameInfo.totalPlayers}人</span>
                            <span>局数: ${game.count || 'N/A'}</span>
                        </div>
                    </div>
                    <div class="game-meta">
                        <span>${formattedTime}</span>
                        <span>用户: ${escapeHtml(game.user?.nickname || '匿名')}</span>
                    </div>
                </div>
                
                <div class="players-grid">
                    ${playersHtml}
                </div>
                
                <div class="game-footer">
                    <div class="device-info">
                        📱 ${deviceInfo}
                    </div>
                    <div class="game-meta">
                        <span>版本: ${game.version || '1.0'}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 工具函数
function showLoading() {
    loading.style.display = 'flex';
    gameList.innerHTML = '';
}

function hideLoading() {
    loading.style.display = 'none';
}

function showError() {
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.style.display = 'none';
}

function handleSearch() {
    applyFilters();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatTimestamp(timestamp) {
    try {
        const date = new Date(timestamp);
        return date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    } catch (error) {
        return timestamp;
    }
}

// 添加一些交互功能
document.addEventListener('click', function(e) {
    // 点击玩家卡片可以高亮显示
    if (e.target.closest('.player-card')) {
        const card = e.target.closest('.player-card');
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    }
});

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        loadInitialData();
    }
});

// 页面可见性变化时自动刷新
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // 页面变为可见时，延迟1秒后刷新数据
        setTimeout(loadInitialData, 1000);
    }
});