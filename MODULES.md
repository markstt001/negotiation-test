# 📋 模块说明文档

> 最后更新：2026-04-16

## 🗂️ 整体架构

```
采购谈判风格测试系统
├── 🧑 个人模块（C 端）—— 个人测试 + 个人报告
├── 👥 团队模块（B 端）—— 团队对比 + 团队报告（付费 ¥99）
├── 📦 共享模块 —— 个人和团队共用
├── 🎨 数据模块 —— 题目、风格定义、课程匹配
├── 📖 文档模块 —— 业务、法律、学术资料
└── 💰 变现模块 —— 课程推荐 + 付费解锁
```

---

## 🧑 一、个人模块（C 端）

用户完成测试后获得个人谈判风格报告。

| 文件 | 说明 | 调用关系 |
|------|------|----------|
| `index.html` | **唯一入口页**：首页→测试→结果→我的 四合一 SPA。包含底部导航栏（首页/我的）、测试页、结果页、我的页面 | 引用所有 CSS + JS 文件 |
| `css/styles.css` | **全局样式**：CSS 变量主题（深蓝+金色）、响应式适配、卡片/按钮/弹窗样式 | index.html 直接引用 |

### 结果页内容生成（个人报告）

| 文件 | 生成内容 | 对应页面区块 |
|------|----------|-------------|
| `personalized-interpretation-v4.js` | 四维解读（决策风格/关系导向/风险态度/沟通方式）+ MBTI 人性洞察 + 综合评语 | 🔮 内心洞察 |
| `enhanced-weaknesses-v2.js` | 3 个致命弱点（场景→建议→正面肯定 三段式） | ⚠️ 致命弱点 |
| `celebrity-stories.js` | 历史名人对标故事（诸葛亮/刘备/司马懿等 16 位） | 🏆 名人对标 |
| `mystery-tags.js` | 每风格 8 个神秘标签，随机选 3 个展示 | 🏷️ 神秘标签 |
| `best-match-deep.js` | 最佳搭档深度解读（为什么配/合作场景/注意事项） | 🤝 最佳搭档 |
| `cooperation-guides.js` | 256 种风格组合的合作说明书（含 16 对最佳搭档） | 🤝 谈判搭子 |
| `result-enhanced.js` | 结果页渲染辅助：最佳搭档优化渲染、合作指南查询弹窗 | 页面交互 |

### 海报生成

| 文件 | 说明 |
|------|------|
| `poster-themes.js` | 16 种风格 × 16 套独立配色主题，用于 Canvas 海报渲染 |

---

## 👥 二、团队模块（B 端）

团队功能入口在 index.html 的"我的"页面和结果页底部。

| 文件 | 说明 | 用户场景 |
|------|------|---------|
| `team-report.js` | **团队报告核心逻辑**：输入成员风格代码 → 生成团队分析报告（风格分布/优势盲点/招聘建议/项目配置） | 免费预览 + 付费解锁(¥99) |
| `team-report-pro.html` | **团队专业报告页**：独立页面渲染完整团队报告（维度分布条形图/优势/风险预警/课程推荐） | 付费后查看 |

### 团队功能调用链
```
index.html（团队按钮）
  → team-report.js（生成报告 / 弹窗预览）
    → 付费 → 跳转 team-report-pro.html（完整报告）
    → 未付费 → 免费预览摘要
```

---

## 📦 三、共享模块

| 文件 | 个人端用途 | 团队端用途 |
|------|-----------|-----------|
| `courses.js` | 根据个人风格推荐匹配课程 | 根据团队风格分布推荐课程组合 |
| `styles-v3.js` | 16 种风格定义（动物/昵称/MBTI/稀有度/估值） | 团队报告中显示成员风格详情 |

---

## 🎨 四、数据模块

| 文件 | 内容 | 数据量 |
|------|------|--------|
| `questions-v10-final.js` | 44 道场景测试题（4 维度 × 11 题），选项标注维度（A/I/R/T/C/B/D/P） | 44 题 |
| `styles-v3.js` | 16 种谈判风格完整定义 | 16 种 |
| `courseDatabase`（courses.js 内） | 4 门课程 × 匹配风格规则 | 4 门课 |

### 四维度说明

| 维度 | 两极 | 含义 |
|------|------|------|
| A/I | 分析型 vs 直觉型 | 决策依赖数据还是经验 |
| R/T | 关系型 vs 任务型 | 注重人情还是效率 |
| C/B | 谨慎型 vs 大胆型 | 风险偏好 |
| D/P | 竞争型 vs 合作型 | 谈判策略倾向 |

---

## 💰 五、变现模块

### 课程推荐（courses.js）

| 课程 | 匹配风格 | 入口 |
|------|----------|------|
| 《采购降本和双赢谈判+AI 应用》 | ARCD, ARBP, ATCD, ATBD | 结果页 + 我的页面 |
| 《决胜供应链》 | ATCD, ATCP, ITCD, ITCP | 结果页 + 我的页面 |
| 《供应商管理》 | ARCP, ARBP, IRCP, IRBP | 结果页 + 我的页面 |
| 《品类管理》 | ARCD, ATCD, ARBD, ATBD | 结果页 + 我的页面 |

