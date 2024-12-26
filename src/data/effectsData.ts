import { GradientButton } from '../components/examples/GradientButton';
import { PulsingCard } from '../components/examples/PulsingCard';
import { GlassCard } from '../components/examples/GlassCard';

export const effectsData = [
  {
    id: 'gradient-button',
    title: '渐变按钮',
    description: '使用渐变背景色和悬停效果创建的现代按钮设计。这个效果结合了颜色渐变、缩放动画和阴影效果，创造出富有层次感的交互体验。',
    component: GradientButton,
    code: `export function GradientButton() {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
      text-white font-semibold rounded-full 
      hover:from-purple-600 hover:to-pink-600 
      transform hover:scale-105 transition-all duration-300 
      shadow-lg hover:shadow-xl">
      Hover Me
    </button>
  );
}`,
  },
  {
    id: 'pulsing-card',
    title: '脉冲效果',
    description: '使用动画创建平滑的脉冲发光效果。通过组合使用绝对定位、模糊效果和动画，实现了一个动态的视觉焦点。',
    component: PulsingCard,
    code: `export function PulsingCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 
        to-blue-500 rounded-lg blur opacity-75 animate-pulse">
      </div>
      <div className="relative bg-white rounded-lg p-4 shadow-xl">
        <p className="text-gray-800">Pulsing Effect</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'glass-card',
    title: '毛玻璃效果',
    description: '使用backdrop-blur创建现代磨砂玻璃效果。这种设计在保持内容可读性的同时，为界面增添了深度感和现代感。',
    component: GlassCard,
    code: `export function GlassCard() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 
        to-purple-500 rounded-lg -z-10"></div>
      <div className="backdrop-blur-md bg-white/30 p-6 rounded-lg 
        border border-white/30 transform transition-all duration-300 
        group-hover:scale-105">
        <p className="text-white font-medium">Glass Effect</p>
      </div>
    </div>
  );
}`,
  },
];