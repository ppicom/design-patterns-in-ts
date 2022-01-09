# Observer

This pattern decouples objects that otherwise depend on each other.

# Implementation

On this example we build two different clocks (analog and digital), that both subscribe to the same `Subject`: `ClockTimer`.
