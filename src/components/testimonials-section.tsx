"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVision Ltd",
    image: "/api/placeholder/64/64",
    content: "Noah transformed our entire infrastructure. His solution reduced our deployment time from hours to minutes and saved us over €500K annually. Exceptional technical leadership.",
    rating: 5,
    project: "DevOps Transformation"
  },
  {
    name: "Marcus Weber",
    role: "VP Engineering",
    company: "FinanceFlow GmbH",
    image: "/api/placeholder/64/64",
    content: "Working with Noah was a game-changer. He didn't just deliver code—he delivered a complete strategy that scaled our platform to handle 10x traffic growth.",
    rating: 5,
    project: "Platform Scaling"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Director",
    company: "DataInsights AG",
    image: "/api/placeholder/64/64",
    content: "Noah's ability to translate complex technical requirements into clear business value is remarkable. Our stakeholders finally understood what we were building and why.",
    rating: 5,
    project: "Analytics Platform"
  },
  {
    name: "James Wilson",
    role: "Founder & CEO",
    company: "StartupBoost",
    image: "/api/placeholder/64/64",
    content: "Noah led our team through a critical migration with zero downtime. His mentorship elevated our entire engineering culture. Simply outstanding.",
    rating: 5,
    project: "Architecture Migration"
  }
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "€5M+", label: "Cost Savings Delivered" },
  { value: "30+", label: "Developers Mentored" }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from leaders who've experienced the impact of working together 
              on transformative technology projects.
            </p>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg leading-relaxed mb-6 relative z-10">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Project Tag */}
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                      {testimonial.project}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can work together to solve your technology challenges 
                and deliver measurable business impact.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Start the Conversation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}