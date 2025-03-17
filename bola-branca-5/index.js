import express from "express";
import conn from './db/conn.js';
import BusController from './controllers/BusController.js';

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
)

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.post('/onibus', BusController.createBus);
app.get('/onibus', BusController.listAllBuss);
app.get('/onibus/:numero', BusController.getBus);
app.put('/onibus/:numero', BusController.updateBus);
app.delete('/onibus/:numero', BusController.deleteBus);
