const express = require('express');
const path = require('path');
const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'build')));

// Gestion des routes pour React Router
app.use((req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});