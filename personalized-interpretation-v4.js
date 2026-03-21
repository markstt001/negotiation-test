// 个性化解读生成器 V4 - 乔布斯式情感化版本
// 让用户看到后说"卧槽，这说的就是我！"

function generatePersonalizedInterpretation(scores, code) {
    var interpretation = {
        decision: '',
        decisionLabel: '',
        decisionStars: '',
        relation: '',
        relationLabel: '',
        relationStars: '',
        risk: '',
        riskLabel: '',
        riskStars: '',
        comm: '',
        commLabel: '',
        commStars: '',
        mbti: ''  // MBTI 风格的人性洞察（情感化版本）
    };
    
    // === 1. 决策风格（分析型 A vs 直觉型 I）===
    var totalAI = scores.A + scores.I;
    if (totalAI > 0) {
        var aPercent = Math.round((scores.A / totalAI) * 100);
        var iPercent = 100 - aPercent;
        var starCount = getStarCount(aPercent, 50);
        
        if (aPercent >= 80) {
            interpretation.decisionLabel = '数据驱动者';
            interpretation.decisionStars = getStars(5);
            interpretation.decision = '你相信数据胜过相信人。做决定前，你一定要把所有数据都看透——这不是犹豫，是你对不确定性的天然警惕。';
        } else if (aPercent >= 60) {
            interpretation.decisionLabel = '理性思考者';
            interpretation.decisionStars = getStars(4);
            interpretation.decision = '你习惯用数据说话，但也愿意相信直觉。这种平衡让你既靠谱又不失灵活。';
        } else if (aPercent >= 40) {
            interpretation.decisionLabel = '直觉与理性并存';
            interpretation.decisionStars = getStars(3);
            interpretation.decision = '你既能看透数据，也敢相信第一感觉。这是成熟决策者的标志——理性和直觉，你都有。';
        } else if (aPercent >= 20) {
            interpretation.decisionLabel = '行动派';
            interpretation.decisionStars = getStars(4);
            interpretation.decision = '你做决定快准狠，这是天赋。不过偶尔停下来看看数据，可能会让你走得更远。';
        } else {
            interpretation.decisionLabel = '直觉王者';
            interpretation.decisionStars = getStars(5);
            interpretation.decision = '你相信第一感觉胜过千军万马的数据。很多伟大的决策都来自这样的直觉——保持这份天赋，但也别完全无视数据。';
        }
    }
    
    // === 2. 关系导向（关系型 R vs 任务型 T）===
    var totalRT = scores.R + scores.T;
    if (totalRT > 0) {
        var rPercent = Math.round((scores.R / totalRT) * 100);
        var tPercent = 100 - rPercent;
        
        if (rPercent >= 80) {
            interpretation.relationLabel = '人心捕手';
            interpretation.relationStars = getStars(5);
            interpretation.relation = '你把人看得比事重要，这是你的超能力。但有时候，你也会怀疑：我是不是太在意别人的感受了？';
        } else if (rPercent >= 60) {
            interpretation.relationLabel = '温暖的关系家';
            interpretation.relationStars = getStars(4);
            interpretation.relation = '你重视关系，但也知道什么时候该坚持原则。这种平衡让你既有人情味，又有底线。';
        } else if (rPercent >= 40) {
            interpretation.relationLabel = '事与人兼顾';
            interpretation.relationStars = getStars(3);
            interpretation.relation = '你既能维护关系，也能完成任务。这是职场中最稀缺的能力——你居然都有。';
        } else if (rPercent >= 20) {
            interpretation.relationLabel = '效率优先';
            interpretation.relationStars = getStars(4);
            interpretation.relation = '你结果导向，这让你高效。不过偶尔关心一下"人"的感受，你会发现关系也是生产力。';
        } else {
            interpretation.relationLabel = '任务终结者';
            interpretation.relationStars = getStars(5);
            interpretation.relation = '你目标明确，执行力强。但内心深处，你也希望有人能理解你的坚持。';
        }
    }
    
    // === 3. 风险态度（谨慎型 C vs 冒险型 B）===
    var totalCB = scores.C + scores.B;
    if (totalCB > 0) {
        var cPercent = Math.round((scores.C / totalCB) * 100);
        var bPercent = 100 - cPercent;
        
        if (cPercent >= 80) {
            interpretation.riskLabel = '风险守门员';
            interpretation.riskStars = getStars(5);
            interpretation.risk = '你永远做最坏的打算，这让你避免了很多坑。但有时候，你也会羡慕那些敢 All in 的人。';
        } else if (cPercent >= 60) {
            interpretation.riskLabel = '稳健前行';
            interpretation.riskStars = getStars(4);
            interpretation.risk = '你偏向谨慎，但也愿意在可控范围内冒险。这是成熟的标志。';
        } else if (cPercent >= 40) {
            interpretation.riskLabel = '风险平衡大师';
            interpretation.riskStars = getStars(3);
            interpretation.risk = '你既不盲目冲动，也不畏首畏尾。这是成功者的特质——你天生就有。';
        } else if (cPercent >= 20) {
            interpretation.riskLabel = '机会捕手';
            interpretation.riskStars = getStars(4);
            interpretation.risk = '你愿意为机会承担风险，这是企业家的特质。不过记得做好风控，活下来才有未来。';
        } else {
            interpretation.riskLabel = '天生冒险家';
            interpretation.riskStars = getStars(5);
            interpretation.risk = '你敢于 All in，很多大机会都是这样抓住的。但也要记住：真正的勇士，是带着恐惧前进，而不是无视风险。';
        }
    }
    
    // === 4. 沟通方式（直接型 D vs 说服型 P）===
    var totalDP = scores.D + scores.P;
    if (totalDP > 0) {
        var dPercent = Math.round((scores.D / totalDP) * 100);
        var pPercent = 100 - dPercent;
        
        if (dPercent >= 80) {
            interpretation.commLabel = '有话直说';
            interpretation.commStars = getStars(5);
            interpretation.comm = '你喜欢有话直说，这让你高效。但有时候，你也会想：我是不是太直接了？';
        } else if (dPercent >= 60) {
            interpretation.commLabel = '直接但不伤人';
            interpretation.commStars = getStars(4);
            interpretation.comm = '你偏向直接，但也懂得委婉。这种沟通方式既高效又不得罪人，是职场中的艺术。';
        } else if (dPercent >= 40) {
            interpretation.commLabel = '沟通多面手';
            interpretation.commStars = getStars(3);
            interpretation.comm = '你既能表达清楚，也能让人接受。这是领导者的沟通方式——你天生就会。';
        } else if (dPercent >= 20) {
            interpretation.commLabel = '影响力玩家';
            interpretation.commStars = getStars(4);
            interpretation.comm = '你擅长用影响力推动事情，这是天生的领导者特质。不过有时候，直接一点更高效。';
        } else {
            interpretation.commLabel = '魅力领袖';
            interpretation.commStars = getStars(5);
            interpretation.comm = '你靠魅力和影响力说话，这是天生的领导者。但也要记住：真诚比技巧更重要，永远都是。';
        }
    }
    
    // === MBTI 风格的人性洞察（情感化版本）===
    interpretation.mbti = generateMBTIInsight(code, scores);
    
    return interpretation;
}

