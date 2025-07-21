function Fernbedienungen_EinmalLinkErstellen(formular_oeffnen, bestaetigung_einfordern, dom, data, title, fernbedienung_id) {
    if (typeof fernbedienung_id !== "undefined") fernbedienung_id = Number(fernbedienung_id);

    if (bestaetigung_einfordern)
        Schnittstelle_DomBestaetigungEinfordern(
            "Willst du wirklich " +
                Liste_ElementBeschriftungZurueck(fernbedienung_id, "fernbedienungen") +
                " einen Einmal-Link per Email zuschicken?",
            title,
            "btn_fernbedienung_einmal_link_email",
            { liste: "fernbedienungen", element_id: fernbedienung_id }
        );
    else if (formular_oeffnen) {
        const $neues_modal = Schnittstelle_DomNeuesModalInitialisiertZurueck(title, "fernbedienungen_einmal_link_anzeigen");
        Schnittstelle_DomModalOeffnen($neues_modal);
        Liste_FormularInitialisieren($neues_modal.find(".formular"), undefined, fernbedienung_id, "fernbedienungen");
    } else {
        if (!dom.$btn_ausloesend.hasClass("element")) Schnittstelle_BtnWartenStart(dom.$btn_ausloesend);

        const ajax_dom = dom;
        const ajax_data = Schnittstelle_VariableWertBereinigtZurueck(data);
        ajax_data.id = fernbedienung_id;

        Schnittstelle_AjaxInDieSchlange(
            "fernbedienungen/ajax_fernbedienung_einmal_link_erstellen",
            ajax_data,
            ajax_dom,
            function (AJAX) {
                Schnittstelle_EventAusfuehren(
                    [Schnittstelle_EventVariableUpdLocalstorage, Schnittstelle_EventLocalstorageUpdVariable, Schnittstelle_EventVariableUpdDom],
                    { liste: "fernbedienungen" }
                );
                if ("dom" in AJAX && "$btn_ausloesend" in AJAX.dom && AJAX.dom.$btn_ausloesend.exists() && !dom.$btn_ausloesend.hasClass("element"))
                    Schnittstelle_BtnWartenEnde(AJAX.dom.$btn_ausloesend);
                if (AJAX.data.email) {
                    if ("dom" in AJAX && "$modal" in AJAX.dom && AJAX.dom.$modal.exists()) {
                        Schnittstelle_DomModalSchliessen(AJAX.dom.$modal);
                        Schnittstelle_DomToastFeuern(
                            "Einmal-Link für " +
                                Liste_ElementBeschriftungZurueck(AJAX.data.id, "fernbedienungen") +
                                " wurde erfolgreich per Email zugeschickt."
                        );
                    }
                } else {
                    if ("dom" in AJAX && "$formular" in AJAX.dom && AJAX.dom.$formular.find(".einmal_link").exists())
                        AJAX.dom.$formular.find(".einmal_link").val(AJAX.antwort.einmal_link);
                    if (
                        "dom" in AJAX &&
                        "$btn_ausloesend" in AJAX.dom &&
                        AJAX.dom.$btn_ausloesend.exists() &&
                        !dom.$btn_ausloesend.hasClass("element")
                    )
                        AJAX.dom.$btn_ausloesend.addClass("invisible");
                }
            },
            function (AJAX) {
                if ("dom" in AJAX && "$btn_ausloesend" in AJAX.dom && AJAX.dom.$btn_ausloesend.exists() && !dom.$btn_ausloesend.hasClass("element"))
                    Schnittstelle_BtnWartenEnde(AJAX.dom.$btn_ausloesend);
                if (isString(AJAX.antwort.validation)) Schnittstelle_DomToastFeuern(AJAX.antwort.validation, "danger");
                if (AJAX.data.email)
                    Schnittstelle_DomToastFeuern(
                        "Einmal-Link für " +
                            Liste_ElementBeschriftungZurueck(AJAX.data.id, "fernbedienungen") +
                            " konnte nicht per Email zugeschickt werden.",
                        "danger"
                    );
                else
                    Schnittstelle_DomToastFeuern(
                        "Einmal-Link für " + Liste_ElementBeschriftungZurueck(AJAX.data.id, "fernbedienungen") + " konnte nicht erstellt werden.",
                        "danger"
                    );
            }
        );
    }
}
