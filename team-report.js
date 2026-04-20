// 团队配置报告 v1.0 - B 端付费产品
// 99 元/团队，解锁完整报告

const teamReportConfig = {
  price: 99,
  currency: 'CNY',
  features: [
    "详细团队风格分布分析",
    "优势与盲点深度解读",
    "最佳拍档配对建议",
    "招聘/培训优先级",
    "项目配置方案",
    "姜老师课程推荐",
    "PDF 报告下载"
  ]
};

// 风格定义（使用 cooperation-guides.js 中的 styleDefinitions，避免重复声明）
// 如果 window.styleDefinitions 不存在，则定义备用版本
if (typeof window.styleDefinitions === 'undefined') {
  window.styleDefinitions = {
    ARCD: { name: "数据军师", animal: "🦉", dimension: "分析 + 关系 + 竞争 + 防御" },
    ARCP: { name: "关系达人", animal: "🦉", dimension: "分析 + 关系 + 竞争 + 开拓" },
    ARBD: { name: "守门员", animal: "🦉", dimension: "分析 + 关系 + 合作 + 防御" },
    ARBP: { name: "流程管家", animal: "🦉", dimension: "分析 + 关系 + 合作 + 开拓" },
    ATCD: { name: "市场猎手", animal: "🦅", dimension: "分析 + 任务 + 竞争 + 防御" },
    ATCP: { name: "拍板侠", animal: "🦅", dimension: "分析 + 任务 + 竞争 + 开拓" },
    ATBD: { name: "逻辑控", animal: "🦅", dimension: "分析 + 任务 + 合作 + 防御" },
    ATBP: { name: "效率狂人", animal: "🦅", dimension: "分析 + 任务 + 合作 + 开拓" },
    IRCD: { name: "直觉玩家", animal: "🦊", dimension: "直觉 + 关系 + 竞争 + 防御" },
    IRCP: { name: "机会捕手", animal: "🦊", dimension: "直觉 + 关系 + 竞争 + 开拓" },
    IRBD: { name: "人脉王", animal: "🦊", dimension: "直觉 + 关系 + 合作 + 防御" },
    IRBP: { name: "和事佬", animal: "🦊", dimension: "直觉 + 关系 + 合作 + 开拓" },
    ITCD: { name: "变色龙", animal: "🐺", dimension: "直觉 + 任务 + 竞争 + 防御" },
    ITCP: { name: "社交牛人", animal: "🐺", dimension: "直觉 + 任务 + 竞争 + 开拓" },
    ITBD: { name: "守门员", animal: "🐺", dimension: "直觉 + 任务 + 合作 + 防御" },
    ITBP: { name: "行动派", animal: "🐺", dimension: "直觉 + 任务 + 合作 + 开拓" }
  };
}

