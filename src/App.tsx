import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowDownIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B1F] via-[#1A1A3A] to-[#2D1B3D]">
      {/* Header/Navigation */}
      <nav className="fixed w-full top-0 bg-black/20 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-white font-bold text-xl">Portfolio</span>
            <div className="flex gap-8 text-gray-300">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
              JOHN RUZELL RIVERA
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 font-light">
              Full Stack Developer | Software Developer | Web Developer
            </h2>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <MapPin size={16} />
                <span>Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone size={16} />
                <span>0927-507-9629</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail size={16} />
                <span>johnruzell123@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent -z-10" />
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Summary Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-white">Summary</h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
            Results-driven Full Stack Developer with expertise in Python, JavaScript, PHP, and TypeScript.
            Experienced in building, maintaining, and optimizing scalable web and software applications.
            Proficient in utilizing modern frameworks, tools, and technologies to enhance user experience
            and drive business growth. Adept at collaborating with cross-functional teams to deliver high-quality solutions.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
          
          <div className="space-y-8 relative">
            {[
              {
                company: "Piano Software",
                role: "Front-End Developer",
                period: "September 2023 – December 2024",
                type: "Remote",
                points: [
                  "Implemented and managed multiple client templates, including paywalls, banners, and modals",
                  "Collaborated closely with project managers and clients to meet specific design and functionality requests"
                ]
              },
              {
                company: "MVI Ventures",
                role: "Full Stack Developer",
                period: "July 2023 – August 2024",
                type: "Remote",
                points: [
                  "Built and managed a B2B application that enables small businesses to schedule and book riders for product delivery"
                ]
              },
              {
                company: "Matchmo",
                role: "Full Stack Developer",
                period: "September 2022 - August 2023",
                type: "Hybrid",
                points: [
                  "Developed and maintained an in-house application to streamline and automate the client loan application process"
                ]
              }
            ].map((job, index, array) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                      <p className="text-purple-400">{job.role}</p>
                    </div>
                    <p className="text-gray-400">{job.period}</p>
                  </div>
                  <p className="text-gray-400 mb-4">{job.type}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                {index < array.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 text-purple-400/50">
                    <ArrowDownIcon size={24} className="animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-white">Personal Projects</h2>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">LeadHive – Lead Management</h3>
                <p className="text-purple-400">Full Stack Project (Deployed on AWS EC2)</p>
              </div>
              <p className="text-gray-400">April 2025 – Present</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
              <li>Designed and implemented a fully functional lead management web app from scratch with real-world CI/CD practices</li>
              <li>Integrated GitHub Actions for CI/CD pipelines — enabling zero-downtime deploys via EC2 and SSH</li>
              <li>Managed reverse proxy routing via Caddy, with automatic HTTPS via AWS Certificate Manager</li>
              <li>Configured DNS and subdomain routing using AWS Route 53</li>
              <li>Integrated deployment notifications into Discord's #deployments channel via Webhooks</li>
              <li>Implemented JWT authentication for secure user logins and API access</li>
            </ul>
            <div className="text-gray-300">
              <strong className="text-white">Stack:</strong> 
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "PostgreSQL", "Next.js", "ShadCN", "React Query", "Express.js", "TypeScript", 
                  "EC2", "GitHub Actions", "Caddy", "AWS Route 53", "Namecheap", "Discord Webhooks", "JWT"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/10 rounded-full text-sm border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Programming Languages",
                skills: ['Python', 'JavaScript', 'PHP', 'TypeScript'],
                color: "purple"
              },
              {
                title: "Frameworks & Libraries",
                skills: ['Next.js', 'Laravel', 'FastAPI', 'React', 'Express.js', 'ShadCN', 'Tailwind', 'Bootstrap'],
                color: "pink"
              },
              {
                title: "Cloud & DevOps",
                skills: ['AWS EC2', 'AWS S3', 'Route 53', 'CloudWatch', 'DigitalOcean', 'Nginx', 'Caddy'],
                color: "blue"
              },
              {
                title: "Tools & Platforms",
                skills: ['GitHub Actions', 'Jest', 'Pytest', 'Figma', 'BDD', 'Git', 'GitHub', 'Clickup', 'Jira'],
                color: "red"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
                <h3 className="font-semibold mb-6 text-white text-xl">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-purple-500/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm text-gray-400 py-12 mt-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="hover:text-purple-400 transition-colors p-2">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors p-2">
              <Linkedin size={28} />
            </a>
            <a href="mailto:johnruzell123@gmail.com" className="hover:text-purple-400 transition-colors p-2">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;