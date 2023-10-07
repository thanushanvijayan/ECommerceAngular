import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default redirect
  { path: 'home', component: HomepageComponent },
  { path: 'products', component: ProductListingComponent },
  { path: 'product/:id', component: ProductDetailComponent }, // Dynamic route for product details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
