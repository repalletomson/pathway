import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import restaurantImg from "@/assets/images/restaurant-mockup.png";
import heroDashboard from "@/assets/images/hero-dashboard.png";
import mobileApp from "@/assets/images/mobile-app.png";

const projects = [
  {
    id: 1,
    title: "The Rustic Table",
    category: "Websites",
    client: "Restaurant",
    image: restaurantImg,
    challenge: "Low online visibility and heavy reliance on third-party delivery apps taking 30% cuts.",
    solution: "A premium bespoke website with a built-in zero-commission ordering system and SEO optimization.",
    result: "+340% online orders, $12k/mo saved in fees."
  },
  {
    id: 2,
    title: "TechFlow Analytics",
    category: "Web Apps",
    client: "B2B SaaS Startup",
    image: heroDashboard,
    challenge: "Complex data needed to be visualized intuitively for enterprise clients.",
    solution: "A React-based dashboard with real-time data processing, abstract visualizations, and dark mode.",
    result: "Series A funded, 10k+ active daily users."
  },
  {
    id: 3,
    title: "Apex Finance",
    category: "Mobile Apps",
    client: "Fintech Startup",
    image: mobileApp,
    challenge: "Needed a secure, modern mobile app to compete with established banks.",
    solution: "Cross-platform mobile application with sleek gradients, biometric auth, and instant transfers.",
    result: "4.9 star app store rating, 50k+ downloads."
  },
  {
    id: 4,
    title: "Aura Aesthetics",
    category: "Websites",
    client: "Luxury Salon",
    image: restaurantImg, // Reusing image for placeholder
    challenge: "Outdated website didn't reflect their premium in-person experience.",
    solution: "Elegant redesign with online booking integration and editorial-style photography layouts.",
    result: "+85% increase in online appointments."
  }
];

const categories = ["All", "Websites", "Web Apps", "Mobile Apps"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Metrics Bar */}
        <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 mb-16 flex flex-col md:flex-row justify-between items-center gap-8 border border-border">
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold text-foreground">300+</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Total Projects</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold text-foreground">15+</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Industries Served</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold text-accent">99%</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Avg. Satisfaction</div>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Work</h1>
            <p className="text-lg text-muted-foreground">
              Explore how we've helped businesses across industries transform their digital presence and achieve measurable growth.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? "bg-foreground text-background" 
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6 lg:px-8">
                  <div className="flex gap-3">
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-none">{project.category}</Badge>
                    <Badge variant="outline">{project.client}</Badge>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold">{project.title}</h2>
                  
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">The Challenge</h4>
                      <p className="text-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">The Solution</h4>
                      <p className="text-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">The Result</h4>
                      <p className="text-xl font-bold font-display text-accent">{project.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}