// 结果页显示优化脚本 v2.0
// 用于修复最佳搭档和合作说明书的显示问题

// 优化最佳搭档显示
function renderBestMatchOptimized(code) {
    var bestMatchData = getBestMatchDeep(code);
    var el = document.getElementById('bestMatch');
    if (!el) {
        console.error('找不到 bestMatch 元素');
        return;
    }
    
    if (!bestMatchData) {
        el.innerHTML = '<div style="color:#86868b;text-align:center;padding:40px;">未找到最佳搭档数据</div>';
        return;
    }
    
    var html = '';
    
    // 标题卡片 - 绿色渐变
    html += '<div style="background:linear-gradient(135deg, #34c759, #30b35a);padding:20px;border-radius:12px;margin-bottom:20px;box-shadow:0 4px 20px rgba(52,199,89,0.3);">';
    html += '<div style="font-size:20px;font-weight:800;color:#fff;margin-bottom:6px;">🤝 ' + bestMatchData.match + ' ' + bestMatchData.matchName + '</div>';
    html += '<div style="font-size:13px;color:rgba(255,255,255,0.9);">角色：' + bestMatchData.role + '</div>';
    html += '</div>';
    
    // 为什么是你们 - 蓝色左边框
    html += '<div style="background:#2c2c2e;padding:18px;border-radius:12px;margin-bottom:16px;border-left:4px solid #0071e3;">';
    html += '<div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:10px;">💡 为什么是你们</div>';
    html += '<div style="font-size:14px;color:#fff;line-height:1.9;white-space:pre-line;">' + bestMatchData.why + '</div>';
    html += '</div>';
    
    // 合作场景 - 青色左边框
    html += '<div style="background:#2c2c2e;padding:18px;border-radius:12px;margin-bottom:16px;border-left:4px solid #5ac8fa;">';
    html += '<div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:10px;">✅ 合作场景</div>';
    html += '<div style="font-size:14px;color:#fff;line-height:1.9;white-space:pre-line;">' + bestMatchData.scenarios + '</div>';
    html += '</div>';
    
    // 小心踩坑 - 橙色左边框
    html += '<div style="background:#2c2c2e;padding:18px;border-radius:12px;margin-bottom:16px;border-left:4px solid #f5a623;">';
    html += '<div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:10px;">⚠️ 小心踩坑</div>';
    html += '<div style="font-size:14px;color:#fff;line-height:1.9;white-space:pre-line;">' + bestMatchData.pitfalls + '</div>';
    html += '</div>';
    
    // 沟通秘籍 - 绿色左边框
    html += '<div style="background:#2c2c2e;padding:18px;border-radius:12px;margin-bottom:20px;border-left:4px solid #34c759;">';
    html += '<div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:10px;">💬 沟通秘籍</div>';
    html += '<div style="font-size:14px;color:#fff;line-height:1.9;white-space:pre-line;">' + bestMatchData.tips + '</div>';
    html += '</div>';
    
    // 合作金句 - 特殊样式
    html += '<div style="text-align:center;padding:20px;background:linear-gradient(135deg, rgba(52,199,89,0.15), rgba(48,179,90,0.1));border-radius:12px;border:2px solid rgba(52,199,89,0.3);">';
    html += '<div style="font-size:13px;color:#86868b;margin-bottom:8px;">💎 合作金句</div>';
    html += '<div style="font-size:17px;font-weight:700;color:#34c759;line-height:1.6;">"' + bestMatchData.goldenQuote + '"</div>';
    html += '</div>';
    
    el.innerHTML = html;
    console.log('最佳搭档渲染完成');
}

