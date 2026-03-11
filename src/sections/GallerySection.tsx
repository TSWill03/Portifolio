import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import type { GalleryData } from '@/types/portfolio'

interface GallerySectionProps {
  data: GalleryData
}

export function GallerySection({ data }: GallerySectionProps) {
  return (
    <Section id="gallery">
      <SectionHeader
        description={data.description}
        eyebrow={data.eyebrow}
        title={data.title}
      />

      <div className="gallery-layout">
        <div className="gallery-grid">
          {data.images.map((image, index) => (
            <Reveal
              className={[
                'glass-card gallery-card',
                index === 0 ? 'gallery-card--featured' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              delay={index * 90}
              key={image.title}
            >
              <img alt={image.alt} loading="lazy" src={image.src} />
              <div className="gallery-card__body">
                <Badge tone="secondary">{image.tag}</Badge>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="video-list">
          {data.videos.map((video, index) => (
            <Reveal className="glass-card video-card" delay={120 + index * 90} key={video.title}>
              <div className="video-embed">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  src={video.embedUrl}
                  title={video.title}
                />
              </div>
              <div className="video-card__body">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
