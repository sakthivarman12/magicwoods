import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"

const SLIDES = [
  {
    id: "slide-1",
    title: "Modular Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "Wardrobes",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "Living Rooms",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-4",
    title: "Bedrooms",
    imageUrl:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-5",
    title: "Dining Sets",
    imageUrl:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-6",
    title: "Storage Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2487&auto=format&fit=crop",
  },
]

export function ServicesSlideshow() {
  return (
    <HoverSlider className="min-h-svh place-content-center p-6 md:px-12 bg-[#f8f6f1] text-[#1a3a2e]">
      <h3 className="mb-6 text-xs font-medium capitalize tracking-widest text-[#c9a961] uppercase">
        / our collections
      </h3>
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex flex-col space-y-2 md:space-y-4">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.id}
              index={index}
              className="cursor-pointer text-4xl font-bold uppercase tracking-tighter text-[#1a3a2e]"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap className="w-full max-w-sm md:max-w-md">
          {SLIDES.map((slide, index) => (
            <div key={slide.id}>
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full max-h-96 object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
  )
}
