/**
 * 调用接口获取登录凭证（code）
 * @see [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/wx.login.html)
 */
export default function get_code() {
	return new Promise<string>((resolve, reject) => {
		wx.login({
			success(res) {
				resolve(res.code);
			},
			fail(err) {
				reject(new Error(err));
			}
		});
	});
}
