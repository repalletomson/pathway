import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const serviceLabels: Record<string, string> = {
  website: "Custom Website",
  ecommerce: "E-commerce",
  webapp: "Web Application",
  mobileapp: "Mobile Application",
  seo: "SEO Optimization",
  automation: "Business Automation",
  ai: "AI-Powered Solutions",
  other: "Other / Not Sure",
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceLabel = serviceLabels[values.service] ?? values.service;
    const text = [
      `Hi Pathway! I'd like to get in touch.`,
      ``,
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Service: ${serviceLabel}`,
      ``,
      `Message: ${values.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919542758814?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noreferrer");
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Build Something Great</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Ready to upgrade your digital presence? Fill out the form below and we'll open WhatsApp so you can send it directly — no delays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">yourpathwayonline@gmail.com</p>
            
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call / WhatsApp</h4>
                    <p className="text-muted-foreground">+91 9542758814</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Mon–Fri: 9:00 AM – 6:00 PM IST<br />Weekend: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Need an immediate response?</h3>
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl h-14 text-base"
              >
                <a href="https://wa.me/919542758814" target="_blank" rel="noreferrer" data-testid="button-whatsapp-direct">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-display">Book a Free Consultation</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Fill in your details and click Send — we'll open WhatsApp with your message pre-filled so you can send it instantly.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="bg-background h-12" data-testid="input-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXX XXXXX" className="bg-background h-12" data-testid="input-phone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" className="bg-background h-12" data-testid="input-email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background h-12" data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="website">Custom Website</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="webapp">Web Application</SelectItem>
                            <SelectItem value="mobileapp">Mobile Application</SelectItem>
                            <SelectItem value="seo">SEO Optimization</SelectItem>
                            <SelectItem value="automation">Business Automation</SelectItem>
                            <SelectItem value="ai">AI-Powered Solutions</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your business and what you're looking to achieve..."
                            className="min-h-[120px] bg-background resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-14 text-base rounded-xl flex items-center gap-2"
                    data-testid="button-submit"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
