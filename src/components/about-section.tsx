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
  "n8n", "Zapier", "Power Automate", "OpenAI API", "Python", "PowerShell", 
  "Docker", "Linux", "REST/OAuth", "Webhooks", "NFON CC Hub", "Plano WFM", 
  "Metabase", "SQL/BI", "Networking", "Stakeholder Management"
];

const expertise = [
  {
    icon: Users,
    title: "Team Leadership & Training",
    description: "Managed 4-person cross-functional teams and mentored apprentices across multiple organizations."
  },
  {
    icon: Target,
    title: "Pre-Sales & Solution Consulting",
    description: "Delivered discovery sessions, demos, and ROI storytelling for C-level stakeholders."
  },
  {
    icon: Zap,
    title: "Process Automation & AI",
    description: "Implemented workflow automation (n8n, Zapier) and AI solutions with measurable impact."
  },
  {
    icon: Code,
    title: "Enterprise Infrastructure",
    description: "Led large-scale migrations and managed end-to-end tech stacks for 200+ users."
  }
];

const achievements = [
  {
    icon: TrendingUp,
    title: "IT Ticket Deflection",
    description: "Built self-service dashboard suite deflecting 30% of IT tickets"
  },
  {
    icon: Award,
    title: "Contact Center Migration",
    description: "Led 200+ agent migration with 20% AHT reduction"
  },
  {
    icon: Briefcase,
    title: "AI-Powered Resolution",
    description: "Delivered AI chatbot achieving 25% faster resolution times"
  },
  {
    icon: GraduationCap,
    title: "Automation ROI",
    description: "Automated scheduling flows saving 8% FTE cost annually"
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
              Hybrid IT leader with 7+ years bridging technology and business operations. 
              I bring proven experience in enterprise migrations, team leadership, and AI automation 
              that drives measurable cost savings and operational excellence.
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
                    My career progression from IT Trainee to Head of IT demonstrates a track record of 
                    driving tangible business outcomes for my employers. From optimizing legacy infrastructure 
                    to implementing cutting-edge AI solutions, I consistently deliver cost reductions while 
                    improving operational efficiency across enterprise environments.
                  </p>
                  <p className="text-lg leading-relaxed">
                    What sets me apart is my ability to lead cross-functional teams while maintaining hands-on 
                    technical expertise. I've successfully managed 4-person teams, collaborated with C-level 
                    executives, and mentored apprentices. My approach combines strategic thinking with practical 
                    implementation, ensuring solutions not only work technically but integrate seamlessly with 
                    existing business processes and company culture.
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