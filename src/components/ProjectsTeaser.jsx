import { motion } from 'framer-motion'
import Button from './Button'

/**
 * ProjectsTeaser Component
 * Displays a teaser of recent projects with a glass-like 3D card effect.
 * Starts seamlessly from the bottom of QuickValue's gradient.
 */
export default function ProjectsTeaser() {
  // Array of project items to display
  const items = [
    { id: 1, title: 'Design Clave — Elite UI/UX Studio', img: '/DesginClave.png' },
    { id: 2, title: 'BeSocialz — Social Meeting App (Landing)', img: '/besocialz.png' },
    { id: 3, title: 'Coffee Shop — Brand Landing', img: '/coffee-shop.jpeg' },
    { id: 4, title: 'Ai Brand Kit: Create your dream brand in seconds', img: '/Ai-Brand.png' },
  ]

  return (
    <section
      // The section starts at the color where QuickValue ends
      style={{
        background: 'linear-gradient(to bottom, #0a0014 0%, #0a0014 100%)'
      }}
      className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Animate from below with fade
          whileInView={{ opacity: 1, y: 0 }} // Fade in when in viewport
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-center sm:text-4xl font-heading sm:mb-14"
        >
          Recent Projects
        </motion.h2>

        {/* Project Cards List */}
        <div className="relative space-y-12 sm:space-y-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Card with 3D glass effect */}
              <div
                className="overflow-hidden border md:w-1/2 rounded-2xl border-white/20 bg-white/5 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-[1.03] hover:rotate-1"
                style={{
                  perspective: '1000px' // Helps 3D effect on hover
                }}
              >
                <div className="w-full aspect-video">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Project description */}
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Crafted for Better Results, More Revenue, Better Branding and More Growth.
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom fade to indicate more content below */}
          <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-b from-transparent to-[#0a0014]" />
        </div>

        {/* "View More" Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <Button href="/projects" variant="prism" size="md">
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}
