# Measuring performance between for and while loops vs rxjs range

In the next table will show the results iterating over i = 1e8 

| Loop type  | Time     |
|------------|----------|
| For Loop   | 43.029ms |
| While Loop | 43.284ms |
| Rx Range   | 241.98ms |

## Conclusions
- For loop is the most performant loop, followed by while by a minimum difference and finally rx range 5x more slow that the previous two.
- For and while loops are most performant because they only have to increment a variable "i" while range needs to deal with generation of numbers with while and handle subscriptions, that is more computationally expensive.
- For and while loops maybe can use jit compiler and loop unrolling optimizations of the engine while range can't.
- Range is slower, but it can use asynchronous subscriptions avoiding blocking the event loop 

