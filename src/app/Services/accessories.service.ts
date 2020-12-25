import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../Services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor(private httpClient: HttpClient, private apiService: APIService) { }

  // "Accessories" - show brands of the products available
  public GetBrandsByProductTypeID4(){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetBrandsByProductTypeID/4');
  }

  // "Accessories" - show items of accessories
  public GetItemsByProductTypeId4(){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetItemsByProductTypeId/4/');
  }

  // "Accessories" - show products of accessories
  public GetProductsByProductTypeId4(){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetProductsByProductTypeId/4/');
  }

  // "Accessories" - show product of accessories
  public GetProductByProductId(ProductId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetProductByProductId/' + ProductId);
  }
  

}