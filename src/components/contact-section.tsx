"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Linkedin, 
  MessageCircle, 
  Calendar,
  Clock,
  Globe,
  CheckCircle,
  Send
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Preferred for detailed project discussions",
    value: "contact@noah-kellner.com",
    href: "mailto:contact@noah-kellner.com",
    responseTime: "< 24 hours"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Professional networking and quick questions",
    value: "linkedin.com/in/noah-kellner",
    href: "https://linkedin.com/in/noah-kellner",
    responseTime: "< 48 hours"
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a 30-minute consultation",
    value: "calendly.com/noah-kellner",
    href: "https://calendly.com/noah-kellner",
    responseTime: "Available slots"
  }
];

const services = [
  "Technical Architecture & Consultation",
  "Team Leadership & Process Optimization",
  "Custom Software Development",
  "Digital Transformation Strategy",
  "Speaking Engagements & Workshops",
  "Code Reviews & Technical Audits"
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something <span className="text-primary">Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your technology challenges into competitive advantages? 
              Let&apos;s discuss your project and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium">{method.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {method.responseTime}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-lg border border-green-200/50 dark:border-green-800/30"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-800 dark:text-green-400">
                      Available for New Projects
                    </h4>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                    Currently accepting projects starting Q2 2025
                  </p>
                  <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                    <Globe className="w-3 h-3" />
                    <span>Remote & On-site (DACH region)</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h4 className="font-semibold mb-4">Services I Offer</h4>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      Project Inquiry
                    </CardTitle>
                    <CardDescription>
                      Tell me about your project and I&apos;ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="project">Project Type</Label>
                            <select
                              id="project"
                              name="project"
                              value={formData.project}
                              onChange={handleSelectChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              <option value="">Select project type</option>
                              <option value="consultation">Technical Consultation</option>
                              <option value="development">Custom Development</option>
                              <option value="architecture">System Architecture</option>
                              <option value="migration">Platform Migration</option>
                              <option value="team-lead">Team Leadership</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="budget">Budget Range</Label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleSelectChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              <option value="">Select budget range</option>
                              <option value="<10k">{"< €10,000"}</option>
                              <option value="10k-50k">€10,000 - €50,000</option>
                              <option value="50k-100k">€50,000 - €100,000</option>
                              <option value="100k+">€100,000+</option>
                              <option value="discuss">Let&apos;s discuss</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeline">Timeline</Label>
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleSelectChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              <option value="">Select timeline</option>
                              <option value="asap">ASAP</option>
                              <option value="1-3months">1-3 months</option>
                              <option value="3-6months">3-6 months</option>
                              <option value="6months+">6+ months</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project, challenges you're facing, and what success looks like to you..."
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full text-lg py-6" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Send className="w-5 h-5" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}