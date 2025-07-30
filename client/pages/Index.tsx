import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Instagram,
  Calendar,
  Building2,
  GraduationCap,
  Trophy,
  Send
} from "lucide-react";

export default function Index() {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Aral Dsouza</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 via-background to-sand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Aral Aldrin John</span>
                <br />
                <span className="text-primary">Dsouza</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                Developer • Maximo Specialist • Founder • Content Creator
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Software Developer with expertise in IBM Maximo, .NET Core, Azure DevOps, and Cyber Security. 
                Founder of Coastal Vibes India and passionate content creator.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a" 
                   target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/coastalvibes.in" 
                   target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center text-primary text-6xl font-bold">
                  AD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate software developer with a unique blend of technical expertise and entrepreneurial spirit. 
                  My journey spans across multiple countries including India, Kuwait, and Bahrain, giving me a global perspective 
                  on technology and business.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With a Master's in Cyber Security from Coventry University, UK, and deep expertise in IBM Maximo, 
                  I specialize in creating robust automation solutions and enterprise applications. I'm also the founder 
                  of Coastal Vibes India, a coastal clothing and lifestyle brand.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you'll find me creating content about travel, food, and technology on Instagram and YouTube, 
                  sharing my experiences and insights with a growing community.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>India • Kuwait • Bahrain</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Master's in Cyber Security - Coventry University, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Founder - Coastal Vibes India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>IBM Maximo Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Technical Skills</CardTitle>
                  <CardDescription>Core development and engineering expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "IBM Maximo", ".NET Core", "Azure DevOps", "SQL Server", 
                      "Web API", "MVC", "Flutter", "TypeScript", "React", 
                      "Node.js", "Cyber Security", "Cloud Computing"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-ocean-100 text-ocean-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">Creative Skills</CardTitle>
                  <CardDescription>Content creation and business development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Content Creation", "Brand Development", "Social Media", 
                      "Photography", "Video Editing", "Travel Blogging", 
                      "Entrepreneurship", "Product Design", "Marketing"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-sand-100 text-sand-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Maximo Developer & Consultant</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        Various Enterprise Clients
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2020 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Developed custom automation scripts and workflows in IBM Maximo</li>
                    <li>• Built enterprise applications using Maximo App Designer</li>
                    <li>• Implemented integration solutions with various ERP systems</li>
                    <li>• Led digital transformation initiatives for asset management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Founder & CEO</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        Coastal Vibes India
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2019 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Built a coastal clothing and lifestyle brand from ground up</li>
                    <li>• Developed e-commerce platform and digital marketing strategies</li>
                    <li>• Created content marketing campaigns reaching 10K+ followers</li>
                    <li>• Managed supply chain and product development processes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Developer</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        International Projects (Kuwait, Bahrain)
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2018 - 2020
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Developed .NET Core applications for enterprise clients</li>
                    <li>• Implemented DevOps practices using Azure DevOps</li>
                    <li>• Built RESTful APIs and microservices architectures</li>
                    <li>• Collaborated with international teams across different time zones</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    CoastalConnect
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>E-commerce Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete e-commerce solution for Coastal Vibes with inventory management, 
                    payment integration, and analytics dashboard.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                    <Badge variant="outline" className="text-xs">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Maximo Automation Suite
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>Enterprise Solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Custom automation scripts and workflows for IBM Maximo, reducing 
                    manual processes by 70% for enterprise clients.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">IBM Maximo</Badge>
                    <Badge variant="outline" className="text-xs">JavaScript</Badge>
                    <Badge variant="outline" className="text-xs">SQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Travel Content Hub
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>Content Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Content management platform for travel and food blogging with 
                    integrated social media scheduling and analytics.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Flutter</Badge>
                    <Badge variant="outline" className="text-xs">.NET Core</Badge>
                    <Badge variant="outline" className="text-xs">Azure</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Vibes Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-50 to-sand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Coastal Vibes India</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A coastal clothing and lifestyle brand celebrating the laid-back vibes of coastal living. 
              From comfortable apparel to lifestyle accessories, we bring the essence of coastal culture to your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Instagram className="mr-2 h-5 w-5" />
                Visit @coastalvibes.in
              </Button>
              <Button variant="outline" size="lg">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Master's in Cyber Security</h4>
                    <p className="text-muted-foreground">Coventry University, UK</p>
                    <p className="text-sm text-muted-foreground">2017 - 2018</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bachelor's in Computer Engineering</h4>
                    <p className="text-muted-foreground">University of Mumbai</p>
                    <p className="text-sm text-muted-foreground">2013 - 2017</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">IBM Maximo Certified Specialist</h4>
                    <p className="text-muted-foreground">IBM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Azure DevOps Engineer Expert</h4>
                    <p className="text-muted-foreground">Microsoft</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Certified Ethical Hacker (CEH)</h4>
                    <p className="text-muted-foreground">EC-Council</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and entrepreneurship.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>araldsouza20@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-primary" />
                    <a href="https://www.instagram.com/coastalvibes.in" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      @coastalvibes.in
                    </a>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" required />
                      <Input placeholder="Last Name" required />
                    </div>
                    <Input type="email" placeholder="Email Address" required />
                    <Input placeholder="Subject" required />
                    <Textarea placeholder="Your Message" rows={4} required />
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Aral Aldrin John Dsouza. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