// 生成 MBTI 风格的人性洞察 - 乔布斯式情感化版本
// 目标：让用户看到后说"卧槽，这说的就是我！"
function generateMBTIInsight(code, scores) {
    var insights = {
        // === ARCD: 关系型 + 分析型 + 谨慎型 + 直接型 ===
        ARCD: '外表冷静理性，内心却有着强烈的掌控欲。\n\n你是不是经常这样：\n• 明明很在意，却装作无所谓\n• 用数据做盾牌，因为不会表达情感\n• 别人说你冷血，其实你只是怕受伤\n\n还记得那次谈判吗？\n你准备了 50 页数据，对方却说"感觉不对"。\n你委屈，但说不出口。\n因为你知道，没有数据支撑的感觉，站不住脚。\n\n有人告诉你，你太较真了。\n但他们不知道，正是因为有你这样的人，\n公司才没有在一堆"感觉不错"的合同里亏钱。\n\n你的较真，是有价值的。\n只是有时候，可以对自己好一点——\n不是每个决定，都需要 100 分的数据支撑。\n80 分，也可以。',
        
        // === ARCP: 关系型 + 分析型 + 谨慎型 + 说服型 ===
        ARCP: '你天生就能读懂人心，这是天赋也是负担。\n\n你是不是经常这样：\n• 明明自己很累，还在照顾别人的情绪\n• 害怕说"不"，因为不想让任何人失望\n• 所有人都觉得你好说话，其实你只是不想冲突\n\n你知道吗？\n每次你为了和谐退让的时候，\n心里都有个小声音在说："凭什么总是我？"\n\n但你也知道，\n正是因为有你这样的人，\n团队才不会在争吵中散掉。\n\n你的温和，是有价值的。\n只是有时候，可以对自己好一点——\n真正的关系，经得起拒绝。',
        
        // === ARBD: 关系型 + 分析型 + 冒险型 + 直接型 ===
        ARBD: '你总是做最坏的打算，这样当坏事发生时你就不会太受伤。\n\n别人说你保守，\n其实你只是比他们看得更远。\n你见过太多"感觉不错"的项目最后烂尾，\n所以你学会了：先想清楚最坏的结果，\n再决定要不要开始。\n\n这不是胆小，是智慧。\n\n但有时候，你也会羡慕那些敢 All in 的人——\n他们活得好像没有明天一样，\n而你，总是在为明天做准备。\n\n你的谨慎，保护了你很多次。\n只是有时候，它也会让你错过一些美好。\n\n在安全范围内，\n试着冒险一次。\n就算输了，你也输得起。',
        
        // === ARBP: 关系型 + 分析型 + 冒险型 + 说服型 ===
        ARBP: '你是团队的润滑剂，总能化解矛盾。\n\n但有时候你会觉得累，\n因为你在照顾所有人的感受，\n却忽略了自己。\n\n你是不是经常这样：\n• 明明不同意，却笑着说"都可以"\n• 明明很委屈，却先安慰别人\n• 所有人都觉得你脾气好，其实你只是不想让大家难堪\n\n你的温和不是软弱，是选择。\n你选择了和谐，选择了体面，\n选择了把委屈咽进肚子里。\n\n但我想告诉你：\n在关键事情上，\n你可以展现你的锋芒。\n\n真正值得的关系，\n不需要你一味退让来维系。',
        
        // === ATCD: 任务型 + 分析型 + 谨慎型 + 直接型 ===
        ATCD: '你相信流程胜过相信人，因为流程不会背叛你。\n\n你建立的体系让一切井井有条，\n所有人都说"有你在，放心"。\n但有时候你也会羡慕那些随性的人——\n他们好像活得更轻松，\n而你，总是在为别人擦屁股。\n\n你不是控制狂，\n你只是见过太多因为"差不多"而搞砸的事。\n\n你的严谨，是有价值的。\n只是有时候，可以给自己一点空间——\n完美不是唯一标准，\n完成比完美更重要。\n\n给意外留一点余地，\n你会发现，世界没那么容易崩塌。',
        
        // === ATCP: 任务型 + 分析型 + 谨慎型 + 说服型 ===
        ATCP: '"数字不会骗人"——这是你的信仰。\n\n你能从数据中看出别人看不出的东西，\n这是天赋。\n但有时候你也会怀疑：\n"是不是我太较真了？"\n\n当别人说"差不多行了"的时候，\n你心里有个声音说："不行，还不够准。"\n于是你继续深挖，继续验证，\n直到找到那个精确的答案。\n\n别人觉得你累，\n但你知道：\n正是因为有你这样的人，\n公司才没有在一堆"大概可能"的决策里亏钱。\n\n你的较真，是有价值的。\n只是有时候，接受"差不多"，\n世界不是非黑即白。',
        
        // === ATBD: 任务型 + 分析型 + 冒险型 + 直接型 ===
        ATBD: '你眼里只有目标，其他都是干扰。\n\n这种专注让你成就非凡，\n但也让你错过了沿途的风景。\n你不是冷漠，\n只是太清楚自己要什么。\n\n你是不是经常这样：\n• 开会时直奔主题，别人觉得你太急\n• 不喜欢闲聊，觉得浪费时间\n• 所有人都说你工作狂，其实你只是不想辜负自己\n\n你的专注，是超能力。\n只是有时候，停下来看看身边的人，\n你会发现：\n他们不是干扰，是同行者。',
        
        // === ATBP: 任务型 + 分析型 + 冒险型 + 说服型 ===
        ATBP: '你是可靠的代名词，答应的事一定会做到。\n\n但有时候你也会累，\n因为你总是把别人的期待扛在肩上。\n\n你是不是经常这样：\n• 明明已经忙不过来，还是接下新任务\n• 怕别人失望，所以从不拒绝\n• 所有人都说"找他就对了"，其实你只是想被需要\n\n你的可靠，是有价值的。\n但你的价值，不在于满足所有人。\n\n学会拒绝，\n不是自私，是自爱。',
        
        // === IRCD: 直觉型 + 关系型 + 谨慎型 + 直接型 ===
        IRCD: '你永远在想"为什么不"，这是你的天赋也是诅咒。\n\n你能看到别人看不到的可能，\n但也因此难以满足。\n\n当别人说"一直都是这样做的"，\n你心里有个声音说："那又怎样？"\n于是你开始质疑，开始挑战，\n开始走一条没人走过的路。\n\n别人觉得你难搞，\n但你知道：\n正是因为有你这样的人，\n世界才不会一成不变。\n\n你的颠覆，是有价值的。\n只是有时候，在颠覆之前，\n先理解现有规则的价值。',
        
        // === IRCP: 直觉型 + 关系型 + 谨慎型 + 说服型 ===
        IRCP: '你的人脉是你的财富，你享受连接带来的快感。\n\n但有时候你也会空虚：\n这些关系里，有多少是真实的？\n\n你是不是经常这样：\n• 微信里有几千人，却不知道找谁倾诉\n• 擅长认识新朋友，却不擅长维持深关系\n• 所有人都说"你朋友真多"，其实你只是怕孤独\n\n你的连接能力，是天赋。\n只是有时候，深耕几段核心关系，\n深度比广度更重要。',
        
        // === IRBD: 直觉型 + 关系型 + 冒险型 + 直接型 ===
        IRBD: '你赌的不是运气，是眼光。\n\n这种远见让你抓住别人抓不住的机会，\n但也让你承担别人承担不了的风险。\n\n当别人还在犹豫的时候，\n你已经看到了三步之后的局面。\n于是你押上筹码，\n然后等待时间证明你是对的。\n\n别人说你赌徒，\n但你知道：\n这不是赌博，是计算过的冒险。\n\n你的眼光，是有价值的。\n只是有时候，在 All in 之前，\n想好退路。',
        
        // === IRBP: 直觉型 + 关系型 + 冒险型 + 说服型 ===
        IRBP: '你天生就能影响他人，这是天赋也是责任。\n\n你享受舞台，\n但也害怕失去光环。\n\n你是不是经常这样：\n• 习惯性地成为焦点，不然会觉得失落\n• 擅长说服别人，却很少说服自己\n• 所有人都说"你太有魅力了"，其实你只是怕被忽视\n\n你的影响力，是天赋。\n只是有时候，在没人关注的时候，\n依然保持真诚。',
        
        // === ITCD: 直觉型 + 任务型 + 谨慎型 + 直接型 ===
        ITCD: '你能看到趋势，这让你领先一步。\n\n但有时候你也会孤独，\n因为别人跟不上你的节奏。\n\n当别人还在讨论"要不要做"的时候，\n你已经在想"怎么做"了。\n于是你开始行动，\n然后发现身边没人跟得上。\n\n别人说你太急，\n但你知道：\n机会不等人。\n\n你的洞察，是有价值的。\n只是有时候，给他人一点时间，\n也给自己一点耐心。',
        
        // === ITCP: 直觉型 + 任务型 + 谨慎型 + 说服型 ===
        ITCP: '变化是你的朋友，稳定反而让你不安。\n\n你能快速适应任何环境，\n但有时候你也会问：\n我的方向在哪里？\n\n你是不是经常这样：\n• 喜欢新鲜感，讨厌一成不变\n• 擅长应对变化，却不擅长长期坚持\n• 所有人都说"你适应力真强"，其实你只是怕无聊\n\n你的灵活，是天赋。\n只是有时候，在变化中，\n找到不变的核心。',
        
        // === ITBD: 直觉型 + 任务型 + 冒险型 + 直接型 ===
        ITBD: '你相信行动胜过思考，这是你的力量也是你的盲点。\n\n你敢于开始，\n但有时候也会后悔：\n是不是太冲动了？\n\n当别人还在分析利弊的时候，\n你已经开始了。\n于是你边做边学，\n有时候摔跟头，但always 在前进。\n\n别人说你鲁莽，\n但你知道：\n很多机会，就是想太多才错过的。\n\n你的勇气，是有价值的。\n只是有时候，在行动前，\n给自己 5 分钟思考。',
        
        // === ITBP: 直觉型 + 任务型 + 冒险型 + 说服型 ===
        ITBP: '你能在任何环境中找到平衡，这是智慧也是妥协。\n\n你适应力强，\n但有时候你也会迷失：\n哪个才是真实的我？\n\n你是不是经常这样：\n• 见人说人话，见鬼说鬼话\n• 擅长融入任何圈子，却不知道自己属于哪\n• 所有人都说"你情商真高"，其实你只是怕被排斥\n\n你的平衡能力，是天赋。\n只是有时候，在适应他人之前，\n先忠于自己。'
    };
    
    return insights[code] || '你有独特的谈判风格，继续发挥你的优势！';
}

