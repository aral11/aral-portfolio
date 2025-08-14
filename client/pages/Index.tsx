import { Button } from "@/components/ui/button";
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

    // Extract form data
    const templateParams = {
      from_name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to_email: "araldsouza20@gmail.com",
    };

    try {
      // Using EmailJS public API endpoint
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
      // Fallback to mailto if EmailJS fails
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
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="font-bold text-2xl bg-gradient-to-r from-primary via-ocean-600 to-accent bg-clip-text text-transparent">
              Aral D'Souza
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group py-2"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></div>
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group py-2"
              >
                Experience
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></div>
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group py-2"
              >
                Skills
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></div>
              </a>
              <a
                href="#contact"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-muted-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-6'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="flex flex-col space-y-4 pt-4 border-t border-border/40">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-ocean-50/30 to-sand-50/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.05)_50%,transparent_75%)] animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ocean-200/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="space-y-8 lg:space-y-10 text-center lg:text-left">

              {/* Title */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-medium text-lg tracking-wide uppercase">Portfolio</p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="text-foreground">Aral Aldrin</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-ocean-600 to-accent bg-clip-text text-transparent">
                      John D'Souza
                    </span>
                  </h1>
                </div>

                {/* Role Tags */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    { text: "Maximo Developer", color: "bg-primary/10 text-primary border-primary/20" },
                    { text: "Technical Consultant", color: "bg-ocean-100 text-ocean-700 border-ocean-200" },
                    { text: "Digital Creator", color: "bg-accent/10 text-accent border-accent/20" },
                    { text: "Founder", color: "bg-green-100 text-green-700 border-green-200" },
                    { text: "Philanthropist", color: "bg-red-100 text-red-700 border-red-200" }
                  ].map((role, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${role.color} transition-transform hover:scale-105`}
                    >
                      {role.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6 max-w-3xl">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Skilled Maximo Consultant with over <span className="font-semibold text-primary">5 years</span> of
                  focused experience in IBM Maximo and MAS 8 implementations, support, and customizations.
                  Proven expertise in automation scripting, data migration, and BIRT reporting across
                  multiple industry sectors.
                </p>

                <div className="bg-background/50 backdrop-blur border border-border/50 rounded-2xl p-6 space-y-4">
                  <p className="font-semibold text-foreground">Connect with me:</p>
                  <div className="space-y-3 text-sm">
                    <a
                      href="https://www.instagram.com/cheerboyaral?igsh=aDQwa2VmbzY1dDBw&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <Instagram className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium">@cheerboyaral</span>
                      <span className="text-muted-foreground">•</span>
                      <span>Personal</span>
                    </a>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href="https://www.instagram.com/coastalvibes.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <Instagram className="h-4 w-4 text-ocean-600" />
                        <span className="text-ocean-600 font-medium">@coastalvibes.in</span>
                        <span className="text-muted-foreground">•</span>
                        <span>Founder</span>
                      </a>
                      <a
                        href="https://www.instagram.com/upliftwitharal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <Instagram className="h-4 w-4 text-sand-600" />
                        <span className="text-sand-600 font-medium">@upliftwitharal</span>
                        <span className="text-muted-foreground">•</span>
                        <span>Motivation</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-3">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#about">
                  <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 transition-all duration-300 text-base px-8 py-3">
                    Learn More
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {[
                  {
                    href: "https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a",
                    icon: Linkedin,
                    color: "hover:text-blue-600 hover:bg-blue-50"
                  },
                  {
                    href: "https://www.instagram.com/cheerboyaral?igsh=aDQwa2VmbzY1dDBw&utm_source=qr",
                    icon: Instagram,
                    color: "hover:text-pink-600 hover:bg-pink-50"
                  },
                  {
                    href: "https://www.instagram.com/coastalvibes.in",
                    icon: Instagram,
                    color: "hover:text-ocean-600 hover:bg-ocean-50"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-background/80 border border-border hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md ${social.color}`}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa92c07345b2448db8df3322125c3b3e6%2Fa8c817ab415e457099238678478bbeaf?format=webp&width=800"
                    alt="Aral Aldrin John D'Souza"
                    className="w-full h-full object-cover scale-150 hover:scale-155 transition-transform duration-700"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About My Profession Section */}
      <section
        id="about"
        className="py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Building2 className="h-4 w-4" />
                Professional Background
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                About My Profession
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated to delivering innovative Maximo solutions and creating meaningful digital impact
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Journey</h3>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        I'm a versatile <span className="font-semibold text-primary">Maximo Developer</span> with
                        hands-on experience in IBM Maximo 7.6 and MAS 8, specializing in integration (MIF),
                        automation scripting (Jython/JavaScript), BIRT reporting, and system customization.
                        My journey spans across <span className="font-medium">Kuwait and Bahrain</span>,
                        contributing to enterprise-level Maximo projects.
                      </p>
                      <p className="text-lg">
                        Currently working with <span className="font-semibold text-ocean-600">Bahrain Airport Services</span> as
                        part of the IBM Maximo Application Suite (MAS) project support team. I focus on secure,
                        scalable, and performance-driven EAM solutions, aligning technology with business needs
                        while following best practices in system design and cybersecurity.
                      </p>
                      <p className="text-lg">
                        I'm also the founder of <span className="font-semibold text-accent">Coastal Vibes India</span>,
                        a non-profit digital media platform promoting India's coastal regions. Always eager to learn,
                        adapt, and collaborate on impactful solutions.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/50">
                      <a
                        href="https://cdn.builder.io/o/assets%2Fa92c07345b2448db8df3322125c3b3e6%2Feb2b53fabc6b40e383a3ab5c4bcc7115?alt=media&token=3042406a-89d1-4b99-8820-2bca0a184c7a&apiKey=a92c07345b2448db8df3322125c3b3e6"
                        download="Aral_Resume.pdf"
                      >
                        <Button
                          size="lg"
                          className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-3"
                        >
                          <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                          Download Resume
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Highlight Cards */}
              <div className="space-y-6">
                <Card className="group border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground">Education</h4>
                        <p className="text-sm text-muted-foreground">Academic Background</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-primary">MSc in Cyber Security</p>
                        <p className="text-sm text-muted-foreground">Coventry University, UK</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">MCA</p>
                        <p className="text-sm text-muted-foreground">Manipal University, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-0 shadow-lg bg-gradient-to-br from-ocean-50 to-ocean-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-ocean-200 group-hover:bg-ocean-300 transition-colors">
                        <Building2 className="h-6 w-6 text-ocean-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground">Current Role</h4>
                        <p className="text-sm text-muted-foreground">Professional Position</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-ocean-700">Maximo Consultant</p>
                      <p className="text-sm text-muted-foreground">Praxis Solutions</p>
                      <p className="text-xs text-ocean-600 mt-2">Bahrain Airport Services</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-accent/30 group-hover:bg-accent/40 transition-colors">
                        <Trophy className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground">Expertise</h4>
                        <p className="text-sm text-muted-foreground">Core Specialization</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-accent-foreground">IBM Maximo 7.6 & MAS 8</p>
                      <p className="text-sm text-muted-foreground">Enterprise Asset Management</p>
                      <p className="text-xs text-accent-foreground/80 mt-2">5+ Years Experience</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-ocean-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Trophy className="h-4 w-4" />
                Core Competencies
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive expertise across technical development and creative innovation
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Technical Skills */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-ocean-50/30 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl text-foreground">Technical Expertise</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Core development, automation, and enterprise solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">

                    {/* Maximo Skills */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        IBM Maximo & EAM
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "IBM Maximo 7.6",
                          "MAS 8 (Manage)",
                          "Automation Scripting",
                          "Workflow Configuration",
                          "BIRT Reporting",
                          "MIF Integration"
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-200 hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Development Skills */}
                    <div>
                      <h4 className="font-semibold text-ocean-600 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-ocean-600 rounded-full"></div>
                        Development & Integration
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Jython/JavaScript",
                          "SQL Database",
                          "REST APIs",
                          "Application Designer",
                          "UI Customization",
                          "System Configuration"
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-ocean-100 text-ocean-700 border-ocean-200 hover:bg-ocean-150 transition-all duration-200 hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Methodologies */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        Methodologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Agile Development",
                          "DevOps Practices",
                          "Git Version Control",
                          "Performance Tuning",
                          "Testing & QA",
                          "Documentation"
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-green-100 text-green-700 border-green-200 hover:bg-green-150 transition-all duration-200 hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Creative & Leadership Skills */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <Instagram className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-lg">Creative Skills</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Content Creation",
                        "Digital Media",
                        "Photography",
                        "Video Production",
                        "Social Strategy"
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-sand-100 to-sand-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-sand-300">
                        <GraduationCap className="h-5 w-5 text-sand-700" />
                      </div>
                      <CardTitle className="text-lg text-sand-800">Leadership</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Team Collaboration",
                        "Project Management",
                        "Non-profit Founding",
                        "Community Building",
                        "Mentoring"
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-sand-300 text-sand-800 border-sand-400 hover:bg-sand-400 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-red-100 to-red-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-red-300">
                        <Trophy className="h-5 w-5 text-red-700" />
                      </div>
                      <CardTitle className="text-lg text-red-800">Impact</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Social Impact",
                        "Coastal Tourism",
                        "Digital Advocacy",
                        "Cultural Promotion"
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-red-300 text-red-800 border-red-400 hover:bg-red-400 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-32 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Experience
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block rounded-full"></div>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-r from-background to-primary/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        Maximo Consultant
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5" />
                        Praxis Solutions • Bahrain Airport Services
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 border-primary/30 text-primary px-4 py-2 text-base font-medium"
                    >
                      <Calendar className="h-4 w-4" />
                      Oct 2024 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>
                      • Supporting MAS 8 Manage platform for Bahrain Airport Services
                      with technical and functional enhancements
                    </li>
                    <li>
                      • Developed and deployed automation scripts (Jython) and custom
                      actions for key workflows
                    </li>
                    <li>
                      • Designed MIF configurations for third-party integrations and
                      real-time data sync
                    </li>
                    <li>
                      • Customized BIRT reports, application screens, and domain values
                    </li>
                    <li>
                      • Provided ongoing production support, monitoring, and troubleshooting
                    </li>
                    <li>
                      • Implemented secure coding practices and conducted unit-level testing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-r from-background to-accent/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-accent mb-2">
                        Career Break - Master's Pursuit
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <GraduationCap className="h-5 w-5" />
                        Coventry University, UK
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 border-accent/30 text-accent px-4 py-2 text-base font-medium"
                    >
                      <Calendar className="h-4 w-4" />
                      Jun 2022 - Aug 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>
                      • Pursued Master's in Cybersecurity focusing on
                      encryption, ethical hacking, secure development
                    </li>
                    <li>
                      • Worked as assistant manager at Subway and front house at
                      Stonegate Group
                    </li>
                    <li>
                      • Gained adaptability and problem-solving skills in
                      diverse industries
                    </li>
                    <li>
                      • Maintained Coastal Vibes India operations during
                      academic pursuits
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-r from-background to-primary/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        Maximo Consultant
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5" />
                        Praxis Solutions, Kuwait • KIPIC, KNPC, KOC
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 border-primary/30 text-primary px-4 py-2 text-base font-medium"
                    >
                      <Calendar className="h-4 w-4" />
                      Jun 2019 - Apr 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>
                      • Participated in two end-to-end IBM Maximo upgrade projects
                      (7.5 to 7.6) for KNPC
                    </li>
                    <li>
                      • Developed and maintained automation scripts, workflows,
                      and MIF integrations
                    </li>
                    <li>
                      • Delivered custom solutions for spare parts interchangeability,
                      contractor management, and asset tracking
                    </li>
                    <li>
                      • Designed and optimized SQL queries and BIRT reports
                    </li>
                    <li>
                      • Assisted in technical-functional mapping and user support
                      across all Maximo modules
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative lg:ml-28 group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-r from-background to-accent/5">
                <div className="absolute -left-[7.5rem] top-12 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-xl hidden lg:block"></div>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-accent mb-2">
                        Founder
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building2 className="h-5 w-5" />
                        Coastal Vibes India • Non-profit
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 border-accent/30 text-accent px-4 py-2 text-base font-medium"
                    >
                      <Calendar className="h-4 w-4" />
                      Jun 2020 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>
                      • Founded non-profit digital media platform promoting
                      coastal region of India
                    </li>
                    <li>
                      • Supporting community needs and highlighting local
                      talents and initiatives
                    </li>

                    <li>
                      • Content creation focusing on coastal culture, tourism,
                      and community development
                    </li>
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
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Coastal Vibes India
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full"></div>
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A non-profit digital media platform that promotes the coastal
              region of India, supports community needs, and highlights local
              talents and initiatives. Celebrating the essence of coastal
              culture and tourism.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://www.instagram.com/coastalvibes.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <Instagram className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Visit @coastalvibes.in
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="mt-6">
              <a
                href="https://linktr.ee/coastalvibes.in?utm_source=linktree_profile_share&ltsid=9e9b7243-eccd-4c32-8194-b11dcc20e1c7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 text-lg px-8 py-4"
                >
                  <ArrowRight className="mr-3 h-6 w-6" />
                  View All Links
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Awards & Honors
              </h2>
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
                  <CardDescription className="text-lg">
                    Max Life Insurance • October 2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Recognized for outstanding contributions during the COVID-19
                    pandemic and community service efforts.
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
                  <CardDescription className="text-lg">
                    Udupi Sanchalana Karnataka • October 2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Honored for significant contributions to social work and
                    community development initiatives.
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
                  <CardDescription className="text-lg">
                    St Theresa Church Kemmannu • August 2019
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Recognition for exceptional talent and contributions to the
                    community.
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
                  <CardDescription className="text-lg">
                    Mangalore University • BCA Final Year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Awarded for scoring 80% in Final Year Bachelor of Computer
                    Applications (BCA).
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
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Education & Certifications
              </h2>
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
                    <h4 className="font-semibold text-xl text-primary">
                      MSc in Cyber Security
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Coventry University, UK
                    </p>
                    <p className="text-muted-foreground">2023</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/10">
                    <h4 className="font-semibold text-xl text-primary">
                      MCA
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Manipal University, India (Correspondence)
                    </p>
                    <p className="text-muted-foreground">2023</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/10">
                    <h4 className="font-semibold text-xl text-primary">
                      BCA
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Mangalore University, India
                    </p>
                    <p className="text-muted-foreground">2019</p>
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
                    <h4 className="font-semibold text-lg text-accent">
                      Sales Intermediate Certification in IBM Maximo
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">
                      3 Months Training in Maximo MAS
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">
                      Microservices & Deployment using ASP.NET
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">
                      Student Representative – Coventry University, UK
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">
                      ASP.NET MVC – Developing Web Applications
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-accent/10">
                    <h4 className="font-semibold text-lg text-accent">
                      JavaScript – Intro to Programming
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Let's Connect
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm always open to discussing new opportunities, interesting
                    projects, or just having a chat about technology and
                    entrepreneurship.
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
                    <a
                      href="https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-lg"
                    >
                      LinkedIn Profile
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-accent/10 hover:border-accent/20 transition-colors">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <a
                      href="https://www.instagram.com/cheerboyaral?igsh=aDQwa2VmbzY1dDBw&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-lg"
                    >
                      @cheerboyaral
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-ocean-200 hover:border-ocean-300 transition-colors">
                    <div className="p-3 rounded-full bg-ocean-100">
                      <Instagram className="h-6 w-6 text-ocean-600" />
                    </div>
                    <a
                      href="https://www.instagram.com/coastalconnect.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean-600 hover:underline text-lg"
                    >
                      @coastalconnect.in
                    </a>
                  </div>
                </div>
              </div>

              <Card className="border-2 hover:border-primary/20 transition-all duration-300 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-lg">
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="firstName"
                        placeholder="First Name"
                        required
                        className="h-12 text-base"
                        disabled={isSubmitting}
                      />
                      <Input
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className="h-12 text-base"
                        disabled={isSubmitting}
                      />
                    </div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="h-12 text-base"
                      disabled={isSubmitting}
                    />
                    <Input
                      name="subject"
                      placeholder="Subject"
                      required
                      className="h-12 text-base"
                      disabled={isSubmitting}
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="text-base"
                      disabled={isSubmitting}
                    />

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        <CheckCircle className="h-5 w-5" />
                        <span>
                          Thank you! Your message has been sent successfully.
                          I'll get back to you soon!
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        <AlertCircle className="h-5 w-5" />
                        <span>
                          Sorry, there was an error sending your message. Your
                          email client should open as a fallback.
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      <footer className="py-16 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              © 2024 Aral Aldrin John Dsouza. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
