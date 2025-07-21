ELEMENTE.fernbedienung.ergaenzen_aktion = function (fernbedienung) {
    if ("vorstandschaft_janein" in fernbedienung && fernbedienung["vorstandschaft_janein"] == 1) fernbedienung["vorstandschaft_janein"] = true;
    else fernbedienung["vorstandschaft_janein"] = false;
    if ("aktiv_janein" in fernbedienung && fernbedienung["aktiv_janein"] == 1) fernbedienung["aktiv_janein"] = true;
    else fernbedienung["aktiv_janein"] = false;
    if ("real_janein" in fernbedienung && fernbedienung["real_janein"] == 1) fernbedienung["real_janein"] = true;
    else fernbedienung["real_janein"] = false;

    if ("geburt" in fernbedienung) {
        fernbedienung["alter"] = -1 * fernbedienung["geburt"].diffNow("years").years;

        fernbedienung["geburtstag"] = fernbedienung["geburt"].set({ year: DateTime.now().year });
        if (fernbedienung["geburtstag"] < DateTime.now().startOf("day")) fernbedienung["geburtstag"] = fernbedienung["geburtstag"].plus({ years: 1 });
        fernbedienung["alter_geburtstag"] = fernbedienung["geburtstag"].diff(fernbedienung["geburt"], "years").years;
    }
};

function Fernbedienungen_Init() {
    // FERNBEDIENUNG ERSTELLEN
    $(document).on("click", ".btn_fernbedienung_erstellen", function () {
        Fernbedienungen_Fernbedienungenstellen(
            $(this).hasClass("formular_oeffnen"),
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal"), $formular: $(this).closest(".formular") },
            Liste_FormularEigenschaftenWerteZurueck($(this).closest(".formular")),
            $(this).attr("data-title"),
            undefined
        );
    });

    // FERNBEDIENUNG ÄNDERN
    $(document).on("click", ".btn_fernbedienung_aendern", function () {
        Fernbedienungen_FernbedienungAendern(
            $(this).hasClass("formular_oeffnen"),
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal"), $formular: $(this).closest(".formular") },
            Liste_FormularEigenschaftenWerteZurueck($(this).closest(".formular")),
            $(this).attr("data-title"),
            $(this).attr("data-element_id")
        );
    });

    // FERNBEDIENUNG DUPLIZIEREN
    $(document).on("click", ".btn_fernbedienung_duplizieren", function () {
        Fernbedienungen_FernbedienungErstellen(
            $(this).hasClass("formular_oeffnen"),
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal"), $formular: $(this).closest(".formular") },
            Liste_FormularEigenschaftenWerteZurueck($(this).closest(".formular")),
            $(this).attr("data-title"),
            $(this).attr("data-element_id")
        );
    });

    // FERNBEDIENUNG LÖSCHEN
    $(document).on("click", ".btn_fernbedienung_loeschen", function () {
        Liste_ElementLoeschen(
            $(this).hasClass("bestaetigung_einfordern"),
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal") },
            { weiterleiten: $(this).attr("data-weiterleiten") },
            $(this).attr("data-title"),
            $(this).attr("data-element_id"),
            "fernbedienungen"
        );
    });

    // PASSWORT ÄNDERN
    $(document).on("click", ".btn_fernbedienung_passwort_aendern", function () {
        Fernbedienungen_PasswortAendern(
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal"), $formular: $(this).closest(".formular") },
            Liste_FormularEigenschaftenWerteZurueck($(this).closest(".formular")),
            $(this).attr("data-element_id")
        );
    });

    // PASSWORT FESTLEGEN
    $(document).on("click", ".btn_fernbedienung_passwort_festlegen", function () {
        Fernbedienungen_PasswortFestlegen(
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal"), $formular: $(this).closest(".formular") },
            Liste_FormularEigenschaftenWerteZurueck($(this).closest(".formular")),
            $(this).attr("data-element_id")
        );
    });

    // EINMAL-LINK ANZEIGEN
    $(document).on("click", ".btn_fernbedienung_einmal_link_anzeigen", function () {
        Fernbedienungen_EinmalLinkErstellen(
            $(this).hasClass("formular_oeffnen"),
            $(this).hasClass("bestaetigung_einfordern"),
            {
                $btn_ausloesend: $(this),
                $modal: $(this).closest(".modal"),
                $formular: $(this).closest(".formular"),
            },
            new Object(),
            $(this).attr("data-title"),
            $(this).attr("data-element_id")
        );
    });

    // EINMAL-LINK PER EMAIL VERSCHICKEN
    $(document).on("click", ".btn_fernbedienung_einmal_link_email", function () {
        Fernbedienungen_EinmalLinkErstellen(
            $(this).hasClass("formular_oeffnen"),
            $(this).hasClass("bestaetigung_einfordern"),
            { $btn_ausloesend: $(this), $modal: $(this).closest(".modal") },
            { email: true },
            $(this).attr("data-title"),
            $(this).attr("data-element_id")
        );
    });

    // AUFGABEN ERLEDIGT ANZEIGEN
    $(document).on("click", ".btn_fernbedienungen_aufgaben_erledigt_anzeigen", function () {
        Fernbedienungen_FernbedienungenAufgabenErledigtAnzeigen(
            { $btn_ausloesend: $(this), $liste: $('.liste[id="' + $(this).attr("data-instanz") + '"]') },
            $(this).attr("data-title")
        );
    });
}
