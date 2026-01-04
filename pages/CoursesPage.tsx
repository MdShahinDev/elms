
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/Home/CourseCard';
import { Course, CourseType, BatchType } from '../types';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Calculus for IIT-JEE',
    subject: 'Mathematics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.OFFER,
    batchType: BatchType.ONLINE,
    price: 49,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    offerExpiresAt: new Date(Date.now() + 86400000).toISOString(),
    description: 'Master derivatives, integrals, and differential equations with shortcut techniques.',
    features: ['120+ High Quality Lessons', 'Doubt Solving Sessions', 'Weekly Mock Tests', 'Downloadable PDF Notes'],
    learningOutcomes: ['Solve complex integrals in seconds', 'Understand real-world calculus applications', 'Master limits and continuity'],
    targetAudience: 'Students preparing for engineering entrance exams like IIT-JEE, BITSAT.'
  },
  {
    id: '2',
    title: 'Quantum Mechanics Essentials',
    subject: 'Physics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.PAID,
    batchType: BatchType.OFFLINE,
    price: 89,
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
    description: 'A deep dive into the world of atoms, particles, and wave-particle duality.',
    features: ['Live In-person Labs', 'Printed Workbooks', 'Personal Mentorship', 'Monthly Assessment'],
    learningOutcomes: ['Understand Schrodinger equation', 'Master Quantum Numbers', 'Analyze wave behavior'],
    targetAudience: 'Senior secondary students and physics enthusiasts.'
  },
  {
    id: '3',
    title: 'Basic Algebra Crash Course',
    subject: 'Mathematics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.FREE,
    batchType: BatchType.ONLINE,
    price: 0,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd482180c?auto=format&fit=crop&q=80&w=800',
    description: 'Get your foundations right with this comprehensive 2-hour starter course.',
    features: ['On-demand Video Lessons', 'Self-paced Learning', 'Certificate of Completion'],
    learningOutcomes: ['Master linear equations', 'Understand factoring', 'Solve quadratic problems'],
    targetAudience: 'Junior high students starting with algebra.'
  },
  {
    id: '4',
    title: 'Electromagnetism 101',
    subject: 'Physics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.PAID,
    batchType: BatchType.ONLINE,
    price: 99,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800',
    description: 'Understanding Maxwell equations, magnetic fields, and circuits.',
    features: ['Interactive Simulations', 'Community Discussion Forum', '24/7 Question Access'],
    learningOutcomes: ['Master Maxwell\'s equations', 'Understand circuit analysis', 'Visualize magnetic fields'],
    targetAudience: 'Physics students looking for visual intuition.'
  }
];

const CoursesPage: React.FC = () => {
  const [subjectFilter, setSubjectFilter] = useState<'All' | 'Mathematics' | 'Physics'>('All');
  const [priceFilter, setPriceFilter] = useState<'All' | 'Free' | 'Paid'>('All');

  const filteredCourses = MOCK_COURSES.filter(course => {
    const matchesSubject = subjectFilter === 'All' || course.subject === subjectFilter;
    const matchesPrice = priceFilter === 'All' || (priceFilter === 'Free' ? course.price === 0 : course.price > 0);
    return matchesSubject && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header Navigation (Simplified for subpages) */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-xl italic">Σ</div>
            <span className="text-2xl font-black text-[#013C7F] tracking-tight">SIGMA</span>
          </Link>
          <div className="flex items-center gap-4">
             <Link to="/login" className="px-6 py-2.5 bg-[#013C7F] text-white rounded-xl font-bold shadow-lg shadow-[#013C7F]/20 hover:bg-[#002d61] transition-all">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-[#013C7F] mb-4">Explore Our Courses</h1>
          <p className="text-slate-500 max-w-2xl font-medium">Whether you're starting from scratch or looking to master complex topics, we have a batch for you.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-slate-50 p-6 rounded-3xl border border-slate-100">
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-full mb-2 md:mb-0">Filter by Subject:</span>
            {['All', 'Mathematics', 'Physics'].map(sub => (
              <button
                key={sub}
                onClick={() => setSubjectFilter(sub as any)}
                className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${
                  subjectFilter === sub ? 'bg-[#013C7F] text-white shadow-lg shadow-[#013C7F]/20' : 'bg-white text-[#013C7F] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-full mb-2 md:mb-0">Price:</span>
            {['All', 'Free', 'Paid'].map(p => (
              <button
                key={p}
                onClick={() => setPriceFilter(p as any)}
                className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${
                  priceFilter === p ? 'bg-[#013C7F] text-white shadow-lg shadow-[#013C7F]/20' : 'bg-white text-[#013C7F] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
          {filteredCourses.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="text-slate-300 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-400">No courses found matching your selection.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
