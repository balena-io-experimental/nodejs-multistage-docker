## An Example of Docker's Multi Stage Build using Node.js and Raspberry Pi.

This example uses a "fat" Alpine base image to build all our node.js modules, some of which require additional build tools and make the image pretty big (`434 MB`). We then use [Docker's Multi-stage build feature](https://docs.docker.com/engine/userguide/eng-image/multistage-build/) to copy those built node_modules into a much smaller runtime container which has only the bare essentials that our application needs at runtime.

Our resulting runtime container ends up being just `83.7 MB` (~ 5 times smaller and only about 40MB when compressed and downloaded to the device.) 