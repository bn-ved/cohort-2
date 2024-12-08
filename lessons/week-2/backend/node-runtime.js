/* What is ECMAScript
 *
 * ECMAScript is a scripting language specification standardized by Ecma International in the ECMA-262 and ISO/IEC 16262 documents.
 * It serves as the guideline or the 'rules' for the scripting language design.
 * */

/* What is Javascript ?
 *
 * Javascript is a scripting language that conforms to the ECMAScript specification.
 * It's the most widely known and used implementation of ECMAScript.
 *
 * Javascript includes additional features taht are not part of the ECMAScript specification, like the Document Object Model (DOM)
 * manipulation, which is crucial part for the web development but is not part of the ECMAScript.
 * */

/* Javascript Runtimes
 *
 * V8 - Used by google chrome/chromium - C
 * SpiderMonkey - Used by firefox - C & Rust
 * */

/* What is a Node Js Runtime ?
 *
 * Some smart people took out the V8 engine and added some backend thing (filesystem reads) on top to create a new runtime to compete with the
 * backend languages like java. Js was never meant to be run in the backend but eventually became very popular.
 * */

/* What is HTTP Server ?
 *
 * HTTP - Hyper Text Transfer Protocol
 *
 * A protocol that is defined for machines to communicate, specifically for websites. It is the most common way for your website's frontend to talk to its backend.
 * */

/* Things client need to worry about
 *
 * -> Protocol (HTTP/HTTPS)
 * -> Address (URL/IP/PORT)
 * -> Route
 * -> Headers, Body, Query Params
 * -> Methods (GET, POST, PUT, DELETE)
 */

/* Things client need to worry about
 *
 * -> Response Headers
 * -> Response Body
 * -> Status Code
 */

/* Sequence of events happens after clicking the search button in google
 * -> Browser will parse the URL
 * -> Does a DNS lookup (converts google.com to an IP)
 * -> Establishes a connection to the IP (does the handshake...)
 * -> You get the inputs (route, body, headers)
 * -> You do some logic on the input, calculate the output
 * -> You return the output body, headers and status code
 */

/* Common Status codes
 * -> 200 - Everything is Okay
 * -> 404 - Page/Route not found
 * -> 403 - Authentication issues
 * -> 500 - Internal Server error
 * */

/* Exercise Create a backend using C or C++
 * */
