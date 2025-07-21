EVENT_VARIABLE_UPD_DOM_VOR_LISTE = new Array();
EVENT_VARIABLE_UPD_DOM_VOR_ENDE = new Array();

function Schnittstelle_EventVariableUpdDom(folgendes_event, data) {
    if ("liste" in data && data.liste in LISTEN) {
        const liste = data.liste;

        // SPEZIAL VOR LISTE AKTUALISIEREN
        $.each(EVENT_VARIABLE_UPD_DOM_VOR_LISTE[liste], function () {
            this();
        });

        // LISTE AKTUALISIEREN
        $('.liste[data-liste="' + liste + '"]').each(function () {
            Liste_Aktualisieren($(this), liste);
        });

        // ELEMENT AKTUALISIEREN
        $('.element[data-liste="' + liste + '"]').each(function () {
            Liste_ElementAktualisieren($(this), liste);
        });

        // AUSWERTUNGEN AKTUALISIEREN
        $('.auswertungen[data-auswertungen="' + liste + '"]').each(function () {
            Liste_AuswertungenAktualisieren($(this), liste);
        });

        // AUSWERTUNG AKTUALISIEREN
        $('.auswertung[data-auswertungen="' + liste + '"]').each(function () {
            Liste_AuswertungAktualisieren($(this), liste);
        });

        // VERZEICHNIS AKTUALISIEREN
        $('.verzeichnis[data-liste="' + liste + '"]').each(function () {
            Liste_VerzeichnisAktualisieren($(this), liste);
        });

        // DATEI AKTUALISIEREN
        $('.datei[data-liste="' + liste + '"]').each(function () {
            Liste_DateiAktualisieren($(this), liste);
        });

        // SPEZIAL ZUM SCHLUSS AKTUALISIEREN
        $.each(EVENT_VARIABLE_UPD_DOM_VOR_ENDE[liste], function () {
            this();
        });

        // Zuerst werden alle folgenden Events ausgeführt (bspw. um die Daten komplett in den Variablen gespeichert zu haben)...
        if (typeof folgendes_event === "function" || (isArray(folgendes_event) && folgendes_event.length > 0))
            Schnittstelle_EventAusfuehren(folgendes_event, data);

        //  ...und danach die abhängigen Listen abgearbeitet (die ja ggf. auf die zuvor aktualisierte Liste zurückgreifen)
        if ("abhaengig_von" in LISTEN[liste])
            $.each(LISTEN[liste].abhaengig_von, function (prio, liste) {
                Schnittstelle_EventAusfuehren(Schnittstelle_EventVariableUpdDom, { liste: liste });
            });
    } else Schnittstelle_LogInDieKonsole(liste + " ist nicht in data enthalten oder " + liste + " existiert nicht.");

    $(".jetzt").each(function () {
        Schnittstelle_JetztAktualisieren($(this));
    });
}
