13Dec: https://www.youtube.com/watch?v=7LxjJTuQYuc

Circuit Breaker.
	Context
	Practically.


Usecase / functional Async communication 
	Message broker

--------- Sprint2


Sprint3
	Week7 - LIVE
	Week8 - Complete Demos & Tasks.

Extend 4 months
	60% new feature / new functionality 


6Jan


27Dec - LWD of internship
	Demo - Completion Letter


	70% - 5 demos are mandatory
	50-70 - 7 demos
	< 50% - 9 demos

Only give 1 attendance per day.


Each demo of 30mins. Concept + Coding - share screen..

28-29Dec - Completion Letter 

After this.. 
Next weekend, your completion letter will be processed - 27Dec


----------------



Circuit Breaker (Reslience4j)


By nature, service1 always calls service2.
However if you know that service 2 is failing for all your request, then making call to service 2 is waste of network resource & time.
Rather, is service1 can already know that service2 is down, then instead of calling service2, service1 will return a dummy response back to invoker.


States / Status
-------------
CLOSED
	all validation API reaches processing
OPEN
HALF_OPEN



Primary:
	spring-cloud-starter-circuitbreaker-resilience4j
	spring-aop


	actuator (health monitoring)



Validation => Processing
  Enable CircuitBreaker


How CB counts failure.
	- When your method throws Exception.
	- Its counted as failure, and used for running CB logic (CLOSED, OPEN, HALF_OPEN)



Which kind of errors should be considered for CB calculation:
	1. Getting exception when you call destination.
	2. Getting 503 Service_unavailable response from desination

	- The errors where destination service was not able to respond, that should be considered.
	- The errors where you got meaningful responses from destination, that should be considered proper & processed in your system (don't throw exception from your method)



1. The method where you make external API call, there use @CircuitBreaker
2. Throw exception from this method, then its counted by @CircuitBreaker logic.
	2 cases like covered above. (Exception box + 503 check)
3. When exception thrown, then automatically fallback will be invoked.
4. In fallback, you can handle error & create proper error response to return. Or use existing ControllerAdvice related exception handling.

======


Property file configuration.
	

Add chrome extension for Json Formatter

1. processing service is down.

2. validation api call.


1. Got 503
2. CB is calculating failures ("failedCalls": 1)





Count based, count every API call we are making.
Consider the last 10api behaviour.

out of these 10, if 40% is failed, then change status from CLOSED to OPEN

minimumNumberOfCalls=5
	Once 5 is reached, then CB checks if failure is meeting the errorthreshold, if yes, then change status to CLOSED=>OPEN. If not continue to be in closed.



CLOSED => OPEN

OPEN:
	don't call processing service, rather return from fallback.


HALF_OPEN

OPEN => HALF_OPEN
automaticTransitionFromOpenToHalfOpenEnabled=true
waitDurationInOpenState=60s


----
permittedNumberOfCallsInHalfOpenState=2



Half open:
	Make Http API call attempt
	HttpServiceEngine - Making HTTP request
	Fallback
	ControllerAdvice


OPEN
	Fallback
	ControllerAdvice



Processing:
	- all status handler
	- duplication status update is blocked
		- if final status is SUCCESS / FAILED, then don't update.
	- TxnLog implementation


validation service & processing code.


1. Number of demos supposed to complete.
End of internship - code you have upload in google drive. 

Attendance
Demo
Code

less than average

Average

Above average

Very high positive.
