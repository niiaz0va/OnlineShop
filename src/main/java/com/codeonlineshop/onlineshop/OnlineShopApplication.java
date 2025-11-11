package com.codeonlineshop.onlineshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OnlineShopApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OnlineShopApplication.class, args);
        var orderservice = context.getBean(OrderService.class);
        orderservice.placeOrder();
    }

}
