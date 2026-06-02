import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Smartphone, Globe, ShoppingCart, Repeat, LayoutTemplate, Search, Settings, Cpu, LineChart } from "lucide-react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiIos, SiAndroid, SiShopify, SiWordpress } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "custom-websites",
    title: "Custom Business Websites",
    description: "Tailor-made, lightning-fast websites that capture your brand's essence and drive customer engagement. We don't use generic templates—every pixel is crafted for you.",
    icon: <Globe className="w-6 h-6" />,
    tech: ["React", "Next.js", "Tailwind CSS"],
    benefits: ["Higher conversion rates", "Lightning fast load times", "Unique brand identity"]
  },
  {
    id: "ecommerce",
    title: "E-commerce Websites",
    description: "Robust online stores designed for high-volume sales. We build seamless checkout experiences, intuitive product management, and secure payment integrations.",
    icon: <ShoppingCart className="w-6 h-6" />,
    tech: ["Shopify", "WooCommerce", "Stripe"],
    benefits: ["Seamless checkout", "Easy inventory management", "Secure transactions"]
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Complex business logic translated into scalable, cloud-based software. Perfect for internal tools, client portals, and SaaS products.",
    icon: <Code className="w-6 h-6" />,
    tech: ["React", "Node.js", "PostgreSQL"],
    benefits: ["Streamlined operations", "Cloud scalability", "Custom workflows"]
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. We build addictive user experiences that keep your customers coming back.",
    icon: <Smartphone className="w-6 h-6" />,
    tech: ["React Native", "iOS", "Android"],
    benefits: ["Direct customer access", "Push notifications", "High engagement"]
  },
  {
    id: "redesign",
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, conversion-focused powerhouse. We retain your SEO juice while completely upgrading the UX/UI.",
    icon: <Repeat className="w-6 h-6" />,
    tech: ["Figma", "Next.js", "Vercel"],
    benefits: ["Modern aesthetic", "Improved UX/UI", "Better mobile experience"]
  },
  {
    id: "automation",
    title: "Business Automation",
    description: "Stop doing manual data entry. We connect your existing tools (CRM, email, spreadsheets) and automate repetitive tasks to save you hundreds of hours.",
    icon: <Cpu className="w-6 h-6" />,
    tech: ["Zapier", "Make", "Custom APIs"],
    benefits: ["Save hundreds of hours", "Reduce human error", "Instant data sync"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-octane, single-page sites designed for one thing: getting the user to take action. Perfect for ad campaigns, product launches, or event signups.",
    icon: <LayoutTemplate className="w-6 h-6" />,
    tech: ["HTML/CSS", "Framer Motion", "React"],
    benefits: ["Maximum conversion rate", "Laser-focused messaging", "Quick deployment"]
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Data-driven technical and on-page SEO strategies to get your business ranking on the first page of Google for the keywords that matter.",
    icon: <Search className="w-6 h-6" />,
    tech: ["Google Analytics", "Ahrefs", "Next.js SEO"],
    benefits: ["Free organic traffic", "Higher domain authority", "Long-term visibility"]
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Ongoing support packages to keep your digital assets secure, fast, and updated. We handle the tech so you can handle your business.",
    icon: <Settings className="w-6 h-6" />,
    tech: ["AWS", "Vercel", "Cloudflare"],
    benefits: ["Zero downtime", "Maximum security", "Regular updates"]
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description: "Integrate cutting-edge AI into your business. From custom chatbots that handle customer support 24/7 to AI-driven data analysis.",
    icon: <LineChart className="w-6 h-6" />,
    tech: ["OpenAI", "LangChain", "Pinecone"],
    benefits: ["24/7 customer support", "Advanced data insights", "Reduced overhead costs"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            We don't just build websites; we build digital growth engines. Every service is tailored to maximize your online visibility, engagement, and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-border p-8 rounded-3xl flex flex-col h-full hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-accent shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}