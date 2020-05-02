import express from 'express';
import { Wax } from '../models/wax';
import AppConfig from '../config/app';

export const PostRouter = express.Router();

const waxService = AppConfig.waxService;

PostRouter.get('/', async (req, resp) => {
    try {
        let payload = await waxService.getAll();
        return resp.status(200).json(payload);
    } catch (e) {
        return resp.status(404).json(e).send();
    }
});

PostRouter.get('/:id', async (req, resp) => {
    const id = +req.params.id; // the plus sign is to type coerce id into a number
    try {
        let payload = await waxService.getById(id);
        return resp.status(200).json(payload);
    } catch (e) {
        return resp.status(404).json(e).send();
    }
});