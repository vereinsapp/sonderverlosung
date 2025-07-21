function Fernbedienungen_FernbedienungBesitztRechtZurueck(recht, fernbedienung_id) {
    if (typeof fernbedienung_id !== "undefined") fernbedienung_id = Number(fernbedienung_id);

    let recht_id;
    $.each(LISTEN.verfuegbare_rechte.tabelle, function () {
        const verfuegbares_recht = this;
        if ("id" in verfuegbares_recht && verfuegbares_recht.permission == recht) recht_id = verfuegbares_recht.id;
    });

    let fernbedienung_besitzt_recht = false;
    $.each(LISTEN.vergebene_rechte.tabelle, function () {
        const vergebenes_recht = this;
        if ("id" in vergebenes_recht && vergebenes_recht.fernbedienung_id == fernbedienung_id && vergebenes_recht.verfuegbares_recht_id == recht_id)
            fernbedienung_besitzt_recht = true;
    });

    return fernbedienung_besitzt_recht;
}
