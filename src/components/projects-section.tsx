"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Users, Zap } from "lucide-react";

const projects = [
  {
    title: "Enterprise Automation Platform",
    description: "Comprehensive automation platform that reduced manual processes by 80% and improved operational efficiency for Fortune 500 client.",
    longDescription: "Built end-to-end automation platform with AI-driven workflow optimization, real-time monitoring, and intelligent resource allocation.",
    impact: {
      savings: "€1.2M annually",
      efficiency: "80% reduction",
      users: "500+ daily users"
    },
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "AI/ML"],
    githubUrl: "https://github.com/noah-kellner/automation-platform",
    liveUrl: "https://automation-demo.noah-kellner.com",
    featured: true,
    status: "Production",
    category: "Enterprise"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "AI-powered dashboard providing real-time insights and predictive analytics for data-driven decision making.",
    longDescription: "Advanced analytics platform with machine learning models, real-time data processing, and interactive visualizations.",
    impact: {
      decisions: "40% faster",
      accuracy: "95% prediction",
      revenue: "€800K impact"
    },
    technologies: ["Python", "FastAPI", "React", "TensorFlow", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/noah-kellner/ai-analytics",
    liveUrl: "https://analytics.noah-kellner.com",
    featured: true,
    status: "Production",
    category: "AI/ML"
  },
  {
    title: "Microservices Migration Toolkit",
    description: "Comprehensive tool helping organizations migrate from monolithic architectures to microservices with minimal downtime.",
    longDescription: "Zero-downtime migration toolkit with automated dependency analysis, service extraction, and monitoring capabilities.",
    impact: {
      migrations: "15 successful",
      downtime: "0 minutes",
      adoption: "85% teams"
    },
    technologies: ["Go", "Kubernetes", "Docker", "gRPC", "MongoDB", "Prometheus"],
    githubUrl: "https://github.com/noah-kellner/microservices-migration",
    featured: false,
    status: "Open Source",
    category: "DevOps"
  },
  {
    title: "Team Collaboration Hub",
    description: "Modern collaboration platform integrating with existing tools to streamline workflows and enhance team communication.",
    longDescription: "All-in-one collaboration platform with integrated project management, real-time communication, and productivity tracking.",
    impact: {
      productivity: "45% increase",
      satisfaction: "92% team rating",
      adoption: "200+ teams"
    },
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket", "Tailwind"],
    githubUrl: "https://github.com/noah-kellner/team-platform",
    liveUrl: "https://teamwork.noah-kellner.com",
    featured: false,
    status: "Production",
    category: "SaaS"
  }
];

const categories = ["All", "Enterprise", "AI/ML", "DevOps", "SaaS"];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of impactful solutions I've architected and delivered, 
              showcasing technical excellence and measurable business outcomes.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Flagship Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <Badge variant="secondary">{project.category}</Badge>
                            <Badge 
                              variant={project.status === "Production" ? "default" : "outline"}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {project.longDescription}
                      </p>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                        {Object.entries(project.impact).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-500" />
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                      </div>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Impact Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/30 rounded">
                        {Object.entries(project.impact).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-sm font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}