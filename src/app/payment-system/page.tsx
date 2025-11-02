import { ArrowLeft, CheckCircle, Globe, Shield, Zap, Users, TrendingUp, DollarSign, Server, Bell, Bot, Clock, Target, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "海外三方支付系统搭建 - 全球支付通道服务商 | 塔塔印度支付",
  description: "专业搭建海外三方支付系统，覆盖印度、印尼、越南、巴基斯坦等17国支付通道。三方支付系统支持纯协议全自动回调、智能预警机器人、精修收银台，为游戏平台提供最佳支付技术支持。物美价廉，安全稳定。",
  alternates: {
    canonical: "https://indiapayment.org/payment-system",
  },
  openGraph: {
    title: "海外三方支付系统搭建 - 全球支付通道服务商",
    description: "专业搭建海外三方支付系统，覆盖印度、印尼、越南等17国支付通道。三方支付系统支持纯协议全自动回调、智能预警机器人，为游戏平台提供最佳支付技术支持。",
    url: "https://indiapayment.org/payment-system",
    siteName: "塔塔印度支付",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "海外三方支付系统搭建 - 全球支付通道服务商",
    description: "专业搭建海外三方支付系统，覆盖17国支付通道，纯协议全自动回调，智能预警机器人",
  },
};

export default function PaymentSystemPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="payment-system" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回首页
            </Link>
            
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md mb-8">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-semibold">💡 专业搭建海外三方支付系统，只做海外！！！</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                海外三方支付系统
              </span>
              <br />
              <span className="text-gray-900">全球支付通道服务商</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              专业提供海外三方支付系统搭建服务，覆盖全球17国支付通道，支持纯协议全自动回调、智能预警机器人、
              精修收银台等核心功能，为海外游戏平台提供2025年最佳支付技术支持
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="https://t.me/zfxt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                立即咨询三方支付系统 <ArrowLeft className="w-5 h-5 rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 已开通国家支付通道 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">三方支付系统已覆盖17国支付通道</h2>
            <p className="text-xl text-gray-600">海外三方支付系统支持全球主流市场，为您的业务提供全方位支付解决方案</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇮🇳</div>
              <h3 className="text-lg font-bold text-gray-900">印度支付</h3>
              <p className="text-sm text-gray-600 mt-2">UPI/Paytm/PhonePe</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇮🇩</div>
              <h3 className="text-lg font-bold text-gray-900">印尼支付</h3>
              <p className="text-sm text-gray-600 mt-2">GoPay/OVO/Dana</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇻🇳</div>
              <h3 className="text-lg font-bold text-gray-900">越南支付</h3>
              <p className="text-sm text-gray-600 mt-2">MoMo/ZaloPay</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇵🇰</div>
              <h3 className="text-lg font-bold text-gray-900">巴基斯坦支付</h3>
              <p className="text-sm text-gray-600 mt-2">JazzCash/Easypaisa</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇧🇩</div>
              <h3 className="text-lg font-bold text-gray-900">孟加拉支付</h3>
              <p className="text-sm text-gray-600 mt-2">bKash/Nagad</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇵🇭</div>
              <h3 className="text-lg font-bold text-gray-900">菲律宾支付</h3>
              <p className="text-sm text-gray-600 mt-2">GCash/PayMaya</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇧🇷</div>
              <h3 className="text-lg font-bold text-gray-900">巴西支付</h3>
              <p className="text-sm text-gray-600 mt-2">PIX/Boleto</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇳🇬</div>
              <h3 className="text-lg font-bold text-gray-900">尼日利亚支付</h3>
              <p className="text-sm text-gray-600 mt-2">Flutterwave/Paystack</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇲🇽</div>
              <h3 className="text-lg font-bold text-gray-900">墨西哥支付</h3>
              <p className="text-sm text-gray-600 mt-2">SPEI/OXXO</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇪🇹</div>
              <h3 className="text-lg font-bold text-gray-900">埃塞俄比亚支付</h3>
              <p className="text-sm text-gray-600 mt-2">Telebirr/M-Pesa</p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇨🇩</div>
              <h3 className="text-lg font-bold text-gray-900">刚果支付</h3>
              <p className="text-sm text-gray-600 mt-2">Mobile Money</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇪🇬</div>
              <h3 className="text-lg font-bold text-gray-900">埃及支付</h3>
              <p className="text-sm text-gray-600 mt-2">Fawry/Vodafone Cash</p>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇮🇷</div>
              <h3 className="text-lg font-bold text-gray-900">伊朗支付</h3>
              <p className="text-sm text-gray-600 mt-2">Shetab/Shaparak</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇹🇷</div>
              <h3 className="text-lg font-bold text-gray-900">土耳其支付</h3>
              <p className="text-sm text-gray-600 mt-2">BKM/Papara</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇹🇭</div>
              <h3 className="text-lg font-bold text-gray-900">泰国支付</h3>
              <p className="text-sm text-gray-600 mt-2">PromptPay/TrueMoney</p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇿🇦</div>
              <h3 className="text-lg font-bold text-gray-900">南非支付</h3>
              <p className="text-sm text-gray-600 mt-2">SnapScan/Zapper</p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 p-6 rounded-2xl hover:shadow-xl transition-all group text-center">
              <div className="text-4xl mb-3">🇰🇪</div>
              <h3 className="text-lg font-bold text-gray-900">肯尼亚支付</h3>
              <p className="text-sm text-gray-600 mt-2">M-Pesa/Airtel Money</p>
            </div>
          </div>
        </div>
      </section>

      {/* 三方支付系统核心功能 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">三方支付系统核心功能优势</h2>
            <p className="text-xl text-gray-600">海外三方支付系统为您提供全方位的支付技术支持，确保业务稳定运行</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">纯协议全自动回调</h3>
              <p className="text-gray-600 leading-relaxed">
                三方支付系统采用纯协议接口技术，实现全自动回调机制。支付成功后系统自动通知商户平台，
                无需人工干预，确保订单状态实时同步。这种三方支付系统的自动化设计大幅提升了支付处理效率，
                减少了人工成本，让商户能够专注于核心业务发展。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">智能预警机器人</h3>
              <p className="text-gray-600 leading-relaxed">
                三方支付系统配备智能预警机器人，提供OTP掉线预警防掉单功能，当检测到OTP验证码通道异常时，
                系统立即发送预警通知，避免订单丢失。同时具备下发预警防冻结机制，监控账户异常行为，
                有效降低账户被冻结风险。这套三方支付系统的智能预警体系为商户提供全天候保护。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">自带查单记账机器人</h3>
              <p className="text-gray-600 leading-relaxed">
                三方支付系统内置智能查单机器人和记账机器人，支持通过Telegram快捷查询订单状态、
                交易明细和账户余额。记账机器人自动生成财务报表，实时统计收支数据，让财务管理变得简单透明。
                这个三方支付系统功能极大地方便了商户的日常运营管理工作。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">精修收银台成功率更高</h3>
              <p className="text-gray-600 leading-relaxed">
                三方支付系统的收银台经过精心优化设计，针对不同国家和地区的支付习惯进行了本地化改造。
                界面简洁美观，支付流程流畅便捷，大幅提升用户支付体验和成功率。经过实际测试，
                使用精修收银台的三方支付系统支付成功率平均提升15%以上，有效减少支付中途放弃率。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">支持跑分平台模式</h3>
              <p className="text-gray-600 leading-relaxed">
                三方支付系统支持跑分平台运营模式，可灵活配置多个收款账户进行轮询收款，
                有效分散单账户风险。系统自动进行账户负载均衡，智能分配交易订单，确保每个账户使用均衡。
                这种三方支付系统的跑分模式特别适合大额高频交易场景，显著提升了系统的稳定性和安全性。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">银行级安全防护</h3>
              <p className="text-gray-600 leading-relaxed">
                三方支付系统采用银行级别的安全加密技术，所有支付数据传输均使用SSL/TLS加密协议，
                确保交易信息安全。系统通过PCI DSS国际支付安全认证，具备完善的风控体系和反欺诈机制。
                这套三方支付系统的多层安全防护措施，为商户和用户提供最可靠的资金安全保障。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 三方支付系统技术优势 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择我们的三方支付系统</h2>
            <p className="text-xl text-gray-600">专业的海外三方支付系统服务商，为您提供最优质的支付解决方案</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">专注海外市场</h3>
                  <p className="text-gray-600">
                    我们的三方支付系统专注于海外市场，深耕全球17个国家和地区的本土支付通道。
                    与当地顶级支付服务商建立了稳固的合作关系，确保三方支付系统能够为您提供最优质的本土化支付服务。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">系统稳定可靠</h3>
                  <p className="text-gray-600">
                    三方支付系统采用分布式架构设计，支持千万级并发处理能力。系统99.9%稳定运行时长，
                    具备完善的容灾备份机制，确保三方支付系统7×24小时不间断稳定运行，保障商户业务连续性。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">成功率业界领先</h3>
                  <p className="text-gray-600">
                    经过精心优化的三方支付系统，平均支付成功率高达95%以上。通过智能路由算法、
                    精修收银台界面和本地化支付流程，我们的三方支付系统成功率在业界处于领先水平。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">快速接入部署</h3>
                  <p className="text-gray-600">
                    三方支付系统提供标准化API接口和详细技术文档，支持快速接入。我们的技术团队提供7×24小时技术支持，
                    协助商户完成三方支付系统的接入和部署工作，最快3天即可上线运营。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">三方支付系统核心数据</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">系统稳定性</span>
                    <span className="text-xl font-bold text-blue-600">99.9%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="w-[99.9%] h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">支付成功率</span>
                    <span className="text-xl font-bold text-green-600">95%+</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="w-[95%] h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">客户满意度</span>
                    <span className="text-xl font-bold text-purple-600">98%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="w-[98%] h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">17+</div>
                    <div className="text-sm text-gray-600">覆盖国家</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">支付通道</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">服务客户</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">技术支持</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">三方支付系统适用场景</h2>
            <p className="text-xl text-gray-600">海外三方支付系统广泛应用于各类出海业务场景</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl mb-6 text-center">🎮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">游戏平台</h3>
              <p className="text-gray-600 mb-4 text-center">
                三方支付系统为游戏平台提供专业的支付解决方案，支持游戏充值、虚拟物品购买等场景
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>手游、端游充值</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>虚拟道具购买</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>会员订阅服务</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl mb-6 text-center">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">社交直播</h3>
              <p className="text-gray-600 mb-4 text-center">
                三方支付系统支持社交直播平台的礼物打赏、会员购买等多种支付需求
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>直播打赏充值</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>VIP会员购买</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>虚拟礼物消费</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl mb-6 text-center">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">电商平台</h3>
              <p className="text-gray-600 mb-4 text-center">
                三方支付系统为跨境电商提供完整的支付解决方案，支持多种本地支付方式
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>商品在线支付</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>货到付款结算</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>退款自动处理</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 费用说明 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-12 rounded-3xl shadow-xl">
            <DollarSign className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">💰 三方支付系统费用</h2>
            <p className="text-2xl text-orange-600 font-bold mb-6">物美价廉！！！</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              我们的三方支付系统定价合理透明，没有隐藏费用。根据您的业务规模和需求，
              我们提供灵活的定价方案。相比同类三方支付系统服务商，我们的性价比更高，
              为您节省运营成本的同时，提供最优质的三方支付系统服务。
            </p>
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-gray-900">🧨 2025最佳海外游戏平台支付通道技术支持</span>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">立即开始使用三方支付系统</h2>
          <p className="text-xl text-blue-100 mb-12">
            联系我们获取专业的三方支付系统搭建服务，我们的团队将为您提供最佳的海外支付解决方案
          </p>
          
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 border border-purple-400 border-opacity-40 mb-8 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">官方联系方式</h3>
            </div>
            <div className="text-center mb-6">
              <p className="text-white text-lg mb-2">Telegram 官方客服</p>
              <a 
                href="https://t.me/zfxt5" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
              >
                @zfxt5
              </a>
            </div>
            <a 
              href="https://t.me/zfxt5" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              立即咨询三方支付系统
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <Shield className="w-10 h-10 mx-auto mb-2" />
              <p className="font-semibold">安全可靠</p>
            </div>
            <div className="text-center">
              <Zap className="w-10 h-10 mx-auto mb-2" />
              <p className="font-semibold">快速接入</p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 mx-auto mb-2" />
              <p className="font-semibold">专业服务</p>
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
              <p className="text-gray-400">专业的海外三方支付系统服务商，为出海企业提供安全、快捷的一站式支付解决方案。</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">三方支付系统</h3>
              <ul className="space-y-2 text-gray-400">
                <li>印度支付通道</li>
                <li>印尼支付通道</li>
                <li>越南支付通道</li>
                <li>全球17国支付</li>
                <li>智能预警系统</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">系统功能</h3>
              <ul className="space-y-2 text-gray-400">
                <li>纯协议回调</li>
                <li>查单机器人</li>
                <li>记账机器人</li>
                <li>精修收银台</li>
                <li>跑分平台模式</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📱 Telegram: @zfxt5</li>
                <li>🌐 官方网站: indiapayment.org</li>
                <li>🕐 7x24小时技术支持</li>
                <li>⚡ 快速接入部署</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 塔塔印度支付 (TATA INDIA PAY). 保留所有权利. | 专业海外三方支付系统服务商</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

