
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin();
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
        {/* Branding Side */}
        <div className="hidden lg:flex flex-col gap-10">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-2xl italic">Σ</div>
            <span className="text-3xl font-black text-[#013C7F] tracking-tight">SIGMA ACADEMY</span>
          </div>
          <h1 className="text-6xl font-black text-[#013C7F] leading-tight">
            Unlock the power of <span className="text-[#E91040]">Expert Knowledge.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-md">
            The standard for Mathematics and Physics coaching. Join the community of top-rankers.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-10">
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#013C7F]">10k+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#013C7F]">50+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Expert Courses</div>
            </div>
          </div>
        </div>

        {/* Login Form Side */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 custom-shadow max-w-lg mx-auto w-full">
          <div className="text-center mb-10 lg:hidden">
            <div className="w-12 h-12 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-2xl italic mx-auto mb-4">Σ</div>
            <h2 className="text-3xl font-black text-[#013C7F]">Welcome Back</h2>
          </div>
          <div className="mb-10 hidden lg:block">
            <h2 className="text-3xl font-black text-[#013C7F] mb-2">Student Login</h2>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Access your learning portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-black text-[#013C7F]">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aman@example.com"
                className="w-full p-4 rounded-2xl border border-slate-200 focus:border-[#013C7F] focus:ring-1 focus:ring-[#013C7F] outline-none transition-all font-medium"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black text-[#013C7F]">Password</label>
                <button type="button" className="text-xs font-bold text-[#E91040] hover:underline">Forgot?</button>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-4 rounded-2xl border border-slate-200 focus:border-[#013C7F] focus:ring-1 focus:ring-[#013C7F] outline-none transition-all font-medium"
                required
              />
            </div>

            <button 
              disabled={loading}
              className={`w-full py-5 bg-[#013C7F] text-white rounded-2xl font-black text-lg shadow-xl shadow-[#013C7F]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : 'Login to Dashboard'}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-400 font-bold text-sm">
              Don't have an account? <button className="text-[#013C7F] hover:underline">Sign up for free</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
