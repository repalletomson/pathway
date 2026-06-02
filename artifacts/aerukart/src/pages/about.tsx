import { motion } from "framer-motion";
import { Lightbulb, Target, Heart } from "lucide-react";

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
        <div className="mb-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Pathway began when our founder noticed a glaring gap in the market: local businesses and ambitious startups were being held back by generic, underperforming websites, while enterprise agencies charged exorbitant fees. There was no middle ground for premium, results-driven digital craft.
            </p>
            <p>
              We set out to change that. Starting lean, we built our reputation on a simple premise: a digital presence should be an investment that pays for itself. Today, Pathway is a full-service agency partnering with clinics, restaurants, e-commerce brands, and tech startups to deliver striking digital experiences that actually convert.
            </p>
            <p>
              From Hyderabad to clients across India and beyond, we take pride in understanding each business deeply — their goals, their audience, and the story they want to tell — before we write a single line of code.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border p-8 rounded-3xl">
            <h3 className="text-xl font-bold font-display mb-4 text-accent">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower every business — from a local restaurant to a fast-growing startup — with world-class digital experiences that attract customers, build trust, and drive sustainable growth.
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-3xl">
            <h3 className="text-xl font-bold font-display mb-4 text-accent">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where no business is held back by its digital presence. Where every entrepreneur has access to premium technology and design, regardless of their size or budget.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results Obsessed</h3>
              <p className="text-muted-foreground">
                Pretty designs mean nothing if they don't drive business. We measure our success entirely by your growth and the value we create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Uncompromising Craft</h3>
              <p className="text-muted-foreground">
                We sweat the details. From pixel-perfect layouts to lightning-fast code, we believe exceptional quality is what sets great work apart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">True Partnership</h3>
              <p className="text-muted-foreground">
                We aren't just vendors — we act as your outsourced technical co-founders. We communicate transparently and win together.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
