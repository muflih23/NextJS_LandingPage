import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
    email: string
    message: string
}


export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const body = JSON.parse(req.body);
    console.log(body);
    res.status(200).json({name: 'ok', email: 'ok', message: 'ok'});
};