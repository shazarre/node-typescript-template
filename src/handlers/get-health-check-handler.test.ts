import { Request, Response } from 'express';
import { getHealthCheckHandler } from 'handlers/get-health-check-handler';

describe('getHealthCheckHandler', () => {
    it('returns OK status', () => {
        const responseMock = {
            send: jest.fn()
        };

        getHealthCheckHandler({} as Request, (responseMock as any) as Response);

        expect(responseMock.send).toHaveBeenCalledWith({ status: 'OK' });
    });
});
