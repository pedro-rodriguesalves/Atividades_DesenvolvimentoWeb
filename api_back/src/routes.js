import { Router } from 'express';
import { transformacao_texto, verificador } from '../until/functions.js';


const router = Router();

router.get('/', (req, res) => {
  return res.send('Hello World!');
});

router.post('/util/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;

  const result = {
    action,
    input,
    output: transformacao_texto(input, action),
  };

  return res.json(result);
});

router.get('/util/:action', (req, res) => {
  const { action } = req.params;
  
  if(!req.query.input) {
    return res.status(400).send('400 - Parâmetro de entrada "input" é obrigatório');
  }

  const input = req.query.input.split(',');

  const result = {
    action,
    input, 
    output: verificador(input, action),

  };

  return res.json(result);
});

export default router;