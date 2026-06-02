import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import restaurantImg from "@/assets/images/restaurant-mockup.png";
import heroDashboard from "@/assets/images/hero-dashboard.png";
import mobileApp from "@/assets/images/mobile-app.png";

const projects = [
  {
    id: 1,
    title: "Socialz",
    category: "Mobile Apps",
    client: "GenZ Social Platform",
    image: mobileApp,
    challenge: "College students lacked a dedicated space to connect with peers who share the same interests — gaming, memes, placements, and everyday campus life.",
    solution: "A GenZ-first social app featuring interest-based chat, anonymous posting, student spaces for events and fests, and a streak-based spotlight system to reward engagement.",
  },
  {
    id: 2,
    title: "StudyForge",
    category: "Web Apps",
    client: "EdTech Platform",
    image: heroDashboard,
    challenge: "Education providers needed a flexible CMS to create structured programs, manage chapters, and schedule content publishing without depending on developers.",
    solution: "A headless education CMS with a visual program builder, chapter sequencing, granular publishing schedules, and role-based access for instructors and admins.",
  },
  {
    id: 3,
    title: "Kids Home Play School",
    category: "Websites",
    client: "Pre-School",
    image: restaurantImg,
    challenge: "The school needed a trustworthy digital presence that showcased their brand, shared student memories, and streamlined parent communication and student records.",
    solution: "A warm, welcoming school website with brand storytelling, an interactive student gallery, and a secure student management system for admissions and records.",
  },
  {
    id: 4,
    title: "Ringer",
    category: "Websites",
    client: "Dubai Services Company",
    image: heroDashboard,
    challenge: "A Dubai-based multi-service company had no digital presence to communicate their diverse service offerings and reach new clients across the region.",
    solution: "A sleek, professional services website with clear service categorization, a multilingual-ready structure, client inquiry flows, and a refined brand identity.",
  },
  {
    id: 5,
    title: "SK Builders",
    category: "Websites",
    client: "Construction Company",
    image: restaurantImg,
    challenge: "A 20+ year construction firm with a strong track record struggled to translate their credibility and project portfolio into an online presence that won new contracts.",
    solution: "A powerful portfolio website highlighting decades of completed projects, client testimonials, and a strong trust-building structure that reflects their industry authority.",
  },
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
            <div className="text-3xl font-display font-bold text-foreground">5+</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Featured Projects</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold text-foreground">10+</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Industries Served</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Work</h1>
            <p className="text-lg text-muted-foreground">
              Explore how we've helped businesses across industries transform their digital presence and create meaningful experiences.
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
