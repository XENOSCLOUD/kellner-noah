"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Send,
  User,
  Briefcase,
  Coffee,
  Globe,
  Zap,
  Target,
  Users,
  TrendingUp
} from "lucide-react";

const quickStats = [
  { icon: TrendingUp, value: "7+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Users Migrated" },
  { icon: Target, value: "€350k", label: "Cost Savings" },
  { icon: Zap, value: "20%", label: "Efficiency Gains" }
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "noah.kellner@proton.me",
    href: "mailto:noah.kellner@proton.me",
    description: "Best for detailed discussions"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/kellner-noah",
    href: "https://linkedin.com/in/kellner-noah",
    description: "Professional networking"
  },
  {
    icon: Coffee,
    title: "Schedule Chat",
    value: "calendly.com/noah-kellner",
    href: "https://calendly.com/noah-kellner",
    description: "30-min conversation"
  }
];

const idealRoles = [
  "Solutions Engineer",
  "Partner Engineer", 
  "Pre-Sales Engineer",
  "Customer Engineer",
  "Technical Consultant"
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    roleType: "",
    location: "",
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
        role: "",
        roleType: "",
        location: "",
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
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to discuss how I can contribute to your team? I&apos;d love to learn about your challenges and explore opportunities together.
            </p>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Availability Status */}
                <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200/50 dark:border-green-800/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h3 className="font-semibold text-green-800 dark:text-green-400">Available for New Opportunities</h3>
                    </div>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      Actively seeking Solutions/Partner Engineer roles starting Q2 2025
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800">
                        <Globe className="w-3 h-3 mr-1" />
                        Remote/Hybrid
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        <MapPin className="w-3 h-3 mr-1" />
                        DACH/EMEA
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Contact Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <method.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </CardContent>
                </Card>

                {/* Ideal Roles */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Ideal Roles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {idealRoles.map((role, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <User className="w-6 h-6 text-primary" />
                      Start a Conversation
                    </CardTitle>
                    <CardDescription className="text-base">
                      Tell me about your team, company culture, and the role you&apos;re looking to fill. 
                      I&apos;ll respond within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="font-medium">Your Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Full name"
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="font-medium">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@company.com"
                              className="h-12"
                            />
                          </div>
                        </div>

                        {/* Company Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company" className="font-medium">Company *</Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              required
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Company name"
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="role" className="font-medium">Your Role</Label>
                            <Input
                              id="role"
                              name="role"
                              type="text"
                              value={formData.role}
                              onChange={handleChange}
                              placeholder="e.g., Engineering Manager, Recruiter"
                              className="h-12"
                            />
                          </div>
                        </div>

                        {/* Role Details */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="roleType" className="font-medium">Position Type</Label>
                            <select
                              id="roleType"
                              name="roleType"
                              value={formData.roleType}
                              onChange={handleSelectChange}
                              className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              <option value="">Select position type</option>
                              <option value="solutions-engineer">Solutions Engineer</option>
                              <option value="partner-engineer">Partner Engineer</option>
                              <option value="pre-sales-engineer">Pre-Sales Engineer</option>
                              <option value="technical-consultant">Technical Consultant</option>
                              <option value="customer-engineer">Customer Engineer</option>
                              <option value="sales-engineer">Sales Engineer</option>
                              <option value="other">Other Technical Role</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location" className="font-medium">Work Setup</Label>
                            <select
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleSelectChange}
                              className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                              <option value="">Select work setup</option>
                              <option value="remote">Remote</option>
                              <option value="hybrid">Hybrid</option>
                              <option value="on-site">On-site</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>
                        </div>
                        
                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="font-medium">Tell me about the opportunity *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="I'd love to hear about:
• The role and key responsibilities
• Your team structure and company culture
• Technical challenges you're solving
• Growth opportunities and career development
• Timeline and next steps"
                            className="resize-none"
                          />
                        </div>
                        
                        {/* Submit Button */}
                        <Button 
                          type="submit" 
                          className="w-full text-lg py-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Send className="w-5 h-5" />
                              Start the Conversation
                            </div>
                          )}
                        </Button>
                        
                        <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>I typically respond within 24 hours</span>
                        </div>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground text-lg">
                          Thank you for reaching out. I&apos;ll review your message and get back to you within 24 hours to discuss the opportunity.
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