<?php

/*
 | --------------------------------------------------------------------
 | App Namespace
 | --------------------------------------------------------------------
 |
 | This defines the default Namespace that is used throughout
 | CodeIgniter to refer to the Application directory. Change
 | this constant to change the namespace that all application
 | classes should use.
 |
 | NOTE: changing this will require manually modifying the
 | existing namespaces of App\* namespaced-classes.
 */
defined('APP_NAMESPACE') || define('APP_NAMESPACE', 'App');

/*
 | --------------------------------------------------------------------------
 | Composer Path
 | --------------------------------------------------------------------------
 |
 | The path that Composer's autoload file is expected to live. By default,
 | the vendor folder is in the Root directory, but you can customize that here.
 */
defined('COMPOSER_PATH') || define('COMPOSER_PATH', ROOTPATH . 'vendor/autoload.php');

/*
 |--------------------------------------------------------------------------
 | Timing Constants
 |--------------------------------------------------------------------------
 |
 | Provide simple ways to work with the myriad of PHP functions that
 | require information to be in seconds.
 */
defined('SECOND') || define('SECOND', 1);
defined('MINUTE') || define('MINUTE', 60);
defined('HOUR')   || define('HOUR', 3600);
defined('DAY')    || define('DAY', 86400);
defined('WEEK')   || define('WEEK', 604800);
defined('MONTH')  || define('MONTH', 2_592_000);
defined('YEAR')   || define('YEAR', 31_536_000);
defined('DECADE') || define('DECADE', 315_360_000);

/*
 | --------------------------------------------------------------------------
 | Exit Status Codes
 | --------------------------------------------------------------------------
 |
 | Used to indicate the conditions under which the script is exit()ing.
 | While there is no universal standard for error codes, there are some
 | broad conventions.  Three such conventions are mentioned below, for
 | those who wish to make use of them.  The CodeIgniter defaults were
 | chosen for the least overlap with these conventions, while still
 | leaving room for others to be defined in future versions and user
 | applications.
 |
 | The three main conventions used for determining exit status codes
 | are as follows:
 |
 |    Standard C/C++ Library (stdlibc):
 |       http://www.gnu.org/software/libc/manual/html_node/Exit-Status.html
 |       (This link also contains other GNU-specific conventions)
 |    BSD sysexits.h:
 |       http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
 |    Bash scripting:
 |       http://tldp.org/LDP/abs/html/exitcodes.html
 |
 */
defined('EXIT_SUCCESS')        || define('EXIT_SUCCESS', 0);        // no errors
defined('EXIT_ERROR')          || define('EXIT_ERROR', 1);          // generic error
defined('EXIT_CONFIG')         || define('EXIT_CONFIG', 3);         // configuration error
defined('EXIT_UNKNOWN_FILE')   || define('EXIT_UNKNOWN_FILE', 4);   // file not found
defined('EXIT_UNKNOWN_CLASS')  || define('EXIT_UNKNOWN_CLASS', 5);  // unknown class
defined('EXIT_UNKNOWN_METHOD') || define('EXIT_UNKNOWN_METHOD', 6); // unknown class member
defined('EXIT_USER_INPUT')     || define('EXIT_USER_INPUT', 7);     // invalid user input
defined('EXIT_DATABASE')       || define('EXIT_DATABASE', 8);       // database error
defined('EXIT__AUTO_MIN')      || define('EXIT__AUTO_MIN', 9);      // lowest automatically-assigned error code
defined('EXIT__AUTO_MAX')      || define('EXIT__AUTO_MAX', 125);    // highest automatically-assigned error code

/*
|--------------------------------------------------------------------------
| VEREINSAPP Projekt-übergreifende Konstanten
|--------------------------------------------------------------------------*/

defined('LISTEN') OR define( 'LISTEN', array() );

defined('ELEMENTE') OR define( 'ELEMENTE', array() );

defined('JANEIN') OR define( 'JANEIN', array(
	0 => array( 'beschriftung' => 'Nein', 'wert' => FALSE ),
	1 => array( 'beschriftung' => 'Ja', 'wert' => TRUE ),
) );

