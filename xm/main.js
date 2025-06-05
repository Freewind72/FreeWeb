// 配置参数
const merchantId = 1016; // 商户ID
const key = 'sDrdLWxfFcPkKxf6RbBMOKyLhiqQ6gls'; // 商户密钥（请替换为你的真实密钥）
// 请将下面的 notify_url 和 return_url 替换为你自己服务器的实际地址
// notify_url 用于接收支付平台的异步通知（服务器回调），必须为公网可访问的接口地址
// return_url 用于支付完成后页面跳转通知，用户支付后会跳转到该页面
// notify_url 和 return_url 必须为公网可访问地址，否则签名校验会失败
const notify_url = 'https://freewind72.github.io/FreeWeb/xm'; // 替换为你的真实公网地址
const return_url = 'https://freewind72.github.io/FreeWeb/xm'; // 替换为你的真实公网地址
const sitename = '精致支付网站';

function buildSign(params, key) {
    // 1. 按参数名升序排序
    const keys = Object.keys(params).sort();
    // 2. 拼接为 key=value&key2=value2...
    let str = '';
    keys.forEach(k => {
        if (params[k] !== '' && params[k] !== undefined && k !== 'sign' && k !== 'sign_type') {
            str += `${k}=${params[k]}&`;
        }
    });
    str += `key=${key}`;
    // 3. MD5加密
    return md5(str).toLowerCase();
}

document.getElementById('payForm').onsubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const money = form.money.value.trim();
    const type = form.type.value;
    const out_trade_no = form.out_trade_no.value.trim();

    // 构造参数
    const params = {
        pid: merchantId,
        type,
        out_trade_no,
        notify_url,
        return_url,
        name,
        money,
        sitename
    };
    // 生成签名
    params.sign = buildSign(params, key);
    params.sign_type = 'MD5';

    // 跳转支付
    const formEl = document.createElement('form');
    formEl.method = 'POST';
    formEl.action = 'https://pay.240130.cn/submit.php';
    formEl.style.display = 'none';
    for (const k in params) {
        const input = document.createElement('input');
        input.name = k;
        input.value = params[k];
        formEl.appendChild(input);
    }
    document.body.appendChild(formEl);
    formEl.submit();
};

document.getElementById('queryForm').onsubmit = function(e) {
    e.preventDefault();
    const order_no = e.target.order_no.value.trim();
    if (!order_no) return;
    const params = {
        order_no,
        type: 1
    };
    fetch('https://pay.240130.cn/api/findorder', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')
    })
    .then(res => res.json())
    .then(res => {
        if (res.code === 200 && res.data) {
            document.getElementById('queryResult').innerHTML =
                `<b>订单状态：</b>${res.data.trade_status === 'TRADE_SUCCESS' ? '支付成功' : '未支付'}<br>
                <b>订单号：</b>${res.data.out_trade_no}<br>
                <b>平台订单号：</b>${res.data.trade_no}<br>
                <b>商品名称：</b>${res.data.name}<br>
                <b>金额：</b>${res.data.money} 元<br>
                <b>支付方式：</b>${res.data.type}`;
        } else {
            document.getElementById('queryResult').textContent = res.msg || '查询失败';
        }
    })
    .catch(() => {
        document.getElementById('queryResult').textContent = '查询失败，请稍后重试';
    });
};
