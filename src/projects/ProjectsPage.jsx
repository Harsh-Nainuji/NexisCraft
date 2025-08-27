import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

/*
  Projects configuration
  - To add/remove projects, edit the array below.
  - For a live project: provide `liveUrl` (button will say "Visit Live").
  - For a non-live project: omit `liveUrl` and optionally set `videoUrl` (button will say "Watch Video" and open a modal).
  - You can also add `testimonial` text (optional) to show below the description.
  - Image paths refer to files in /public (e.g., '/besocialz.png').
*/
const projects = [
  {
    id: 'design-clave',
    title: 'Design Clave — Elite UI/UX Studio',
    description:
      // Description for Design Clave (LIVE)
      'A premium UI/UX portfolio site crafted for clarity, speed, and credibility. Emphasis on typography, whitespace, and motion for a modern studio presence.',
    image: '/DesginClave.png',
    liveUrl: 'https://design-clave.vercel.app',
    testimonial:
      // Client testimonial (Design Clave)
      "To be honest I like your services and delivery time. It was very fast, reliable and quality services. I'm grateful to connect someone like you who is passionate and dedicated to their works. I can't even expect that type of output which I got. I love your services and work. I'll give you 4.5 out of 5.",
  },
  {
    id: 'besocialz',
    title: 'BeSocialz — Social Meeting App (Landing)',
    description:
      // Description for BeSocialz (LIVE)
      'A conversion-focused landing page outlining the product story, feature value, and clear calls-to-action. Built for performance and fast iteration.',
    image: '/besocialz.png',
    liveUrl: 'https://besocialz.com',
    testimonial:
      // Client testimonial (BeSocialz)
      'Harsha has been doing great. He is always available for clients, and when I mentioned we needed to upgrade our website, he worked on it very quickly with an immediate response. Whenever I needed support, he was highly adaptable and showed great respect toward client requirements. His work was excellent.',
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop — Brand Landing',
    description:
      // Description for Coffee Shop (NON-LIVE; with video)
      'Warm, inviting brand landing with a focus on product visuals and easy contact. Designed to spotlight brand story and menu highlights.',
    image: '/coffee-shop.jpeg',
    liveUrl: '', // No live URL – shows a video button instead
    testimonial: '', // No testimonial (internal project)
    videoUrl: '/coffe.mp4', // Video opens in modal
  },
  {
    id: 'job-portal',
    title: 'Job Portal — Career Platform',
    description:
      // Description for Job Portal (NON-LIVE; with video)
      'Comprehensive job search and recruitment platform with advanced filtering, application tracking, and employer dashboard functionality.',
    image: '/job-portal.jpeg',
    liveUrl: '', // No live URL – shows a video button instead
    testimonial: '', // No testimonial (internal project)
    videoUrl: '/job portal.mp4', // Video opens in modal
  },
  {
    id: 'blog-site',
    title: 'Blog Site — Content Platform',
    description:
      // Description for Blog Site (NON-LIVE; with video)
      'Modern content management system with rich text editing, category organization, and responsive design for optimal reading experience.',
    image: '/blog-site.jpeg',
    liveUrl: '', // No live URL – shows a video button instead
    testimonial: '', // No testimonial (internal project)
    videoUrl: '/blog.mp4', // Video opens in modal
  },
  {
    id: 'hospital-website',
    title: 'Hospital Website — Healthcare Platform',
    description:
      // Description for Hospital Website (NON-LIVE; with video)
      'Professional healthcare website featuring doctor profiles, appointment booking, service information, and patient resources.',
    image: '/child-hospital.jpeg',
    liveUrl: '', // No live URL – shows a video button instead
    testimonial: '', // No testimonial (internal project)
    videoUrl: '/doctor.mp4', // Video opens in modal
  },
  {
    id: 'news-website',
    title: 'News Website — Information Hub',
    description:
      // Description for News Website (NON-LIVE; with video)
      'Dynamic news platform with real-time updates, category filtering, and mobile-first design for breaking news consumption.',
    image: '/child-hospital.jpeg', // Using hospital image as placeholder since no news image
    liveUrl: '', // No live URL – shows a video button instead
    testimonial: '', // No testimonial (internal project)
    videoUrl: '/news.mp4', // Video opens in modal
  },
]

export default function ProjectsPage() {
  const [openVideo, setOpenVideo] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-screen text-white bg-black">
      {/* Global navbar (same as home) */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Page content */}
      <main className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 pt-28 sm:pb-16">
        {/* Back button */}
        <br />
        <div className="mb-6">
          <Button href="/" variant="glass" size="sm">← Back to Home</Button>
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-3xl font-bold text-center sm:text-4xl font-heading sm:mb-14"
        >
          Selected Work
        </motion.h2>

        {/* Alternating rows layout (mirrors home teaser) */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project image */}
              <div className="overflow-hidden border md:w-1/2 rounded-2xl border-white/10 bg-white/5">
                <div className="w-full aspect-video">
                  <img src={p.image} alt={p.title} className="object-cover w-full h-full" loading="lazy" />
                </div>
              </div>

              {/* Project content */}
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">{p.title}</h3>
                {p.description && (
                  <p className="mb-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{p.description}</p>
                )}
                {p.testimonial && (
                  <p className="mb-5 text-sm italic text-zinc-400">{p.testimonial}</p>
                )}
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {/* If liveUrl exists, show live link; otherwise if videoUrl exists, show video button */}
                  {p.liveUrl ? (
                    <Button href={p.liveUrl} target="_blank" rel="noopener noreferrer" variant="prism" size="md">Visit Live</Button>
                  ) : p.videoUrl ? (
                    <Button as="button" onClick={() => setOpenVideo(p.videoUrl)} variant="prism" size="md">Watch Video</Button>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Video modal (opens for non-live projects) */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden border bg-zinc-900 rounded-2xl border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video">
                <video src={openVideo} controls className="object-cover w-full h-full" />
              </div>
              <div className="flex justify-end p-3">
                <Button as="button" onClick={() => setOpenVideo(null)} variant="glass" size="sm">Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact + Footer from home (keeps brand consistency) */}
      <Contact />
      <Footer />
    </div>
  )
}


