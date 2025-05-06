const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const path = require('path'); // Add this line

const app = express();  
const PORT = process.env.PORT || 5000;  

app.use(cors());  
app.use(express.json());  

// Connect to MongoDB  
mongoose.connect('mongodb://localhost:27017/nonprofit', { useNewUrlParser: true, useUnifiedTopology: true });  

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../../../../public')));

// Root route
app.get('/', (req, res) => {
    res.send(htmlContent); // Send the updated HTML content
});

// Sample route  
app.get('/api/blog', (req, res) => {  
    res.json([{ title: 'First Blog Post', content: 'This is the content of the first blog post.' }]);  
});  

app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});