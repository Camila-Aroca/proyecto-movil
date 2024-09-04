import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, eyeOff, lockClosed } from 'ionicons/icons';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements AfterViewInit {
  showPassword = false;
  passwordToggleIcon = 'eye-off';
  private animation?: Animation;
  private isMovingForward = true; // Track the animation direction

  @ViewChild('logo', { static: false }) logo!: ElementRef;

  constructor(private animationCtrl: AnimationController) {
    addIcons({
      'eye': eye,
      'eye-off': eyeOff,
      'lock-closed': lockClosed
    });
  }

  ngAfterViewInit() {
    // Create the initial animation (optional if you want the logo to animate initially)
    this.animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1') // Fade in
      .fromTo('transform', 'translateX(-100px)', 'translateX(0px)'); // Move to original position
  }

  moveLogo(): void {
    if (!this.animation) {
      // Initialize animation
      this.animation = this.animationCtrl.create()
        .addElement(this.logo.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateX(0px)', 'translateX(100vw)') // Move to right side
        .fromTo('opacity', '1', '0'); // Fade out
    }

    // Adjust animation based on direction
    if (this.isMovingForward) {
      this.animation.play();
      this.animation.onFinish(() => {
        // Move back to the left
        this.logo.nativeElement.style.transform = 'translateX(0px)';
        this.logo.nativeElement.style.opacity = '1';
        this.isMovingForward = false; // Switch direction
      });
    } else {
      // Move back to the left
      this.animation
        .fromTo('transform', 'translateX(100vw)', 'translateX(0px)') // Move back to the left
        .fromTo('opacity', '0', '1'); // Fade in
      this.animation.play();
      this.animation.onFinish(() => {
        this.isMovingForward = true; // Switch direction
      });
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye' : 'eye-off';
  }
}
