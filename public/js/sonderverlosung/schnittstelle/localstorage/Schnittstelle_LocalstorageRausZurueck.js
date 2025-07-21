function Schnittstelle_LocalstorageRausZurueck(schluessel) {
    let LocalstorageRaus = localStorage.getItem("sonderverlosung_" + schluessel);

    if (LocalstorageRaus === null) LocalstorageRaus = undefined;
    else LocalstorageRaus = Schnittstelle_VariableWertBereinigtZurueck(LocalstorageRaus);

    return LocalstorageRaus;
}
