"use client";

import { ArrowRight, Play, Sparkles, Zap, Globe, Video, Camera, Palette, Code, Radio, Users, Star, Utensils, UserCheck, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
// import { Button } from "@/components/ui/button";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const digitalServices = [
    {
      icon: Video,
      title: "Video Production",
      description: "From concept to final cut, we create compelling video content that tells your story and captivates audiences.",
      features: ["Corporate Videos", "Commercials", "Documentaries", "Music Videos"],
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services that capture the essence of your brand and special moments.",
      features: ["Product Shots", "Event Coverage", "Portrait Sessions", "Aerial Photography"],
    },
    {
      icon: Sparkles,
      title: "Animation",
      description: "Bring ideas to life with stunning 2D and 3D animations that engage and inspire.",
      features: ["Motion Graphics", "3D Animation", "Character Animation", "Explainer Videos"],
    },
    {
      icon: Palette,
      title: "Design & Creative",
      description: "Strategic design solutions that elevate your brand identity and visual communication.",
      features: ["Brand Identity", "UI/UX Design", "Print Design", "Packaging"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and digital platforms built for performance, scalability, and user experience.",
      features: ["Custom Websites", "E-commerce", "Web Apps", "CMS Solutions"],
    },
    {
      icon: Radio,
      title: "Live Streaming",
      description: "Professional live streaming services for events, conferences, and virtual experiences.",
      features: ["Multi-camera Setup", "Real-time Graphics", "Global CDN", "Interactive Features"],
    },
    {
      icon: Globe,
      title: "Hybrid & Virtual Events",
      description: "Seamlessly blend physical and digital experiences for maximum reach and engagement.",
      features: ["Virtual Platforms", "Hybrid Production", "Audience Engagement", "Analytics"],
    },
    {
      icon: Megaphone,
      title: "Marketing & Advertising",
      description: "Data-driven marketing strategies that amplify your message and drive results.",
      features: ["Social Media", "Content Strategy", "Paid Campaigns", "Influencer Marketing"],
    },
  ];

  const experientialServices = [
    {
      icon: Zap,
      title: "Event Production & Management",
      description: "End-to-end event production services that transform visions into unforgettable experiences.",
      features: ["Concept Development", "Technical Production", "Project Management", "On-site Coordination"],
    },
    {
      icon: Star,
      title: "Venue, Decor & Entertainment",
      description: "Curated venues and stunning décor that set the perfect stage for your events.",
      features: ["Venue Sourcing", "Custom Décor", "Entertainment Booking", "Lighting Design"],
    },
    {
      icon: Users,
      title: "MICE Management",
      description: "Comprehensive meetings, incentives, conferences, and exhibitions management.",
      features: ["Corporate Meetings", "Incentive Programs", "Conferences", "Trade Shows"],
    },
    {
      icon: Star,
      title: "Talent",
      description: "Access to top-tier talent for performances, hosting, and brand representation.",
      features: ["Performers", "Speakers", "Brand Ambassadors", "Celebrity Talent"],
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Bespoke luxury experiences crafted with attention to every detail.",
      features: ["VIP Services", "Private Events", "Exclusive Access", "Concierge"],
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Culinary experiences that delight and impress, from intimate gatherings to grand celebrations.",
      features: ["Catering", "Bar Services", "Menu Design", "Chef Experiences"],
    },
    {
      icon: UserCheck,
      title: "Staffing",
      description: "Professional event staff trained to deliver exceptional service.",
      features: ["Event Staff", "Hostesses", "Security", "Technical Crew"],
    },
    {
      icon: Megaphone,
      title: "Brand Activations",
      description: "Immersive brand experiences that create lasting connections with your audience.",
      features: ["Pop-up Events", "Product Launches", "Guerilla Marketing", "Experiential Campaigns"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative -mt-12 min-h-[70vh] bg-dark overflow-hidden flex items-center pt-0">
        {/* Gradient Orbs */}
        <div className="gradient-orb gradient-orb-pink w-[400px] h-[400px] -top-32 -left-32 animate-float" />
        <div className="gradient-orb gradient-orb-cyan w-[300px] h-[300px] top-1/2 right-0 animate-float-delayed" />
        
        <div className="container-custom section-padding relative z-10 py-20">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Crafting Dreams,<br />
              <span className="text-gradient">Delivering Results</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8 max-w-xl">
              From digital innovation to unforgettable experiences, we offer comprehensive solutions that elevate your brand and captivate your audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,203,155,0.35)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play className="w-4 h-4" />
                Watch Showreel
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experiential Services Section */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="container-custom section-padding">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Experiential</h2>
              <span className="text-pink text-2xl">✦</span>
            </div>
            <p className="text-primary-foreground/70 text-lg mb-12 max-w-2xl">
              Immersive experiences that create lasting memories and forge powerful emotional connections with your audience.
            </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experientialServices.map((service, index) => (
              <Reveal key={service.title} delay={0.03 * index}>
                <motion.div
                key={service.title}
                className="group p-6 rounded-2xl bg-dark-surface border border-primary-foreground/10 hover:border-pink/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center mb-4 group-hover:bg-pink/20 transition-colors">
                  <service.icon className="w-6 h-6 text-pink" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-pink transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-primary-foreground/50 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-pink" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-pink opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-20 md:py-32 bg-light">
        <div className="container-custom section-padding">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Digital</h2>
              <span className="text-accent text-2xl">✦</span>
            </div>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              Innovative digital solutions that transform your ideas into powerful visual stories and experiences.
            </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <Reveal key={service.title} delay={0.03 * index}>
                <motion.div
                key={service.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-foreground" />
        </div>
        
        <Reveal className="container-custom section-padding relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Create Something<br />
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our comprehensive suite of services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Project
            </motion.button>
            <motion.button
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Work
            </motion.button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
