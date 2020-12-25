import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopRepairService } from 'src/app/Services/laptop-repair.service';

@Component({
  selector: 'app-laptop-repair-devices',
  templateUrl: './laptop-repair-devices.component.html',
  styleUrls: ['./laptop-repair-devices.component.css']
})
export class LaptopRepairDevicesComponent implements OnInit {

  items = [];
  BrandId = '';

  
  constructor(private _Activatedroute:ActivatedRoute, private laptopRepairService: LaptopRepairService) {
    this._Activatedroute.params.subscribe(params => {
      this.BrandId = params ['BrandId'];
      console.log(params ['BrandId']);
    });
  }
  

  ngOnInit(): void {



    this.laptopRepairService.GetItemsByProductTypeIdandBrandsID2(this.BrandId).subscribe((data: any[])=>{
      console.log(data);
      this.items = data;
    })  
 

  }

}

