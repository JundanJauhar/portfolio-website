"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";
import { useRef, type PointerEvent, type ReactNode } from "react";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  action: string;
  platform: "github" | "linkedin" | "instagram" | "whatsapp" | "email";
  className: string;
  Icon: IconType;
}

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

const contacts: ContactItem[] = [
  { label: "GITHUB", value: "JundanJauhar", href: "https://github.com/JundanJauhar", action: "VIEW PROFILE", platform: "github", className: "social-card--github", Icon: FaGithub },
  { label: "LINKEDIN", value: "Jundan Jauhar", href: "https://www.linkedin.com/in/jundan-jauhar-04a666259/", action: "CONNECT", platform: "linkedin", className: "social-card--linkedin", Icon: FaLinkedin },
  { label: "INSTAGRAM", value: "jundan_jhr", href: "https://www.instagram.com/jundan_jhr/", action: "FOLLOW", platform: "instagram", className: "social-card--instagram", Icon: FaInstagram },
  { label: "WHATSAPP", value: "081215510614", href: "https://wa.me/6281215510614", action: "CHAT", platform: "whatsapp", className: "social-card--whatsapp", Icon: FaWhatsapp },
  { label: "EMAIL", value: "jundan87@gmail.com", href: "mailto:jundan87@gmail.com", action: "SEND EMAIL", platform: "email", className: "social-card--email", Icon: MdEmail },
];

function Magnetic({ children, className, strength = 12 }: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.35 });

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * strength);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} className={className} style={{ x: springX, y: springY }} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}

function SocialCard({ contact, index }: { contact: ContactItem; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <Magnetic className={`social-card-wrap ${contact.className}`} strength={6}>
      <motion.a
        className="social-card"
        href={contact.href}
        target={contact.href.startsWith("http") ? "_blank" : undefined}
        rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
        whileHover={reduceMotion ? undefined : { y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <span className="social-card__top"><span className="social-card__icon" aria-hidden="true"><contact.Icon /></span><small>0{index + 1} / SOCIAL</small></span>
        <span className="social-card__label">{contact.label}</span>
        <strong>{contact.value}</strong>
        <span className="social-card__action">{contact.action} <b>↗</b></span>
      </motion.a>
    </Magnetic>
  );
}

export default function ContactSection() {
  return (
    <section className="connect-section editorial-shell" id="contact">
      <div className="closing-grid" />
      <div className="closing-glow closing-glow--one" />
      <div className="connect-inner">
        <span className="section-label reveal"><span>03</span> CONNECT</span>
        <div className="connect-heading-row">
          <h2 className="reveal">Let&apos;s<br /><em>connect.</em></h2>
          <p className="connect-lede reveal">Find me across the web, explore my work, or just say hello.</p>
        </div>
        <div className="social-grid">
          {contacts.map((contact, index) => <SocialCard contact={contact} index={index} key={contact.platform} />)}
        </div>
      </div>
    </section>
  );
}
