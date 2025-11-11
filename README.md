🛒 Online Shop – Spring Boot Project

A complete Spring Boot project built from scratch using Java 25 and Maven, showcasing a modular architecture with controllers, services, and multiple payment provider integrations. The project demonstrates modern software design principles such as SOLID, Dependency Injection, and Strategy Pattern implementation.

🚀 Key Accomplishments
1️⃣ Project Setup & Configuration

Created a Spring Boot 3.5.7 application using Maven as the build automation tool

Configured application.properties and established a clean package structure:

com.codeonlineshop.onlineshop


Integrated Spring Boot DevTools for hot-reload during development

Set up static web resources and HTML templates for serving front-end content

2️⃣ MVC Pattern Implementation

Built HomeController using Spring MVC annotations (@Controller, @RequestMapping)

Implemented property injection using @Value to load values from application.properties

Configured routing to serve static HTML pages through Spring’s MVC mechanism

3️⃣ SOLID Principles & Interface-Based Design

Created two independent payment services:

StripePaymentService for Stripe integration

PaypalPaymentService for PayPal integration

Extracted a common PaymentService interface using IntelliJ’s Extract Interface refactoring tool

Refactored OrderService to use constructor-based dependency injection (@Service)

Leveraged Spring IoC Container (ApplicationContext) for bean management

Achieved loose coupling by programming to interfaces, not implementations

4️⃣ Spring Framework Integration

Annotated services with @Service for automatic bean detection and registration

Utilized Spring’s Dependency Injection to manage object creation and wiring

Demonstrated Spring’s automatic injection resolution for selecting appropriate payment implementations

5️⃣ Benefits Achieved

✅ Flexibility – Swap or add payment providers (Stripe, PayPal, etc.) without modifying business logic
✅ Testability – Each service can be tested independently using mock implementations
✅ Maintainability – Follows the Dependency Inversion Principle (high-level modules depend on abstractions)
✅ Scalability – Add new payment methods easily by implementing PaymentService

🧩 Tech Stack

Java 25

Spring Boot 3.5.7

Spring MVC

Spring IoC Container

Maven

IntelliJ IDEA

🧠 Design Patterns Used

Dependency Injection (Constructor Injection)

Interface-Based Programming

Strategy Pattern (for dynamic payment service selection)

MVC (Model–View–Controller)

📂 Project Structure Example
com.codeonlineshop.onlineshop
│
├── controller
│   └── HomeController.java
│
├── service
│   ├── PaymentService.java
│   ├── StripePaymentService.java
│   ├── PaypalPaymentService.java
│   └── OrderService.java
│
└── resources
    ├── static/
    ├── templates/
    └── application.properties

💡 Summary

This project demonstrates a clean, modular Spring Boot application emphasizing SOLID design, scalability, and maintainability through interface-based architecture and Spring’s dependency injection.
