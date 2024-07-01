const mongoose = require('mongoose');

const uri = 'mongodb+srv://totalzero:Julia202019@cluster0.qnkdh8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    process.exit(0); // Saia do processo Node.js com sucesso
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Saia do processo Node.js com erro
  });
