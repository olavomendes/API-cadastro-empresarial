import { getRepository } from 'typeorm';
import { Company } from '../entity/Company';
import { Request, Response } from 'express';
import { request } from 'http';

export const getCompanies = async (request: Request, response: Response) => {
    
    const companies = await getRepository(Company).find();
    return response.json(companies);
};

export const saveCompany = async (request: Request, response: Response) => {
    
    const company = await getRepository(Company).save(request.body);
    return response.json(company);
};

export const getCompany =  async (request: Request, response: Response) => {
    
    const { id } = request.params;
    const company = await getRepository(Company).findOne(id);
    return response.json(company)
};

export const updateCompany = async (request: Request, response: Response) => {
    
    const { id } = request.params;
    const company = await getRepository(Company).update(id, request.body);
    
    if (company.affected == 1) {
        const companyUpdated = await getRepository(Company).findOne(id)
            return response.json(companyUpdated)
    }

    return response.status(404).json({message: "Company not found"});
};

export const removeCompany = async (request: Request, response: Response) => {

    const { id } = request.params;

    const company = await getRepository(Company).delete(id);

    if (company.affected == 1) {
        const companyRemoved = await getRepository(Company).findOne(id);
        return response.json({message: "Company removed"});
    }

    return response.status(404).json({message: "Company not found"});
}
