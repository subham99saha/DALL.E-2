const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const routes = [
    { path: "/image", obj: require('./modules/image/route') },
];
routes.forEach(rObj => {
    app.use(rObj.path, rObj.obj);
});

app.listen(3000, () => console.log('DALL.E-2 app is listening on port 3000.'));