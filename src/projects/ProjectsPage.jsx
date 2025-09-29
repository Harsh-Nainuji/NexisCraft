// Importing React hooks and Framer Motion for animations
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Importing reusable components
import Button from '../components/Button'       // Custom button component
import Navbar from '../components/Navbar'       // Site-wide navigation bar
import Contact from '../components/Contact'     // Contact section component
import Footer from '../components/Footer'       // Footer section component

// Array of project objects to display on the page
// Each project can have an image, description, testimonial, live link, or video
const projects = [
  {
    id: 'design-clave',                         // Unique identifier
    title: 'Design Clave Elite UI/UX Studio',   // Project title
    description: 'A premium UI/UX portfolio site crafted for clarity, speed, and credibility. Emphasis on typography, whitespace, and motion for a modern studio presence.',
    image: '/DesginClave.png',                  // Path to project image
    liveUrl: 'https://design-clave.vercel.app', // Live project URL
    testimonial: "To be honest I like your services and delivery time. It was very fast, reliable and quality services. I'm grateful to connect someone like you who is passionate and dedicated to their works. I can't even expect that type of output which I got. I love your services and work. I'll give you 4.5 out of 5.", // Optional testimonial
  },
  {
    id: 'besocialz',
    title: 'BeSocialz Social Meeting App (Landing)',
    description: 'A conversion-focused landing page outlining the product story, feature value, and clear calls-to-action. Built for performance and fast iteration.',
    image: '/besocialz.png',
    liveUrl: 'https://besocialz.com',
    testimonial: 'Harsha has been doing great. He is always available for clients, and when I mentioned we needed to upgrade our website, he worked on it very quickly with an immediate response. Whenever I needed support, he was highly adaptable and showed great respect toward client requirements. His work was excellent.',
  },
  {
    id: 'Ai Brand Kit',
    title: 'Ai Brand Kit: Create your dream brand in seconds',
    description: 'Ai Brand Kit is a platform that allows you to create your dream brand in seconds. It is a platform that allows you to create your dream brand with simple prompts.',
    image:'/Ai-Brand.png',
    liveUrl: 'https://ai-brandkit.vercel.app',
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop Brand Landing',
    description: 'Warm, inviting brand landing with a focus on product visuals and easy contact. Designed to spotlight brand story and menu highlights.',
    image: '/coffee-shop.jpeg',
    liveUrl: '',
    testimonial: '',
    videoUrl: '/coffe.mp4', // Optional video demo
  },
  {
    id: 'job-portal',
    title: 'Job Portal Career Platform',
    description: 'Comprehensive job search and recruitment platform with advanced filtering, application tracking, and employer dashboard functionality.',
    image: '/job-portal.jpeg',
    liveUrl: '',
    testimonial: '',
    videoUrl: '/job portal.mp4',
  },
  {
    id: 'blog-site',
    title: 'Blog Site Content Platform',
    description: 'Modern content management system with rich text editing, category organization, and responsive design for optimal reading experience.',
    image: '/blog-site.jpeg',
    liveUrl: '',
    testimonial: '',
    videoUrl: '/blog.mp4',
  },
  {
    id: 'hospital website',
    title: 'Hospital Website Healthcare Platform',
    description: 'Professional healthcare website featuring doctor profiles, appointment booking, service information, and patient resources.',
    image: '/child-hospital.jpeg',
    liveUrl: '',
    testimonial: '',
    videoUrl: '/doctor.mp4',
  },
  {
    id: 'news-website',
    title: 'News Website Information Hub',
    description: 'Dynamic news platform with real-time updates, category filtering, and mobile-first design for breaking news consumption.',
    image: '/News.jpeg',
    liveUrl: '',
    testimonial: '',
    videoUrl: '/news.mp4',
  },
]

// Main component for the Projects Page
export default function ProjectsPage() {
  // State to control which project video is currently open
  const [openVideo, setOpenVideo] = useState(null)

  // State to toggle dark/light mode for the Navbar and page
  const [darkMode, setDarkMode] = useState(false)

  return (
    // Page container with min height to fill screen and a gradient background
    <div className="min-h-screen text-white bg-gradient-to-b from-[#2e0058] via-[#140026] to-black">
      
      {/* Global Navbar at top of page */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content section */}
      <main className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 pt-28 sm:pb-16">
        <br />
        
        {/* Back button to return to homepage */}
        <div className="mb-6">
          <Button href="/" variant="glass" size="sm" mt-5px>
            ← Back to Home
          </Button>
        </div>
        
        {/* Section heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}             // Starting position for animation
          animate={{ opacity: 1, y: 0 }}             // Ending position
          transition={{ duration: 0.5 }}             // Animation duration
          className="mb-10 text-3xl font-bold text-center sm:text-4xl font-heading sm:mb-14"
        >
          Selected Work
        </motion.h2>

        {/* List of projects */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((p, index) => (
            // Each project entry animated on scroll
            <motion.div
              key={p.id}                                 // Unique key for React
              initial={{ opacity: 0, y: 30 }}            // Initial state for animation
              whileInView={{ opacity: 1, y: 0 }}        // Animate when in viewport
              viewport={{ once: true }}                  // Animate only once
              transition={{ duration: 0.7, delay: 0.1 }}// Animation timing
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`} 
            >
              {/* Project image container */}
              <div className="overflow-hidden border md:w-1/2 rounded-2xl border-white/10 bg-white/5">
                <div className="w-full aspect-video">
                  <img
                    src={p.image}                          // Image path
                    alt={p.title}                           // Alt text for accessibility
                    className="object-cover w-full h-full"
                    loading="lazy"                          // Lazy load for performance
                  />
                </div>
              </div>

              {/* Project info section */}
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">{p.title}</h3>

                {/* Project description */}
                {p.description && (
                  <p className="mb-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{p.description}</p>
                )}

                {/* Project testimonial (optional) */}
                {p.testimonial && (
                  <p className="mb-5 text-sm italic text-zinc-400">{p.testimonial}</p>
                )}

                {/* Action buttons: Visit Live or Watch Video */}
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {p.liveUrl ? (
                    <Button href={p.liveUrl} target="_blank" rel="noopener noreferrer" variant="prism" size="md">
                      Visit Live
                    </Button>
                  ) : p.videoUrl ? (
                    <Button as="button" onClick={() => setOpenVideo(p.videoUrl)} variant="prism" size="md">
                      Watch Video
                    </Button>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal for playing project videos */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}                    // Fade in background
            animate={{ opacity: 1 }}                    // Fully visible
            exit={{ opacity: 0 }}                       // Fade out on close
            onClick={() => setOpenVideo(null)}          // Close modal on background click
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden border bg-zinc-900 rounded-2xl border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}    // Modal animation start
              animate={{ scale: 1, opacity: 1 }}       // Modal animation end
              exit={{ scale: 0.95, opacity: 0 }}       // Modal exit animation
              onClick={(e) => e.stopPropagation()}     // Prevent closing when clicking inside modal
            >
              <div className="w-full aspect-video">
                <video src={openVideo} controls className="object-cover w-full h-full" />
              </div>
              <div className="flex justify-end p-3">
                <Button as="button" onClick={() => setOpenVideo(null)} variant="glass" size="sm">
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact and Footer sections */}
      <Contact />
      <Footer />
    </div>
  )
}
