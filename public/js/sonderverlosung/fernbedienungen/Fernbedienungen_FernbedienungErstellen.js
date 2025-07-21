function Fernbedienungen_FernbedienungErstellen(formular_oeffnen, dom, data, title, fernbedienung_id) {
    if (typeof fernbedienung_id !== "undefined") fernbedienung_id = Number(fernbedienung_id);

    if (formular_oeffnen) {
        const $neues_modal = Schnittstelle_DomNeuesModalInitialisiertZurueck(title, "fernbedienung_basiseigenschaften");
        Schnittstelle_DomModalOeffnen($neues_modal);
        Liste_FormularInitialisieren($neues_modal.find(".formular"), "erstellen", fernbedienung_id, "fernbedienungen");
    } else {
        if (!dom.$btn_ausloesend.hasClass("element")) Schnittstelle_BtnWartenStart(dom.$btn_ausloesend);

        const ajax_dom = dom;
        const ajax_data = Schnittstelle_VariableWertBereinigtZurueck(data);
        if ("geburt" in ajax_data && isLuxonDateTime(ajax_data.geburt)) ajax_data.geburt = ajax_data.geburt.toISO();

        Schnittstelle_AjaxInDieSchlange(
            "fernbedienungen/ajax_fernbedienung_speichern",
            ajax_data,
            ajax_dom,
            function (AJAX) {
                if ("fernbedienung_id" in AJAX.antwort && typeof AJAX.antwort.fernbedienung_id !== "undefined")
                    AJAX.data.id = Number(AJAX.antwort.fernbedienung_id);
                else AJAX.data.id = Number(LISTEN["fernbedienungen"].tabelle.length + 1);
                const fernbedienung_id = AJAX.data.id;

                LISTEN["fernbedienungen"].tabelle[fernbedienung_id] = new Object();
                $.each(AJAX.data, function (eigenschaft, wert) {
                    if (eigenschaft != "ajax_id" && eigenschaft != CSRF_NAME)
                        Schnittstelle_VariableRein(wert, eigenschaft, fernbedienung_id, "fernbedienungen");
                });
                Schnittstelle_EventAusfuehren(
                    [Schnittstelle_EventVariableUpdLocalstorage, Schnittstelle_EventLocalstorageUpdVariable, Schnittstelle_EventVariableUpdDom],
                    { liste: "fernbedienungen" }
                );

                if ("dom" in AJAX && "$btn_ausloesend" in AJAX.dom && AJAX.dom.$btn_ausloesend.exists() && !dom.$btn_ausloesend.hasClass("element"))
                    Schnittstelle_BtnWartenEnde(AJAX.dom.$btn_ausloesend);
                if ("dom" in AJAX && "$modal" in AJAX.dom && AJAX.dom.$modal.exists()) Schnittstelle_DomModalSchliessen(AJAX.dom.$modal);
                Schnittstelle_DomToastFeuern(Liste_ElementBeschriftungZurueck(fernbedienung_id, "fernbedienungen") + " wurde erfolgreich erstellt.");
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
}
