# stream-sea-jwt
Tool for working with stream-sea JWTs

## Usage
```
# Sign default payload with JWT secret
node index.js sign --jwtSecret=1234567890
# Sign custom payload with JWT secret
node index.js sign --jwtSecret=1234567890 --payload={\"exp\":1893456000\,\"mustFanout\":true}

# Generate key pair into private.pem and public.pem
node index.js generate
# Generate key pair into foo-private.pem and foo-public.pem
node index.js generate -o foo-
# Sign default payload with private key
node index.js sign "--jwtSecret=$(cat private.pem)"
```