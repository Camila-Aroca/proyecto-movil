import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, eyeOff, lockClosed } from 'ionicons/icons';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit, AfterViewInit {
  showPassword = false;
  passwordToggleIcon = 'eye-off';
  private animation?: Animation;

  @ViewChild('logo', { static: false }) logo!: ElementRef;

  constructor(private animationCtrl: AnimationController) {
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
    // Create the animation and assign it to the class property
    this.animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1') // Fade in
      .fromTo('transform', 'translateX(-100px)', 'translateX(0px)') // Move to original position
      //.play(); // Automatically play the animation when initialized
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye' : 'eye-off';
  }
}