defined('WOCHENTAGE_KURZ') OR define( 'WOCHENTAGE_KURZ', array(
	1 => array( 'beschriftung' => 'Mo.' ),
	2 => array( 'beschriftung' => 'Di.' ),
	3 => array( 'beschriftung' => 'Mi.' ),
	4 => array( 'beschriftung' => 'Do.' ),
	5 => array( 'beschriftung' => 'Fr.' ),
	6 => array( 'beschriftung' => 'Sa.' ),
	7 => array( 'beschriftung' => 'So.' ),
) );

defined('WOCHENTAGE_LANG') OR define( 'WOCHENTAGE_LANG', array(
	1 => array( 'beschriftung' => 'Montag' ),
	2 => array( 'beschriftung' => 'Dienstag' ),
	3 => array( 'beschriftung' => 'Mittwoch' ),
	4 => array( 'beschriftung' => 'Donnnerstag' ),
	5 => array( 'beschriftung' => 'Freitag' ),
	6 => array( 'beschriftung' => 'Samstag' ),
	7 => array( 'beschriftung' => 'Sonntag' ),
) );

defined('SYMBOLE') OR define( 'SYMBOLE', array(
    'einstellungen' => array( 'bootstrap' => 'gear' ),
    'logout' => array( 'bootstrap' => 'door-open' ),

    'werkzeuge' => array( 'bootstrap' => 'tools' ),
    'erstellen' => array( 'bootstrap' => 'plus-lg' ),
    'aendern' => array( 'bootstrap' => 'pencil' ),
    'duplizieren' => array( 'bootstrap' => 'files' ),
    'loeschen' => array( 'bootstrap' => 'trash' ),
    'auswaehlen' => array( 'bootstrap' => 'box-arrow-in-down-left' ),
    'offen_erledigt_markieren' => array ( 'bootstrap' => 'check2-circle' ),
    'strafe_zuweisen' => array ( 'bootstrap' => 'journal-plus' ),

    'sortable' => array( 'bootstrap' => 'arrow-down-up' ),
    'collapse_oeffnen' => array( 'bootstrap' => 'caret-right' ),
    'collapse_schliessen' => array( 'bootstrap' => 'caret-down' ),
    'collapse' => array( 'bootstrap' => 'caret-down' ),
    'filtern' => array( 'bootstrap' => 'funnel' ),
    'sortieren' => array( 'bootstrap' => 'sort-down' ),
    'gruppieren' => array( 'bootstrap' => 'hdd-stack' ),
    'inklusiv_exklusiv' => array( 'bootstrap' => 'transparency' ),
    'asc' => array( 'bootstrap' => 'sort-alpha-down' ),
    'desc' => array( 'bootstrap' => 'sort-alpha-up' ),
    'alle_checks_anwaehlen' => array( 'bootstrap' => 'toggle-on' ),
    'alle_checks_abwaehlen' => array( 'bootstrap' => 'toggle-off' ),
    'pfeil_links' => array( 'bootstrap' => 'arrow-left' ),
    'pfeil_rechts' => array( 'bootstrap' => 'arrow-right' ),
    'spacer' => array ( 'bootstrap' => 'dot' ),

    'statistiken' => array( 'bootstrap' => 'graph-up-arrow' ),
    'einmal_link_anzeigen' => array( 'bootstrap' => 'link' ),
    'einmal_link_email' => array( 'bootstrap' => 'envelope' ),

    'bemerkung' => array( 'bootstrap' => 'chat-dots' ),

    'zahlenraum' => array( 'bootstrap' => '123' ),
    'zeitraum' => array( 'bootstrap' => 'calendar-range' ),
    'ort' => array( 'bootstrap' => 'geo-alt-fill' ),
    // 'ende' => array( 'bootstrap' => 'heart-arrow' ),

    'sichtbar' => array( 'bootstrap' => 'eye' ),
    'unsichtbar' => array( 'bootstrap' => 'eye-slash' ),

    'offen' => array( 'bootstrap' => 'circle' ),
    'erledigt' => array( 'bootstrap' => 'check-circle' ),
) );

// enum ZUSTAND
// {
//     case FERTIG;
// }
