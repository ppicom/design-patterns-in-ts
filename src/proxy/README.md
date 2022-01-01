# Proxy

The intent behind the [Proxy]() pattern is:

1. A remote proxy provides a local representation for an object that resides in a different address space.
2. A virtual proxy creates expensive objects on demand instead that on instantiation.
3. A protection proxy enforces access control on the object behind it.

# Implementation

This examples tries to illustrate how a `TextDocument` might use an `ImageProxy` to load the images it contains using a proxy, instead of loading them all at once when opening the document.
