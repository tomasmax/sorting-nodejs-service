# Sorting service
## Solution

A service which accepts an input JSON on HTTP, sorts the arrays under the specified keys and returns the sorted payload JSON

I simulated a REST api versioned under /items resource.

 **REST API endpoints:**

 ```
 POST /api/v1/items/sort HTTP/1.1
 Accept: application/json
 Content-Type: application/json
 {
   "sortKeys": ["fruits", "numbers"],
   "payload": {
      "fruits": ["watermelon", "apple", "pineapple"],
      "numbers": [1333, 4, 2431, 7],
      "colors": ["green", "blue", "yellow"]
    }
 }
 ```

**To run it locally:**
  - Install dependencies `npm install`
  - Run without watching `npm run start`
  - Run for dev (watches for any files changes) `npm run start:dev`

**To run tests**
  - After dependencies are installed
  - Run test `npm run test`
  - Run test watching for changes `npm run test:watch`
