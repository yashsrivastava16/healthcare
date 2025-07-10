"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  User,
  Heart,
  Shield,
  Award,
  CheckCircle,
  Star,
  Menu,
  X,
  Stethoscope,
  Users,
  Activity,
  ArrowRight,
  Play,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function DoctorLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // Modal state for Book Consultation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Dr. Riya transformed my health journey with her innovative approach and genuine care. Simply exceptional!",
      image: "PS",
      role: "Marketing Executive",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment:
        "Outstanding medical expertise combined with warmth and understanding. Our family's trusted healthcare partner.",
      image: "RK",
      role: "Business Owner",
    },
    {
      name: "Anjali Gupta",
      rating: 5,
      comment:
        "Her diabetes management program changed my life. Professional, caring, and incredibly knowledgeable.",
      image: "AG",
      role: "Teacher",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Modal handlers
  const openModal = () => {
    setIsModalOpen(true);
    setFormStatus("idle");
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };
  const closeModal = () => setIsModalOpen(false);
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phone validation: must be exactly 10 digits
    const phoneValid = /^\d{10}$/.test(form.phone);
    if (!phoneValid) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setFormStatus("success");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };

  const services = [
    {
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      title: "Comprehensive Health Checkups",
      description:
        "Complete wellness assessments with advanced diagnostics and personalized health insights.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Activity className="w-10 h-10 text-emerald-500" />,
      title: "Chronic Disease Management",
      description:
        "Expert management of diabetes, hypertension, and other chronic conditions with cutting-edge protocols.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Preventive Medicine",
      description:
        "Proactive healthcare strategies including vaccinations, screenings, and lifestyle optimization.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: "Family Medicine",
      description:
        "Comprehensive care for all family members, from pediatrics to geriatrics with specialized attention.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Patients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    { number: "24/7", label: "Support", icon: <Clock className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Modal for Book Consultation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-600"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-center">
                  Consultation Booked!
                </h3>
                <p className="text-gray-600 text-center">
                  Thank you for booking. We will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Book Consultation
                </h3>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  required
                  placeholder="Phone Number"
                  pattern="\\d{10}"
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
                <input
                  type="datetime-local"
                  name="date"
                  value={form.date}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  rows={3}
                  placeholder="Message (optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Book Now
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="relative">
                <Stethoscope className="h-10 w-10 text-blue-600 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dr. Riya Srivastava
                </span>
                <p className="text-sm text-gray-600 -mt-1">General Physician</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {["Home", "About", "Services", "Testimonials", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-xl relative group"
                    >
                      {item}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-2xl">
            <div className="px-6 py-8 space-y-4">
              {["Home", "About", "Services", "Testimonials", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-blue-600 py-3 text-lg font-medium border-b border-gray-100 hover:border-blue-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 text-sm font-semibold text-blue-800 animate-bounce">
                <Sparkles className="w-4 h-4 mr-2" />
                Now Accepting New Patients
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Health Journey
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Experience next-generation healthcare with Dr. Riya Srivastava.
                Over 3 years of excellence in personalized medicine,
                cutting-edge treatments, and compassionate care that puts you
                first.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={openModal}
                >
                  <Calendar className="inline w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Book Consultation
                  <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/50">
                  <Play className="inline w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Story
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main doctor image container */}
                <div className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="w-80 h-80 bg-gradient-to-br from-white to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <User className="w-48 h-48 text-blue-600" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 shadow-lg animate-bounce">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg animate-bounce delay-1000">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 shadow-lg animate-bounce delay-2000">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 bottom-8 right-8 w-64 h-64 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-96 bg-gradient-to-br from-white to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <User className="w-48 h-48 text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
                </div>
              </div>

              {/* Achievement badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full p-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    Meet Dr. Riya
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Srivastava
                  </span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  A visionary in modern healthcare, Dr. Riya combines
                  cutting-edge medical expertise with heartfelt compassion. With
                  over 3 years of transformative patient care, she&apos;s
                  revolutionizing the way we approach wellness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    text: "3+ Years Excellence",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    text: "Board Certified",
                    color: "from-emerald-500 to-teal-500",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    text: "500+ Lives Transformed",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    text: "Compassionate Care",
                    color: "from-rose-500 to-orange-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-semibold">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-700 leading-relaxed italic">
                  &quot;I believe healthcare should be a partnership. My
                  approach combines evidence-based medicine with personalized
                  attention, ensuring each patient receives not just treatment,
                  but comprehensive care that addresses their unique needs and
                  goals.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Premium Healthcare
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of medical services designed to
              optimize your health and elevate your quality of life through
              innovative care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-white/50">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Patient Success
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real experiences from patients whose lives have been transformed
              through our exceptional care.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed italic mb-6">
                  &quot;{testimonials[currentTestimonial].comment}&quot;
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              Your Health?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards optimal wellness. Schedule your
              consultation today and experience the difference personalized care
              can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Phone className="w-10 h-10" />,
                title: "Call Us",
                info: "+91 98765 43210",
                subtitle: "24/7 Support",
              },
              {
                icon: <Mail className="w-10 h-10" />,
                title: "Email",
                info: "dr.riya@clinic.com",
                subtitle: "Quick Response",
              },
              {
                icon: <MapPin className="w-10 h-10" />,
                title: "Visit Us",
                info: "123 Health Street",
                subtitle: "Medical District",
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Hours",
                info: "Mon-Sat: 9AM-6PM",
                subtitle: "Sunday: Emergency",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 font-medium">{item.info}</p>
                  <p className="text-blue-200 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={openModal}
            >
              <Calendar className="inline w-6 h-6 mr-3" />
              Schedule Your Consultation
              <ArrowRight className="inline w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Stethoscope className="h-10 w-10 text-blue-400 mr-3" />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dr. Riya Srivastava
                  </span>
                  <p className="text-gray-400 text-sm">General Physician</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Transforming lives through innovative healthcare solutions,
                compassionate care, and a commitment to excellence that sets new
                standards in medical practice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Testimonials", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">dr.riya@clinic.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">123 Health Street</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Dr. Riya Srivastava. All rights reserved.
              <span className="ml-4 text-blue-400">
                Transforming Healthcare, One Patient at a Time
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