// 合作说明书查询
function queryCooperationGuide(partnerCode) {
    console.log('=== 开始查询合作说明书 ===');
    console.log('partnerCode:', partnerCode);
    console.log('currentResult:', currentResult);
    console.log('getCooperationGuide:', typeof getCooperationGuide);
    console.log('styleDefinitions:', typeof styleDefinitions);
    
    try {
        // 检查依赖
        if (typeof getCooperationGuide !== 'function') {
            alert('查询功能未加载，请刷新页面重试');
            return;
        }
        
        if (typeof styleDefinitions === 'undefined') {
            alert('数据未加载，请刷新页面重试');
            return;
        }
        
        var myCode = currentResult ? currentResult.code : null;
        if (!myCode) {
            alert('请先完成测试或查看测试结果');
            return;
        }
        
        // 获取合作指南
        var guide = getCooperationGuide(myCode, partnerCode);
        console.log('guide:', guide);
        
        if (!guide) {
            alert('未找到合作指南');
            return;
        }
        
        var resultDiv = document.getElementById('cooperationResult');
        if (!resultDiv) {
            alert('页面元素未找到');
            return;
        }
        
        // 获取风格信息
        var myStyle = styleDefinitions[myCode] || { name: '未知' };
        var partnerStyle = styleDefinitions[partnerCode] || { name: '未知' };
        
        // 构建 HTML
        var html = '<div class="card" style="background:linear-gradient(135deg, #2c2c2e, #1c1c1e);border:2px solid #0071e3;margin-top:20px;">';
        html += '<div class="card-body" style="padding:20px;">';
        
        // 标题
        html += '<div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:8px;">📋 ' + myCode + ' × ' + partnerCode + ' 合作说明书</div>';
        html += '<div style="font-size:13px;color:#86868b;margin-bottom:20px;">组合类型：' + guide.type + ' · ' + guide.role + '</div>';
        
        // 角色分工
        html += '<div style="margin-bottom:20px;">';
        html += '<div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:10px;">【角色分工】</div>';
        html += '<div style="font-size:14px;color:#fff;line-height:1.8;">';
        html += '<div style="margin-bottom:8px;"><span style="color:#5ac8fa;">你</span>（' + myCode + ' ' + myStyle.name + '）：' + guide.yourRole + '</div>';
        html += '<div><span style="color:#5ac8fa;">他</span>（' + partnerCode + ' ' + partnerStyle.name + '）：' + guide.theirRole + '</div>';
        html += '</div></div>';
        
        // 合作优势
        html += '<div style="margin-bottom:20px;">';
        html += '<div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:10px;">【合作优势】</div>';
        for (var i = 0; i < guide.advantages.length; i++) {
            html += '<div style="font-size:14px;color:#fff;line-height:1.6;margin:6px 0;">✅ ' + guide.advantages[i] + '</div>';
        }
        html += '</div>';
        
        // 冲突预警
        html += '<div style="margin-bottom:20px;">';
        html += '<div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:10px;">【冲突预警】</div>';
        html += '<div style="font-size:14px;color:#fff;line-height:1.6;background:rgba(245,166,35,0.1);padding:12px;border-radius:8px;">⚠️ ' + guide.conflicts + '</div></div>';
        
        // 合作秘籍
        html += '<div style="margin-bottom:20px;">';
        html += '<div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:10px;">【合作秘籍】</div>';
        html += '<div style="font-size:14px;color:#0071e3;line-height:1.6;font-weight:600;background:rgba(0,113,227,0.1);padding:12px;border-radius:8px;">💡 ' + guide.solution + '</div></div>';
        
        // 金句
        html += '<div style="text-align:center;padding:16px;background:linear-gradient(135deg, rgba(0,113,227,0.15), rgba(91,200,250,0.1));border-radius:12px;border:1px solid rgba(0,113,227,0.3);">';
        html += '<div style="font-size:16px;font-weight:700;color:#0071e3;">"' + guide.quote + '"</div></div>';
        
        // 分享按钮
        html += '<button class="btn-action btn-secondary" onclick="shareCooperationGuide(\'' + myCode + '\', \'' + partnerCode + '\')" style="margin-top:20px;width:100%;">📤 分享给 TA</button>';
        
        html += '</div></div>';
        
        resultDiv.innerHTML = html;
        resultDiv.classList.remove('hidden');
        
        // 滚动到结果
        setTimeout(function() {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        
        console.log('=== 合作说明书渲染完成 ===');
    } catch(e) {
        console.error('查询失败:', e);
        alert('查询失败：' + e.message + '\n\n请打开浏览器控制台（F12）查看详细信息');
    }
}

// 选择风格代码并查询
function selectPartnerCode(code) {
    console.log('选择风格代码:', code);
    document.getElementById('partnerCodeInput').value = code;
    queryCooperationGuide(code);
}

// 手动查询
function queryCooperation() {
    var partnerCode = document.getElementById('partnerCodeInput').value.trim().toUpperCase();
    if (!partnerCode || partnerCode.length !== 4) {
        alert('请输入 4 位风格代码（如 ARCD）');
        return;
    }
    queryCooperationGuide(partnerCode);
}

// 暴露到全局
window.renderBestMatchOptimized = renderBestMatchOptimized;
window.queryCooperationGuide = queryCooperationGuide;
window.selectPartnerCode = selectPartnerCode;
window.queryCooperation = queryCooperation;
