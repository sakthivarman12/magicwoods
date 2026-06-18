import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"

interface LayoutSlide {
  id: string
  title: string
  imageUrl: string
}

const LAYOUT_SLIDES: LayoutSlide[] = [
  { id: "studio", title: "Studio", imageUrl: "/img/pkg-forest-zen.jpg" },
  { id: "1bhk", title: "1 BHK", imageUrl: "/img/pkg-forest-zen.jpg" },
  { id: "2bhk", title: "2 BHK", imageUrl: "/img/pkg-forest-zen.jpg" },
  { id: "3bhk", title: "3 BHK", imageUrl: "/img/pkg-forest-zen-villa.jpg" },
  { id: "villa", title: "Villa", imageUrl: "/img/pkg-forest-zen-villa.jpg" },
]
// images mirror the BESTSELLER package per layout from js/script.js's `packages` data

export function LayoutSlideshow() {
  return (
    <HoverSlider className="bg-[#F1ECE4] py-20 px-6 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#C07A28]">
          / Browse by Layout
        </p>
        <h2 className="mb-12 font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight text-[#1A3828]">
          Find your <em className="italic">perfect layout</em>
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-12">
          <div className="flex flex-col gap-1.5">
            {LAYOUT_SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.id}
                index={index}
                text={slide.title}
                className="cursor-pointer text-[clamp(2rem,4.2vw,4rem)] font-normal text-[#1A3828]"
              />
            ))}
          </div>
          <HoverSliderImageWrap className="w-full max-w-[340px] aspect-[3/4] min-w-[200px] rounded-sm bg-white">
            {LAYOUT_SLIDES.map((slide, index) => (
              <HoverSliderImage
                key={slide.id}
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </HoverSliderImageWrap>
        </div>
      </div>
    </HoverSlider>
  )
}
