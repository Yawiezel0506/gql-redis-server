// import { createClient } from "redis";

// export const client = createClient({
//   password: 'AdiRose',
//   socket: {
//       host: '127.0.0.1',
//       port: 6379
//   }
// });

import { createClient } from 'redis';

export const client = createClient({
    password: 'IgY4brYzd6Uui6t139UPAa6ra692JLQH',
    socket: {
        host: 'redis-18658.c243.eu-west-1-3.ec2.cloud.redislabs.com',
        port: 18658
    }
});