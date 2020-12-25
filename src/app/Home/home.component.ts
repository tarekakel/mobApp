import { Component, OnInit } from '@angular/core';
import { APIService } from '../Services/api.service';
import { MobileRepairService } from '../Services/mobile-repair.service';
import { LaptopRepairService } from '../Services/laptop-repair.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];
  brands = [];
  items = [];
  ServiceValue = 0;
  BrandValue = 0;
  DeviceValue = 0;

  constructor(private APIService: APIService, private mobileRepairService: MobileRepairService, private laptopRepairService: LaptopRepairService) { }


  ngOnInit(): void {
    this.APIService.GetProductsIsTrending().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    })
  }

  getbrands() {
    this.APIService.GetBrandsByProductTypeID(this.ServiceValue).subscribe((data: any[]) => {
      this.brands = data;
      console.log(this.ServiceValue)
      console.log(data)
    });
  }

  getitems() {
    this.APIService.GetItemsByProductTypeIdandBrandsID(this.ServiceValue, this.BrandValue).subscribe((data: any[]) => {
      this.items = data;
      console.log(data)
    });
  }

  


}

