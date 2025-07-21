function Schnittstelle_LogInDieKonsole(...log) {
    $.each(log, function (position, eintrag) {
        if (!isJquery(eintrag) && isObject(eintrag)) log[position] = objektKopiertZurueck(eintrag);
        if (isArray(eintrag)) log[position] = arrayKopiertZurueck(eintrag);
    });

    console.log(...log);
}
