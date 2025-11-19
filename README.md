### Summary
This PR completes the Backend Assessment by implementing a full authentication system, protected and public routes, and integration with an external weather API.
The backend is built using **NestJS**, **TypeORM**, **JWT**, and **OpenWeather API**.

###  Features Implemented
**1. User Authentication**

**- POST /auth/register**
 Registers a new user with hashed passwords using argon2.
**- POST /auth/login**
Validates credentials and issues access and refresh tokens.
**- POST /auth/refresh (protected via Refresh Token Guard)**
Issues new tokens using refresh token validation.
**- POST /auth/logout**
Invalidates the user’s refresh token.

**Security Measures**

- Uses argon2 hashing for passwords & refresh tokens
- Uses Access Token (15m) and Refresh Token (7 days)
- Proper error handling for invalid credentials, duplicate email, missing tokens
- Sensitive fields removed from responses (passwordHash, refreshTokenHash)


**🔐 2. Protected Routes Using JWT**

- Implemented using:
        - JwtStrategy
        - JwtRefreshStrategy
        - JwtAuthGuard
        - JwtRefreshGuard
        - CurrentUser() decorator

- ✔ GET /api/auth/me
Returns the authenticated user's data.
- ✔ POST /api/auth/refresh
Issues new access & refresh tokens using refresh token guard.
- ✔ POST /api/auth/logout
Clears stored refresh token hash, ending the session.
- ✔ GET /weather/current?city=Cebu (protected)
Fetches weather details based on request input (e.g., city)


**3. External API Integration — Weather API**


- Integrated OpenWeather API using @nestjs/axios
- Supports fetching weather data by city
- Endpoint: GET /weather/current?city=Cebu (protected)
- Provides:
      - city
      - temperature
      - humidity
      - wind speed
      - weather description
- Includes full try/catch handling for upstream API errors

**4. Input Validation**
- DTOs for login, register, refresh and User
- Global ValidationPipe used in controllers
- Weather endpoint validates presence of city query parameter

**5. Clean Code Structure**

- Clear separation of concerns:
      - auth/ → authentication logic
      - user/ → user profile retrieval
      - weather/ → external API integration
      - guards/ + decorators/ → authentication utilities
- Service-layer business logic
- Controller-layer request handling
- TypeORM repository pattern



### Preview:
### POST /auth/login
<img width="1237" height="968" alt="Image" src="https://github.com/user-attachments/assets/309cedce-3544-4347-9f70-008ce23f348a" />

### POST /auth/register
<img width="1229" height="960" alt="Image" src="https://github.com/user-attachments/assets/30a0f46f-053a-4ff2-9a8a-04da6e787f88" />

###  GET /weather/current?city=Cebu
<img width="1258" height="897" alt="image" src="https://github.com/user-attachments/assets/b1a3dffb-8b46-4f02-9fd4-9c8720a9e592" />

###  GET /user/me
<img width="1246" height="815" alt="image" src="https://github.com/user-attachments/assets/9e70e5be-868c-4ffd-ae70-259ccaf04195" />

###  GET /auth/refresh
<img width="1238" height="1017" alt="image" src="https://github.com/user-attachments/assets/7219e827-528d-4dcf-9324-db404ad5385e" />

### GET /auth/logout
<img width="1244" height="799" alt="image" src="https://github.com/user-attachments/assets/f4a287c9-7ad9-4709-ba16-6408a7262432" />




