import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

isMobileMenuOpen = false;
searchForm: FormGroup;
CartCount: null = null;

constructor(private fb: FormBuilder) {
  this.searchForm = this.fb.group({
    query: ['']
  });
}

toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}

onSearchSubmit() {
  const query = this.searchForm.value.query.trim();
  if (query) {
    console.log('Search:', query);
  }
}
}

