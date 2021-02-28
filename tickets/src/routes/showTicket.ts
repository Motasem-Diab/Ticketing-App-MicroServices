import express, {Request, Response} from 'express' ;
import { Ticket } from '../models/ticket';
import { NotFoundError } from '@e-commerce-social-media/common';


const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.body.id);

    if(!ticket){
        throw new NotFoundError();
    }
    res.status(200).send(ticket);
});

export { router as showTicketRouter}