"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Users, 
  Zap, 
  Target,
  Briefcase,
  GraduationCap,
  Award,
  TrendingUp
} from "lucide-react";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "Go", 
  "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "PostgreSQL"
];

const expertise = [
  {
    icon: Code,
    title: "Technical Architecture",
    description: "Designing scalable, maintainable systems that grow with your business needs."
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Building and mentoring high-performing engineering teams across cultures."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Eliminating manual workflows and reducing operational overhead by 80%."
  },
  {
    icon: Target,
    title: "Business Alignment",
    description: "Translating technical complexity into clear business value and ROI."
  }
];

const achievements = [
  {
    icon: TrendingUp,
    title: "Revenue Impact",
    description: "Delivered solutions driving $2M+ annual savings"
  },
  {
    icon: Award,
    title: "Client Success",
    description: "98% client satisfaction across 50+ projects"
  },
  {
    icon: Briefcase,
    title: "Team Growth",
    description: "Scaled engineering teams from 5 to 25+ members"
  },
  {
    icon: GraduationCap,
    title: "Knowledge Transfer",
    description: "Mentored 30+ junior developers to senior roles"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
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
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm passionate about creating technology solutions that don't just work—they excel. 
              With a unique blend of technical expertise and business acumen, I help organizations 
              navigate their digital transformation journeys.
            </p>
          </div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 border-none">
              <CardContent className="p-0">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    My journey began in software development, where I quickly discovered that the most 
                    impactful solutions come from understanding both the technical landscape and the 
                    human challenges they solve. Over 6+ years, I've evolved from a code-focused 
                    developer to a strategic technology leader.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, I specialize in bridging the gap between complex technical requirements and 
                    real business needs. Whether it's architecting microservices that scale to millions 
                    of users, automating processes that save thousands of hours, or leading teams through 
                    challenging migrations, I focus on solutions that deliver measurable impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Core Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0 text-center">
                      <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}