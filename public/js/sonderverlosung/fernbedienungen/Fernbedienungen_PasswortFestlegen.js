function Fernbedienungen_PasswortFestlegen(dom, data, fernbedienung_id) {
    if (typeof fernbedienung_id !== "undefined") fernbedienung_id = Number(fernbedienung_id);

    if (!dom.$btn_ausloesend.hasClass("element")) Schnittstelle_BtnWartenStart(dom.$btn_ausloesend);

    const ajax_dom = dom;
    const ajax_data = Schnittstelle_VariableWertBereinigtZurueck(data);
    ajax_data.id = fernbedienung_id;

    Schnittstelle_AjaxInDieSchlange(
        "fernbedienungen/ajax_fernbedienung_passwort_festlegen",
        ajax_data,
        ajax_dom,
        function (AJAX) {
            if ("dom" in AJAX && "$btn_ausloesend" in AJAX.dom && AJAX.dom.$btn_ausloesend.exists() && !dom.$btn_ausloesend.hasClass("element"))
                Schnittstelle_BtnWartenEnde(AJAX.dom.$btn_ausloesend);
            if ("dom" in AJAX && "$modal" in AJAX.dom && AJAX.dom.$modal.exists()) Schnittstelle_DomModalSchliessen(AJAX.dom.$modal);
            Schnittstelle_DomToastFeuern("Du hast erfolgreich ein neues Passwort festgelegt.");
        },
        function (AJAX) {
            if ("dom" in AJAX && "$btn_ausloesend" in AJAX.dom && AJAX.dom.$btn_ausloesend.exists() && !dom.$btn_ausloesend.hasClass("element"))
                Schnittstelle_BtnWartenEnde(AJAX.dom.$btn_ausloesend);
            if (isString(AJAX.antwort.validation)) Schnittstelle_DomToastFeuern(AJAX.antwort.validation, "danger");
            else if ("dom" in AJAX && "$formular" in AJAX.dom && AJAX.dom.$formular.exists())
                Liste_FormularEigenschaftenWerteZurueck(AJAX.dom.$formular, AJAX.antwort.validation);
        }
    );
}
