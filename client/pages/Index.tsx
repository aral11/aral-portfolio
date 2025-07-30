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
                Maximo Developer • Technical Consultant • Founder • Content Creator
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Versatile Maximo Developer with hands-on experience in IBM Maximo 7.6 and MAS 8 (Manage),
                specializing in integration, automation scripting, BIRT reporting, and system customization.
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
                  I'm a versatile Maximo Developer with hands-on experience in IBM Maximo 7.6 and MAS 8 (Manage),
                  specializing in integration (MIF), automation scripting (Jython/JavaScript), BIRT reporting, and system customization.
                  My journey spans across India, Kuwait, and Bahrain, contributing to enterprise-level Maximo projects.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Currently working with Bahrain Airport Services as part of the IBM Maximo Application Suite (MAS) project support team.
                  I focus on secure, scalable, and performance-driven EAM solutions, aligning technology with business needs
                  while following best practices in system design and cybersecurity.
                </p>
                <p className="text-lg text-muted-foreground">
                  I'm also the founder of Coastal Vibes India, a non-profit digital media platform promoting India's coastal regions.
                  Always eager to learn, adapt, and collaborate on impactful solutions.
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
                  <span>Technical Consultant - Praxis Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>IBM Maximo 7.6 & MAS 8 Specialist</span>
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
                      "IBM Maximo 7.6 & MAS 8", "Microsoft SQL Server", ".NET Framework", "ASP.NET Core",
                      "ASP.NET MVC", "BIRT Reporting", "Jython/JavaScript", "MIF Integration",
                      "AngularJS", "Kendo UI", "Azure Cloud", "Cyber Security"
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
                      "Content Creation", "Digital Media", "Social Impact",
                      "Community Building", "Non-profit Management", "Coastal Tourism Promotion",
                      "Photography", "Video Production", "Social Media Strategy"
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
                      <CardTitle>Technical Consultant</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        Praxis Solutions • Bahrain Airport Services
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Aug 2024 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Working with Bahrain Airport Services on IBM Maximo Application Suite (MAS) project</li>
                    <li>• Maximo integration, automation scripting, application monitoring, and customization</li>
                    <li>• BIRT report development and troubleshooting for business intelligence</li>
                    <li>• MBO (Maximo Business Objects) enhancement for custom business requirements</li>
                    <li>• End-to-end Maximo configurations: escalations, workflows, relationships, object structures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Career Break - Master's Pursuit</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <GraduationCap className="h-4 w-4" />
                        Coventry University, UK
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Jun 2022 - Aug 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pursued Master's in Cybersecurity focusing on encryption, ethical hacking, secure development</li>
                    <li>• Worked as assistant manager at Subway and front house at Stonegate Group</li>
                    <li>• Gained adaptability and problem-solving skills in diverse industries</li>
                    <li>• Maintained Coastal Vibes India operations during academic pursuits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Technical Consultant</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        Praxis Solutions • Kuwait
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Jun 2019 - Apr 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Hands-on experience with IBM Maximo 7.5 and 7.6: functional design, module configuration, customization</li>
                    <li>• Maximo Mobile configuration and Android-based mobile app integration</li>
                    <li>• Enterprise applications using ASP.NET MVC, jQuery, JavaScript, AngularJS, Kendo UI</li>
                    <li>• Maximo BIRT reporting and custom report development</li>
                    <li>• Performance testing with Apache JMeter and Selenium automation</li>
                    <li>• Agile development and client requirement gathering</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Founder</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        Coastal Vibes India • Non-profit
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Jun 2020 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Founded non-profit digital media platform promoting coastal region of India</li>
                    <li>• Supporting community needs and highlighting local talents and initiatives</li>
                    <li>• Building digital presence with 10K+ Instagram followers</li>
                    <li>• Content creation focusing on coastal culture, tourism, and community development</li>
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
              A non-profit digital media platform that promotes the coastal region of India, supports community needs,
              and highlights local talents and initiatives. Celebrating the essence of coastal culture and tourism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Instagram className="mr-2 h-5 w-5" />
                Visit @coastalvibes.in
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Awards & Honors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Trophy className="h-5 w-5" />
                    Corona Warrior Award
                  </CardTitle>
                  <CardDescription>Max Life Insurance • October 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recognized for outstanding contributions during the COVID-19 pandemic and community service efforts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Trophy className="h-5 w-5" />
                    Social Work Award
                  </CardTitle>
                  <CardDescription>Udupi Sanchalana Karnataka • October 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Honored for significant contributions to social work and community development initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Trophy className="h-5 w-5" />
                    Prathiba Puraskar 2019
                  </CardTitle>
                  <CardDescription>St Theresa Church Kemmannu • August 2019</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recognition for exceptional talent and contributions to the community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Trophy className="h-5 w-5" />
                    Academic Excellence Award
                  </CardTitle>
                  <CardDescription>Mangalore University • BCA Final Year</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Awarded for scoring 80% in Final Year Bachelor of Computer Applications (BCA).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
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
                    <p className="text-sm text-muted-foreground">2022 - 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-muted-foreground">Mangalore University</p>
                    <p className="text-sm text-muted-foreground">80% Final Year Score</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Certifications & Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">IBM Maximo 7.6 & MAS 8 Specialist</h4>
                    <p className="text-muted-foreground">Enterprise Asset Management</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">BIRT Reporting Expert</h4>
                    <p className="text-muted-foreground">Business Intelligence & Reporting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cybersecurity Professional</h4>
                    <p className="text-muted-foreground">Encryption, Ethical Hacking, Secure Development</p>
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
