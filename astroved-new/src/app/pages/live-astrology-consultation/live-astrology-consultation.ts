import { Component, ViewEncapsulation, HostListener, OnInit, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TrustBannerComponent } from './components/trust-banner/trust-banner.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { AstrologersComponent } from './components/astrologers/astrologers.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-live-astrology-consultation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    NavbarComponent,
    BannerComponent,
    TrustBannerComponent,
    QuestionsComponent,

    BookingInfoComponent,
    AstrologersComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './live-astrology-consultation.html',
  styleUrl: './live-astrology-consultation.css',
})
export class LiveAstrologyConsultation implements OnInit {
  isStickyVisible = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Live Astrology Consultation - Connect with Expert Astrologers | AstroVed');
    this.meta.updateTag({ name: 'description', content: 'Get instant answers to your questions with AstroVed\'s live astrology consultation. Speak with expert astrologers online for career, love, and life guidance.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Live Astrology Consultation - Connect with Expert Astrologers | AstroVed' });
    this.meta.updateTag({ property: 'og:description', content: 'Get instant answers to your questions with AstroVed\'s live astrology consultation. Speak with expert astrologers online for career, love, and life guidance.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.astroved.com/assets/og-consultation.jpg' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Live Astrology Consultation - Connect with Expert Astrologers | AstroVed' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Get instant answers to your questions with AstroVed\'s live astrology consultation. Speak with expert astrologers online for career, love, and life guidance.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.astroved.com/assets/og-consultation.jpg' });

    // Canonical link
    this.setCanonicalURL('https://www.astroved.com/live-astrology-consultation');

    // JSON-LD Schema
    this.setStructuredData();
  }

  setCanonicalURL(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }
    this.renderer.setAttribute(link!, 'href', url);
  }

  setStructuredData() {
    let script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Live Astrology Consultation",
      "provider": {
        "@type": "Organization",
        "name": "AstroVed",
        "url": "https://www.astroved.com"
      },
      "description": "Speak with expert astrologers online for career, love, and life guidance."
    });
    this.renderer.appendChild(this.document.head, script);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isStickyVisible = offset > 500;
  }

  scrollToAstrologers() {
    const el = document.getElementById('expert-astrologers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
