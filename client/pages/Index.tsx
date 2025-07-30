import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Mail, 
  Download, 
  Linkedin, 
  Instagram,
  Calendar,
  Building2,
  GraduationCap,
  Trophy,
  Send,
  ArrowRight
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
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-ocean-600 bg-clip-text text-transparent">
              Aral D'Souza
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Experience
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/80 via-background to-sand-50/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,113,108,0.08),transparent_50%)] pointer-events-none"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left space-y-10">
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                  <span className="text-foreground">Aral Aldrin John</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-ocean-600 to-accent bg-clip-text text-transparent">
                    D'Souza
                  </span>
                </h1>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                  <Badge variant="secondary" className="px-4 py-2 text-base font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                    Maximo Developer
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base font-semibold bg-ocean-50 text-ocean-700 border-ocean-200 hover:bg-ocean-100 transition-colors">
                    Technical Consultant
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base font-semibold bg-sand-50 text-sand-700 border-sand-200 hover:bg-sand-100 transition-colors">
                    Founder
                  </Badge>
                </div>
              </div>
              
              <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Versatile Maximo Developer with hands-on experience in IBM Maximo 7.6 and MAS 8, 
                specializing in integration, automation scripting, BIRT reporting, and system customization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a href="https://cdn.builder.io/o/assets%2Fa92c07345b2448db8df3322125c3b3e6%2F4091f037a4d9481680641b7682945e52?alt=media&token=f6cdd397-890f-4672-925c-d50900513382&apiKey=a92c07345b2448db8df3322125c3b3e6" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4">
                    <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Download Resume
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 transition-all duration-300 text-lg px-8 py-4">
                  <Mail className="mr-3 h-6 w-6" />
                  Contact Me
                </Button>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a" 
                   target="_blank" rel="noopener noreferrer"
                   className="p-4 rounded-full bg-background/80 border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-lg hover:shadow-xl">
                  <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="https://www.instagram.com/coastalvibes.in" 
                   target="_blank" rel="noopener noreferrer"
                   className="p-4 rounded-full bg-background/80 border-2 border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group shadow-lg hover:shadow-xl">
                  <Instagram className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa92c07345b2448db8df3322125c3b3e6%2Fa8c817ab415e457099238678478bbeaf?format=webp&width=800"
                    alt="Aral Aldrin John D'Souza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">About Me</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a versatile Maximo Developer with hands-on experience in IBM Maximo 7.6 and MAS 8, 
                  specializing in integration (MIF), automation scripting (Jython/JavaScript), BIRT reporting, and system customization. 
                  My journey spans across India, Kuwait, and Bahrain, contributing to enterprise-level Maximo projects.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Currently working with Bahrain Airport Services as part of the IBM Maximo Application Suite (MAS) project support team. 
                  I focus on secure, scalable, and performance-driven EAM solutions, aligning technology with business needs 
                  while following best practices in system design and cybersecurity.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm also the founder of Coastal Vibes India, a non-profit digital media platform promoting India's coastal regions. 
                  Always eager to learn, adapt, and collaborate on impactful solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/20 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Master's in Cyber Security</h4>
                    <p className="text-muted-foreground">Coventry University, UK</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/20 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Technical Consultant</h4>
                    <p className="text-muted-foreground">Praxis Solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-accent/10 hover:border-accent/20 transition-colors">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Trophy className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">IBM Maximo 7.6 & MAS 8 Expert</h4>
                    <p className="text-muted-foreground">Enterprise Asset Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Skills & Expertise</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl flex items-center gap-4">
                    <div className="w-3 h-12 bg-gradient-to-b from-primary to-ocean-600 rounded-full"></div>
                    <span className="bg-gradient-to-r from-primary to-ocean-600 bg-clip-text text-transparent">Technical Skills</span>
                  </CardTitle>
                  <CardDescription className="text-lg">Core development and engineering expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "IBM Maximo 7.6 & MAS 8", "Microsoft SQL Server", ".NET Framework", "ASP.NET Core", 
                      "ASP.NET MVC", "BIRT Reporting", "Jython/JavaScript", "MIF Integration", 
                      "AngularJS", "Kendo UI", "Azure Cloud", "Cyber Security"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-ocean-50 text-ocean-700 border border-ocean-200 hover:bg-ocean-100 transition-all duration-300 px-4 py-2 text-sm font-medium hover:scale-105">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-br from-background to-accent/5">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl flex items-center gap-4">
                    <div className="w-3 h-12 bg-gradient-to-b from-accent to-sand-600 rounded-full"></div>
                    <span className="bg-gradient-to-r from-accent to-sand-600 bg-clip-text text-transparent">Creative Skills</span>
                  </CardTitle>
                  <CardDescription className="text-lg">Content creation and business development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Content Creation", "Digital Media", "Social Impact", 
                      "Community Building", "Non-profit Management", "Coastal Tourism Promotion", 
                      "Photography", "Video Production", "Social Media Strategy"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-sand-50 text-sand-700 border border-sand-200 hover:bg-sand-100 transition-all duration-300 px-4 py-2 text-sm font-medium hover:scale-105">
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
      <section id="experience" className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Experience</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-12 relative">
              <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block rounded-full"></div>
              
              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-r from-background to-primary/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">Technical Consultant</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5" />
                        Praxis Solutions • Bahrain Airport Services
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2 border-primary/30 text-primary px-4 py-2 text-base font-medium">
                      <Calendar className="h-4 w-4" />
                      Aug 2024 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>• Working with Bahrain Airport Services on IBM Maximo Application Suite (MAS) project</li>
                    <li>• Maximo integration, automation scripting, application monitoring, and customization</li>
                    <li>• BIRT report development and troubleshooting for business intelligence</li>
                    <li>• MBO (Maximo Business Objects) enhancement for custom business requirements</li>
                    <li>• End-to-end Maximo configurations: escalations, workflows, relationships, object structures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-r from-background to-accent/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-accent mb-2">Career Break - Master's Pursuit</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <GraduationCap className="h-5 w-5" />
                        Coventry University, UK
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2 border-accent/30 text-accent px-4 py-2 text-base font-medium">
                      <Calendar className="h-4 w-4" />
                      Jun 2022 - Aug 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>• Pursued Master's in Cybersecurity focusing on encryption, ethical hacking, secure development</li>
                    <li>• Worked as assistant manager at Subway and front house at Stonegate Group</li>
                    <li>• Gained adaptability and problem-solving skills in diverse industries</li>
                    <li>• Maintained Coastal Vibes India operations during academic pursuits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-r from-background to-primary/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">Technical Consultant</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5" />
                        Praxis Solutions • Kuwait
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2 border-primary/30 text-primary px-4 py-2 text-base font-medium">
                      <Calendar className="h-4 w-4" />
                      Jun 2019 - Apr 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>• Hands-on experience with IBM Maximo 7.5 and 7.6: functional design, module configuration, customization</li>
                    <li>• Maximo Mobile configuration and Android-based mobile app integration</li>
                    <li>• Enterprise applications using ASP.NET MVC, jQuery, JavaScript, AngularJS, Kendo UI</li>
                    <li>• Maximo BIRT reporting and custom report development</li>
                    <li>• Performance testing with Apache JMeter and Selenium automation</li>
                    <li>• Agile development and client requirement gathering</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-r from-background to-accent/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-accent mb-2">Founder</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5" />
                        Coastal Vibes India • Non-profit
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2 border-accent/30 text-accent px-4 py-2 text-base font-medium">
                      <Calendar className="h-4 w-4" />
                      Jun 2020 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
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

      {/* Coastal Vibes Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/60 via-sand-50/40 to-background"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Coastal Vibes India</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A non-profit digital media platform that promotes the coastal region of India, supports community needs, 
              and highlights local talents and initiatives. Celebrating the essence of coastal culture and tourism.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4">
                <Instagram className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Visit @coastalvibes.in
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-accent/5 transition-all duration-300 text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Awards & Honors</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Trophy className="h-7 w-7 text-accent" />
                    </div>
                    Corona Warrior Award
                  </CardTitle>
                  <CardDescription className="text-lg">Max Life Insurance • October 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Recognized for outstanding contributions during the COVID-19 pandemic and community service efforts.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Trophy className="h-7 w-7 text-accent" />
                    </div>
                    Social Work Award
                  </CardTitle>
                  <CardDescription className="text-lg">Udupi Sanchalana Karnataka • October 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Honored for significant contributions to social work and community development initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Trophy className="h-7 w-7 text-accent" />
                    </div>
                    Prathiba Puraskar 2019
                  </CardTitle>
                  <CardDescription className="text-lg">St Theresa Church Kemmannu • August 2019</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Recognition for exceptional talent and contributions to the community.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Trophy className="h-7 w-7 text-accent" />
                    </div>
                    Academic Excellence Award
                  </CardTitle>
                  <CardDescription className="text-lg">Mangalore University • BCA Final Year</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Awarded for scoring 80% in Final Year Bachelor of Computer Applications (BCA).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Education & Certifications</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-3xl">
                    <div className="p-3 rounded-full bg-primary/10">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/10">
                    <h4 className="font-semibold text-xl text-primary">Master's in Cyber Security</h4>
                    <p className="text-muted-foreground text-lg">Coventry University, UK</p>
                    <p className="text-muted-foreground">2022 - 2024</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/10">
                    <h4 className="font-semibold text-xl text-primary">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-muted-foreground text-lg">Mangalore University</p>
                    <p className="text-muted-foreground">80% Final Year Score</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-br from-background to-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-3xl">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Trophy className="h-8 w-8 text-accent" />
                    </div>
                    Licenses & Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">Instana by IBM Technical Sales Intermediate</h4>
                    <p className="text-muted-foreground">IBM • August 2024</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">Student Representative Certificate</h4>
                    <p className="text-muted-foreground">Coventry University • April 2023</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">Sandwich Artistry</h4>
                    <p className="text-muted-foreground">Subway EMEA • September 2022</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">Android Training and Certification</h4>
                    <p className="text-muted-foreground">Udemy Academy • September 2020</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">Developing ASP.NET MVC Web Applications</h4>
                    <p className="text-muted-foreground">Manipal Institute of Computer Education-MICE • October 2019</p>
                    <p className="text-sm text-muted-foreground mt-1">Skills: .NET Framework, Microsoft SQL Server, HTML, ASP.NET MVC, jQuery</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">Introduction to Programming Using JavaScript</h4>
                    <p className="text-muted-foreground">Manipal Institute of Computer Education-MICE • October 2019</p>
                    <p className="text-sm text-muted-foreground mt-1">Skills: JavaScript</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Let's Connect</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and entrepreneurship.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg">araldsouza20@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <a href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline text-lg">
                      LinkedIn Profile
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-accent/10 hover:border-accent/20 transition-colors">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <a href="https://www.instagram.com/coastalvibes.in" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-accent hover:underline text-lg">
                      @coastalvibes.in
                    </a>
                  </div>
                </div>
              </div>
              
              <Card className="border-2 hover:border-primary/20 transition-all duration-300 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-lg">I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" required className="h-12 text-base" />
                      <Input placeholder="Last Name" required className="h-12 text-base" />
                    </div>
                    <Input type="email" placeholder="Email Address" required className="h-12 text-base" />
                    <Input placeholder="Subject" required className="h-12 text-base" />
                    <Textarea placeholder="Your Message" rows={6} required className="text-base" />
                    <Button type="submit" className="w-full h-12 text-lg group">
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      <footer className="py-16 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              © 2024 Aral Aldrin John Dsouza. All rights reserved.
            </p>
            <p className="text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
