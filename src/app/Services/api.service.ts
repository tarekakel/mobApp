import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpClient: HttpClient) { }


  public GetApiURL() {
    return 'http://localhost:5432/api/';
  }

  // Trending products "Home"
  public GetProductsIsTrending() {
    return this.httpClient.get(this.GetApiURL() + 'Products/GetProductsIsTrending/true');
  }


  // "Mobile Repair" - show brands of the products available
  public GetBrandsByProductTypeID(ProductTypeID) {
    return this.httpClient.get(this.GetApiURL() + 'Products/GetBrandsByProductTypeID/' + ProductTypeID);
  }

  // "Mobile Repair" - show items of the choosed brand
  public GetItemsByProductTypeIdandBrandsID(ProductTypeID, BrandId) {
    return this.httpClient.get(this.GetApiURL() + 'Products/GetItemsByProductTypeIdandBrandsID/' + ProductTypeID + '/' + BrandId);
  }

}
