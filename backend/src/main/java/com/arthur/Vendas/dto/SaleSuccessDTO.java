package com.arthur.Vendas.dto;

import com.arthur.Vendas.entities.Seller;

public class SaleSuccessDTO {

    private String sellerName;
    private Long visited;
    private Long deals;

    public SaleSuccessDTO(){
    }

    public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
        this.sellerName = seller.getName();
        this.visited = visited;
        this.deals = deals;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(Seller seller) {
        this.sellerName = seller.getName();
    }

    public Long getVisited() {
        return visited;
    }

    public void setVisited(Long visited) {
        this.visited = visited;
    }

    public Long getDeals() {
        return deals;
    }

    public void setDeals(Long deals) {
        this.deals = deals;
    }
}
