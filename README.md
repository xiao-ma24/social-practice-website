# 青春足迹·文化研学

> 2026 年大学生社会实践成果展示网站

**非遗传承 · 地域探索 · 青年担当**

---

## 🌐 在线访问

**[xiao-ma24.github.io/social-practice-website](https://xiao-ma24.github.io/social-practice-website/)**

---

## 📖 项目简介

本项目为大学生文化研学社会实践成果展示网站。团队历时三个月，跨越甘肃、湖北、内蒙古、西藏、新疆、广西六大省份，深入十二座城市，完成二十四项非遗项目调研。

甘肃省实践内容包括兰州、临夏、天水三地调研，以及秦安王尹镇中心小学非遗文化支教活动。

### 实践足迹

| 省份 | 城市 |
|------|------|
| 甘肃 | 兰州 · 临夏 · 天水 · 秦安（支教） |
| 湖北 | 武汉 · 恩施 |
| 内蒙古 | 呼和浩特 · 鄂尔多斯 |
| 西藏 | 拉萨 · 日喀则 |
| 新疆 | 乌鲁木齐 · 喀什 |
| 广西 | 桂林 · 南宁 |

### 非遗调研项目（部分）

兰州太平鼓、秦腔、泥塑、剪纸、河州刺绣、临夏砖雕、蛋雕、八门拳、河州包子、酿皮子、大地湾彩陶……

### 支教课程

砖雕蛋雕文化宣传课、八门拳武术操、泥塑彩陶体验课、非遗文化大富翁游戏、河州刺绣与剪纸体验课

---

## ✨ 功能特色

- **六宫格省份导航** — 点击省份卡片平滑滚动至对应内容区
- **左侧目录导航** — 城市列表 + 滚动监听自动高亮，支持点击跳转
- **概览卡片 + Modal 弹窗** — 卡片展示图片与简介，点击弹出详细介绍、调研过程、实践感受
- **响应式自适应网格** — 卡片数量自适应布局（单张/多张自动调整列宽）
- **现代中国风视觉** — 米白宣纸底纹、深蓝主色、淡金装饰、古建筑剪影
- **支教专题板块** — 独立展示支教课程与实践记录

---

## 🛠 技术栈

- 纯静态页面：HTML + CSS + Vanilla JavaScript
- 零依赖，无需构建工具
- CSS 自定义属性（变量）驱动主题
- IntersectionObserver 实现滚动监听
- CSS Grid 自适应布局
- GitHub Pages 部署

## 📁 项目结构

```
社会实践网站/
├── index.html          # 主页面
├── css/
│   └── style.css       # 全部样式（约1300行）
├── js/
│   ├── data.js         # 数据层（省份/城市/非遗/支教数据）
│   └── main.js         # 交互逻辑（导航/渲染/Modal/滚动监听）
├── image/              # 图片资源
├── vercel.json         # Vercel 部署配置
└── README.md
```

## 🚀 本地运行

1. 克隆仓库
```bash
git clone https://github.com/xiao-ma24/social-practice-website.git
```

2. 用浏览器直接打开 `index.html`，或使用任意静态服务器：
```bash
# 使用 Python
python -m http.server 8080

# 使用 VS Code Live Server 插件
# 右键 index.html → Open with Live Server
```

3. 访问 `http://localhost:8080`

## 📝 数据维护

编辑 `js/data.js` 即可更新内容。数据结构说明：

```javascript
{
  id: 'lanzhou',           // 唯一标识
  name: '兰州',             // 城市名称
  navQuote: '黄河远上白云间', // 导航栏古文引用
  heroImage: '...',        // 城市大图
  description: '...',      // 城市简介
  surveyAreas: [{          // 调研区域（支持1~N个）
    name: '...',
    description: '...',    // 卡片概览短描述
    image: '...',
    intro: '...',          // 弹窗 → 介绍
    process: '...',        // 弹窗 → 调研过程
    feeling: '...'         // 弹窗 → 实践感受
  }],
  heritageItems: [{        // 非遗项目（支持1~N个）
    name: '...',
    level: '国家级非遗',
    description: '...',
    image: '...',
    icon: '🥁',
    intro: '...',
    process: '...',
    feeling: '...'
  }],
  practicePhotos: [...],   // 实践照片
  practiceInfo: {...},     // 实践信息条
  insight: '...'           // 总体实践感悟
}
```

添加/删除条目后，页面卡片会自动自适应排列，无需修改布局代码。

## 📄 开源协议

MIT License — 仅供学习交流，图片资源请勿商用。

---

<p align="center"><b>行走山河，记录文化的温度</b></p>
