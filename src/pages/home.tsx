// HomePage.tsx
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/general/header';
import {
    Search,
    MapPin,
    Star,
 
    Clock,
    TrendingUp,
 
    ChevronRight,
    Bike,
    Home,
    BookOpen,
    Shirt,
  
   
    Calendar,
  
    Rocket,
    Zap,
    Shield,

    CheckCircle,
    ArrowRight,
    Sparkles,
    ShieldCheck,
  
    UserCheck,
    Briefcase,
    Camera,
    Watch,
    Laptop,
    Headphones,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPinned
} from 'lucide-react';

const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');
    const categoriesRef = useRef<HTMLDivElement>(null);

    // Auto-scroll animation for categories
    useEffect(() => {
        const scrollContainer = categoriesRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollStep = 1; // pixels per frame
        const scrollDelay = 30; // ms between frames

        const scroll = () => {
            if (!scrollContainer) return;

            scrollAmount += scrollStep;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }

            scrollContainer.scrollLeft = scrollAmount;
        };

        let intervalId = setInterval(scroll, scrollDelay);

        // Pause on hover
        const pauseScroll = () => clearInterval(intervalId);
        const resumeScroll = () => {
            clearInterval(intervalId);
            intervalId = setInterval(scroll, scrollDelay);
        };

        scrollContainer.addEventListener('mouseenter', pauseScroll);
        scrollContainer.addEventListener('mouseleave', resumeScroll);

        return () => {
            clearInterval(intervalId);
            scrollContainer.removeEventListener('mouseenter', pauseScroll);
            scrollContainer.removeEventListener('mouseleave', resumeScroll);
        };
    }, []);

    // Categories with muted icons - transparent style
    const categories = [
        { name: 'Electronics', icon: Laptop, items: '2,500+ items', iconBg: 'bg-indigo-50/80', iconColor: 'text-indigo-400' },
        { name: 'Vehicles', icon: Bike, items: '1,800+ items', iconBg: 'bg-violet-50/80', iconColor: 'text-violet-400' },
        { name: 'Fashion', icon: Shirt, items: '3,200+ items', iconBg: 'bg-purple-50/80', iconColor: 'text-purple-400' },
        { name: 'Rooms & PG', icon: Home, items: '950+ listings', iconBg: 'bg-teal-50/80', iconColor: 'text-teal-400' },
        { name: 'Cameras', icon: Camera, items: '850+ items', iconBg: 'bg-amber-50/80', iconColor: 'text-amber-400' },
        { name: 'Watches', icon: Watch, items: '1,200+ items', iconBg: 'bg-indigo-50/80', iconColor: 'text-indigo-400' },
        { name: 'Books', icon: BookOpen, items: '4,000+ items', iconBg: 'bg-rose-50/80', iconColor: 'text-rose-400' },
        { name: 'Gadgets', icon: Headphones, items: '1,500+ items', iconBg: 'bg-cyan-50/80', iconColor: 'text-cyan-400' },
        { name: 'Furniture', icon: Home, items: '2,100+ items', iconBg: 'bg-emerald-50/80', iconColor: 'text-emerald-400' },
        { name: 'Sports', icon: TrendingUp, items: '1,400+ items', iconBg: 'bg-orange-50/80', iconColor: 'text-orange-400' },
        { name: 'Tools', icon: Briefcase, items: '950+ items', iconBg: 'bg-slate-50/80', iconColor: 'text-slate-400' },
        { name: 'Musical', icon: Headphones, items: '780+ items', iconBg: 'bg-pink-50/80', iconColor: 'text-pink-400' }
    ];

    // Duplicate categories for seamless infinite scroll
    const duplicatedCategories = [...categories, ...categories];

    // Featured items
    const featuredItems = [
        {
            title: 'Sony A7III Camera',
            price: '₹1,500/day',
            location: 'Andheri East, Mumbai',
            rating: 4.9,
            reviews: 128,
            image: '📸',
            owner: 'Verified Owner'
        },
        {
            title: 'Royal Enfield Classic 350',
            price: '₹800/day',
            location: 'Koramangala, Bangalore',
            rating: 4.8,
            reviews: 96,
            image: '🏍️',
            owner: 'Premium Host'
        },
        {
            title: 'MacBook Pro M3',
            price: '₹2,000/day',
            location: 'Connaught Place, Delhi',
            rating: 5.0,
            reviews: 64,
            image: '💻',
            owner: 'Verified Owner'
        },
        {
            title: 'Rolex Submariner',
            price: '₹5,000/day',
            location: 'Bandra West, Mumbai',
            rating: 4.9,
            reviews: 42,
            image: '⌚',
            owner: 'Luxury Verified'
        }
    ];

    // How it works steps
    const steps = [
        {
            icon: Search,
            title: 'Search & Find',
            description: 'Browse thousands of items available for rent in your city',
            color: 'from-indigo-600 to-teal-500'
        },
        {
            icon: Calendar,
            title: 'Book & Secure',
            description: 'Choose dates, pay securely with our protection guarantee',
            color: 'from-violet-600 to-indigo-500'
        },
        {
            icon: CheckCircle,
            title: 'Use & Enjoy',
            description: 'Pick up the item and use it for your required duration',
            color: 'from-teal-600 to-emerald-500'
        },
        {
            icon: TrendingUp,
            title: 'Return & Earn',
            description: 'Return smoothly and earn by renting your own items',
            color: 'from-amber-600 to-orange-500'
        }
    ];

    // Benefits
    const benefits = [
        {
            icon: ShieldCheck,
            title: 'Secure Transactions',
            description: '100% payment protection and verified users',
            stats: '₹2Cr+ secured payments',
            gradient: 'from-indigo-600 to-teal-500'
        },
        {
            icon: UserCheck,
            title: 'Verified Community',
            description: 'All users verified with government ID',
            stats: '50K+ trusted members',
            gradient: 'from-violet-600 to-indigo-500'
        },
        {
            icon: Briefcase,
            title: 'Earn Passively',
            description: 'List your idle items and earn monthly',
            stats: 'Avg. ₹8,500/month',
            gradient: 'from-teal-600 to-emerald-500'
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-teal-50/30 pointer-events-none" />

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full px-4 py-2 mb-8 shadow-lg shadow-indigo-500/5">
                            <Sparkles className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                                India's #1 Rental Marketplace
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                Rent Anything,
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
                                Earn Everything
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            From cameras to cars, rooms to luxury watches — access thousands of items
                            or earn by renting out what you own.
                        </p>

                        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-indigo-500/10 border border-indigo-100 p-1.5 flex flex-col lg:flex-row gap-1.5 mb-12">
                            <div className="flex-1 flex items-center px-4 py-1 bg-slate-50/80 rounded-xl lg:rounded-r-none">
                                <Search className="text-slate-400 mr-3" size={20} />
                                <input
                                    type="text"
                                    placeholder="What do you want to rent?"
                                    className="w-full py-3 bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 flex items-center px-4 py-1 bg-slate-50/80 rounded-xl lg:rounded-l-none lg:rounded-r-none border-l border-indigo-100">
                                <MapPin className="text-slate-400 mr-3" size={20} />
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full py-3 bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <button className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 font-semibold whitespace-nowrap">
                                Search Items
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-teal-600 border-2 border-white shadow-md"
                                        />
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-slate-900">50K+</div>
                                    <div className="text-slate-500">Active Users</div>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-slate-200" />

                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-slate-900">4.9/5</div>
                                    <div className="text-slate-500">2,500+ reviews</div>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-slate-200" />

                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-teal-600" />
                                <div className="text-left">
                                    <div className="font-semibold text-slate-900">Secure</div>
                                    <div className="text-slate-500">₹2Cr+ protected</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-12 border-y border-indigo-100 bg-white/50">
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">
                        Trusted by students & professionals at
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {['IIT Bombay', 'IIM Ahmedabad', 'Microsoft', 'Google', 'Dell', 'Sony'].map((company) => (
                            <span key={company} className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent opacity-70 hover:opacity-100 transition-opacity">
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Categories Section - Fixed: Hidden scrollbar and no horizontal scroll */}
            <section className="py-20 relative overflow-hidden">
                {/* Blurred violet/purple background */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-100/30 via-purple-100/30 to-fuchsia-100/30 backdrop-blur-3xl -z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/20 via-transparent to-transparent -z-10"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Popular <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Categories</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Explore thousands of items across 20+ categories, available for rent in your city
                        </p>
                    </div>

                    {/* Categories Carousel - Fixed: No overflow, hidden scrollbar */}
                    <div className="relative max-w-full">
                        {/* Gradient overlays for smooth edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-violet-100/50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-violet-100/50 to-transparent z-10 pointer-events-none"></div>

                        {/* Scrollable container - Fixed: Hidden scrollbar and contained width */}
                        <div
                            ref={categoriesRef}
                            className="flex overflow-x-auto scrollbar-hide gap-5 py-4 px-2 max-w-full"
                            style={{
                                scrollBehavior: 'smooth',
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none', /* Firefox */
                                msOverflowStyle: 'none' /* IE and Edge */
                            }}
                        >
                            {duplicatedCategories.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-40 md:w-44 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:border-violet-200 hover:shadow-xl transition-all duration-300 p-5 group cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {/* Transparent/decent icons */}
                                        <div className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                                            <category.icon className={`${category.iconColor} group-hover:${category.iconColor.replace('400', '500')}`} size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-semibold text-slate-800 text-base mb-2">{category.name}</h3>
                                        <p className="text-slate-500 text-xs">{category.items}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button className="inline-flex items-center font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent hover:from-violet-700 hover:to-purple-700">
                            View All Categories
                            <ArrowRight className="ml-2 w-4 h-4 text-violet-600" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Items - Fixed: Centered heading */}
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Featured Items Near You
                        </h2>
                        <p className="text-lg text-slate-600">
                            Hand-picked items available for rent in your area
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredItems.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-indigo-100">
                                <div className="h-48 bg-gradient-to-br from-indigo-600 via-violet-600 to-teal-600 flex items-center justify-center">
                                    <span className="text-6xl">{item.image}</span>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                        <span className="bg-gradient-to-r from-indigo-50 to-teal-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded border border-indigo-200">
                                            {item.owner}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1 mb-2">
                                        <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                                        <span className="text-sm font-medium text-slate-900">{item.rating}</span>
                                        <span className="text-sm text-slate-500">({item.reviews} reviews)</span>
                                    </div>

                                    <div className="flex items-center text-sm text-slate-500 mb-3">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {item.location}
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-indigo-100">
                                        <div>
                                            <span className="text-xs text-slate-500">Starting from</span>
                                            <div className="font-bold text-slate-900">{item.price}</div>
                                        </div>
                                        <button className="font-semibold text-sm bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-teal-700">
                                            Book Now →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10 md:hidden">
                        <button className="inline-flex items-center font-semibold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-teal-700">
                            View All Items
                            <ArrowRight className="ml-2 w-4 h-4 text-indigo-600" />
                        </button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            How Affito Works
                        </h2>
                        <p className="text-lg text-slate-600">
                            Start earning from your idle items or find exactly what you need — in four simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-indigo-200 to-teal-200" />
                                )}

                                <div className="text-center">
                                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-indigo-500/20`}>
                                        <step.icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Why Choose Affito?
                        </h2>
                        <p className="text-lg text-slate-600">
                            We're building India's most trusted rental community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-indigo-100">
                                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                                    <benefit.icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                                <p className="text-slate-600 mb-4">{benefit.description}</p>
                                <div className="text-sm font-semibold bg-gradient-to-r from-indigo-50 to-teal-50 text-indigo-700 inline-block px-3 py-1 rounded-full border border-indigo-200">
                                    {benefit.stats}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 rounded-3xl shadow-xl shadow-indigo-500/30 overflow-hidden">
                        <div className="px-8 py-16 md:py-20">
                            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                                Growing Strong Every Day
                            </h3>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</div>
                                    <p className="text-white/80">Active Users</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">25K+</div>
                                    <p className="text-white/80">Items Listed</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
                                    <p className="text-white/80">Cities Covered</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">₹2Cr+</div>
                                    <p className="text-white/80">Owner Earnings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Ready to Start Your Rental Journey?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Join thousands of users who are already saving money and earning passive income
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-200">
                                <span>List Your Item</span>
                                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-indigo-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-teal-50 transition-all duration-200">
                                Browse Items
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-teal-600" /> Free listing</span>
                            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-indigo-600" /> Secure payments</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-violet-600" /> 24/7 support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - UPDATED: Curvy top border, black theme, social icons, contact form */}
            <footer className="bg-slate-900 text-slate-300 relative mt-20">
                {/* Curvy top border */}
                <div className="absolute -top-10 left-0 right-0 h-10 overflow-hidden">
                    <svg
                        className="absolute bottom-0 w-full h-16 text-slate-900 fill-current"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 80"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,32L80,37.3C160,43,320,53,480,50.7C640,48,800,32,960,26.7C1120,21,1280,27,1360,29.3L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
                            className="fill-slate-900"
                        ></path>
                    </svg>
                </div>

                <div className="container mx-auto px-4 pt-20 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Brand and Social */}
                        <div className="lg:col-span-2">
                            <div className="text-2xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-teal-400 text-transparent bg-clip-text">Affito</span>
                            </div>
                            <p className="text-slate-400 mb-6 max-w-xs">
                                India's most trusted rental marketplace. Rent anything, earn everything.
                            </p>

                            {/* Social Icons with links (you can add your own links) */}
                            <div className="flex gap-3 mb-6">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-slate-700 hover:border-indigo-500/30"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600/20 hover:text-sky-400 transition-all border border-slate-700 hover:border-sky-500/30"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600/20 hover:text-pink-400 transition-all border border-slate-700 hover:border-pink-500/30"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-slate-700 hover:border-blue-500/30"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <Phone className="w-5 h-5 text-indigo-400" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <Mail className="w-5 h-5 text-violet-400" />
                                    <span>support@affito.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <MapPinned className="w-5 h-5 text-teal-400" />
                                    <span>Mumbai, Bangalore, Delhi</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Press</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Safety Center</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">FAQs</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Insurance</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Trust & Safety</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter/Contact Form */}
                    <div className="border-t border-slate-800 mt-12 pt-8">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                            <div className="text-center lg:text-left">
                                <h5 className="text-white font-semibold mb-2">Stay updated with latest items</h5>
                                <p className="text-slate-400 text-sm">Get weekly updates on new listings and offers</p>
                            </div>
                            <div className="flex w-full lg:w-auto">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 lg:w-64 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-indigo-500 text-white placeholder:text-slate-500"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-r-lg hover:from-indigo-700 hover:to-violet-700 transition-all font-medium whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-slate-500">&copy; 2024 Affito.com. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <span className="flex items-center gap-1 text-slate-400">🇮🇳 Made in India</span>
                            <span className="flex items-center gap-1">
                                <Zap className="w-4 h-4 text-indigo-400" />
                                <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">Powered by Trust</span>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;