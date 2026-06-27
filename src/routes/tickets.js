import express from 'express';
import { clientValidate } from '../services/loginValidation.js';
import {createTicket,getTickets} from '../controller/ticketsController.js';

const routes = express.Router();


routes.post('/',clientValidate,createTicket)
routes.get('/',clientValidate,getTickets)
routes.get('/:id',clientValidate,getTickets)
routes.put('/:id',clientValidate)
routes.patch('/:id/status',clientValidate)
routes.patch('/:id/assign',clientValidate)
routes.post('/queue',clientValidate)

export default routes;