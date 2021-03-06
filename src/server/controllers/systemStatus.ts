import {Request, Response} from "express";
import {availableHosts} from "../config";
import {Pool} from "../models/Pool";
import _ from "lodash";

export const systemStatus = async (req: Request, res: Response) => {
    let pools = [];

    await Promise.all(
        _.map(availableHosts, async (host: string) => {
            const pool = new Pool(host);

            // we're firing removeDeadBots here
            // because in this use case it's better
            // than configuring the cronjob
            await pool.removeDeadBots();

            pools.push({
                hostname: host,
                bots: await pool.getBots(),
            });
        })
    );

    pools = _.sortBy(pools, (pool) => _.get(pool, 'hostname'));

    res.render('status', {pools});
};
