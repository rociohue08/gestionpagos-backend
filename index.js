
const app = require('./app'); 
const config = require('./config'); 

const main = () => {
    app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
    });
};

main();
