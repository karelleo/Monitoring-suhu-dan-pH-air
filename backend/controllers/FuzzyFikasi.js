const SuhuBawah = (suhu) => {
    let dibawah = 0;
    if (suhu <= 22) {
        dibawah = 1;
    }
    else if (suhu >= 22 && suhu <= 24) {
        dibawah = (24 - suhu) / 2;
    }
    else if (suhu >= 24) {
        dibawah = 0;
    }
    return dibawah;
}

const SuhuNormal = (suhu) => {
    let normal = 0;
    if (suhu <= 22) {
        normal = 0;
    }
    else if (suhu >= 22 && suhu <= 24) {
        normal = (suhu - 22) / 2;
    }
    else if (suhu >= 24 && suhu <= 26) {
        normal = (26 - suhu) / 2;
    }
    else if (suhu >= 26) {
        normal = 0;
    }
    return normal;
}

const SuhuAtas = (suhu) => {
    let diatas = 0;
    if (suhu <= 24) {
        diatas = 0;
    }
    else if (suhu >= 24 && suhu <= 26) {
        diatas = (suhu - 24) / 2;
    }
    else if (suhu >= 26) {
        diatas = 1;
    }
    return diatas;
}

const AsamPh = (ph) => {
    let asam = 0;
    if (ph <= 5.5) {
        asam = 1;
    }
    else if (ph >= 5.5 && ph <= 6.5) {
        asam = (6.5 - ph) / 1;
    }
    else if (ph >= 6.5) {
        asam = 0;
    }
    return asam;
}

const NetralPh = (ph) => {
    let netral = 0;
    if (ph < 5.5) {
        netral = 0;
    }
    else if (ph >= 5.5 && ph <= 6.5) {
        netral = (ph - 5.5) / 1;
    }
    else if (ph >= 6.5 && ph <= 7.5) {
        netral = (7.5 - ph) / 1;
    }
    else if (ph > 7.5) {
        netral = 0;
    }
    return netral;
}

const BasaPh = (ph) => {
    let basa = 0;
    if (ph <= 6.5) {
        basa = 0;
    }
    else if (ph >= 6.5 && ph <= 7.5) {
        basa = (ph - 6.5) / 1;
    }
    else if (ph >= 7.5) {
        basa = 1;
    }
    return basa;
}


export const FuzzyFikasi = (suhu, ph) => {
    let suhuBawah = SuhuBawah(suhu);
    let suhuNormal = SuhuNormal(suhu);
    let suhuAtas = SuhuAtas(suhu);
    let phAsam = AsamPh(ph);
    let phNetral = NetralPh(ph);
    let phBasa = BasaPh(ph);
    return {
        suhubawah: suhuBawah,
        suhunormal: suhuNormal,
        suhuatas: suhuAtas,
        asam: phAsam,
        netral: phNetral,
        basa: phBasa
    };
}