### 付费产品

| 产品 | 价格 | 说明 |
|------|------|------|
| 团队配置报告 | ¥99/团队 | 完整团队分析 + PDF 下载 |

---

## 📖 六、文档模块（非生产文件）

### 业务文档（business/）
| 文件 | 说明 |
|------|------|
| `business/README.md` | 业务目录说明 |
| `business/customer-list/target-customers.md` | 目标客户画像 |
| `business/first-week-bd-report.md` | BD 周报 |
| `business/materials/*` | 招商材料（合作方案/合同模板/定价/ROI 模板） |
| `business/scripts/outreach-scripts.md` | 拓展话术 |
| `business/timeline/bd-action-plan.md` | BD 行动计划 |

### 技术文档（api/）
| 文件 | 说明 |
|------|------|
| `api/README.md` | API 目录说明 |
| `api/技术架构白皮书.md` | 后端 API 架构设计 |
| `api/docs/*` | API 架构/选型/开发时间表 |
| `api/security/安全合规清单.md` | 安全合规清单 |

### 法律文档（legal/）
| 文件 | 说明 |
|------|------|
| `legal/patents/*` | 3 份专利申请书（谈判评估方法/团队配置/匹配度评估） |
| `legal/copyrights/软件著作权登记清单.md` | 软著清单 |
| `legal/trademarks/商标注册清单.md` | 商标清单 |
| `legal/reports/*` | 专利检索报告/查新结论 |
| `legal/工作计划与时间表.md` | 知识产权申请计划 |
| `legal/知识产权代理机构推荐.md` | 代理机构推荐 |
| `legal/任务完成总结.md` | 知识产权任务总结 |

### 学术研究（research/）
| 文件 | 说明 |
|------|------|
| `research/01-PNST-理论框架白皮书大纲.md` | PNST 理论框架 |
| `research/02-学术顾问名单.md` | 学术顾问 |
| `research/03-论文发表计划.md` | 论文计划 |
| `research/04-信效度研究方案.md` | 信效度验证 |
| `research/05-学术研究路线图.md` | 研究路线图 |

### 产品策略文档（根目录中文文档）
| 文件 | 说明 |
|------|------|
| `产品战略与护城河规划.md` | 产品战略 |
| `产品重构方案 2.0.md` | 产品重构方案 |
| `开发完成报告-v2.1.md` | 开发报告 |
| `开发文档-v1.0.md` | 开发文档 |
| `README.md` | 项目说明 |
| `README-优化说明.md` | 优化说明 |
| `测试清单.md` | 测试清单 |
| `题目检查清单.md` | 题目清单 |

---

## 🔄 调用关系总览

```
index.html
 ├── css/styles.css          ← 全局样式
 ├── questions-v10-final.js  ← 44 道测试题
 ├── styles-v3.js            ← 16 种风格定义
 ├── personalized-interpretation-v4.js  ← 四维解读
 ├── enhanced-weaknesses-v2.js          ← 弱点分析
 ├── celebrity-stories.js               ← 名人故事
 ├── mystery-tags.js                    ← 神秘标签
 ├── best-match-deep.js                 ← 最佳搭档
 ├── cooperation-guides.js              ← 256 组合合作指南
 ├── result-enhanced.js                 ← 结果页渲染辅助
 ├── poster-themes.js                   ← 海报配色
 ├── team-report.js                     ← 团队报告逻辑
 ├── courses.js                         ← 课程推荐
 │
 └── team-report-pro.html      ← 团队报告页（跳转）
      └── 自包含，不依赖外部 JS
```

## 📊 模块依赖矩阵

| 文件 | 被引用 | 引用他人 | 归属 |
|------|--------|---------|------|
| `index.html` | — | 13 JS + 1 CSS | 🧑个人 + 👥团队 |
| `team-report-pro.html` | index.html | 无（自包含） | 👥团队 |
| `css/styles.css` | index.html | — | 📦共享 |
| `questions-v10-final.js` | index.html | — | 🎨数据 |
| `styles-v3.js` | index.html | — | 📦共享 |
| `personalized-interpretation-v4.js` | index.html | — | 🧑个人 |
| `enhanced-weaknesses-v2.js` | index.html | — | 🧑个人 |
| `celebrity-stories.js` | index.html | — | 🧑个人 |
| `mystery-tags.js` | index.html | — | 🧑个人 |
| `best-match-deep.js` | index.html | — | 🧑个人 |
| `cooperation-guides.js` | index.html | — | 🧑个人 |
| `result-enhanced.js` | index.html | — | 🧑个人 |
| `poster-themes.js` | index.html | — | 🧑个人 |
| `team-report.js` | index.html | — | 👥团队 |
| `courses.js` | index.html | — | 💰变现 |
