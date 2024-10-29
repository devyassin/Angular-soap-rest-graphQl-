import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/interface/Product';
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = { code: 0, name: '', price: 0 };
  expression:number = 0;
  result:number = 0;
  productId: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productId = this.getProductIdFromRoute();
    if (this.productId) {
      this.isEditMode = true;
      this.loadProduct(this.productId); 
    }
  }

  addProduct() {
    this.productsService.addProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Product added:', response);
        this.newProduct = { code: 0, name: '', price: 0 };
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  calculateSellingPrice(price: number) {
    this.productsService.calculateSellingPrice(price).subscribe(
      (sellingPrice) => {
        console.log('Selling Price:', sellingPrice);
        this.result=sellingPrice;
      },
      (error) => {
        console.error('Error calculating selling price:', error);
      }
    );
  }

  updateProduct() {
    const code :number | null =this.productId;
    this.productsService.updateProduct(code, this.newProduct).subscribe(
      () => {
        this.newProduct = { code: 0, name: '', price: 0 }; 
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }

  loadProduct(code : number) {
    this.productsService.getAllProducts().subscribe(
      (data : Product[]) => {
        const foundProduct = data.find(product => product.code === code);
        if (foundProduct) {
          this.newProduct = foundProduct;  
        } else {
          console.error(`Product with code ${code} not found.`);
         
        }
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
  getProductIdFromRoute(): number | null {
    const id = this.route.snapshot.paramMap.get('id');
    return id ? +id : null;
  }
}
