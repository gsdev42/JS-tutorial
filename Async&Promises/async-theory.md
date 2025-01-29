### Async Concept notes
---
- Javascript is(by default)
        - synchronous
        - single threaded
- Execution context
        - execute one line of code at a time
        -  - console.log()
        -  - console.log() 
        the above is call stack / memory heap

    each operation waits for the last one to complete before executing

##### blocking vs non blocking code
- blocking
        - block flow of prog(jab I/O lene jata hai process)
        - read file sync

- non blocking
        -does not block execution
        - read file async