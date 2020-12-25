import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileRepairService } from 'src/app/Services/mobile-repair.service';

@Component({
  selector: 'app-mobile-repair-devices',
  templateUrl: './mobile-repair-devices.component.html',
  styleUrls: ['./mobile-repair-devices.component.css']
})
export class MobileRepairDevicesComponent implements OnInit {

  items = [];
  BrandId = '';

  
  constructor(private _Activatedroute:ActivatedRoute, private mobileRepairService: MobileRepairService) {
    this._Activatedroute.params.subscribe(params => {
      this.BrandId = params ['BrandId'];
      console.log(params ['BrandId']);
    });
  }
  

  ngOnInit(): void {



    this.mobileRepairService.GetItemsByProductTypeIdandBrandsID1(this.BrandId).subscribe((data: any[])=>{
      console.log(data);
      this.items = data;
    })  
 

  }

}
