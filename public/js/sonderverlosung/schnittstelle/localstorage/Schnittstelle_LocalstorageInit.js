function Schnittstelle_LocalstorageInit() {
    let localstorage_reset_string = Schnittstelle_LocalstorageRausZurueck("localstorage_reset");
    if (
        typeof localstorage_reset_string !== "undefined" &&
        localstorage_reset_string.length >= 2 &&
        localstorage_reset_string.charAt(0) === '"' &&
        localstorage_reset_string.charAt(localstorage_reset_string.length - 1) === '"'
    )
        Schnittstelle_LocalstorageRein("localstorage_reset", localstorage_reset_string.substring(1, localstorage_reset_string.length - 1));

    // LOCALSTORAGE LEEREN
    $(document).on("click", ".btn_localstorage_leeren", function () {
        const $btn_localstorage_leeren = $(this);
        if ($btn_localstorage_leeren.hasClass("bestaetigung_einfordern"))
            Schnittstelle_DomBestaetigungEinfordern(
                "Willst du wirklich deinen LocalStorage leeren?",
                $btn_localstorage_leeren.attr("data-title"),
                "btn_localstorage_leeren",
                new Object(),
                "danger"
            );
        else {
            localstorage_leeren();
            Schnittstelle_DomModalSchliessen($btn_localstorage_leeren.closest(".modal"));
            Schnittstelle_DomToastFeuern("Dein LocalStorage wurde erfolgreich geleert.");
        }
    });

    // LOCALSTORAGE LEEREN ERZWINGEN
    if (
        typeof Schnittstelle_LocalstorageRausZurueck("localstorage_reset") === "undefined" ||
        Schnittstelle_LocalstorageRausZurueck("localstorage_reset") < DateTime.fromISO(FORCE_LOCALSTORAGE_RESET_ZEITPUNKT)
    ) {
        localstorage_leeren();
        Schnittstelle_LogInDieKonsole("LocalStorage wurde erzwungenermaßen geleert.");
    }
}

function localstorage_leeren() {
    localStorage.clear();
    Schnittstelle_LocalstorageRein("localstorage_reset", DateTime.now().toISO());
}
