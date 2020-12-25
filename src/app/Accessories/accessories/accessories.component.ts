import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../../Services/accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {


  brands = [];
  items = [];
  products = [];

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void {

    // show all brands of accessories
    this.accessoriesService.GetBrandsByProductTypeID4().subscribe((data: any[]) => {
      console.log(data);
      this.brands = data;
    })

    // show all items of accessories
    this.accessoriesService.GetItemsByProductTypeId4().subscribe((data: any[]) => {
      console.log(data);
      this.items = data;
    })

    // show all products of accessories
    this.accessoriesService.GetProductsByProductTypeId4().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    })

  }

  sortByLowPrice() {
    this.products.sort((a,b) => a.priceKr - b.priceKr);
  }

  sortByHighPrice() {
    this.products.sort((a,b) => b.priceKr - a.priceKr);
  }

}
