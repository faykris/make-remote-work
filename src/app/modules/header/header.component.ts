import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isRightMenu = false;
  public isFeatures = false;
  public isCompany = false;

  enableDisableRightMenu() {
    this.isRightMenu = !this.isRightMenu;
  }

  enableDisableFeatures() {
    this.isFeatures = !this.isFeatures;
  }

  enableDisableCompany() {
    this.isCompany = !this.isCompany;
  }

}
