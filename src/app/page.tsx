import { ArrowRight, CheckCircle, CreditCard, Globe, Shield, Zap, Users, Star, Clock, Building, MessageCircle, Phone, Award, BarChart3, Target, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🏛️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    塔塔印度支付
                  </h2>
                  <p className="text-sm text-gray-500">TATA INDIA PAY</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">首页</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">支付产品</a>
              <a href="#advantages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">产品优势</a>
              <a href="#scenarios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">支付场景</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">支付团队</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md mb-8">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">印度排名前3的专业支付服务商</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                出海印度最佳
              </span>
              <br />
              <span className="text-gray-900">支付合作伙伴</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              PAYNOW已开通印度和巴基斯坦本土原生支付业务，适用于线上的聚合支付系统，支持D0结算，
              印度支付应用各种不同场景，例如PayTm以及UPI唤醒支付等等
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="https://t.me/yinduzhifuxitong" 
            target="_blank"
            rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                立即开始接入 <ArrowRight className="w-5 h-5" />
          </a>
          <a
                href="/products"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                查看技术文档
          </a>
        </div>
            
            {/* 核心数据展示 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%+</div>
                <div className="text-gray-600">支付成功率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
                <div className="text-gray-600">聚合支付通道</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
                <div className="text-gray-600">优质客户</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">D0</div>
                <div className="text-gray-600">实时结算</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支付产品 */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2024印度最佳支付产品</h2>
            <p className="text-xl text-gray-600">涵盖印度所有主流支付方式，为您的业务提供全方位支付解决方案</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* UPI */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">印度UPI</h3>
              <p className="text-gray-600 mb-4">印度国家统一支付接口，最流行的支付方式</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  聚合QR唤醒收款
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  实时转账快速到账
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  覆盖全印度用户
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600">成功率 98%</div>
            </div>

            {/* Paytm */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Paytm支付</h3>
              <p className="text-gray-600 mb-4">印度最大的数字移动支付平台</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  4.5亿用户信赖
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  原生支付体验
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  适合游戏场景
                </li>
              </ul>
              <div className="text-2xl font-bold text-purple-600">成功率 96%</div>
            </div>

            {/* PhonePe */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">PhonePe支付</h3>
              <p className="text-gray-600 mb-4">印度排名第一的最佳支付应用</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  3.7亿用户群体
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  安全可靠快捷
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  无现金化支付
                </li>
              </ul>
              <div className="text-2xl font-bold text-green-600">成功率 97%</div>
            </div>

            {/* 聚合支付 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">聚合支付</h3>
              <p className="text-gray-600 mb-4">一站式多渠道支付解决方案</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  20+支付通道
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  智能路由切换
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  抗并发能力强
                </li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">成功率 99%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">产品核心优势</h2>
            <p className="text-xl text-gray-600">为什么选择塔塔印度支付？六大核心优势助力您的业务成功</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">D0快速结算</h3>
              <p className="text-gray-600">24小时API及时快速出款，无工作日结算限制要求，为出海印度客户解决心头之患。支持T+0实时到账，大幅提升资金周转效率。</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">系统稳定抗并发</h3>
              <p className="text-gray-600">无论收付都能快速执行，完全能够应对千万级并发。保证系统的稳定性和响应速度，毫秒级的流畅付款响应时间。</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">聚合支付体系</h3>
              <p className="text-gray-600">支持多支付产品或通道轮询，保证客户运营不受到影响。涵盖印度多达20+种支付方式，实现智能路由和负载均衡。</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">快速接入服务</h3>
              <p className="text-gray-600">7X24小时技术随时协助客户接入系统并投入生产环境，简化审核流程。标准化API接口，完善的SDK支持。</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">数据洞察分析</h3>
              <p className="text-gray-600">实时交易监控，智能风控系统，详细数据报表助力业务决策。提供Telegram机器人快捷查询余额以及订单信息。</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">诚信专业服务</h3>
              <p className="text-gray-600">与印度本土第三方支付公司战略合作，严格遵循RBI监管要求，通过PCI DSS认证，保障资金和数据安全。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 支付场景 */}
      <section id="scenarios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">印度支付场景全覆盖</h2>
            <p className="text-xl text-gray-600">支持游戏、泛娱乐直播等产品出海场景，为不同行业提供专业解决方案</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">游戏收款解决方案</h3>
              <p className="text-gray-600 mb-6">为游戏产品出海提供快速回调、原生代付的专业收款解决方案</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  虚拟物品充值优化
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  防欺诈风控系统
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  快速回调机制
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  原生代付支持
                </li>
              </ul>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-center font-semibold">
                适用产品：手游、端游、页游
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">社交支付解决方案</h3>
              <p className="text-gray-600 mb-6">为社交产品出海提供个性化的收款解决方案，支持最低小额付款</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  小额支付优化
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  个性化营销工具
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  用户体验优化
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  社交场景定制
                </li>
              </ul>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-center font-semibold">
                适用产品：直播、社交、约会
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">电商平台解决方案</h3>
              <p className="text-gray-600 mb-6">为电商平台提供完整的支付解决方案，覆盖购物全流程</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  多种支付方式集成
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  购物车挽回机制
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  分期付款支持
          </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  退款自动化处理
          </li>
              </ul>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-center font-semibold">
                适用产品：电商、零售、B2B
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支付团队 */}
      <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">专业支付团队</h2>
            <p className="text-xl text-gray-600">拥有诚信和经验丰富的专业印度支付团队，为您的业务保驾护航</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">印度本土团队</h3>
                  <p className="text-gray-600">在印度设有本土运营团队，深度了解当地支付生态，与印度顶级金融机构建立长期合作关系。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">技术专家团队</h3>
                  <p className="text-gray-600">拥有10年以上跨境支付经验的技术专家，提供7x24小时技术支持和系统维护。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">合规风控团队</h3>
                  <p className="text-gray-600">专业的合规风控团队，严格遵循印度RBI监管要求，确保所有交易合规安全。</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">团队核心优势</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">印度本土化程度</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-30 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">95%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">技术专业水平</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-31 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">98%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">客户服务满意度</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-30 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">96%</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">7x24小时服务</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    全天候技术支持，快速响应客户需求
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">与塔塔印度支付紧密合作</h2>
          <p className="text-xl text-blue-100 mb-12">
            我们将为您提供最佳的印度收付解决方案，助力您的业务在印度市场取得成功
          </p>
          
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-50">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">官方Telegram</h3>
              <p className="text-white mb-6 text-lg drop-shadow-md">7x24小时在线客服，快速响应您的咨询</p>
              <a 
                href="https://t.me/yinduzhifuxitong" 
          target="_blank"
          rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block shadow-lg"
              >
                @yinduzhifuxitong
          </a>
        </div>
            
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-50">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">技术支持</h3>
              <p className="text-white mb-6 text-lg drop-shadow-md">专业技术团队为您提供接入指导</p>
                            <a 
                href="/products"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block text-center"
              >
                获取技术文档
              </a>
            </div>
          </div>
          
          <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">认准官方 TATA PAYNOW</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" />
                <p className="text-lg font-semibold drop-shadow-md">官方认证</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" />
                <p className="text-lg font-semibold drop-shadow-md">专业团队</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" />
                <p className="text-lg font-semibold drop-shadow-md">安全保障</p>
              </div>
            </div>
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