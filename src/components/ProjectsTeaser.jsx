import { motion } from 'framer-motion'
import Button from './Button'

export default function ProjectsTeaser() {
  // Show first 4 projects in teaser (Design Clave, BeSocialz, Coffee Shop, Job Portal)
  const items = [
    { id: 1, title: 'Design Clave — Elite UI/UX Studio', img: '/DesginClave.png' },
    { id: 2, title: 'BeSocialz — Social Meeting App (Landing)', img: '/besocialz.png' },
    { id: 3, title: 'Coffee Shop — Brand Landing', img: '/coffee-shop.jpeg' },
    
  ]

  return (
    <section className="relative px-4 py-16 bg-black sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-center sm:text-4xl font-heading sm:mb-14"
        >
          Recent Projects
        </motion.h2>

        <div className="relative space-y-12 sm:space-y-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="overflow-hidden border md:w-1/2 rounded-2xl border-white/10 bg-white/5">
                <div className="w-full aspect-video">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full" loading="lazy" />
                </div>
              </div>
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Crafted for clarity and conversions. Clean UX, fast performance, and brand-consistent design.
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom fade indicating more */}
          <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-b from-transparent to-black" />
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <Button href="/projects" variant="prism" size="md">View More</Button>
        </div>
      </div>
    </section>
  )
}


