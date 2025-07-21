function Schnittstelle_LocalstorageRein(schluessel, wert) {
    localStorage.setItem("sonderverlosung_" + schluessel, JsonStringifiedZurueck(wert));
}
