import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopRepairService } from 'src/app/Services/laptop-repair.service';

@Component({
  selector: 'app-laptop-repair-parts',
  templateUrl: './laptop-repair-parts.component.html',
  styleUrls: ['./laptop-repair-parts.component.css']
})
export class LaptopRepairPartsComponent implements OnInit {

  products = [];
  items = []  ;
  ItemId = '';

  constructor(private _Activatedroute:ActivatedRoute, private laptopRepairService: LaptopRepairService) {
    this._Activatedroute.params.subscribe(params => {
      this.ItemId = params ['ItemId'];
      console.log(params ['ItemId']);
    });
  }
  
  ngOnInit(): void {

    this.laptopRepairService.GetProductsByProductTypeIdandItemID2(this.ItemId).subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    }) 

    this.laptopRepairService.GetItemsByItemID(this.ItemId).subscribe((data: any[])=>{
      console.log(data);
      this.items = data;
    }) 
    

  }
  

}
