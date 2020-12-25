import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../../Services/accessories.service';

@Component({
  selector: 'app-accessories-listview',
  templateUrl: './accessories-listview.component.html',
  styleUrls: ['./accessories-listview.component.css']
})
export class AccessoriesListviewComponent implements OnInit {

  brands = [];
  items = [];
  products = [];

  constructor(private accessoriesService: AccessoriesService) { }

  
  ngOnInit(): void {

    // show all brands of accessories
    this.accessoriesService.GetBrandsByProductTypeID4().subscribe((data: any[])=>{
      console.log(data);
      this.brands = data;
    })  

    // show all items of accessories
    this.accessoriesService.GetItemsByProductTypeId4().subscribe((data: any[])=>{
      console.log(data);
      this.items = data;
    })  

    // show all products of accessories
    this.accessoriesService.GetProductsByProductTypeId4().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  

  }

}