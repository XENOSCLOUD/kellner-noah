"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Zap, Award, Building, Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  impact: {
    icon: React.ComponentType<any>;
    value: string;
    label: string;
  };
}

const experiences: ExperienceItem[] = [
  {
    company: "Dialog-Factory GmbH",
    role: "Head of IT & Automation",
    period: "Oct 2023 – Present",
    location: "Augsburg, Germany",
    description: "Leading end-to-end technology strategy for customer service subsidiary. Managing cross-functional teams while driving automation roadmap and acting as technical counterpart in pre-sales engagements.",
    achievements: [
      "Manage 4-person cross-functional team reporting to executive board",
      "Own complete tech stack (SaaS, CCaaS, WFM, cloud infrastructure)",
      "Drive automation roadmap and prototype internal tools that scale beyond IT",
      "Act as technical pre-sales counterpart when pitching new BPO deals"
    ],
    technologies: ["NFON CC Hub", "Plano WFM", "n8n", "Docker", "Cloud Infrastructure", "Pre-Sales"],
    impact: {
      icon: TrendingUp,
      value: "€350k+",
      label: "Annual Savings Delivered"
    }
  },
  {
    company: "Dialog-Factory GmbH",
    role: "IT Support Manager",
    period: "Mar 2023 – Oct 2023",
    location: "Augsburg, Germany",
    description: "Managed daily IT operations and vendor relationships while pioneering AI-driven automation solutions. Introduced first AI chatbot integration using OpenAI API and low-code flows.",
    achievements: [
      "Ran daily support operations and vendor negotiations",
      "Introduced first AI chatbot integration leveraging OpenAI API + low-code flows",
      "Implemented intelligent routing for faster issue resolution",
      "Established vendor management processes and SLA frameworks"
    ],
    technologies: ["OpenAI API", "Low-code Platforms", "Vendor Management", "SLA Management"],
    impact: {
      icon: Zap,
      value: "25%",
      label: "Faster Resolution Times"
    }
  },
  {
    company: "BMK Group GmbH & Co. KG",
    role: "IT Support Specialist / Trainer",
    period: "Jan 2021 – Mar 2023",
    location: "Augsburg, Germany",
    description: "Delivered comprehensive IT support across multi-site electronics manufacturing environment. Developed automation scripts and knowledge management systems while coordinating apprenticeship programs.",
    achievements: [
      "Provided first/second-level support across multi-site electronics manufacturer",
      "Developed scripts and knowledge base that cut ticket backlog by 18%",
      "Coordinated apprenticeship program, mentoring four trainees",
      "Built self-service dashboard suite deflecting 30% of IT tickets"
    ],
    technologies: ["PowerShell", "Knowledge Management", "Multi-site Support", "Dashboard Development"],
    impact: {
      icon: Users,
      value: "30%",
      label: "IT Ticket Deflection"
    }
  },
  {
    company: "BMK Group GmbH & Co. KG",
    role: "IT Trainee – Systems Integration",
    period: "Sep 2018 – Jan 2021",
    location: "Augsburg, Germany",
    description: "Completed comprehensive IT systems integration apprenticeship with IHK certification. Gained foundational experience in enterprise infrastructure, networking, and automation scripting.",
    achievements: [
      "Completed Fachinformatiker Systemintegration (IHK) certification in 2021",
      "Gained expertise in Windows Server administration and networking",
      "Supported infrastructure projects and system maintenance",
      "Developed foundational automation and scripting capabilities"
    ],
    technologies: ["Windows Server", "Networking", "System Administration", "Infrastructure"],
    impact: {
      icon: Award,
      value: "IHK",
      label: "Certified Professional"
    }
  }
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        style={{ y }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            7+ years of progressive growth from IT Trainee to Head of IT, consistently delivering 
            measurable business impact through technology leadership and cross-functional collaboration.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-gradient-to-br from-card/80 to-card backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Gradient Header */}
                      <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 p-8 border-b">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                <Building className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <Badge variant="secondary" className="text-xs font-medium">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {exp.period}
                                </Badge>
                              </div>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                              <span>{exp.company}</span>
                              <span className="text-primary">•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          
                          {/* Impact Card */}
                          <div className="lg:flex-shrink-0">
                            <div className="bg-primary/10 rounded-xl p-4 text-center min-w-[140px]">
                              <exp.impact.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                              <div className="text-2xl font-bold text-primary">{exp.impact.value}</div>
                              <div className="text-sm text-muted-foreground font-medium">{exp.impact.label}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-8">
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Achievements */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Briefcase className="w-5 h-5 text-primary" />
                              <h4 className="font-semibold text-lg">Key Achievements</h4>
                            </div>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>
                                  <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                  >
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                                    <span className="text-sm leading-relaxed">{achievement}</span>
                                  </motion.div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Zap className="w-5 h-5 text-primary" />
                              <h4 className="font-semibold text-lg">Technologies & Skills</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: 0.05 * i }}
                                  viewport={{ once: true }}
                                >
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs hover:bg-primary/10 transition-colors cursor-default"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="inline-block border-0 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Ready to bring this experience to your team</div>
                  <div className="text-sm text-muted-foreground">7+ years of proven leadership and measurable impact</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}