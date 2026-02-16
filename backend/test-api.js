const axios = require('axios');

const BASE_URL = 'http://localhost:3000';
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
};

let testToken = '';

// Helper function to log test results
function logTest(name, passed, message = '') {
    const status = passed ? `${colors.green}✓ PASS${colors.reset}` : `${colors.red}✗ FAIL${colors.reset}`;
    console.log(`${status} ${colors.bold}${name}${colors.reset}`);
    if (message) console.log(`  ${colors.yellow}${message}${colors.reset}`);
}

// Helper function to log section headers
function logSection(name) {
    console.log(`\n${colors.cyan}${colors.bold}=== ${name} ===${colors.reset}\n`);
}

// Test 1: Health Check
async function testHealthCheck() {
    logSection('Health Check');
    try {
        const response = await axios.get(`${BASE_URL}/health`);
        logTest('GET /health', response.status === 200, `Status: ${response.data.status}`);
        return true;
    } catch (error) {
        logTest('GET /health', false, error.message);
        return false;
    }
}

// Test 2: API Info
async function testAPIInfo() {
    logSection('API Information');
    try {
        const response = await axios.get(`${BASE_URL}/api`);
        logTest('GET /api', response.status === 200);
        console.log(`  API Name: ${response.data.name}`);
        console.log(`  Version: ${response.data.version}`);
        return true;
    } catch (error) {
        logTest('GET /api', false, error.message);
        return false;
    }
}

// Test 3: Register User
async function testRegister() {
    logSection('User Registration');
    const testUser = {
        username: `testuser_${Date.now()}`,
        password: 'testpass123'
    };

    try {
        const response = await axios.post(`${BASE_URL}/api/auth/register`, testUser);
        testToken = response.data.token;
        logTest('POST /api/auth/register', response.status === 201, `Token received: ${testToken.substring(0, 20)}...`);
        return true;
    } catch (error) {
        logTest('POST /api/auth/register', false, error.response?.data?.error || error.message);
        return false;
    }
}

// Test 4: Register with Invalid Data
async function testRegisterInvalid() {
    try {
        await axios.post(`${BASE_URL}/api/auth/register`, {
            username: 'ab', // Too short
            password: '123'  // Too short
        });
        logTest('POST /api/auth/register (invalid)', false, 'Should have rejected short username/password');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('POST /api/auth/register (invalid)', status === 400, 'Correctly rejected invalid input');
        return true;
    }
}

// Test 5: Login User
async function testLogin() {
    logSection('User Login');
    const loginData = {
        username: 'testuser_' + Math.floor(Date.now() / 1000) * 1000,
        password: 'testpass123'
    };

    // First register
    try {
        await axios.post(`${BASE_URL}/api/auth/register`, loginData);
    } catch (error) {
        // User might already exist, that's okay
    }

    // Then login
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, loginData);
        testToken = response.data.token;
        logTest('POST /api/auth/login', response.status === 200, `Token: ${testToken.substring(0, 20)}...`);
        return true;
    } catch (error) {
        logTest('POST /api/auth/login', false, error.response?.data?.error || error.message);
        return false;
    }
}

// Test 6: Login with Invalid Credentials
async function testLoginInvalid() {
    try {
        await axios.post(`${BASE_URL}/api/auth/login`, {
            username: 'nonexistentuser123456',
            password: 'wrongpassword'
        });
        logTest('POST /api/auth/login (invalid)', false, 'Should have rejected invalid credentials');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('POST /api/auth/login (invalid)', status === 404 || status === 401, 'Correctly rejected invalid credentials');
        return true;
    }
}

// Test 7: Get User Profile (Protected)
async function testGetProfile() {
    logSection('User Profile (Protected Route)');
    try {
        const response = await axios.get(`${BASE_URL}/api/auth/profile`, {
            headers: {
                'Authorization': `Bearer ${testToken}`
            }
        });
        logTest('GET /api/auth/profile', response.status === 200, `Username: ${response.data.user.username}`);
        return true;
    } catch (error) {
        logTest('GET /api/auth/profile', false, error.response?.data?.error || error.message);
        return false;
    }
}

// Test 8: Get Profile Without Token
async function testGetProfileNoToken() {
    try {
        await axios.get(`${BASE_URL}/api/auth/profile`);
        logTest('GET /api/auth/profile (no token)', false, 'Should have rejected request without token');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('GET /api/auth/profile (no token)', status === 403, 'Correctly rejected request without token');
        return true;
    }
}

