"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Code, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Solutions Engineer",
    company: "TechCorp International",
    period: "2022 - Present",
    location: "Berlin, Germany",
    type: "Full-time",
    description: "Leading technical implementations and customer success initiatives for enterprise clients across EMEA region.",
    achievements: [
      "Reduced client onboarding time by 60% through automated deployment pipelines",
      "Led cross-functional team of 12 engineers delivering $2M+ revenue projects",
      "Architected microservices platform serving 1M+ daily active users",
      "Established DevOps practices reducing deployment failures by 90%"
    ],
    technologies: ["TypeScript", "AWS", "Kubernetes", "PostgreSQL", "React"],
    metrics: {
      revenue: "$2M+",
      teamSize: "12",
      improvement: "60%"
    }
  },
  {
    title: "Technical Lead & Solutions Architect",
    company: "InnovateLabs",
    period: "2020 - 2022",
    location: "Munich, Germany",
    type: "Full-time",
    description: "Managed cross-functional teams to deliver scalable solutions and drive technical innovation in fintech space.",
    achievements: [
      "Built real-time payment processing system handling €50M+ monthly volume",
      "Mentored 8 junior developers, with 75% promoted to senior roles",
      "Implemented CI/CD practices reducing release cycle from weeks to hours",
      "Led migration from monolith to microservices with zero downtime"
    ],
    technologies: ["Go", "Python", "Docker", "MongoDB", "React"],
    metrics: {
      volume: "€50M+",
      mentored: "8",
      promotion: "75%"
    }
  },
  {
    title: "Full-Stack Software Engineer",
    company: "StartupXYZ",
    period: "2018 - 2020",
    location: "Frankfurt, Germany",
    type: "Full-time",
    description: "Built foundational systems and established engineering best practices for rapid growth startup.",
    achievements: [
      "Developed MVP that secured €5M Series A funding round",
      "Built scalable backend supporting 10x user growth in 18 months",
      "Implemented automated testing reducing bug reports by 80%",
      "Established code review processes improving code quality metrics"
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Docker"],
    metrics: {
      funding: "€5M",
      growth: "10x",
      bugReduction: "80%"
    }
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
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
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              6+ years of building impactful solutions, leading teams, and driving technical excellence 
              across diverse industries and scales.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 
                    ? 'md:pr-8 md:text-right md:ml-8' 
                    : 'md:pl-8 md:ml-8 md:left-1/2'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background ${
                  index % 2 === 0 
                    ? 'left-6 md:right-6 md:left-auto' 
                    : 'left-6 md:left-6'
                } top-8 transform -translate-x-2`}></div>

                <Card className="ml-12 md:ml-0 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{exp.description}</p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                      {Object.entries(exp.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}