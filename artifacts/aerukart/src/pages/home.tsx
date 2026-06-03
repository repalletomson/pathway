import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Star, Zap, Code, Smartphone, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroDashboard from "@/assets/images/hero-dashboard.png";
import mobileApp from "@/assets/images/mobile-app.png";
import kotayyaImg from "@/assets/images/kotayya-carts.jpg";
import morineBakeryImg from "@/assets/images/morine-bakery.png";
import ringendsolutionsImg from "@/assets/images/ringendsolutions.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border text-sm font-medium">
              <Zap className="w-4 h-4 text-accent" />
              <span>From Local Store to Digital Brand</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
              Bring Your Business Online. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Get More Customers.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Pathway is a full-service digital agency building premium websites, apps, and software to help you dominate your market. Stop being invisible online.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-accent hover:bg-accent/90 text-white rounded-full">
                <Link href="/contact">Book a Free Consultation</Link>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-border hover:bg-secondary">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-accent/10">
              <img src={heroDashboard} alt="SaaS Dashboard Mockup" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">05+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">10+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">99%</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Custom Solutions Built for Growth</h2>
            <p className="text-lg text-muted-foreground">From a high-converting landing page to a complex mobile application, we build what you need to succeed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Custom Websites", desc: "Fast, responsive, and beautiful websites designed to convert visitors into paying customers.", icon: <Code className="w-6 h-6" /> },
              { title: "Mobile Applications", desc: "Native and cross-platform apps for iOS and Android that users love to engage with.", icon: <Smartphone className="w-6 h-6" /> },
              { title: "E-commerce Solutions", desc: "Robust online stores with seamless checkout experiences and inventory management.", icon: <Star className="w-6 h-6" /> },
              { title: "Web Applications", desc: "Complex business logic translated into intuitive, scalable web software.", icon: <Zap className="w-6 h-6" /> },
              { title: "SEO Optimization", desc: "Data-driven strategies to get you ranking on the first page of Google.", icon: <Rocket className="w-6 h-6" /> },
              { title: "Automation", desc: "Streamline your business operations with intelligent automated workflows.", icon: <CheckCircle2 className="w-6 h-6" /> }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="link" asChild className="text-accent group">
              <Link href="/services">
                View all our services <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Get More Customers with a Professional Website</h2>
              <p className="text-lg text-muted-foreground mb-10">We don't just write code. We build digital engines designed to generate revenue, leads, and brand authority for your business.</p>
              
              <div className="space-y-6">
                {[
                  "Results-Obsessed Approach focused on ROI",
                  "Premium Design that stands out from competitors",
                  "Lightning Fast Performance for better SEO",
                  "Dedicated Support long after launch"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <img src={mobileApp} alt="Mobile App Design" className="relative rounded-3xl border border-border shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">A transparent, predictable process from our first call to your successful launch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border z-0"></div>
            {[
              { step: "01", title: "Discovery", desc: "We analyze your business, competitors, and goals." },
              { step: "02", title: "Strategy & Design", desc: "We create a custom roadmap and stunning visuals." },
              { step: "03", title: "Development", desc: "Our engineers build your solution with modern tech." },
              { step: "04", title: "Launch & Scale", desc: "We deploy flawlessly and optimize for growth." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-card flex items-center justify-center text-2xl font-bold font-display shadow-xl mb-6 text-accent">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-xl">A glimpse of what we've built for our clients — real products, real results.</p>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-full px-6 border-border hover:border-accent hover:text-accent group" data-testid="button-view-all-projects">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kotayya Carts",
                category: "Website",
                client: "Handcrafted Furniture Brand",
                image: kotayyaImg,
                link: "https://kotayya-carts.vercel.app/",
                desc: "A warm, story-driven e-commerce website for a traditional artisan brand — handcrafted bullock cart furniture made from ethically sourced teak wood by master woodworkers.",
              },
              {
                title: "Morine Bakery",
                category: "Website",
                client: "Premium Bakery",
                image: morineBakeryImg,
                link: "#",
                desc: "A luxurious website redesign for Hyderabad's most coveted bakery — 50+ years of legacy brought online with a rich dark-gold aesthetic and a full menu experience.",
              },
              {
                title: "Ringendsolutions",
                category: "Website",
                client: "Dubai Services Company",
                image: ringendsolutionsImg,
                link: "https://www.ringendsolutions.com/",
                desc: "A sleek, professional services website for a Dubai-based multi-service company with clear service categorization and client inquiry flows.",
              },
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-accent/50 transition-colors block"
                data-testid={`card-project-${i}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">{project.category}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Project
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-white" data-testid="button-view-more-projects">
              <Link href="/portfolio">
                View More Projects
                <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Don't Just Take Our Word For It</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
{
                quote: "Pathway built us a website that truly reflects the soul of our craft. Our furniture now gets the online attention it deserves and we've seen real inquiries come through.",
                author: "Kotayya Reddy",
                role: "Owner, Kotayya Carts"
              },
              {
                quote: "We wanted an app that GenZ would actually use. Pathway nailed the vibe — Socialz crossed 100 downloads on the Play Store within weeks of going live.",
                author: "Vinoothna V",
                role: "Founder, Socialz"
              },
              {
                quote: "After 20 years in construction, we finally have a website that shows the world what we've built. The response from new clients has been outstanding.",
                author: "Anish K",
                role: "Director, SK Builders"
              }
            ].map((t, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border flex flex-col justify-between">
                <div>
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg text-foreground italic mb-8 leading-relaxed">"{t.quote}"</p>
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "A standard business website typically takes 2-4 weeks from discovery to launch. Complex web applications or e-commerce platforms can take 8-12 weeks." },
              { q: "Do you provide hosting and maintenance?", a: "Yes, we offer comprehensive maintenance packages that include fast, secure hosting, regular updates, security monitoring, and content changes." },
              { q: "Will my website look good on mobile?", a: "Absolutely. We employ a mobile-first design approach ensuring your website looks and performs flawlessly on all devices and screen sizes." },
              { q: "How much does a project cost?", a: "Projects vary based on complexity. A professional landing page starts at $500, while full custom websites and apps scale based on required features. Contact us for a precise quote." },
              { q: "Do you help with SEO?", a: "Yes, all our websites are built with best-practice technical SEO. We also offer ongoing SEO services to help you rank higher and attract more organic traffic." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-accent py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to grow your business?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Stop losing customers to your competition. Let's build a digital presence that actually drives results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-accent hover:bg-accent/90 text-white border-none">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground bg-transparent">
              <MessageSquare className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