// 生成团队报告
function generateTeamReport(members) {
  // members: [{name: "张三", code: "ARCD"}, {name: "李四", code: "ARBP"}, ...]
  
  if (!members || members.length === 0) {
    return null;
  }
  
  // 统计分布
  var distribution = {};
  members.forEach(function(m) {
    if (!distribution[m.code]) {
      distribution[m.code] = { count: 0, members: [] };
    }
    distribution[m.code].count++;
    distribution[m.code].members.push(m.name);
  });
  
  // 计算维度分布
  var dimensions = { A: 0, I: 0, R: 0, T: 0, C: 0, B: 0, D: 0, P: 0 };
  members.forEach(function(m) {
    var code = m.code;
    if (code[0] === 'A') dimensions.A++;
    else dimensions.I++;
    
    if (code[1] === 'R') dimensions.R++;
    else dimensions.T++;
    
    if (code[2] === 'C') dimensions.C++;
    else dimensions.B++;
    
    if (code[3] === 'D') dimensions.D++;
    else dimensions.P++;
  });
  
  // 分析优势
  var advantages = [];
  if (dimensions.A > dimensions.I) {
    advantages.push({
      title: "数据分析能力强",
      desc: `团队中 ${dimensions.A} 人是分析型（A），决策时有数据支撑，不易冲动`,
      contributors: "分析型成员贡献"
    });
  } else {
    advantages.push({
      title: "创新洞察能力强",
      desc: `团队中 ${dimensions.I} 人是直觉型（I），善于发现机会和创新`,
      contributors: "直觉型成员贡献"
    });
  }
  
  if (dimensions.R > dimensions.T) {
    advantages.push({
      title: "关系维护能力好",
      desc: `团队中 ${dimensions.R} 人是关系导向（R），善于维护供应商关系和内部协调`,
      contributors: "关系型成员贡献"
    });
  } else {
    advantages.push({
      title: "任务执行能力强",
      desc: `团队中 ${dimensions.T} 人是任务导向（T），目标明确，执行力强`,
      contributors: "任务型成员贡献"
    });
  }
  
  if (dimensions.C > dimensions.B) {
    advantages.push({
      title: "竞争意识强",
      desc: `团队中 ${dimensions.C} 人是竞争型（C），在谈判中善于争取最大利益`,
      contributors: "竞争型成员贡献"
    });
  } else {
    advantages.push({
      title: "合作共赢意识好",
      desc: `团队中 ${dimensions.B} 人是合作型（B），善于建立长期合作关系`,
      contributors: "合作型成员贡献"
    });
  }
  
  if (dimensions.D > dimensions.P) {
    advantages.push({
      title: "风险控制能力强",
      desc: `团队中 ${dimensions.D} 人是防御型（D），谨慎保守，善于识别和规避风险`,
      contributors: "防御型成员贡献"
    });
  } else {
    advantages.push({
      title: "开拓创新能力好",
      desc: `团队中 ${dimensions.P} 人是开拓型（P），敢于尝试新方法和新机会`,
      contributors: "开拓型成员贡献"
    });
  }
  
  // 分析盲点（对标16种全面风格，单边不足即触发风险）
  var blindspots = [];
  
  // 分析型不足
  if (dimensions.A < 2) {
    blindspots.push({
      title: "分析型成员不足",
      desc: "团队中分析型（A）成员较少，可能在做决策时缺乏充分的数据支撑",
      risk: "容易凭感觉或经验决策，可能忽略关键数据"
    });
  }
  
  // 关系型不足
  if (dimensions.R < 2) {
    blindspots.push({
      title: "关系型成员不足",
      desc: "团队中关系导向（R）成员较少，可能忽略供应商关系和内部协调",
      risk: "容易把关系搞僵，影响长期合作"
    });
  }
  
  // 竞争型不足
  if (dimensions.C < 2) {
    blindspots.push({
      title: "竞争型成员不足",
      desc: "团队中竞争型（C）成员较少，可能在谈判中过于妥协",
      risk: "容易吃亏，无法争取最大利益"
    });
  }
  
  // 合作型不足
  if (dimensions.B < 2) {
    blindspots.push({
      title: "合作型成员不足",
      desc: "团队中合作型（B）成员较少，可能在谈判中过于强势，忽略长期合作关系",
      risk: "容易破坏供应商关系，影响长期合作和信任建立"
    });
  }
  
  // 防御型不足
  if (dimensions.D < 2) {
    blindspots.push({
      title: "防御型成员不足",
      desc: "团队中防御型（D）成员较少，可能过于冒进",
      risk: "容易踩坑，忽略潜在风险"
    });
  }
  
  // 开拓型不足
  if (dimensions.P < 2) {
    blindspots.push({
      title: "开拓型成员不足",
      desc: "团队中开拓型（P）成员较少，可能过于保守，错失机会",
      risk: "容易错失市场窗口，创新不足"
    });
  }
  
  // 直觉型不足
  if (dimensions.I < 2) {
    blindspots.push({
      title: "直觉型成员不足",
      desc: "团队中直觉型（I）成员较少，可能缺乏创新思维和市场洞察",
      risk: "容易过度依赖数据，忽略非量化机会"
    });
  }
  
  // 任务型不足
  if (dimensions.T < 2) {
    blindspots.push({
      title: "任务型成员不足",
      desc: "团队中任务导向（T）成员较少，可能影响执行效率和目标达成",
      risk: "容易过度关注关系而忽略结果"
    });
  }
  
  // 最佳拍档配对
  var bestMatches = {
    ARCD: "ARBP", ARCP: "ATBD", ARBD: "ATCP", ARBP: "ARCD",
    ATCD: "ARBP", ATCP: "ARBD", ATBD: "ARCP", ATBP: "IRCD",
    IRCD: "ATBP", IRCP: "ITBD", IRBD: "ITCP", IRBP: "ITCD",
    ITCD: "IRBP", ITCP: "ARCD", ITBD: "IRCP", ITBP: "IRBD"
  };
  
  var pairs = [];
  var used = {};
  
  for (var i = 0; i < members.length; i++) {
    if (used[i]) continue;
    
    var m1 = members[i];
    var matchCode = bestMatches[m1.code];
    
    for (var j = i + 1; j < members.length; j++) {
      if (used[j]) continue;
      
      var m2 = members[j];
      if (m2.code === matchCode || bestMatches[m2.code] === m1.code) {
        pairs.push({
          member1: m1,
          member2: m2,
          type: "天作之合",
          desc: `${m1.code} 和 ${m2.code} 是最佳搭档，互补性强`
        });
        used[i] = true;
        used[j] = true;
        break;
      }
    }
    
    // 如果没有最佳搭档，找次优配对
    if (!used[i]) {
      for (var j = i + 1; j < members.length; j++) {
        if (used[j]) continue;
        
        var m2 = members[j];
        // 检查是否有 2 个以上维度互补
        var complement = 0;
        if (m1.code[0] !== m2.code[0]) complement++;
        if (m1.code[1] !== m2.code[1]) complement++;
        if (m1.code[2] !== m2.code[2]) complement++;
        if (m1.code[3] !== m2.code[3]) complement++;
        
        if (complement >= 2) {
          pairs.push({
            member1: m1,
            member2: m2,
            type: "互补合作",
            desc: `${m1.code} 和 ${m2.code} 有${complement}个维度互补，可以分工合作`
          });
          used[i] = true;
          used[j] = true;
          break;
        }
      }
    }
  }
  
  // 未配对的成员（补充最佳拍档建议）
  var unpaired = [];
  for (var i = 0; i < members.length; i++) {
    if (!used[i]) {
      unpaired.push({
        member: members[i],
        idealMatch: bestMatches[members[i].code],
        reason: findClosestMatch(members[i], members, used, bestMatches)
      });
    }
  }
  
  // 辅助函数：为未配对成员找最近似的合作建议
  function findClosestMatch(member, allMembers, usedMap, matchTable) {
    var ideal = matchTable[member.code];
    var bestComp = 0;
    var bestName = '';
    var bestCode = '';
    for (var k = 0; k < allMembers.length; k++) {
      if (usedMap[k]) continue;
      if (allMembers[k].name === member.name) continue;
      var comp = 0;
      if (member.code[0] !== allMembers[k].code[0]) comp++;
      if (member.code[1] !== allMembers[k].code[1]) comp++;
      if (member.code[2] !== allMembers[k].code[2]) comp++;
      if (member.code[3] !== allMembers[k].code[3]) comp++;
      if (comp > bestComp) {
        bestComp = comp;
        bestName = allMembers[k].name;
        bestCode = allMembers[k].code;
      }
    }
    return {
      idealStyle: ideal,
      idealMissing: true,
      closestName: bestName,
      closestCode: bestCode,
      closestComp: bestComp
    };
  }
  
  // 招聘建议（对标16种全面风格，缺少的维度即为招聘方向）
  var hiringSuggestions = [];
  if (dimensions.A < 2) {
    hiringSuggestions.push("建议招聘分析型（A）人才，增强数据分析能力");
  }
  if (dimensions.I < 2) {
    hiringSuggestions.push("建议招聘直觉型（I）人才，增强创新洞察能力");
  }
  if (dimensions.R < 2) {
    hiringSuggestions.push("建议招聘关系导向（R）人才，增强关系维护能力");
  }
  if (dimensions.T < 2) {
    hiringSuggestions.push("建议招聘任务导向（T）人才，增强执行效率");
  }
  if (dimensions.C < 2) {
    hiringSuggestions.push("建议招聘竞争型（C）人才，增强谈判竞争力");
  }
  if (dimensions.B < 2) {
    hiringSuggestions.push("建议招聘合作型（B）人才，增强合作共赢意识");
  }
  if (dimensions.D < 2) {
    hiringSuggestions.push("建议招聘防御型（D）人才，增强风险控制能力");
  }
  if (dimensions.P < 2) {
    hiringSuggestions.push("建议招聘开拓型（P）人才，增强创新开拓能力");
  }
  
  if (hiringSuggestions.length === 0) {
    hiringSuggestions.push("团队各维度覆盖良好，暂无明显短板");
  }
  
  // 培训建议（对标全面风格，弱势维度需要补强）
  var trainingSuggestions = [];
  if (dimensions.I < dimensions.A) {
    trainingSuggestions.push("建议分析型成员补充创新思维和直觉判断训练");
  }
  if (dimensions.T < dimensions.R) {
    trainingSuggestions.push("建议关系型成员补充任务管理和执行效率训练");
  }
  if (dimensions.B < dimensions.C) {
    trainingSuggestions.push("建议竞争型成员补充合作共赢思维和长期关系建设");
  }
  if (dimensions.P < dimensions.D) {
    trainingSuggestions.push("建议防御型成员补充风险承担和创新尝试训练");
  }
  
  if (trainingSuggestions.length === 0) {
    trainingSuggestions.push("团队各维度发展均衡，建议持续学习和提升");
  }
  
  // 课程推荐
  var courseRecommendations = [];
  if (blindspots.some(b => b.title.includes("关系"))) {
    courseRecommendations.push({
      name: "《供应商关系管理》",
      teacher: "姜宏锋",
      reason: "增强团队关系维护能力"
    });
  }
  if (blindspots.some(b => b.title.includes("竞争"))) {
    courseRecommendations.push({
      name: "《谈判策略与执行》",
      teacher: "姜宏锋",
      reason: "增强团队竞争意识和谈判技巧"
    });
  }
  if (blindspots.some(b => b.title.includes("风险"))) {
    courseRecommendations.push({
      name: "《采购风险管理与控制》",
      teacher: "姜宏锋",
      reason: "增强团队风险识别和控制能力"
    });
  }
  
  if (courseRecommendations.length === 0) {
    courseRecommendations.push({
      name: "《供应链领导力》",
      teacher: "姜宏锋",
      reason: "全面提升团队综合能力"
    });
  }
  
  return {
    teamSize: members.length,
    distribution: distribution,
    dimensions: dimensions,
    advantages: advantages,
    blindspots: blindspots,
    pairs: pairs,
    unpaired: unpaired,
    hiringSuggestions: hiringSuggestions,
    trainingSuggestions: trainingSuggestions,
    courseRecommendations: courseRecommendations,
    generatedAt: new Date().toISOString()
  };
}

// 暴露到全局作用域
if (typeof window !== 'undefined') {
  window.generateTeamReport = generateTeamReport;
  window.teamReportConfig = teamReportConfig;
  window.styleDefinitions = styleDefinitions;
}
