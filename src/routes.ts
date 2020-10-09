import {Router, Request, Response} from 'express';

import { getCompanies, saveCompany, getCompany, updateCompany, removeCompany } from './controller/CompanyController'

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "Hello, World 2"});
});

routes.get('/companies', getCompanies);
routes.post('/companies', saveCompany);
routes.get('/companies/:id', getCompany);
routes.put('/companies/:id', updateCompany);
routes.delete('/companies/:id', removeCompany);

export default routes;