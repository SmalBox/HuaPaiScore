# 花牌记分器 V0.2.1

## Description

   - 花牌记分器用于2-6人的花牌记分
   - 主要帮助统计玩家分数，核对本轮数据
   - 用html、css3、JavaScript实现，可在线使用，也可下载离线使用
   - [点击使用花牌记分器](https://kit.aibox.nl/HuaPaiScore/HuaPai.html)

## Usage

   1. 填写**玩家名字**
   2. 根据实际得分情况，填写本轮得分
      - 例如：-10，10，+50
   3. 点击 **‘结算得分’** 记分器会自动**核算本轮得分是否正确**
      - 当发现本轮得分错误，在**消息盒子**中会提示
      - 当本轮得分正确无误，记分器会将得分**核算到累计得分中**
      
   <br/>
   
   - 点击 **‘重置’** 可重置**累计得分**和**本轮得分**

## Update

   - **V0.2.1**
      - **更新桌面应用名字：“花牌记分器”**
      - **更新logo**
         - 更新移动端logo
         - 更新web标签logo
      - **添加ios支持**
         - 在ios端，点击分享，添加到桌面即可安装
      - **适配沉浸式主题颜色**
      - **调整界面字体大小**

   - **V0.2**
      - **新的用户界面**
         - 已对多平台设备进行适配(rem+js+vw/vh)
      - **支持基本的PWA功能**
         - 支持离线缓存加速
         - 支持创建桌面应用(支持平台如下：)
            - Android
            - Chrome for Android
            - Chrome for Windows
            - *注：因apple限制，apple设备不支持创建应用*
      - **项目添加部署(Deploy)脚本**
         - 帮助修正本地环境和服务器环境路径问题

   - **V0.1**
      - **完成基本功能**
         - **记分** 、 **结算差错** 、 **重置分数**