// Test 9: Get Weather Data (Protected)
async function testGetWeather() {
    logSection('Weather Data (Protected Route)');
    try {
        const response = await axios.get(`${BASE_URL}/api/weather?city=London`, {
            headers: {
                'Authorization': `Bearer ${testToken}`
            }
        });
        logTest('GET /api/weather?city=London', response.status === 200);
        console.log(`  City: ${response.data.data.city}`);
        console.log(`  Temperature: ${response.data.data.temperature.current}°C`);
        console.log(`  Weather: ${response.data.data.weather.description}`);
        return true;
    } catch (error) {
        logTest('GET /api/weather?city=London', false, error.response?.data?.error || error.message);
        return false;
    }
}

// Test 10: Get Weather Without Token
async function testGetWeatherNoToken() {
    try {
        await axios.get(`${BASE_URL}/api/weather?city=London`);
        logTest('GET /api/weather (no token)', false, 'Should have rejected request without token');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('GET /api/weather (no token)', status === 403, 'Correctly rejected request without token');
        return true;
    }
}

// Test 11: Get Weather Without City Parameter
async function testGetWeatherNoCity() {
    try {
        await axios.get(`${BASE_URL}/api/weather`, {
            headers: {
                'Authorization': `Bearer ${testToken}`
            }
        });
        logTest('GET /api/weather (no city)', false, 'Should have rejected request without city parameter');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('GET /api/weather (no city)', status === 400, 'Correctly rejected request without city parameter');
        return true;
    }
}

// Test 12: Get Weather for Invalid City
async function testGetWeatherInvalidCity() {
    try {
        await axios.get(`${BASE_URL}/api/weather?city=InvalidCityName123456`, {
            headers: {
                'Authorization': `Bearer ${testToken}`
            }
        });
        logTest('GET /api/weather (invalid city)', false, 'Should have rejected invalid city');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('GET /api/weather (invalid city)', status === 404, 'Correctly rejected invalid city');
        return true;
    }
}

// Test 13: Get Weather by Coordinates
async function testGetWeatherByCoordinates() {
    logSection('Weather by Coordinates');
    try {
        const response = await axios.get(`${BASE_URL}/api/weather/coordinates?lat=51.5074&lon=-0.1278`, {
            headers: {
                'Authorization': `Bearer ${testToken}`
            }
        });
        logTest('GET /api/weather/coordinates', response.status === 200);
        console.log(`  City: ${response.data.data.city}`);
        console.log(`  Temperature: ${response.data.data.temperature.current}°C`);
        return true;
    } catch (error) {
        logTest('GET /api/weather/coordinates', false, error.response?.data?.error || error.message);
        return false;
    }
}

// Test 14: 404 Not Found
async function testNotFound() {
    logSection('Error Handling');
    try {
        await axios.get(`${BASE_URL}/nonexistent`);
        logTest('GET /nonexistent (404)', false, 'Should have returned 404');
        return false;
    } catch (error) {
        const status = error.response?.status;
        logTest('GET /nonexistent (404)', status === 404, 'Correctly returned 404 for non-existent route');
        return true;
    }
}

// Run all tests
async function runAllTests() {
    console.log(`${colors.bold}${colors.cyan}\n╔═══════════════════════════════════════════╗`);
    console.log(`║   Backend API Testing Suite              ║`);
    console.log(`╚═══════════════════════════════════════════╝${colors.reset}\n`);

    const tests = [
        testHealthCheck,
        testAPIInfo,
        testRegister,
        testRegisterInvalid,
        testLogin,
        testLoginInvalid,
        testGetProfile,
        testGetProfileNoToken,
        testGetWeather,
        testGetWeatherNoToken,
        testGetWeatherNoCity,
        testGetWeatherInvalidCity,
        testGetWeatherByCoordinates,
        testNotFound
    ];

    let passed = 0;
    let failed = 0;

    for (const test of tests) {
        const result = await test();
        if (result) passed++;
        else failed++;
        await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between tests
    }

    // Summary
    console.log(`\n${colors.cyan}${colors.bold}=== Test Summary ===${colors.reset}\n`);
    console.log(`${colors.green}Passed: ${passed}${colors.reset}`);
    console.log(`${colors.red}Failed: ${failed}${colors.reset}`);
    console.log(`Total: ${passed + failed}\n`);

    if (failed === 0) {
        console.log(`${colors.green}${colors.bold}✓ All tests passed!${colors.reset}\n`);
    } else {
        console.log(`${colors.red}${colors.bold}✗ Some tests failed${colors.reset}\n`);
        process.exit(1);
    }
}

// Check if server is running
async function checkServer() {
    try {
        await axios.get(`${BASE_URL}/health`, { timeout: 2000 });
        return true;
    } catch (error) {
        console.log(`${colors.red}${colors.bold}Error: Server is not running at ${BASE_URL}${colors.reset}`);
        console.log(`${colors.yellow}Please start the server first with: npm run dev${colors.reset}\n`);
        return false;
    }
}

// Main execution
(async () => {
    const serverRunning = await checkServer();
    if (serverRunning) {
        await runAllTests();
    } else {
        process.exit(1);
    }
})();
