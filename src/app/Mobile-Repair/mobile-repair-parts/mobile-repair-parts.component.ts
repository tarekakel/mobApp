import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileRepairService } from 'src/app/Services/mobile-repair.service';



@Component({
  selector: 'app-mobile-repair-parts',
  templateUrl: './mobile-repair-parts.component.html',
  styleUrls: ['./mobile-repair-parts.component.css']
})


export class MobileRepairPartsComponent implements OnInit {

  products = [];
  items = []  ;
  ItemId = '';
  Checkbox = [];

  constructor(private _Activatedroute:ActivatedRoute, private mobileRepairService: MobileRepairService) {
    this._Activatedroute.params.subscribe(params => {
      this.ItemId = params ['ItemId'];
      console.log(params ['ItemId']);
    });
  }
  
  ngOnInit(): void {

    this.mobileRepairService.GetProductsByProductTypeIdandItemID1(this.ItemId).subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    }) 

    this.mobileRepairService.GetItemsByItemID(this.ItemId).subscribe((data: any[])=>{
      console.log(data);
      this.items = data;
    }) 
    
  }

  confirmOrder(){
    console.log(this.Checkbox)
  }
  

}
