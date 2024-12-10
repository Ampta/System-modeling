https://www.youtube.com/watch?v=EAuM0kp-w_k


today 

Validation    	-    Processing

(RestTemplate)

Engine
	.exchange()


----------


To integrate this Engine in to functional code.



1. Do all validation rules

2. API call to processing service for CreateTxn
3. Api call2 for initiate txn


1. From validation PaymentServiceImpl, we are able to invoke HttpEngine for making api call.
2. Create HttpRequest obj with below data. Populate in PaymentServiceImpl. Pass this HttpRequest to engine class, and use this data for making exchange method call.

	String url;
	HttpMethod method;
	HttpHeaders headers;
	String requestBody;

3. Provide application data  & remove hardcoding PaymentServiceImpl


4. Response processing
	1. Success Response
		Check if response is 201, then convert the received json into equivalent java object structure.
		- Use the java object for further business logic

	2. Failure Response

		4xx failure
		5xx failure
		Any generate exception failure (service is down)

	

		HttpServerErrorException
		HttpClientErrorException

		5 types

		1xx - INformation
		3xx - Redirection

		2xx - Success
		4xx - Client
		5xx - Server



- return ResponseENtity object to the invoker, and let invoker handle the response processing logic.



The errors coming from upcoming server, should be propagated back to invoker.
	http status code
	errorCode
	errorMessage



AWS RDS
Setup Redis in AWS
AWS SecretsManager or sensitive data
	DB password


/initiate API

