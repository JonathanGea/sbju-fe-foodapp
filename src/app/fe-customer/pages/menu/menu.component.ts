import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductCustService } from '../../shared/services/product-cust.service';
import { ProductCust as Product } from '../../shared/models/product-cust.model';
import { CategoryCustService } from '../../shared/services/category-cust.service';
import { CategoryCust as Category } from '../../shared/models/category-cust';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [``],
})
export class MenuComponent implements OnInit {
  constructor(
    private readonly productService: ProductCustService,
    private readonly categoryService: CategoryCustService,
    private readonly elementRef: ElementRef
  ) {}

  @ViewChildren('categoryContainer') categoryContainers!: QueryList<ElementRef>;

  products!: Product[];
  categories!: Category[];

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  activeCategoryId: string | null = null;

  scrollToCategory(categoryId: string) {
    setTimeout(() => {
      const element = this.categoryContainers.find(
        (container) => container.nativeElement.id === categoryId
      );
      if (element) {
        element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }


  // ----------------------------------------  crud to service
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Error fetching table:', error);
      },
      complete: () => {
        console.log('Observable completed');
      },
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (category) => {
        this.categories = category;
      },
      error: (error) => {
        console.error('Error fetching table:', error);
      },
      complete: () => {
        console.log('Observable completed');
      },
    });
  }
}
