# Simple express demo

> Express: fast, unopinionated, minimalist web framework for Node.js

This project shows a simple express server serving a single HTML page and using `express.static` to serve static files.

Check out the [express documentation](https://expressjs.com/) for more information.


DIAGRAM

LIVE NOTES

Payment Status Handling.

Status:
CREATED. INITIATED. PENDING. SUCCESS. FAILED.


Start coding, 
APIs of processing service
Payment Status Handling


RestController, 
Pojo
API 

POST /v1/payments
createPayment(Pojo)
	convert DTO
	invoke service with DTO
	DAO insert record in DB with Created status.
	



transaction

=====
Code a little, test a little

1. Write your controller + with 1 createPayment endpoint
	Logging

2. 

Request JSON
{
    "userId": "101",
    "paymentMethodId": 1,
    "providerId": 1,
    "paymentTypeId": 1,
    "amount": 150.75,
    "currency": "USD",
    "txnStatusId": 1,
    "merchantTransactionReference": "MERCHANT12345",
    "txnReference": "TXN67890"
}


Change userId to varchar
`userId` varchar(50) NOT NULL,


"txnReference" - which service should generate this.
	validation or processing

How to generate unique value for this "txnReference"
	//TODO


Our Java object structure, might have more fields, but in request, have only that which you need for processing.


.pojo (incoming request)
Transaction

.dto
TransactionDTO


For above scenario we have a practical situation where incoming pojo structure should be different than TransactionDTO



-> Create TransactionDTO, use ModelMapper to map pojo to DTO.


-> Service
-> Dao


PaymentStatusService
PaymentStatusServiceImpl


PaymentService
PaymentServiceImpl




to work with DB, Entity classes.


.entity
TransactionEntity

dto => entity



TODO
Code ExceptionHandling in processing service aswell.



TransactionStatusHandler
	processStatus

	CreateStatusHandler
		
	InitiatedStatusHandler

	PendingStatusHandler
	
	SuccessStatusHandler
	
	FailedStatusHandler

Factory Design Pattern
	TransactionStatusHandler method(input)



PSSImpl


TransactionStatusHandler
CreateStatusHandler implements TransactionStatusHandler

Get access to object of CreateStatusHandler & call processMethod

Factory


TransactionStatusFactory	
