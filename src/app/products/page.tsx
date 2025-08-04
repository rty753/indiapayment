import { ArrowLeft, CheckCircle, CreditCard, Smartphone, Globe, Users, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🏛️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    塔塔印度支付
                  </h2>
                  <p className="text-sm text-gray-500">TATA INDIA PAY</p>
                </div>
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">首页</Link>
              <Link href="/products" className="text-blue-600 font-medium flex items-center h-12">支付产品</Link>
              <Link href="/#advantages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">产品优势</Link>
              <Link href="/#scenarios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">支付场景</Link>
              <Link href="/#team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">支付团队</Link>
              <Link href="/#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回首页
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                印度支付产品
              </span>
              <br />
              <span className="text-gray-900">全方位解决方案</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              塔塔印度支付提供涵盖印度所有主流支付方式的一站式解决方案，支持UPI、Paytm、PhonePe等20+种支付通道，
              助力您的业务在印度市场快速发展
            </p>
          </div>
        </div>
      </section>

      {/* 主要支付产品 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心支付产品</h2>
            <p className="text-xl text-gray-600">印度本土最受欢迎的支付方式，覆盖超过13亿用户</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* UPI 支付 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-10 rounded-3xl card-shadow hover-lift">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">印度UPI支付</h3>
                  <p className="text-blue-600 font-semibold">Unified Payment Interface</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-8">
                UPI是印度最流行的支付方式，由印度国家支付公司（NPCI）开发的实时支付系统。
                可以将不同的银行账户整合到一个移动应用中，支持24x7全天候即时转账。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-gray-900">支付成功率</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">98.5%</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold text-gray-900">用户覆盖</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">8亿+</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">处理速度</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">即时</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-gray-900">安全等级</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">银行级</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-lg">产品特色：</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">聚合QR码唤醒收款</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">实时转账快速到账</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">支持所有主要银行</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">多语言界面支持</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paytm 支付 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-10 rounded-3xl card-shadow hover-lift">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mr-6">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Paytm支付</h3>
                  <p className="text-purple-600 font-semibold">印度最大数字钱包</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-8">
                Paytm是印度最大的移动支付和商务平台，受到超过4.5亿印度人的信赖。
                提供完整的数字支付生态系统，适合各种商业场景。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-gray-900">支付成功率</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">96.8%</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-gray-900">活跃用户</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">4.5亿</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-gray-900">市场份额</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">#1</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-gray-900">服务时间</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">24x7</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-lg">产品特色：</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">原生支付体验流畅</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">适合游戏充值场景</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">支付体验稳定可靠</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">多种充值提现方式</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 其他支付方式 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PhonePe */}
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">PhonePe支付</h3>
              <p className="text-gray-600 mb-4">印度排名第一的支付应用，拥有3.7亿用户群体</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">成功率</span>
                  <span className="font-bold text-green-600">97.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">用户数</span>
                  <span className="font-bold text-blue-600">3.7亿</span>
                </div>
              </div>
              <a 
                href="https://t.me/yinduzhifuxitong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all block text-center"
              >
                了解详情
              </a>
            </div>

            {/* 银行转账 */}
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">银行转账</h3>
              <p className="text-gray-600 mb-4">支持所有主要印度银行，安全可靠的传统支付方式</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">成功率</span>
                  <span className="font-bold text-blue-600">99.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">支持银行</span>
                  <span className="font-bold text-indigo-600">200+</span>
                </div>
              </div>
              <a 
                href="https://t.me/yinduzhifuxitong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all block text-center"
              >
                了解详情
              </a>
            </div>

            {/* 聚合支付 */}
            <div className="bg-white p-8 rounded-2xl card-shadow hover-lift border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">聚合支付</h3>
              <p className="text-gray-600 mb-4">一站式多渠道支付解决方案，智能路由优化</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">通道数量</span>
                  <span className="font-bold text-orange-600">20+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">综合成功率</span>
                  <span className="font-bold text-red-600">99.5%</span>
                </div>
              </div>
              <a 
                href="https://t.me/yinduzhifuxitong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all block text-center"
              >
                了解详情
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 技术优势 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">技术实力保障</h2>
            <p className="text-xl text-gray-600">先进的技术架构，确保支付系统稳定高效运行</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">毫秒级响应</h3>
              <p className="text-gray-600">API响应时间低于100ms，确保用户支付体验流畅</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">银行级安全</h3>
              <p className="text-gray-600">采用银行级加密技术，通过PCI DSS认证</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">智能路由</h3>
              <p className="text-gray-600">AI驱动的智能路由系统，自动优化支付成功率</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">全球部署</h3>
              <p className="text-gray-600">多地部署，负载均衡，确保服务稳定可靠</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">开始使用塔塔印度支付</h2>
          <p className="text-xl text-blue-100 mb-8">
            7x24小时技术支持，快速接入，助力您的业务在印度市场成功
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://t.me/yinduzhifuxitong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              立即咨询 Telegram
            </a>
            <Link 
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              查看更多联系方式
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">🏛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">塔塔印度支付</h3>
                  <p className="text-sm text-gray-400">TATA INDIA PAY</p>
                </div>
              </div>
              <p className="text-gray-400">专业的印度支付服务商，致力于为出海企业提供安全、快捷的一站式跨境支付解决方案。</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">支付产品</h3>
              <ul className="space-y-2 text-gray-400">
                <li>印度UPI支付</li>
                <li>Paytm原生支付</li>
                <li>PhonePe支付</li>
                <li>聚合支付通道</li>
                <li>巴基斯坦支付</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">应用场景</h3>
              <ul className="space-y-2 text-gray-400">
                <li>游戏充值</li>
                <li>社交直播</li>
                <li>电商购物</li>
                <li>数字内容</li>
                <li>跨境贸易</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📱 Telegram: @yinduzhifuxitong</li>
                <li>🌐 官方网站: indiapayment.org</li>
                <li>🕐 7x24小时技术支持</li>
                <li>⚡ D0实时结算</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 塔塔印度支付 (TATA INDIA PAY). 保留所有权利. | 印度支付领域的领先专家</p>
          </div>
        </div>
      </footer>
    </main>
  );
}