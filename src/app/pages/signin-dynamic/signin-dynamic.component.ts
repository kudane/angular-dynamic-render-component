import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { SigninFbComponent, SigninGoogleComponent } from 'src/app/components';

type SigninDynamicComponent = (typeof SigninFbComponent | typeof SigninGoogleComponent);

@Component({
  selector: 'app-signin-dynamic',
  templateUrl: './signin-dynamic.component.html',
  styleUrls: ['./signin-dynamic.component.scss']
})
export class SignDynamicComponent {
  currentComponent: SigninDynamicComponent = SigninFbComponent;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(p => {
      if (p.get("by") == 'fb') {
        this.currentComponent = SigninFbComponent
      }
      else if (p.get("by") == 'google') {
        this.currentComponent = SigninGoogleComponent
      }
    });
  }
}
