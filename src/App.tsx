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
            <div className="hidden md:flex gap-8 text-gray-300">
              {['Home', "Experience", 'Projects', "Technology"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="pt-32 pb-24 relative overflow-hidden" id='home'>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
              JOHN RUZELL RIVERA
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-300 font-light">
              Full Stack Developer | Software Developer | Web Developer
            </h2>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <MapPin size={16} />
                <span>Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail size={16} />
                <span>ruzelldev@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent -z-10" />
      </header>

      <main className="container mx-auto px-4 py-16" id='home'>
        {/* Summary Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-white">Summary</h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
            Versatile and results-driven Full Stack Developer with hands-on experience in building, deploying, and scaling modern web applications. Skilled in Python, JavaScript, PHP, and TypeScript, with a strong focus on performance, clean architecture, and user-first design. Passionate about leveraging modern frameworks and tools to create seamless user experiences and deliver real business value. Proven ability to collaborate with cross-functional teams and ship high-quality solutions in fast-paced environments.
          </p>

        </section>

        {/* Experience Section */}
        <section className="mb-24" id='experience'>
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
            ].map((job, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
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
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24 space-y-5" id='projects'>
          <h2 className="text-3xl font-bold mb-12 text-white">Personal Projects</h2>

          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <div className='mb-4'>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    My Portfolio – Built with Bolt.new + Custom Styling
                  </h3>
                  <a
                    href="https://portfolio-2025-nine-coral.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-300 underline transition-colors duration-200"
                  >
                    Visit Portfolio
                  </a>
                </div>
                <p className="text-purple-400">Showcase Project (AI-generated foundation, custom enhancements)</p>
              </div>
              <p className="text-gray-400">April 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
              <li>Created using <strong>Bolt.new</strong>, an AI-powered portfolio generator</li>
              <li>Modified layout, content, and design to suit my personal brand and project needs</li>
              <li>Optimized for clarity, responsiveness, and showcasing full-stack web apps</li>
            </ul>
            <div className="text-gray-300">
              <strong className="text-white">Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Bolt.new", "React", "TailwindCSS", "Custom HTML/CSS", "Responsive Design", "GitHub Pages" // or Vercel etc.
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/10 rounded-full text-sm border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>


          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <div className='mb-4'>
                  <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    LeadHive – Lead Management
                  </h3>
                  <p className="inline-block text-sm px-3 py-1 bg-yellow-600/20 text-yellow-300 border border-yellow-600/40 rounded-full mb-4">
                  🚧 Currently Under 
                  </p>
                  </div>
                  <a
                    href="https://lead-hive.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-300 underline transition-colors duration-200"
                  >
                    Visit Lead Hive
                  </a>
                </div>
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
          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <div className='mb-4'>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Scholarship System – Admin & Student Management
                  </h3>
                  <a
                    href="https://scholarship-system-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-300 underline transition-colors duration-200"
                  >
                    Visit Scholarship System
                  </a>
                </div>
                <p className="text-purple-400">Full Stack Project (AWS EC2 Backend • Vercel Frontend)</p>
                <div className="mt-4">
                  <p className="font-medium text-white">Credentials:</p>
                  <div className="bg-gray-100 p-4 rounded-md mt-2">
                    <p className="text-sm text-gray-700">Email: <span className="font-semibold text-blue-600">admin@example.com</span></p>
                    <p className="text-sm text-gray-700">Password: <span className="font-semibold text-red-600">defaultpassword</span></p>
                  </div>
                </div>

              </div>
              <p className="text-gray-400">December 2024</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
              <li>Developed a centralized web app for municipalities to manage scholarship applications with role-based access for admins and students</li>
              <li>Admins can add, update, and delete student records, manage admin users, and update their profiles</li>
              <li>Students can securely log in, view their application status in real time, and manage their profile info</li>
              <li>Integrated application analytics dashboard — admins can view real-time stats on applicants by status (e.g., in progress, approved, rejected)</li>
              <li>Backend built with Express.js, Prisma ORM, MySQL, and JWT-based authentication</li>
              <li>Frontend deployed on Vercel; backend on AWS EC2 with Caddy reverse proxy and subdomain management via Namecheap</li>
            </ul>
            <div className="text-gray-300">
              <strong className="text-white">Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "MySQL", "Next.js", "ShadCN", "TanStack (React Query)", "Express.js", "TypeScript",
                  "Prisma", "JWT", "TailwindCSS", "Vercel", "AWS EC2", "Caddy", "Namecheap"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/10 rounded-full text-sm border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <div className='mb-4'>
                  <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Inventory System – Role-Based Product & Team Management 
                  </h3>
                  <span className="inline-block text-sm px-3 py-1 bg-yellow-600/20 text-yellow-300 border border-yellow-600/40 rounded-full mb-4">
                  🚧 Currently Under Construction Rebuilding the Frontend
                  </span>
                  </div>
                  <a
                    href="https://inventory-client-ebon.vercel.app/" // Replace with actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-300 underline transition-colors duration-200"
                  >
                    Visit Inventory App
                  </a>
                  
                </div>
                <p className="text-purple-400">Full Stack Project (RBAC + Team & Product Management)</p>
                <div className="mt-4">
                  <p className="font-medium text-white">Credentials: Admin</p>
                  <div className="bg-gray-100 p-4 rounded-md mt-2">
                    <p className="text-sm text-gray-700">Email: <span className="font-semibold text-blue-600">ruzell@gmail.com</span></p>
                    <p className="text-sm text-gray-700">Password: <span className="font-semibold text-red-600">password</span></p>
                  </div>
                  </div>
              </div>
              <p className="text-gray-400">March 2023</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
              <li>Designed for managing inventory and team access with strict role-based permissions</li>
              <li><strong>Super Admin:</strong> Can manage admins and view only their created team members (but can't manage products)</li>
              <li><strong>Admin:</strong> Can manage products (name, price, description, image), but not team members</li>
              <li>Secure login and access control tailored to each user role using Zod + JWT</li>
              <li>Built-in image upload system for product management</li>
              <li>Fully integrated MongoDB with cursor-based pagination for handling large product listings</li>
            </ul>
            <div className="text-gray-300">
              <strong className="text-white">Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "MongoDB", "Express.js", "Next.js", "React", "Zod", "JWT", "TailwindCSS", "TypeScript", "Cursor AI", "Cloudinary"
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
        <section id='technology'>
          <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Programming Languages",
                skills: ['Python', 'JavaScript', 'PHP', 'TypeScript']
              },
              {
                title: "Frameworks & Libraries",
                skills: ['Next.js', 'Laravel', 'FastAPI', 'React', 'Express.js', 'ShadCN', 'Tailwind', 'Bootstrap', 'AntD', 'Radix']
              },
              {
                title: "Cloud & DevOps",
                skills: ['AWS EC2', 'Route 53', 'DigitalOcean', 'Nginx', 'Caddy', "NameCheap"]
              },
              {
                title: "Tools & Platforms",
                skills: ['GitHub Actions', 'Jest', 'Pytest', 'Figma', 'BDD', 'Git', 'GitHub', 'Clickup', 'Jira', 'Tanstack Query']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10">
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
            <a href="https://github.com/Ruzell11" className="hover:text-purple-400 transition-colors p-2">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/john-ruzell-rivera-1026b0247/" className="hover:text-purple-400 transition-colors p-2">
              <Linkedin size={28} />
            </a>
            <a href="mailto:ruzelldev@gmail.com" className="hover:text-purple-400 transition-colors p-2">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
