import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente a partir do arquivo .env
dotenv.config();

const app = express();

// Define a porta do servidor, usando a variável de ambiente ou um valor padrão
const port = process.env.PORT || 5000;

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());

// Middleware para habilitar o suporte a JSON no corpo das requisições
app.use(express.json());

// Rota simples para verificar o status do servidor
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Inicializa o servidor e escuta na porta definida
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});