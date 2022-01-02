# Chain of responsibility

The intent of this pattern is to decouple the sender of a request from its potential receivers by giving more than one object the oportunity to handle the request.

# Implementation

In _index.ts_ we call `button.handleHelp()`. Given that the button has a topic it will handle the request, but if it did not have a topic the request would be forwarded to the dialog (its parent).
