import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, eyeOff, lockClosed } from 'ionicons/icons';
import { Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit, AfterViewInit {
  private animation?: Animation; // Declare the 'animation' property
  showPassword = false; // Properly initialize showPassword
  passwordToggleIcon = 'eye-off'; // Initialize with a default value
  username = '';

  @ViewChild('logo', { static: false }) logo!: ElementRef;

  constructor(private animationCtrl: AnimationController, private router: Router) {
    addIcons({
      'eye': eye,
      'eye-off': eyeOff,
      'lock-closed': lockClosed
    });
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      username: string;
      password: string;
    };

    if (state) {
      this.username = state.username;
    }
  }

  ngAfterViewInit() {
    // Prepare the animation, but do not start it yet
    this.animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1500)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)'); // Move to the right
  }

  onLogoClick(): void {
    // Play the animation when the logo is clicked
    if (this.animation) {
      this.animation.play();
    }
  }

  togglePassword(): void {
    // Toggle the visibility of the password
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye' : 'eye-off';
  }

  navigateToAccess(): void {
    // Navigate to access page
    this.router.navigate(['/access']);
  }

  navigateToRegistro(): void {
    // Navigate to registro page
    this.router.navigate(['/registro']);
  }
}