// 根据偏离度计算星级（偏离 50% 越多，星越多）
function getStarCount(percent, baseline) {
    var deviation = Math.abs(percent - baseline);
    if (deviation >= 30) return 5;
    if (deviation >= 20) return 4;
    return 3;
}

// 生成星级字符串
function getStars(count) {
    var stars = '';
    for (var i = 0; i < count; i++) {
        stars += '⭐';
    }
    return stars;
}

// 生成综合评语（根据整体风格）
function generateOverallComment(code, scores) {
    var comments = {
        ARCD: '你是团队中的"最强大脑"，用数据和战略说话。但记住：最好的决策是数据 + 直觉的结合。',
        ARCP: '你是团队的"粘合剂"，用信任和关系凝聚人心。但记住：真正的关系是既能共赢，也能坚持底线。',
        ARBD: '你是团队的"守门员"，用谨慎和专业守护利益。但记住：有时候，速度比完美更重要。',
        ARBP: '你是团队的"润滑剂"，用温和与智慧促成合作。但记住：真正的和谐不是一味退让，而是找到平衡点。',
        ATCD: '你是团队的"工程师"，用流程和标准打造高效体系。但记住：流程是为人服务的，不要本末倒置。',
        ATCP: '你是团队的"分析师"，用数据和量化让一切透明可控。但记住：数据是工具，人才是目的。',
        ATBD: '你是团队的"执行者"，用结果和行动证明价值。但记住：方向比速度更重要，停下来思考也是生产力。',
        ATBP: '你是团队的"推进器"，用协作和落地让决策变成现实。但记住：有时候，慢就是快。',
        IRCD: '你是团队的"创新者"，用颠覆思维重新定义可能。但记住：创新需要落地，否则只是空想。',
        IRCP: '你是团队的"连接者"，用人脉和整合创造无限可能。但记住：真正的价值不在于认识多少人，而在于能创造多少价值。',
        IRBD: '你是团队的"冒险家"，用远见和勇气抓住未来。但记住：最大的冒险是控制风险的冒险。',
        IRBP: '你是团队的"影响者"，用魅力和激情点燃他人。但记住：真正的影响力来自真诚，而不是技巧。',
        ITCD: '你是团队的"洞察者"，用分析和预判把握趋势。但记住：洞察是为了行动，否则只是纸上谈兵。',
        ITCP: '你是团队的"应对者"，用敏捷和灵活应对变化。但记住：灵活不是没有原则，而是有原则的适应。',
        ITBD: '你是团队的"开创者"，用直觉和行动开辟新路。但记住：勇气不是没有恐惧，而是带着恐惧前进。',
        ITBP: '你是团队的"平衡者"，用智慧和适应驾驭复杂。但记住：平衡不是中庸，而是动态的最优解。'
    };
    
    return comments[code] || '你有独特的谈判风格，继续发挥你的优势！';
}
