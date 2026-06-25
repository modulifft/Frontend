"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FiMail, FiPhone, FiMapPin, FiRefreshCw } from 'react-icons/fi';

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  backgroundImageSrc?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Let's build the next factory together",
  mainMessage = "Talk to our engineering team 👋",
  contactEmail = "connect@modulifft.com",
  backgroundImageSrc = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  });

  const [captchaCode, setCaptchaCode] = React.useState('');
  const [captchaInput, setCaptchaInput] = React.useState('');

  const generateCaptcha = React.useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
  }, []);

  React.useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== captchaCode || !captchaCode) return;
    
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        projectType: [],
      });
      generateCaptcha();
    }, 4000);
  };

  const projectTypeOptions = [
    'Simulation Engine', 'Digital Twins', 'AI Optimization', 'Modular Automation',
    'Hardware Integration', 'Other'
  ];

  return (
    <section id="contact" className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center py-24 z-10">
      {/* Background Image and Animated Bubbles */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        />
        {/* Dark overlay for theme consistency */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        {/* Animated Bubbles adapted to theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-accent/20 rounded-full animate-bubble opacity-0 blur-sm"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Side: Title */}
          <div className="flex flex-col justify-center p-4 lg:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground uppercase tracking-widest font-bold w-max mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              Let's <span className="text-gradient">build</span> the next factory
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              From pilot scoping to plant-wide rollout — we partner with you end-to-end.
            </p>

            <div className="mt-12 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full glass border border-white/5 flex items-center justify-center">
                    <FiMail className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                    <a href={`mailto:${contactEmail}`} className="text-foreground font-bold hover:text-accent transition-colors break-all sm:break-normal">
                      {contactEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full glass border border-white/5 flex items-center justify-center">
                    <FiPhone className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
                    <div className="text-foreground font-bold">+1 (310) 802-7945</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full glass border border-white/5 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-accent h-5 w-5" />
                  </div>
                  <div className="w-full pt-1.5">
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Address</div>
                    <div className="text-foreground font-bold max-w-[280px]">1999 Avenue of the Stars, Los Angeles, CA 90067, USA</div>
                  </div>
                </div>
                
                {/* Google Map - Aligned full width to edge */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden glass border border-white/10 relative shadow-inner">
                  <iframe 
                    src="https://maps.google.com/maps?q=1999%20Avenue%20of%20the%20Stars,%20Los%20Angeles,%20CA%2090067&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) grayscale(0.5)" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="glass-strong glow-border p-6 md:p-10 rounded-3xl relative overflow-hidden">
            <h3 className="text-2xl font-extrabold text-foreground mb-8">{mainMessage}</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground font-semibold">Your name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Jane Doe" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="bg-white/5 border-white/10 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground font-semibold">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="jane@company.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="bg-white/5 border-white/10 focus-visible:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground font-semibold">Tell us about your challenges...</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="We are looking to orchestrate..."
                  className="min-h-[120px] bg-white/5 border-white/10 focus-visible:ring-accent resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-4 pt-2">
                <p className="text-sm font-semibold text-muted-foreground">Areas of interest</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        className="data-[state=checked]:bg-accent data-[state=checked]:border-accent border-white/20"
                      />
                      <Label 
                        htmlFor={option.replace(/\s/g, '-').toLowerCase()} 
                        className="text-sm font-medium cursor-pointer text-foreground/80 hover:text-foreground"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Label htmlFor="captcha" className="text-sm font-semibold text-muted-foreground">Verify you are human</Label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="bg-background/80 border border-white/10 rounded-lg px-4 py-2 font-mono text-xl font-bold tracking-widest text-primary select-none relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
                      <span className="relative z-10">{captchaCode}</span>
                    </div>
                    <button type="button" onClick={generateCaptcha} className="p-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg glass border border-white/5">
                      <FiRefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                  <Input 
                    id="captcha" 
                    value={captchaInput} 
                    onChange={(e) => setCaptchaInput(e.target.value)} 
                    placeholder="Enter code here" 
                    className="bg-white/5 border-white/10 focus-visible:ring-accent flex-1 py-5"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={captchaInput !== captchaCode || !captchaCode || isSubmitted}
                className="w-full py-6 text-base font-bold rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_8px_30px_-6px_rgba(239,136,173,0.6)] transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {isSubmitted ? "✓ Inquiry Sent!" : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* CSS for bubble animation */}
      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--rand-x-offset) * 10vw)) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble var(--animation-duration, 15s) ease-in-out infinite;
          animation-fill-mode: forwards;
          --rand-x-offset: 1; /* For simple inline styling fallback */
        }
        .animate-bubble:nth-child(even) {
          --rand-x-offset: -1;
        }
      `}</style>
    </section>
  );
};
