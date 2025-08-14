fimport { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Menu,
  X,
  Code,
  Briefcase,
  Award,
  Heart,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to_email: "araldsouza20@gmail.com",
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            template_params: templateParams,
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      const mailtoUrl = `mailto:araldsouza20@gmail.com?subject=${encodeURIComponent(templateParams.subject || "Contact from Portfolio")}&body=${encodeURIComponent(
        `Name: ${templateParams.from_name}\nEmail: ${templateParams.from_email}\n\nMessage:\n${templateParams.message}`,
      )}`;
      window.open(mailtoUrl, "_blank");
      setSubmitStatus("success");
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-primary via-ocean-600 to-accent bg-clip-text text-transparent">
              Aral D'Souza
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Experience
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Skills
              </a>
              <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border/40 py-4">
              <div className="flex flex-col space-y-2">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 text-muted-foreground hover:text-primary transition-colors">Experience</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 bg-primary text-primary-foreground rounded-lg transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/30 to-sand-50/30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  <span className="text-foreground">Aral Aldrin John</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-ocean-600 bg-clip-text text-transparent">
                    D'Souza
                  </span>
                </h1>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Maximo Developer</Badge>
                  <Badge className="bg-ocean-100 text-ocean-700 border-ocean-200">Technical Consultant</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Digital Creator</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Founder</Badge>
                </div>
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Skilled Maximo Consultant with <span className="font-semibold text-primary">5+ years</span> of
                experience in IBM Maximo and MAS 8 implementations. Proven expertise in automation scripting,
                BIRT reporting, and enterprise asset management across multiple industry sectors.
              </p>

              <p className="text-base lg:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl">
                Beyond technology, I'm a passionate <span className="font-semibold text-accent">Digital Creator</span> ,
                <span className="font-semibold text-green-600">Philanthropist</span> , and <span className="font-semibold text-ocean-600">Founder </span>
                 of Coastal Vibes India - dedicated to empowering communities and creating meaningful social impact
                through innovative digital platforms.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <a href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background border hover:border-primary/50 transition-all group">
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-600" />
                  </a>
                </div>
                
                <div className="text-center lg:text-left text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Instagram className="h-4 w-4 text-pink-600" />
                    <a href="https://www.instagram.com/cheerboyaral?igsh=aDQwa2VmbzY1dDBw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-pink-600 transition-colors">
                      @cheerboyaral
                    </a>
                    <span>• Personal</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Instagram className="h-4 w-4 text-ocean-600" />
                    <a href="https://www.instagram.com/coastalvibes.in" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-ocean-600 transition-colors">
                      @coastalvibes.in
                    </a>
                    <span>• Founder</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Instagram className="h-4 w-4 text-sand-600" />
                    <a href="https://www.instagram.com/upliftwitharal" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-sand-600 transition-colors">
                      @upliftwitharal
                    </a>
                    <span>• Motivation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border shadow-2xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa92c07345b2448db8df3322125c3b3e6%2Fa8c817ab415e457099238678478bbeaf?format=webp&width=800"
                    alt="Aral Aldrin John D'Souza"
                    className="w-full h-full object-cover scale-150"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Vibes Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent/5 to-sand/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-accent">Coastal Vibes India</h2>
              <p className="text-xl text-accent/80 font-medium">"To You, From the Coast"</p>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-accent/10 to-sand/10">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">Our Vision</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To bring the heartbeat of the coastal region to the world – through its vibrant culture,
                      untold stories, local talents, and growing businesses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">Our Mission</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To empower youth, entrepreneurs, and creatives by providing a platform that inspires,
                      uplifts, and creates real impact in the community.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-4">What We've Achieved</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">✓</span>
                          </div>
                          <span className="text-muted-foreground">Hosted <span className="font-semibold text-accent">125+ episodes</span> featuring changemakers</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">✓</span>
                          </div>
                          <span className="text-muted-foreground">Supported startups through digital promotion</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">✓</span>
                          </div>
                          <span className="text-muted-foreground">Events in <span className="font-semibold text-accent">India & UK</span></span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Distributed <span className="font-semibold text-green-600">90+ ration kits</span> during COVID</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <GraduationCap className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Funded education for <span className="font-semibold text-green-600">20+ students</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <ArrowRight className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Continuing our impact journey</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Background</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated to delivering innovative Maximo solutions and creating meaningful digital impact
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Story */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="mb-4">
                        I'm a versatile <span className="font-semibold text-primary">Maximo Developer</span> with
                        hands-on experience in IBM Maximo 7.6 and MAS 8, specializing in integration (MIF),
                        automation scripting (Jython/JavaScript), BIRT reporting, and system customization.
                      </p>
                      <p className="mb-6">
                        Currently working with <span className="font-semibold text-ocean-600">Bahrain Airport Services</span> as
                        part of the IBM Maximo Application Suite (MAS) project support team. I focus on secure,
                        scalable, and performance-driven EAM solutions.
                      </p>
                      <p className="mb-6">
                        Always eager to learn, adapt, and collaborate on impactful solutions that blend technical
                        excellence with meaningful social impact.
                      </p>

                      <div className="pt-4">
                        <a
                          href="https://cdn.builder.io/o/assets%2Fa92c07345b2448db8df3322125c3b3e6%2Feb2b53fabc6b40e383a3ab5c4bcc7115?alt=media&token=3042406a-89d1-4b99-8820-2bca0a184c7a&apiKey=a92c07345b2448db8df3322125c3b3e6"
                          download="Aral_Resume.pdf"
                        >
                          <Button variant="outline" size="lg" className="border-2">
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Facts */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <h4 className="font-bold text-lg">Education</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold">MSc Cyber Security</span><br />Coventry University, UK (2023)</p>
                      <p><span className="font-semibold">MCA</span><br />Manipal University, India (2023)</p>
                      <p><span className="font-semibold">BCA</span><br />Mangalore University, India (2019)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-ocean-50 to-ocean-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="h-6 w-6 text-ocean-700" />
                      <h4 className="font-bold text-lg text-ocean-800">Current Role</h4>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-ocean-700">Maximo Consultant</p>
                      <p className="text-ocean-600">Praxis Solutions</p>
                      <p className="text-xs text-ocean-500 mt-1">Aug 2024 - Present</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-accent-foreground" />
                      <h4 className="font-bold text-lg">Experience</h4>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-accent-foreground">5+ Years</p>
                      <p className="text-accent-foreground/80">IBM Maximo & MAS 8</p>
                      <p className="text-xs text-accent-foreground/60 mt-1">Enterprise Solutions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
              <p className="text-lg text-muted-foreground">My career journey and key achievements</p>
            </div>

            <div className="space-y-8">
              {/* Current Position */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Maximo Consultant</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Praxis Solutions • Bahrain Airport Services
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 w-fit mt-2 lg:mt-0">
                      Aug 2024 - Present
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Supporting MAS 8 Manage platform with technical and functional enhancements</li>
                    <li>• Developed automation scripts (Jython) and custom actions for key workflows</li>
                    <li>• Designed MIF configurations for third-party integrations</li>
                    <li>• Customized BIRT reports, application screens, and domain values</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Previous Position */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-ocean-600 mb-2">Maximo Consultant</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Praxis Solutions, Kuwait • KIPIC, KNPC, KOC
                      </p>
                    </div>
                    <Badge className="bg-ocean-100 text-ocean-700 border-ocean-200 w-fit mt-2 lg:mt-0">
                      Jun 2019 - Apr 2022
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Participated in end-to-end IBM Maximo upgrade projects (7.5 to 7.6)</li>
                    <li>• Developed and maintained automation scripts, workflows, and MIF integrations</li>
                    <li>��� Delivered custom solutions for spare parts and asset tracking</li>
                    <li>• Designed and optimized SQL queries and BIRT reports</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Coastal Vibes */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-accent/5 to-sand/5">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-accent mb-2">Founder</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        Coastal Vibes India • Non-profit
                      </p>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/20 w-fit mt-2 lg:mt-0">
                      Jun 2020 - Present
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Founded digital media platform promoting India's coastal regions</li>
                    <li>• Supporting community needs and highlighting local talents</li>
                    <li>• Content creation focusing on coastal culture and tourism</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-lg text-muted-foreground">Core competencies and technical expertise</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Technical Skills */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">IBM Maximo & EAM</h4>
                    <div className="flex flex-wrap gap-2">
                      {["IBM Maximo 7.6", "MAS 8 (Manage)", "Automation Scripting", "BIRT Reporting", "MIF Integration", "Workflow Configuration"].map((skill) => (
                        <Badge key={skill} className="bg-primary/10 text-primary border-primary/20">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ocean-600 mb-3">Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Jython/JavaScript", "SQL Database", "REST APIs", "Application Designer", "System Configuration"].map((skill) => (
                        <Badge key={skill} className="bg-ocean-100 text-ocean-700 border-ocean-200">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills & Interests */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    Leadership & Creative
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Leadership</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Team Collaboration", "Project Management", "Non-profit Founding", "Community Building"].map((skill) => (
                        <Badge key={skill} className="bg-accent/10 text-accent border-accent/20">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Creative & Impact</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Content Creation", "Digital Media", "Social Impact", "Photography", "Cultural Promotion"].map((skill) => (
                        <Badge key={skill} className="bg-green-100 text-green-700 border-green-200">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground">Ready to discuss your next project or collaboration</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and innovation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-lg">araldsouza20@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <a href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input name="firstName" placeholder="First Name" required disabled={isSubmitting} />
                      <Input name="lastName" placeholder="Last Name" required disabled={isSubmitting} />
                    </div>
                    <Input name="email" type="email" placeholder="Email Address" required disabled={isSubmitting} />
                    <Input name="subject" placeholder="Subject" required disabled={isSubmitting} />
                    <Textarea name="message" placeholder="Your Message" rows={6} required disabled={isSubmitting} />

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        <CheckCircle className="h-5 w-5" />
                        <span>Thank you! Your message has been sent successfully.</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        <AlertCircle className="h-5 w-5" />
                        <span>Sorry, there was an error sending your message.</span>
                      </div>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2024 Aral Aldrin John D'Souza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
