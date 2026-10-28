import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-astrologers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './astrologers.component.html',
  styleUrl: './astrologers.component.css'
})
export class AstrologersComponent {
  astrologers = [
    {
      name: 'VijayaPrabu',
      image: '/assets/fav-icon/image copy 3.png',
      rating: '4.9 (450+ reviews)',
      experience: '9 Years Exp.',
      skills: ['Vedic Astrology', 'Nadi Astrology', 'Medical Astrology', 'Degree system'],
      languages: 'Tamil, English, Hindi',
      price: '$45 / 30 min',
      status: 'active',
      profileBio: `Vijayaprabu is from Chennai and has completed his MA in Astrology. Although he had started his career in the Engineering field, his interest in Astrology made him discover a new skill in himself. From then on, there was no turning back for him.\n\nHe is doing research on various aspects of Astrology and is proficient in different streams of astrology like Vedic Astrology, Nadi Astrology, Medical Astrology, and Degree system of astrology.\n\nHe is an expert in offering solutions to problems related to love, relationships, health, finances, childbirth, marriage, horoscope matching, education, career, etc. His solutions have helped many to resolve financial issues and get relief for acute health problems. He is fluent in Tamil, English, and Hindi. He has nine years of experience in this field.`
    },
    {
      name: 'Janardhanan',
      image: '/assets/fav-icon/image copy 2.png',
      rating: '5.0 (820+ reviews)',
      experience: '12 Years Exp.',
      skills: ['Vedic Astrology', 'KP Horary', 'Numerology', 'Vastu', 'Gemology', 'Astro-numerology'],
      languages: 'Tamil, English, Telugu, Malayalam, Kannada',
      price: '$55 / 30 min',
      status: 'active',
      profileBio: `He is an ardent lover of astrology since the age of 15. He took an astrology course at a reputed institution, where he got the title of “Jothida Rathna”. He learned the intricate nuances of KP Astrology, Astro-numerology, and Numerology from his primary mentor, Shri Siva Sankaran, a distinguished professor at Annamalai University. Currently, he is studying karma’s effects on life under the tutelage of Guru Thanikachalam.\n\nHe also has a Bachelor’s degree in Administration and over 16 years of experience in marketing, with 13 years dedicated to corporate marketing strategies, apart from 12 years of hands-on experience in astrology. He combines his intuitive abilities with deep astrological wisdom to guide individuals through life’s challenges. His strong intuition has proven invaluable in offering accurate guidance to those in distress.\n\nHe has specialized in Vedic Astrology, KP Horary, and Numerology, Vastu, Gemology, and Astro-numerology. He claims to be a trusted confidant for those facing relationship issues, marital discord, and personal struggles. He helps people understand the root cause of their problems and provides practical, and effective solutions.\n\nHe also offers detailed insights into one’s favorable deity, activating personal fortunes, and prescribing powerful Vedic remedies for attracting wealth and prosperity. He is a devotee of Lord Dharmasastha and is currently exploring psychic reading.\n\nHis ambition is to make astrology accessible to everyone, especially within corporate environments, to help professionals find balance and purpose. He also guides students to choose career paths aligned with their innate potential, empowering them to build bright, fulfilling futures.`
    },
    {
      name: 'Bala Murugan',
      image: '/assets/fav-icon/image copy.png',
      rating: '4.8 (310+ reviews)',
      experience: '5 Years Exp.',
      skills: ['Vedic Astrology', 'Prasana Method', 'KP Astrology', 'Tarot Reading'],
      languages: 'Tamil, English',
      price: '$35 / 30 min',
      status: 'busy',
      profileBio: `He is from Srivilliputhur, Tamil Nadu, and speaks English and Tamil. He is an engineering graduate and has 5 years of experience in astrology.\n\nHe believes that planets influence both living and non-living things based on their own format of karma. He is an expert in Vedic astrology, the Prasana method, KP Astrology, and tarot reading.\n\nHe has helped to resolve the problems they faced in various aspects of their lives. He claims that his predictions work in real time with high accuracy. He can also suggest appropriate remedies to get rid of problems.`
    },
    {
      name: 'Senthil Nathan',
      image: '/assets/fav-icon/image.png',
      rating: '4.9 (500+ reviews)',
      experience: '9 Years Exp.',
      skills: ['Vedic Astrology', 'BNN', 'Tarot Card Reading', 'Samhitha', 'Prasnam', 'Tajika', 'Western Astrology', 'Vastu', 'Muhurtha'],
      languages: 'Tamil, English',
      price: '$40 / 30 min',
      status: 'active',
      profileBio: `Senthil Nathan has completed his MCA, M. Phil, MA (Astrology) and Advanced Diploma in Astrology. He has an overall experience of 8 years as an Astrologer.\n\nAs his great grandfather was a renowned astrologer, he had an inbuilt passion and curiosity towards learning Vedic Astrology and chose to pursue the same as his full-time profession. He started learning the ancient science in 2005. His love for seeking knowledge in astrology made him connect with knowledgeable masters, from whom he learnt the nuances of Vedic Astrology.\n\nHis strength lies in Vedic Astrology, Bhrigu Nandi Nadi Astrology, Stellar Astrology (KP and KB), Ashtamangala Prasna Astrology and Tarot Card Reading. He also has good experience in several astrology methods such as Ashtakavarga, Samhita, Prasnam, Tajika, Western Astrology, Vastu, Muhurta and Shadbala.\n\nHe has been practicing Betel Leaf Predictions and Tarot Card Reading since 2014. He is also serving as a Guest Lecturer in Astrology at Annamalai University and has the privilege of training many students in astrology. He has participated in many popular television shows and astrology-based debate shows, which served as a means to prove his skills in astrology. Senthil Nathan is proficient in Tamil and English, and is a resident of Chennai, India.`
    }
  ];

