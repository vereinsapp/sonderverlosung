<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

class Sonderverlosung extends BaseConfig
{
    /**
     * --------------------------------------------------------------------------
     * Lies Mich!
     * --------------------------------------------------------------------------
     *
     * Diese Datei kann nach Wünschen angepasst werden.
     * Alternativ kann eine neue Config-Datei 'Sonderverlosung_env.php'
     * als Kopie erstellt werden, welche dann ausschließlich die
     * Eigenschaften enthält, die verändert werden sollen.
     */

    /**
     * --------------------------------------------------------------------------
     * Wartungsarbeiten
     * --------------------------------------------------------------------------
     *
     * Wenn ein Hinweis auf Wartungsarbeiten eingeblendet werden soll, dann
     * kann ich auf TRUE gesetzt werden
     */
    public $wartungsarbeiten = FALSE;

    /**
     * --------------------------------------------------------------------------
     * Angaben zum Verein, der die Sonderverlosung nutzt
     * --------------------------------------------------------------------------
     *
     * Der offizielle Name des Vereins
     */
    public $verein_name = 'Eingetragener Verein e.V.';

    /**
     * Die Homepage des Vereins
     */
    public $verein_domain = 'https://eingetragener-verein.de';

    /**
     * Der Name der Sonderverlosung innerhalb des Vereins
     * (sollte grammatikalisch weiblich sein)
     */
    public $sonderverlosung_name = 'Eingetragener Verein e.V. Sonderverlosung';

    /**
     * Das Logo der Sonderverlosung
     */
    public $sonderverlosung_logo = 'images/title.png';

    /**
     * --------------------------------------------------------------------------
     * Module (Controller)
     * --------------------------------------------------------------------------
     *
     * Aktive Module (Controller) inkl. Beschriftung und Symbol
     */
    public $controllers = array(
        'bildschirm' => array ( 'beschriftung' => 'Bildschirm', 'symbol' => SYMBOLE['einstellungen']['bootstrap'] ),
        'fernbedienung' => array ( 'beschriftung' => 'Fernbedienung', 'symbol' => SYMBOLE['einstellungen']['bootstrap'] ),
        'loginController' => array ( 'beschriftung' => 'Login', 'symbol' => SYMBOLE['einstellungen']['bootstrap'] ),
        'actionController' => array ( 'beschriftung' => 'Login-Action', 'symbol' => SYMBOLE['einstellungen']['bootstrap'] ),        
        'magicLinkController' => array ( 'beschriftung' => 'Einmal-Link', 'symbol' => SYMBOLE['einstellungen']['bootstrap'] ),        
    );

    /**
     * Einträge im Menü
     */
    public $menue = array(
        array( 'typ' => 'intern', 'data' => array( 'url' => 'logout', 'beschriftung' => 'Abmelden', 'symbol' => SYMBOLE['logout']['bootstrap'] ) ),
    );

    /**
     * --------------------------------------------------------------------------
     * Hauptinstanzen
     * --------------------------------------------------------------------------
     */
    public $hauptinstanzen = array();

    /**
     * --------------------------------------------------------------------------
     * Eigenschaften
     * --------------------------------------------------------------------------
     *
     * Die Indices dürfen nicht verändert werden!
     * Es sollte lediglich die Beschriftung verändert werden.
     */
    public $eigenschaften = array();

    /**
     * --------------------------------------------------------------------------
     * Vorgegebene Werte zu Eigenschaften
     * --------------------------------------------------------------------------
     *
     * Werte, die zu den Eigenschaften vorgegeben sind
     * und bspw. ausgewählt werden können
     */
    public $vorgegebene_werte = array();

    
    /**
     * --------------------------------------------------------------------------
     * Vorgegebene Filter
     * --------------------------------------------------------------------------
     *
     * Vorgegebene Filter, die im Filtern-Modal ausgewählt werden können
     */
    public $vorgegebene_filter = array();

    /**
     * --------------------------------------------------------------------------
     * Filterbare Eigenschaften
     * --------------------------------------------------------------------------
     *
     * Eigenschaften, die filterbar sein sollen
     */
    public $filterbare_eigenschaften = array();

    /**
     * --------------------------------------------------------------------------
     * Sortierbare Eigenschaften
     * --------------------------------------------------------------------------
     *
     * Eigenschaften, die sortierbar sein sollen
     */
    public $sortierbare_eigenschaften = array();
    
    /**
     * --------------------------------------------------------------------------
     * Gruppierbare Eigenschaften
     * --------------------------------------------------------------------------
     *
     * Eigenschaften, die gruppierbar sein sollen
     */
    public $gruppierbare_eigenschaften = array();
    
    /**
     * --------------------------------------------------------------------------
     * AJAX-Zykluszeit
     * --------------------------------------------------------------------------
     *
     * Zeit in Sekunden bis zum nächsten Schleifendurchgang
     */
    public $ajax_zykluszeit = 15;
    
    /**
     * --------------------------------------------------------------------------
     * JSON-Export Verzeichnis
     * --------------------------------------------------------------------------
     *
     * Verzeichnis, das beim Export einer Liste
     * in ein json-Format verwendet bzw. erstellt wird
     */
    public $json_export_verzeichnis = 'json_export/';

    /**
     * --------------------------------------------------------------------------
     * LocalStorage Reset erzwingen
     * --------------------------------------------------------------------------
     *
     * Wenn der LocalStorage auf allen verwendeten Geräten einmal geleert werden
     * soll, dann muss der jetzige Zeitpunkt definiert werden
     * Winterzeit: +01:00 / Sommerzeit: +02:00
     */
    public $force_localstorage_reset_zeitpunkt = '2025-05-21T16:00:00.000+02:00';

}
