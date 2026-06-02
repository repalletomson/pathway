import { motion } from "framer-motion";
import { Lightbulb, Target, Heart } from "lucide-react";
import teamImg from "@/assets/images/team.png";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Driven by Growth. Built on Craft.</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We are a collective of designers, engineers, and strategists dedicated to elevating brands in the digital age.
          </p>
        </div>

        {/* Founder Story */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
                <img src={teamImg} alt="Aerukart Team" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Aerukart began when our founder noticed a glaring gap in the market: local businesses and ambitious startups were being held back by generic, underperforming websites, while enterprise agencies charged exorbitant fees. There was no middle ground for premium, results-driven digital craft.
                </p>
                <p>
                  We set out to change that. Starting as a lean team of three, we built our reputation on a simple premise: a digital presence should be an investment that pays for itself. Today, Aerukart is a full-service agency partnering with clinics, restaurants, e-commerce brands, and tech startups to deliver striking digital experiences that actually convert.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results Obsessed</h3>
              <p className="text-muted-foreground">
                Pretty designs mean nothing if they don't drive business. We measure our success entirely by your growth and ROI.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Uncompromising Craft</h3>
              <p className="text-muted-foreground">
                We sweat the details. From pixel-perfect layouts to lightning-fast code, we believe exceptional quality stands out.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">True Partnership</h3>
              <p className="text-muted-foreground">
                We aren't just vendors; we act as your outsourced technical co-founders. We communicate transparently and win together.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Meet the Leaders</h2>
            <p className="text-muted-foreground text-lg">The minds behind the magic.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Julian Rossi", role: "Founder & CEO", initials: "JR" },
              { name: "Sarah Chen", role: "Head of Design", initials: "SC" },
              { name: "Marcus Webb", role: "Lead Engineer", initials: "MW" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full bg-secondary border-4 border-card shadow-xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <div className="text-4xl font-display font-bold text-muted-foreground group-hover:text-accent transition-colors">{member.initialials}</div>
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}