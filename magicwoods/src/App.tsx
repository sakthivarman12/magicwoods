import { LayoutSlideshow } from "@/components/blocks/layout-slideshow"

export default function App() {
  return (
    <div>
      {/* ── Existing Magic Woods sections (Header, Hero, Apartments, Catalog, Footer)
           are currently in index.html as inline Babel JSX.
           Migrate each section here as TypeScript components as needed. ── */}

      {/* ── Browse by Layout slideshow — Studio / 1BHK / 2BHK / 3BHK / Villa ── */}
      <LayoutSlideshow />
    </div>
  )
}
