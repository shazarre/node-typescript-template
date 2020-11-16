import { Request, Response } from 'express';

export const getHealthCheckHandler = (_: Request, response: Response) => {
    response.send({ status: 'OK' });
};
