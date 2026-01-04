
import React, { useState } from 'react';
// Fix: Import Navigate from react-router-dom
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { MOCK_COURSES } from './CoursesPage';

const CheckoutPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const course = MOCK_COURSES.find(c => c.id === id);

  if (!course) {
    return <Navigate to="/courses" />;
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30 animate-bounce">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="text-4xl font-black text-[#013C7F]">Payment Successful!</h1>
          <p className="text-slate-500 font-medium">Redirecting to your learning dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center gap-2">
            <Link to="/" className="w-10 h-10 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-xl italic">Σ</Link>
            <h1 className="text-2xl font-black text-[#013C7F]">Secure Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Summary Column */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xl font-black text-[#013C7F] uppercase tracking-widest text-xs">Course Summary</h2>
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
              <div className="flex gap-6">
                <img src={course.image} className="w-24 h-24 object-cover rounded-2xl" alt="" />
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-[#E91040] uppercase tracking-widest">{course.subject}</span>
                  <h3 className="font-black text-[#013C7F] leading-tight">{course.title}</h3>
                  <p className="text-xs text-slate-400 font-bold">{course.batchType}</p>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-slate-100">
                <div className="flex justify-between text-sm font-bold text-slate-500">
                  <span>Price</span>
                  <span>${course.originalPrice || course.price}</span>
                </div>
                {course.originalPrice && (
                   <div className="flex justify-between text-sm font-bold text-emerald-500">
                    <span>Discount</span>
                    <span>-${course.originalPrice - course.price}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-black text-[#013C7F] pt-4">
                  <span>Total Payable</span>
                  <span>${course.price}</span>
                </div>
              </div>

              <div className="bg-[#013C7F]/5 p-4 rounded-2xl flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#013C7F] shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div className="text-[10px] font-bold text-[#013C7F] uppercase tracking-widest">SSL Encrypted Payment System</div>
              </div>
            </div>
          </div>

          {/* Payment Details Column */}
          <div className="lg:col-span-3 space-y-8">
             <h2 className="text-xl font-black text-[#013C7F] uppercase tracking-widest text-xs">Payment Information</h2>
             <form onSubmit={handlePayment} className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#013C7F] uppercase tracking-widest">Full Name</label>
                      <input type="text" value="Aman Sharma" readOnly className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[#013C7F] cursor-not-allowed" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#013C7F] uppercase tracking-widest">Email</label>
                      <input type="email" value="aman@example.com" readOnly className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[#013C7F] cursor-not-allowed" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#013C7F] uppercase tracking-widest">Select Payment Method</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {['Credit Card', 'PayPal', 'Google Pay'].map(method => (
                        <button type="button" key={method} className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${method === 'Credit Card' ? 'border-[#013C7F] bg-[#013C7F]/5' : 'border-slate-100 hover:border-slate-200'}`}>
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${method === 'Credit Card' ? 'border-[#013C7F] bg-[#013C7F]' : 'border-slate-200'}`}>
                            {method === 'Credit Card' && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                          <span className="text-xs font-black text-[#013C7F]">{method}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 border border-slate-100 rounded-[32px] bg-slate-50/50 space-y-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Card Number</label>
                        <div className="relative">
                          <input type="text" placeholder="**** **** **** 1234" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#013C7F] transition-all font-mono" />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                          </div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiry Date</label>
                          <input type="text" placeholder="MM / YY" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#013C7F] transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">CVV</label>
                          <input type="password" placeholder="***" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#013C7F] transition-all" />
                        </div>
                     </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-[#013C7F] text-white rounded-3xl font-black text-xl shadow-2xl shadow-[#013C7F]/30 hover:-translate-y-1 transition-all"
                >
                  Pay Now & Start Learning
                </button>
                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  By clicking Pay Now, you agree to our <button className="underline">Terms of Service</button>
                </p>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
