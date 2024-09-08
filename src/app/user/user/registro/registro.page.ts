import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, eyeOff, lockClosed } from 'ionicons/icons';
import { Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, AfterViewInit {
  showPassword = false;
  passwordToggleIcon = 'eye-off';
  private animation?: Animation;

  @ViewChild('logo', { static: false }) logo!: ElementRef;

  constructor(private animationCtrl: AnimationController, private router: Router) {
    addIcons({
      'eye': eye,
      'eye-off': eyeOff,
      'lock-closed': lockClosed
    });
  }

  ngOnInit() {
    // Initialization logic if needed
  }

  ngAfterViewInit() {
    // Prepare the animation, but do not start it yet
    if (this.logo) {
      this.animation = this.animationCtrl.create()
        .addElement(this.logo.nativeElement)
        .duration(1500)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)'); // Move to the right
    }
  }

  onLogoClick(): void {
    // Play the animation when the logo is clicked
    if (this.animation) {
      this.animation.play();
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye' : 'eye-off';
  }

  navigateToAccess(): void {
    // Navigate to the access page
    this.router.navigate(['/access']);
  }

}
