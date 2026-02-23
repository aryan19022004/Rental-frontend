// Header.tsx
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  Home,
  Bike,
  BookOpen,
  Shirt,

  Smartphone,
  Calendar,
  Search,
  Sparkles,
  LogIn,
  PlusCircle
} from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isRentDropdownOpen, setIsRentDropdownOpen] = useState(false);

  const categories = [
    { name: 'Electronics', icon: Smartphone, subcategories: ['Laptops', 'Smartphones', 'Cameras', 'Gaming', 'Audio'] },
    { name: 'Vehicles', icon: Bike, subcategories: ['Bikes', 'Cars', 'Scooters', 'Cycles', 'Electric'] },
    { name: 'Fashion', icon: Shirt, subcategories: ['Men', 'Women', 'Watches', 'Bags', 'Accessories'] },
    { name: 'Properties', icon: Home, subcategories: ['1 BHK', '2 BHK', '3 BHK', 'PG', 'Sharing'] },
    { name: 'Books & Study', icon: BookOpen, subcategories: ['Textbooks', 'Novels', 'Notes', 'Magazines'] },
    { name: 'Others', icon: Calendar, subcategories: ['Furniture', 'Sports', 'Camping', 'Party'] }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg shadow-indigo-500/5 border-b border-indigo-100 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Updated with homepage gradient */}
          <div className="flex items-center group cursor-pointer">
            <div className="text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 text-white px-3 py-1.5 rounded-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300 inline-block">
                A
              </span>
              <span className="ml-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                ffito
              </span>
              <span className="text-xs align-super ml-0.5 text-indigo-500 font-medium">.com</span>
            </div>
          </div>

          {/* Search Bar - Medium Screens */}
        

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Rent Dropdown - Updated with better styling */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1.5 text-slate-700 hover:text-indigo-600 font-medium py-2 px-3 rounded-lg hover:bg-indigo-50/50 transition-all duration-200 group"
                onMouseEnter={() => setIsRentDropdownOpen(true)}
                onMouseLeave={() => setIsRentDropdownOpen(false)}
              >
                <span>Rent</span>
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Rent Categories Dropdown - Enhanced with gradient and better UI */}
              {isRentDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-[680px] bg-white/95 backdrop-blur-md shadow-xl shadow-indigo-500/10 rounded-2xl p-6 grid grid-cols-3 gap-6 border border-indigo-100 mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setIsRentDropdownOpen(true)}
                  onMouseLeave={() => setIsRentDropdownOpen(false)}
                >
                  {categories.map((category, idx) => (
                    <div key={idx} className="space-y-2 group/category">
                      <div className="flex items-center space-x-2 pb-1 border-b border-indigo-100">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br 
                          ${idx === 0 ? 'from-indigo-100 to-indigo-50 text-indigo-600' : 
                            idx === 1 ? 'from-violet-100 to-violet-50 text-violet-600' :
                            idx === 2 ? 'from-purple-100 to-purple-50 text-purple-600' :
                            idx === 3 ? 'from-teal-100 to-teal-50 text-teal-600' :
                            idx === 4 ? 'from-amber-100 to-amber-50 text-amber-600' :
                            'from-rose-100 to-rose-50 text-rose-600'}`}>
                          <category.icon size={16} />
                        </div>
                        <span className="font-semibold text-slate-800 text-sm">{category.name}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {category.subcategories.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <a href="#" className="text-sm text-slate-600 hover:text-indigo-600 hover:pl-1 transition-all block">
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* View all link */}
                  <div className="col-span-3 mt-2 pt-3 border-t border-indigo-100">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center justify-center gap-1 group">
                      View All Categories 
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50/50 transition-all duration-200">Buy</a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50/50 transition-all duration-200">Sell</a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50/50 transition-all duration-200">How it Works</a>
            
            {/* List Item Button - Updated with gradient */}
            <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 font-semibold text-sm overflow-hidden">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <PlusCircle size={18} className="relative z-10" />
              <span className="relative z-10">List Your Item</span>
            </button>
            
            {/* Profile - Updated with gradient */}
            <div className="relative group/profile">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 via-violet-100 to-teal-100 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-md hover:shadow-indigo-500/20 transition-all border-2 border-white">
                <User size={20} className="text-indigo-600" />
              </div>
              
              {/* Profile dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl shadow-indigo-500/10 border border-indigo-100 py-2 opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">My Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">My Rentals</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">My Listings</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">Earnings</a>
                <div className="border-t border-indigo-100 my-1"></div>
                <a href="#" className="block px-4 py-2 text-sm text-rose-600 hover:bg-rose-50">Sign Out</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Search - Visible on small screens */}
        <div className="md:hidden py-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search items..."
              className="w-full px-4 py-2.5 pl-10 bg-slate-50/80 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300/50 text-slate-700 placeholder:text-slate-400 text-sm"
            />
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          </div>
        </div>

        {/* Mobile Menu - Updated with gradient and better styling */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-indigo-100 bg-white/50 backdrop-blur-sm animate-in slide-in-from-top duration-200">
            <div className="space-y-4">
              {/* Mobile Categories */}
              <div className="space-y-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium text-slate-800 px-2 py-2 hover:bg-indigo-50 rounded-lg transition-colors"
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50">
                      <Search size={16} className="text-indigo-600" />
                    </div>
                    <span>Browse Categories</span>
                  </div>
                  <ChevronDown size={18} className={`transform transition ${isCategoriesOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
                </button>
                
                {isCategoriesOpen && (
                  <div className="pl-4 space-y-4 mt-2 max-h-96 overflow-y-auto">
                    {categories.map((category, idx) => (
                      <div key={idx} className="space-y-2 bg-slate-50/50 p-3 rounded-xl">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg 
                            ${idx === 0 ? 'bg-indigo-100 text-indigo-600' : 
                              idx === 1 ? 'bg-violet-100 text-violet-600' :
                              idx === 2 ? 'bg-purple-100 text-purple-600' :
                              idx === 3 ? 'bg-teal-100 text-teal-600' :
                              idx === 4 ? 'bg-amber-100 text-amber-600' :
                              'bg-rose-100 text-rose-600'}`}>
                            <category.icon size={14} />
                          </div>
                          <span className="font-medium text-slate-800 text-sm">{category.name}</span>
                        </div>
                        <div className="pl-6 grid grid-cols-2 gap-2">
                          {category.subcategories.map((sub, subIdx) => (
                            <a key={subIdx} href="#" className="text-xs text-slate-600 hover:text-indigo-600 py-1">
                              {sub}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 px-2 py-2 hover:bg-indigo-50 rounded-lg transition-colors">
                <Sparkles size={18} className="text-indigo-500" />
                <span>Buy</span>
              </a>
              
              <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 px-2 py-2 hover:bg-indigo-50 rounded-lg transition-colors">
                <PlusCircle size={18} className="text-violet-500" />
                <span>Sell</span>
              </a>
              
              <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 px-2 py-2 hover:bg-indigo-50 rounded-lg transition-colors">
                <Calendar size={18} className="text-teal-500" />
                <span>How it Works</span>
              </a>
              
              <div className="pt-2 space-y-2">
                <button className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all font-semibold text-sm flex items-center justify-center gap-2">
                  <PlusCircle size={18} />
                  <span>List Your Item</span>
                </button>
                
                <button className="w-full border border-indigo-200 text-indigo-600 px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all font-medium text-sm flex items-center justify-center gap-2">
                  <LogIn size={18} />
                  <span>Sign In</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3 pt-2 px-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 via-violet-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <User size={20} className="text-indigo-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">Guest User</div>
                  <div className="text-xs text-slate-500">Sign in to access your account</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;