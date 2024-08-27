import {Response} from "express";

export default function handleError(res: Response, error: any) {
    res.status(400).json({
        message: error.message
    });
};