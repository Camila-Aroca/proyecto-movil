import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, eyeOff, infinite, lockClosed } from 'ionicons/icons';
import { Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit, AfterViewInit {

    user = {
      username: '',
      password: '',
    };

    mensaje = '';

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

  validar() {
    if (!this.user.username || !this.user.password) {
      this.mensaje = 'Por favor ingrese email y contraseña'; // Display message if both fields are empty
    } else if (!this.user.username) {
      this.mensaje = 'Por favor ingrese un nombre de usuario'; // Display message if username is empty
    } else if (!this.user.password) {
      this.mensaje = 'Por favor ingrese una contraseña'; // Display message if password is empty
    } else {
      this.mensaje = 'Conexión exitosa';
      let navigationExtras: NavigationExtras = {
        state: {
          username: this.user.username,
          password: this.user.password,
        },
      };
      this.navigateToPerfil(navigationExtras);
    }
  }
  

 navigateToPerfil(navigationExtras: NavigationExtras): void {
    // Navigate to perfil page with navigation extras
    this.router.navigate(['/perfil'], navigationExtras);
  } 

  ngOnInit() {
    // Initialization logic if needed
  }

  ngAfterViewInit() {
    // Prepare the animation, but do not start it yet
    this.animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1500)
      //.iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)'); // Move to the right
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

  /*navigateToPerfil(): void {
    // Navigate to perfil page
    this.router.navigate(['/perfil']);
  }*/

  navigateToRegistro(): void {
    this.router.navigate(['/registro']);
  }
}
