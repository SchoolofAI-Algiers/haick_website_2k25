'use client'
import Image from 'next/image'
import Link from 'next/link'
import './Hero.css'
import { useEffect, useState } from 'react'

const eventDate = new Date('2025-05-01T00:00:00')

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <Image
          src="/hero-logo.png"
          alt="HAICK Logo"
          width={260}
          height={100}
          className="hero-logo"
        />

        <p className="hero-subtitle">2025 Edition Is Here!</p>

        <Link href="#register" className="join-button">
          Join Us
        </Link>

        <div className="event-info">
          <span className="event-text">
            <Image src="/vector1.png" alt="map icon" width={20} height={20} className="icon" />
            ESI Algiers
          </span>
          <span className="event-text">
            <Image src="/vector2.png" alt="date icon" width={20} height={20} className="icon" />
            May 5–6, 2025
          </span>
        </div>

        <div className="countdown">
          {Object.entries(timeLeft).map(([label, value], i) => (
            <div key={i} className="countdown-box">
              <p>{value}</p>
              <p>{label.charAt(0).toUpperCase() + label.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
