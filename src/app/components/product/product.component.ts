import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/interface/Product';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, TableComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { code: 0, name: '', price: 0 };
  productColumns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
  ];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.productsService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduct(code: number) {
    this.productsService.deleteProduct(code).subscribe(
      (response) => {
        console.log('Product deleted:', response);
        this.loadProducts(); // Reload products after deletion
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  goToProductFormPage(): void {
    this.router.navigate(['/product/form']);
  }

  goToEditProductFormPage(code: number): void {
    this.router.navigate([`/product/form/${code}`]);
  }
  
}
