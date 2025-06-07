"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Zap, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  Play,
  Filter,
  Code,
  Database,
  Brain,
  Cloud,
  Building
} from "lucide-react";

interface ProjectStep {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface ProjectImpactMetric {
  label: string;
  value: string;
  change: string;
  unit?: string;
}

interface Project {
  title: string;
  description: string;
  category: "Enterprise" | "AI/ML" | "Automation";
  status: "Production" | "POC" | "Development";
  featured: boolean;
  
  // Project Journey
  problem: string;
  solution: string;
  outcome: string;
  
  // Impact Metrics with Before/After
  metrics: {
    before: ProjectImpactMetric[];
    after: ProjectImpactMetric[];
  };
  
  // Tech Stack with Categories
  technologies: {
    category: string;
    techs: string[];
    icon: React.ComponentType<any>;
  }[];
  
  // Visual Elements
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "Enterprise Contact Center Migration",
    description: "Led complete infrastructure transformation from legacy Avaya PBX to modern cloud-based NFON CC Hub, serving 200+ agents across multiple locations.",
    category: "Enterprise",
    status: "Production",
    featured: true,
    problem: "Legacy Avaya PBX system causing high operational costs, limited scalability, and poor agent experience with manual processes.",
    solution: "Designed and executed phased migration to NFON CC Hub with skill-based routing, real-time monitoring, and automated workflows.",
    outcome: "Achieved 20% AHT reduction, improved agent satisfaction, and enabled seamless scaling to 3 additional service centers.",
    metrics: {
      before: [
        { label: "Average Handle Time", value: "8.5", change: "", unit: "min" },
        { label: "Agent Satisfaction", value: "6.2", change: "", unit: "/10" },
        { label: "Service Centers", value: "1", change: "", unit: "" }
      ],
      after: [
        { label: "Average Handle Time", value: "6.8", change: "-20%", unit: "min" },
        { label: "Agent Satisfaction", value: "8.4", change: "+35%", unit: "/10" },
        { label: "Service Centers", value: "3", change: "+200%", unit: "" }
      ]
    },
    technologies: [
      { category: "Contact Center", techs: ["NFON CC Hub", "Skill-Based Routing", "Real-time Monitoring"], icon: Users },
      { category: "Legacy Systems", techs: ["Avaya PBX", "Legacy TTS", "Manual Routing"], icon: Database },
      { category: "Integration", techs: ["REST APIs", "Webhook Integration", "Data Migration"], icon: Code }
    ],
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "blue"
  },
  {
    title: "AI-Powered Sales Automation",
    description: "Implemented intelligent outbound sales bot using Botario platform with natural language processing for 24/7 lead qualification and conversion.",
    category: "AI/ML",
    status: "Production",
    featured: true,
    problem: "Manual outbound sales process limited to business hours, inconsistent lead qualification, and high cost per conversion.",
    solution: "Deployed AI voice bot with NLP capabilities for automated outbound calling, lead scoring, and appointment scheduling with CRM integration.",
    outcome: "Achieved >10% conversion rate with 24/7 availability, reducing cost per lead by 60% and improving lead quality consistency.",
    metrics: {
      before: [
        { label: "Conversion Rate", value: "3.2", change: "", unit: "%" },
        { label: "Operating Hours", value: "8", change: "", unit: "hrs/day" },
        { label: "Cost per Lead", value: "€45", change: "", unit: "" }
      ],
      after: [
        { label: "Conversion Rate", value: "10.8", change: "+237%", unit: "%" },
        { label: "Operating Hours", value: "24", change: "+200%", unit: "hrs/day" },
        { label: "Cost per Lead", value: "€18", change: "-60%", unit: "" }
      ]
    },
    technologies: [
      { category: "AI/ML", techs: ["Botario AI", "NLP", "Voice Recognition", "Lead Scoring"], icon: Brain },
      { category: "Integration", techs: ["CRM Integration", "Appointment Scheduling", "Webhook APIs"], icon: Code },
      { category: "Analytics", techs: ["Conversion Tracking", "Performance Metrics", "A/B Testing"], icon: TrendingUp }
    ],
    gradient: "from-purple-500 to-pink-500",
    accentColor: "purple"
  },
  {
    title: "Workforce Management Optimization",
    description: "Implemented comprehensive Plano WFM system with automated scheduling and forecasting, delivering substantial payroll cost reductions.",
    category: "Enterprise",
    status: "Production",
    featured: false,
    problem: "Manual workforce scheduling causing overstaffing, poor adherence tracking, and €500k+ annual payroll inefficiencies.",
    solution: "Deployed Plano WFM with predictive forecasting, automated scheduling algorithms, and real-time adherence monitoring.",
    outcome: "Delivered €350k annual savings (7% payroll reduction), improved schedule efficiency, and enhanced workforce planning accuracy.",
    metrics: {
      before: [
        { label: "Payroll Efficiency", value: "73", change: "", unit: "%" },
        { label: "Schedule Adherence", value: "68", change: "", unit: "%" },
        { label: "Annual Overspend", value: "€500k", change: "", unit: "" }
      ],
      after: [
        { label: "Payroll Efficiency", value: "87", change: "+19%", unit: "%" },
        { label: "Schedule Adherence", value: "91", change: "+34%", unit: "%" },
        { label: "Annual Savings", value: "€350k", change: "-150%", unit: "" }
      ]
    },
    technologies: [
      { category: "WFM Platform", techs: ["Plano WFM", "Forecasting", "Automated Scheduling"], icon: Clock },
      { category: "Analytics", techs: ["Workforce Analytics", "Adherence Monitoring", "Performance KPIs"], icon: TrendingUp },
      { category: "Integration", techs: ["HR Systems", "Payroll Integration", "Real-time APIs"], icon: Database }
    ],
    gradient: "from-green-500 to-emerald-500",
    accentColor: "green"
  },
  {
    title: "AI-Enhanced Reporting Pipeline",
    description: "Built intelligent reporting automation using AI-assisted scripts and visualization tools, dramatically reducing manual reporting overhead.",
    category: "Automation",
    status: "Production", 
    featured: false,
    problem: "Manual reporting consuming 120+ hours monthly, inconsistent data quality, and delayed executive insights causing poor decision-making.",
    solution: "Created automated pipeline with AI-powered data processing, intelligent anomaly detection, and dynamic dashboard generation.",
    outcome: "Reduced reporting time by 85%, improved data accuracy to 99.5%, and enabled real-time executive decision-making capabilities.",
    metrics: {
      before: [
        { label: "Manual Hours", value: "120", change: "", unit: "hrs/month" },
        { label: "Data Accuracy", value: "87", change: "", unit: "%" },
        { label: "Report Latency", value: "48", change: "", unit: "hours" }
      ],
      after: [
        { label: "Manual Hours", value: "18", change: "-85%", unit: "hrs/month" },
        { label: "Data Accuracy", value: "99.5", change: "+14%", unit: "%" },
        { label: "Report Latency", value: "15", change: "-69%", unit: "minutes" }
      ]
    },
    technologies: [
      { category: "AI/Automation", techs: ["Python Scripts", "AI Processing", "Anomaly Detection"], icon: Brain },
      { category: "Visualization", techs: ["Metabase", "Custom Dashboards", "Real-time Charts"], icon: TrendingUp },
      { category: "Data Pipeline", techs: ["SQL", "ETL Process", "Data Validation"], icon: Database }
    ],
    gradient: "from-orange-500 to-red-500",
    accentColor: "orange"
  }
];

