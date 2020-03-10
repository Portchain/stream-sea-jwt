# stream-sea-jwt
Tool for working with stream-sea JWTs

## Usage
```
node index.js sign --jwtSecret=1234567890
node index.js sign --jwtSecret=1234567890 --payload={\"exp\":1893456000\,\"mustFanout\":true}
```