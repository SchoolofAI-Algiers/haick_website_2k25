'use client'
import Image from 'next/image'
import './Sponsor.css'

export default function Sponsor() {
  const sponsors = [
    { src: '/image1.png', alt: 'Zind' },
    { src: '/image2.png', alt: 'Zarmy' },
  ]

  return (
    <section className="sponsor-section">
      <h2 className="sponsor-title">Our Sponsors</h2>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {Array.from({ length: 10 }).map((_, index) => {
            const sponsor = sponsors[index % sponsors.length]
            return (
              <Image
                key={index}
                src={sponsor.src}
                alt={sponsor.alt}
                width={100}
                height={40}
                className="sponsor-img"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
