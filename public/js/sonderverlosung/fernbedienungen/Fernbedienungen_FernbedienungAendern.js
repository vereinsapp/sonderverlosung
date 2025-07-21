function Fernbedienungen_FernbedienungAendern(formular_oeffnen, dom, data, title, fernbedienung_id) {
    if (typeof fernbedienung_id !== "undefined") fernbedienung_id = Number(fernbedienung_id);

    if (formular_oeffnen) {
        const $neues_modal = Schnittstelle_DomNeuesModalInitialisiertZurueck(title, "fernbedienung_basiseigenschaften");
        Schnittstelle_DomModalOeffnen($neues_modal);
        Liste_FormularInitialisieren($neues_modal.find(".formular"), "aendern", fernbedienung_id, "fernbedienungen");
    } else {
        if (!dom.$btn_ausloesend.hasClass("element")) Schnittstelle_BtnWartenStart(dom.$btn_ausloesend);

        const ajax_dom = dom;

        if (!("email" in data)) data.email = Schnittstelle_VariableRausZurueck("email", fernbedienung_id, "fernbedienungen");
        if (!("vorname" in data)) data.vorname = Schnittstelle_VariableRausZurueck("vorname", fernbedienung_id, "fernbedienungen");
        if (!("nachname" in data)) data.nachname = Schnittstelle_VariableRausZurueck("nachname", fernbedienung_id, "fernbedienungen");
        if (!("geburt" in data)) data.geburt = Schnittstelle_VariableRausZurueck("geburt", fernbedienung_id, "fernbedienungen");
        if (!("postleitzahl" in data)) data.postleitzahl = Schnittstelle_VariableRausZurueck("postleitzahl", fernbedienung_id, "fernbedienungen");
        if (!("wohnort" in data)) data.wohnort = Schnittstelle_VariableRausZurueck("wohnort", fernbedienung_id, "fernbedienungen");
        if (!("geschlecht" in data)) data.geschlecht = Schnittstelle_VariableRausZurueck("geschlecht", fernbedienung_id, "fernbedienungen");
        if (!("register" in data)) data.register = Schnittstelle_VariableRausZurueck("register", fernbedienung_id, "fernbedienungen");
        if (!("auto" in data)) data.auto = Schnittstelle_VariableRausZurueck("auto", fernbedienung_id, "fernbedienungen");
        if (!("funktion" in data)) data.funktion = Schnittstelle_VariableRausZurueck("funktion", fernbedienung_id, "fernbedienungen");
        if (!("vorstandschaft_janein" in data))
            data.vorstandschaft_janein = Schnittstelle_VariableRausZurueck("vorstandschaft_janein", fernbedienung_id, "fernbedienungen");
        if (!("aktiv_janein" in data))
            data.aktiv_janein = Number(Schnittstelle_VariableRausZurueck("aktiv_janein", fernbedienung_id, "fernbedienungen"));
        if (!("real_janein" in data))
            data.real_janein = Number(Schnittstelle_VariableRausZurueck("real_janein", fernbedienung_id, "fernbedienungen"));
        const ajax_data = Schnittstelle_VariableWertBereinigtZurueck(data);
        ajax_data.id = fernbedienung_id;
        if ("geburt" in ajax_data && isLuxonDateTime(ajax_data.geburt)) ajax_data.geburt = ajax_data.geburt.toISO();

        Schnittstelle_AjaxInDieSchlange(
            "fernbedienungen/ajax_fernbedienung_speichern",
            ajax_data,
            ajax_dom,
            function (AJAX) {
                const fernbedienung_id = AJAX.data.id;
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
                if ("dom" in AJAX && "$modal" in AJAX.dom && AJAX.dom.$modal.exists()) {
                    Schnittstelle_DomModalSchliessen(AJAX.dom.$modal);
                    Schnittstelle_DomToastFeuern(
                        Liste_ElementBeschriftungZurueck(fernbedienung_id, "fernbedienungen") + " wurde erfolgreich geändert."
                    );
                }
            },
            function (AJAX) {
                if ("dom" in AJAX && "$btn_ausloesend" in AJAX.dom && AJAX.dom.$btn_ausloesend.exists() && !dom.$btn_ausloesend.hasClass("element"))
                    Schnittstelle_BtnWartenEnde(AJAX.dom.$btn_ausloesend);
                if (isString(AJAX.antwort.validation)) Schnittstelle_DomToastFeuern(AJAX.antwort.validation, "danger");
                else if ("dom" in AJAX && "$formular" in AJAX.dom && AJAX.dom.$formular.exists())
                    Liste_FormularEigenschaftenWerteZurueck(AJAX.dom.$formular, AJAX.antwort.validation);
                Schnittstelle_DomToastFeuern(
                    Liste_ElementBeschriftungZurueck(AJAX.data.id, "fernbedienungen") + " konnte nicht gespeichert werden.",
                    "danger"
                );
            }
        );
    }
}