  selectedAstrologer: any = null;
  selectedAstrologerForBooking: any = null;
  activeDate: string = 'Tue, Jul 28';
  selectedTimeSlot: string | null = null;
  bookingDates = ['Mon, Jul 27', 'Tue, Jul 28', 'Wed, Jul 29'];
  bookingStep: number = 1;
  selectedDuration: number = 30;
  astroDurations: { [name: string]: number } = {};

  timeSlots30 = {
    morning: ['11:00 AM', '11:30 AM'],
    afternoon: ['12:00 PM', '12:30 PM', '04:00 PM', '04:30 PM'],
    evening: ['05:00 PM', '05:30 PM']
  };

  timeSlots60 = {
    morning: ['11:00 AM'],
    afternoon: ['12:00 PM', '04:00 PM'],
    evening: ['05:00 PM']
  };

  get availableTimeSlots() {
    return this.selectedDuration === 60 ? this.timeSlots60 : this.timeSlots30;
  }

  selectAstroDuration(astro: any, mins: number) {
    this.astroDurations[astro.name] = mins;
    this.openBooking(astro);
  }

  openBooking(astro: any) {
    this.selectedAstrologerForBooking = astro;
    this.bookingStep = 1;
    this.selectedDuration = this.astroDurations[astro.name] || 30;
    
    // Auto-highlight first available time slot
    const slots = this.availableTimeSlots;
    if (slots.morning.length > 0) this.selectedTimeSlot = slots.morning[0];
    else if (slots.afternoon.length > 0) this.selectedTimeSlot = slots.afternoon[0];
    else if (slots.evening.length > 0) this.selectedTimeSlot = slots.evening[0];
    else this.selectedTimeSlot = null;

    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  closeBooking() {
    this.selectedAstrologerForBooking = null;
    this.bookingStep = 1;
    if (!this.selectedAstrologer) {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    }
  }

  nextBookingStep() {
    if (this.bookingStep < 3) {
      this.bookingStep++;
    }
  }

  prevBookingStep() {
    if (this.bookingStep > 1) {
      this.bookingStep--;
    }
  }

  setDuration(mins: number) {
    this.selectedDuration = mins;
  }

  getPriceForDuration(): string {
    if (!this.selectedAstrologerForBooking) return '';
    // Assuming price string is "$45 / 30 min", extract the number
    const basePriceMatch = this.selectedAstrologerForBooking.price.match(/\$(\d+)/);
    const basePrice = basePriceMatch ? parseInt(basePriceMatch[1], 10) : 45;
    
    if (this.selectedDuration === 60) {
      return `$${basePrice * 2}`;
    }
    return `$${basePrice}`;
  }

  selectDate(date: string) {
    this.activeDate = date;
    this.selectedTimeSlot = null; // reset time on date change
  }

  selectTimeSlot(time: string) {
    this.selectedTimeSlot = time;
  }

  openProfile(astro: any) {
    this.selectedAstrologer = astro;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  closeProfile() {
    this.selectedAstrologer = null;
    if (!this.selectedAstrologerForBooking) {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    }
  }

  formatList(items: string | string[]): string {
    return Array.isArray(items) ? items.join(', ') : items;
  }

  getNextAvailableSlotForCard(astroName: string): string {
    const duration = this.astroDurations[astroName] || 30;
    const slots = duration === 60 ? this.timeSlots60 : this.timeSlots30;
    if (slots.morning.length > 0) return slots.morning[0];
    if (slots.afternoon.length > 0) return slots.afternoon[0];
    if (slots.evening.length > 0) return slots.evening[0];
    return '';
  }
}
