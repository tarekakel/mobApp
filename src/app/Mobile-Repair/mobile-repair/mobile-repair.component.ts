import { Component, OnInit } from '@angular/core';
import { MobileRepairService } from '../../Services/mobile-repair.service';

@Component({
  selector: 'app-mobile-repair',
  templateUrl: './mobile-repair.component.html',
  styleUrls: ['./mobile-repair.component.css']
})
export class MobileRepairComponent implements OnInit {

  brands = [];


  constructor(private mobileRepairService: MobileRepairService) { }

  ngOnInit(): void {


    this.mobileRepairService.GetBrandsByProductTypeID1().subscribe((data: any[])=>{
      console.log(data);
      this.brands = data;
    })  


  }

}
