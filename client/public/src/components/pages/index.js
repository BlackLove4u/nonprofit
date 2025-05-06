// filepath: /workspaces/nonprofit/public/index.html
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});

// filepath: /workspaces/nonprofit/public/src/components/pages/index.js
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nonprofit API</title>
</head>
<body>
    <h1>Welcome to the Phoenix Rise Hub!</h1>
    <p>This is the homepage for the Nonprofit API.</p>
</body>
</html>
`;

module.exports = htmlContent;

// filepath: /workspaces/nonprofit/client/server/models/controllers/server.js
const htmlContent = require('../../../../public/src/components/pages/index');

// Root route
app.get('/', (req, res) => {
    res.send(htmlContent); // Send the updated HTML content
});