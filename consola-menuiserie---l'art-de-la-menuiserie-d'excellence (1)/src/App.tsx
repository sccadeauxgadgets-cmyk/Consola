/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  History, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ConsolaData } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Savoir-faire', href: '#savoir-faire' },
    { name: 'Services', href: '#services' },
    { name: 'Patrimoine', href: '#patrimoine' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
            CONSOLA
          </span>
          <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${isScrolled ? 'text-secondary' : 'text-white/80'}`}>
            Menuiserie d'Excellence
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95">
            Devis Gratuit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-primary' : 'text-white'} /> : <Menu className={isScrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary border-b border-black/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-accent text-white w-full py-4 rounded-xl font-bold">
                Demander un devis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=1920&auto=format&fit=crop" 
          alt="Menuiserie de luxe"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent font-accent italic text-2xl mb-4">
            Depuis 1945
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif leading-[1.1] mb-8">
            L'Art du Bois, <br />
            <span className="italic font-light">la Maîtrise du Temps.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 max-w-xl">
            Menuiserie sur-mesure pour l'habitat contemporain et la restauration du patrimoine. 
            L'excellence artisanale au service de vos projets les plus ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all flex items-center justify-center group">
              Découvrir nos réalisations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all">
              Notre Histoire
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Défiler</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-4 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

interface ServiceCardProps {
  service: any;
  index: number;
  key?: React.Key;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <Hammer size={120} />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
          <Award size={24} />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
        <p className="text-secondary leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-3 mb-8">
          {service.items.map((item: string) => (
            <li key={item} className="flex items-center text-sm font-medium text-primary/80">
              <CheckCircle2 className="w-4 h-4 mr-2 text-accent" />
              {item}
            </li>
          ))}
        </ul>
        <button className="flex items-center text-sm font-bold uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
          En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const HistorySection = () => {
  return (
    <section id="savoir-faire" className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-accent italic text-xl mb-4 block">Héritage & Passion</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Une Tradition Familiale <br />
              <span className="italic font-light">Ininterrompue.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Depuis 1945, la famille Consola transmet de génération en génération l'amour du travail bien fait. 
              Ce qui n'était qu'un petit atelier artisanal est devenu une référence régionale, 
              alliant les techniques ancestrales aux technologies de pointe.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-serif text-accent mb-2">75+</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Années d'expérience</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent mb-2">3k+</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Projets réalisés</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                alt="Atelier de menuiserie"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-accent p-8 rounded-3xl hidden lg:block">
              <History size={48} className="text-white mb-4" />
              <p className="text-white font-serif text-xl italic">"Le bois a une âme, <br />nous lui donnons vie."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <div className="bg-cream py-12 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-primary" />
            <span className="font-bold tracking-tighter text-xl">QUALIBAT</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="text-primary" />
            <span className="font-bold tracking-tighter text-xl">RGE ECO ARTISAN</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="text-primary" />
            <span className="font-bold tracking-tighter text-xl">MENUISERIE DE FRANCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = ({ contact }: { contact: ConsolaData['contact'] }) => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-cream rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-primary text-white">
            <h2 className="text-4xl font-serif mb-8">Parlons de votre projet</h2>
            <p className="text-white/60 mb-12 text-lg">
              Une question ? Un projet de rénovation ou de construction ? 
              Nos experts vous accompagnent de la conception à la pose.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Téléphone</p>
                  <p className="text-xl font-medium">{contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Email</p>
                  <p className="text-xl font-medium">{contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Adresse</p>
                  <p className="text-xl font-medium" dangerouslySetInnerHTML={{ __html: contact.address.replace(',', ',<br />') }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Nom complet</label>
                  <input type="text" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Email</label>
                  <input type="email" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="jean@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Sujet</label>
                <select className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors">
                  <option>Menuiserie Extérieure</option>
                  <option>Aménagement Intérieur</option>
                  <option>Patrimoine & Monuments</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Message</label>
                <textarea rows={4} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Décrivez votre projet..."></textarea>
              </div>
              <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ description }: { description: string }) => {
  return (
    <footer className="bg-cream pt-24 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold tracking-tighter text-primary">
                CONSOLA
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-secondary">
                Menuiserie d'Excellence
              </span>
            </div>
            <p className="text-secondary max-w-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Accueil</a></li>
              <li><a href="#savoir-faire" className="hover:text-accent transition-colors">Savoir-faire</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Nos Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Légal</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-secondary text-sm">
          <p>© 2026 Consola Menuiserie. Tous droits réservés.</p>
          <p>Conçu avec excellence par Consola Digital.</p>
        </div>
      </div>
    </footer>
  );
};

import { CONSOLA_CONTENT } from './constants';

export default function App() {
  const data = CONSOLA_CONTENT;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Certifications />
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-accent italic text-xl mb-4 block">Nos Domaines d'Intervention</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Des solutions sur-mesure pour chaque besoin.</h2>
            <p className="text-secondary text-lg">
              Que ce soit pour améliorer votre confort thermique, agrandir votre espace de vie ou restaurer un bâtiment historique, nous avons l'expertise nécessaire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Array.isArray(data.services) && data.services.map((service, idx) => (
              <ServiceCard key={service.title} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <HistorySection />

      {/* Showcase Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-accent italic text-xl mb-4 block">Galerie</span>
              <h2 className="text-4xl md:text-6xl font-serif">L'Excellence en images.</h2>
            </div>
            <button className="text-primary font-bold uppercase tracking-widest text-sm flex items-center group">
              Voir tout le portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <div className="md:col-span-2 h-full rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="h-full rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="h-full rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      <ContactSection contact={data.contact} />
      <Footer description={data.history.description} />
    </div>
  );
}
