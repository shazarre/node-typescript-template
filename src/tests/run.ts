import * as jest from 'jest';
import { config } from 'dotenv';

config({ path: `${__dirname}/../../.env.test` });

// Any custom code that needs to run before...
jest.run()
    .then(() => {
        // ...and after tests execution
    })
    .catch(err => {
        // custom error logging
        console.error(err);
        process.exit(1);
    });
