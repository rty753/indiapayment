'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'home' | 'products' | 'payment-system';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
            <Link 
              href="/" 
              className={`font-medium transition-colors flex items-center h-12 ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              首页
            </Link>
            <Link 
              href="/products" 
              className={`font-medium transition-colors flex items-center h-12 ${
                currentPage === 'products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              支付产品
            </Link>
            <Link 
              href="/payment-system" 
              className={`font-medium transition-colors flex items-center h-12 ${
                currentPage === 'payment-system' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              三方支付系统
            </Link>
            <Link href="/#advantages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center h-12">
              产品优势
            </Link>
            <Link href="/#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center">
              联系我们
            </Link>
          </div>
          <button 
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className={`block font-medium py-2 ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/products" 
              className={`block font-medium py-2 ${
                currentPage === 'products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              支付产品
            </Link>
            <Link 
              href="/payment-system" 
              className={`block font-medium py-2 ${
                currentPage === 'payment-system' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              三方支付系统
            </Link>
            <Link 
              href="/#advantages" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              产品优势
            </Link>
            <Link 
              href="/#scenarios" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              支付场景
            </Link>
            <Link 
              href="/#team" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              支付团队
            </Link>
            <Link 
              href="/#contact" 
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-center font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              联系我们
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