const categories = ["All", "Enterprise", "AI/ML", "Automation"];

const categoryIcons = {
  "All": Filter,
  "Enterprise": Building,
  "AI/ML": Brain,
  "Automation": Zap
};

// 3D Tilt Hook
function useTilt(ref: React.RefObject<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return {
    style: {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d" as const,
    }
  };
}

// Animated Counter Component
function AnimatedCounter({ value, unit = "", duration = 2 }: { value: string, unit?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
          let start = 0;
          const increment = numericValue / (duration * 60);

          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const formatValue = (num: number) => {
    if (value.includes('€')) return `€${Math.round(num)}k`;
    if (value.includes('.')) return num.toFixed(1);
    return Math.round(num).toString();
  };

  return (
    <span ref={ref} className="font-bold">
      {formatValue(count)}{unit}
    </span>
  );
}

// Project Journey Component
function ProjectJourney({ project }: { project: Project }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps: ProjectStep[] = [
    { title: "Problem", description: project.problem, icon: Target },
    { title: "Solution", description: project.solution, icon: Zap },
    { title: "Outcome", description: project.outcome, icon: TrendingUp }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Project Journey</h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveStep((activeStep + 1) % 3)}
          className="flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          Next Step
        </Button>
      </div>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-6 w-0.5 h-full bg-muted"></div>
        <motion.div 
          className="absolute top-6 left-6 w-0.5 bg-primary"
          initial={{ height: "0%" }}
          animate={{ height: `${(activeStep + 1) * 33.33}%` }}
          transition={{ duration: 0.5 }}
        />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative flex items-start gap-4 mb-8 cursor-pointer`}
            onClick={() => setActiveStep(index)}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: index <= activeStep ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 ${
              index <= activeStep 
                ? 'bg-primary border-primary text-primary-foreground' 
                : 'bg-background border-muted-foreground/30'
            }`}>
              <step.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 pt-2">
              <h5 className="font-semibold mb-2">{step.title}</h5>
              <motion.p 
                className="text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: index === activeStep ? 1 : 0.7,
                  height: "auto"
                }}
                transition={{ duration: 0.3 }}
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Before/After Metrics Component
function MetricsComparison({ project }: { project: Project }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Impact Metrics</h4>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAfter(!showAfter)}
          className="flex items-center gap-2"
        >
          {showAfter ? "Show Before" : "Show After"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {(showAfter ? project.metrics.after : project.metrics.before).map((metric, index) => (
          <motion.div
            key={`${showAfter ? 'after' : 'before'}-${index}`}
            initial={{ opacity: 0, x: showAfter ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 rounded-lg bg-muted/30 border"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{metric.label}</span>
              {showAfter && metric.change && (
                <Badge variant="secondary" className="text-xs">
                  {metric.change}
                </Badge>
              )}
            </div>
            <div className="text-2xl font-bold text-primary mt-1">
              <AnimatedCounter value={metric.value} unit={metric.unit} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Technology Visualization Component
function TechStack({ project }: { project: Project }) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">Technology Stack</h4>
      <div className="space-y-3">
        {project.technologies.map((techGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <techGroup.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium mb-1">{techGroup.category}</div>
              <div className="flex flex-wrap gap-1">
                {techGroup.techs.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Main Projects Section Component
export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Enterprise implementations showcasing technical leadership, problem-solving expertise, 
            and measurable business impact across contact center technology and automation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {category}
              </Button>
            );
          })}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-12 flex items-center gap-3"
            >
              <Star className="w-6 h-6 text-yellow-500" />
              Flagship Implementations
            </motion.h3>
            
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <Zap className="w-6 h-6 text-blue-500" />
              Additional Projects
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <OtherProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="inline-block border-0 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl mb-2">Ready to implement solutions like these?</div>
                  <div className="text-muted-foreground">Enterprise-grade implementations with proven ROI and scalable architecture</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for featured projects to avoid hook issues
function FeaturedProjectCard({ project, index }: { project: Project, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null!);
  const tilt = useTilt(cardRef);
  
  return (
    <motion.div
      ref={cardRef}
      style={tilt.style}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group perspective-1000"
    >
      <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-card/90 to-card backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="relative">
            {/* Header with Gradient */}
            <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Journey */}
                <div className="lg:col-span-1">
                  <ProjectJourney project={project} />
                </div>

                {/* Metrics Comparison */}
                <div className="lg:col-span-1">
                  <MetricsComparison project={project} />
                </div>

                {/* Technology Stack */}
                <div className="lg:col-span-1">
                  <TechStack project={project} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Separate component for other projects to avoid hook issues
function OtherProjectCard({ project, index }: { project: Project, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null!);
  const tilt = useTilt(cardRef);
  
  return (
    <motion.div
      ref={cardRef}
      style={tilt.style}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] bg-gradient-to-br from-card/80 to-card backdrop-blur-sm">
        <CardContent className="p-0">
          <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-xs">
                  {project.status}
                </Badge>
              </div>
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.metrics.after.slice(0, 2).map((metric, i) => (
                <div key={i} className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">
                    <AnimatedCounter value={metric.value} unit={metric.unit} />
                  </div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                  {metric.change && (
                    <Badge variant="secondary" className="text-xs mt-1">
                      {metric.change}
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 2).map(techGroup => 
                techGroup.techs.slice(0, 3).map((tech, i) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}