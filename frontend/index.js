import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import dhtRoutes from "./routes/sensor.js";
import cors from "cors";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";



const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});



const app = express();
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json({limit:'1024mb'}));
app.use('/products', productRoutes);
app.use(connectLiveReload());
app.use(cors());
app.use(express.json({limit:'1024mb'}));
app.use('/dht11', dhtRoutes);
app.use(connectLiveReload());

app.listen(5000, () => console.log('Server running at port 5000'));
