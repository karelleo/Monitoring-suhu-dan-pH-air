import Dht from "../models/dht.js";
import DhtFuzzy from "../models/fuzzy.js";
import { FuzzyFikasi } from "./FuzzyFikasi.js";

export const getAllDht11 = async (req, res) => {
   
    try {
        // const dht11 = await Fuzzy.findAll({ include: [Dht] });
        const dht11 = await Dht.findAll({
            order: [
                ['id', 'DESC']
            ], 
            include: [DhtFuzzy] 
        });
        res.json(dht11);
    } catch (error) {
        res.json({ message: error.message });
    }
   
}

export const getAllDhtMobile11 = async (req, res) => {
    try {
        const dhtmobile = await Dht.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        });
        res.json(dhtmobile);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const getDhtById = async (req, res) => {
    try {
        const dht = await Dht.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(dht[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const createDht = async (req, res) => {
    try {
        await Dht.create(req.body);
        res.json({
            "message": "Product Created",
            "data": req.body
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const updateDht = async (req, res) => {
    try {
        await Dht.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const deleteDht = async (req, res) => {
    try {
        await Dht.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateTestingDht = async (req, res) => {
    try {
        const dht11 = await Dht.findAll({ include: DhtFuzzy });
        dht11.forEach((dh) => {
            let { suhubawah, suhunormal, suhuatas, asam, netral, basa } = FuzzyFikasi(dh.suhuair, dh.ph);
            if (dh.dhtfuzzy)
                DhtFuzzy.update({
                    suhubawah: suhubawah,
                    suhunormal: suhunormal,
                    suhuatas: suhuatas,
                    asam: asam,
                    netral: netral,
                    basa: basa
                }, {
                    where: {
                        dht_id: dh.id
                    }
                });
            else
                DhtFuzzy.create({
                    dht_id: dh.id,
                    suhubawah: suhubawah,
                    suhunormal: suhunormal,
                    suhuatas: suhuatas,
                    asam: asam,
                    netral: netral,
                    basa: basa
                });
                if(netral >0 && suhunormal >0 ){ 
                    dh.testing = "Baik";
                } 
                else if (netral == 1 && suhunormal ==1 ){
                    dh.testing = "Baik";
                }
                else if (asam == 1 && suhubawah == 1 ){
                    dh.testing = "ph dan suhu air Dibawah Normal";
                }
                else if (basa == 1 && suhuatas == 1 ){
                    dh.testing = "ph dan suhu air Diatas Normal";
                }
                else if (asam == 1 && suhuatas == 1 ){
                    dh.testing = "ph Dibawah normal dan suhu air Diatas Normal";
                }
                else if (basa == 1 && suhubawah == 1 ){
                    dh.testing = "ph Diatas normal dan suhu air Dibawah Normal";
                }
                else if (asam == 1  ){
                    dh.testing = "ph Dibawah Normal";
                }
                else if (basa == 1 ) {
                    dh.testing = "ph Diatas Normal";
                }
                else if (suhuatas == 1 ) {
                    dh.testing = "suhu air Diatas Normal";
                }
                else if (suhubawah == 1 ) {
                    dh.testing = "suhu air Dibawah Normal"; 
                }
                else {
                    dh.testing = "Data Tidak Diketahui"; 
                }
            dh.save();
        })
        res.json({
            "message": "Ok Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
