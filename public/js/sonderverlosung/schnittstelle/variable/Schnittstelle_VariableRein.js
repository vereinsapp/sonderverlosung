function Schnittstelle_VariableRein(wert, eigenschaft, element_id, liste) {
    if (typeof eigenschaft !== "undefined" && typeof element_id !== "undefined" && typeof liste !== "undefined") {
        element_id = Number(element_id);

        if (typeof LISTEN[liste].tabelle[element_id] === "undefined") LISTEN[liste].tabelle[element_id] = new Object();
        LISTEN[liste].tabelle[element_id][eigenschaft] = Schnittstelle_VariableWertBereinigtZurueck(wert);
    }
}
