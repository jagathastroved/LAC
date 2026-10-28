import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isSearchOpen = signal(false);
  activeMenu = signal('Consultation');

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
    if (!this.isMobileMenuOpen()) {
      this.activeMobileDropdown.set(null); // Reset when closing
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  activeMobileDropdown = signal<string | null>(null);

  toggleMobileDropdown(menu: string, event: Event) {
    event.preventDefault();
    if (this.activeMobileDropdown() === menu) {
      this.activeMobileDropdown.set(null);
    } else {
      this.activeMobileDropdown.set(menu);
    }
  }

  toggleSearch() {
    this.isSearchOpen.update(v => !v);
  }

  setActiveMenu(menu: string) {
    this.activeMenu.set(menu);
  }
}
