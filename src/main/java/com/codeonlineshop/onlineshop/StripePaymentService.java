package com.codeonlineshop.onlineshop;

public class StripePaymentService implements PaymentService {
    @Override
    public void processPayment(double amount){
        System.out.println("Stripe Payment Service");
        System.out.println("Amount: " + amount);
    }
}
