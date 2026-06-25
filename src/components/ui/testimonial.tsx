import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
  role?: string
}

export interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-[400px] sm:h-[500px] w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative w-full max-w-[560px] h-[360px] sm:h-[400px]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-[2.5rem] cursor-grab active:cursor-grabbing",
                  "glass-strong glow-border p-8 sm:p-12 flex flex-col items-center gap-6 text-center"
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 16 : 32,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 16 : 32,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-6 flex justify-between px-8 z-10">
                    <span 
                      className="text-3xl select-none cursor-pointer text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    >
                      &larr;
                    </span>
                    <span 
                      className="text-3xl select-none cursor-pointer text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                    >
                      &rarr;
                    </span>
                  </div>
                )}

                <div className="flex-1 flex flex-col items-center justify-center gap-6 mt-4">
                  <p className="text-lg sm:text-2xl md:text-[22px] leading-relaxed font-sub">
                    "{testimonial.description}"
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/10 shadow-sm bg-gradient-to-br from-primary to-accent"
                    />
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {testimonial.name}
                      </h3>
                      {testimonial.role && (
                        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2.5">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-white/20",
                  )}
                  onClick={() => setCurrentIndex(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel }
