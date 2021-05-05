package com.arthur.Vendas.dto;

import com.arthur.Vendas.entities.Seller;

import java.io.Serializable;

public class SaleSumDTO implements Serializable {

    private String sellerName;
    private double sum;

    public SaleSumDTO(){
    }


    public SaleSumDTO(Seller seller, double sum) {
        this.sellerName = seller.getName();
        this.sum = sum;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public double getSum() {
        return sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }
}
