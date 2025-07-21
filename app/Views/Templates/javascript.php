const BASE_URL = '<?= base_url() ?>';
const SITE_URL = '<?= site_url() ?>';
const AKTIVER_CONTROLLER = '<?= AKTIVER_CONTROLLER ?>';
const CSRF_NAME = '<?= CSRF_NAME ?>';
const ERSTER_CSRF_HASH = '<?= csrf_hash() ?>';
const ICH = <?= json_encode( ICH ) ?>;
LOGGEDIN = <?php if( auth()->loggedIn() ) echo (int) TRUE; else echo (int) FALSE; ?>;
FORCE_LOCALSTORAGE_RESET_ZEITPUNKT = '<?= FORCE_LOCALSTORAGE_RESET_ZEITPUNKT ?>';

const JANEIN = <?= json_encode( JANEIN ) ?>;
const WOCHENTAGE_KURZ = <?= json_encode( WOCHENTAGE_KURZ ) ?>;
const WOCHENTAGE_LANG = <?= json_encode( WOCHENTAGE_LANG ) ?>;

const LISTEN = <?= json_encode( LISTEN ) ?>;
const ELEMENTE = <?= json_encode( ELEMENTE ) ?>;
const HAUPTINSTANZEN = <?= json_encode( HAUPTINSTANZEN ) ?>;
const EIGENSCHAFTEN = <?= json_encode( EIGENSCHAFTEN ) ?>;
const VORGEGEBENE_WERTE = <?= json_encode( VORGEGEBENE_WERTE ) ?>;
const VORGEGEBENE_FILTER = <?= json_encode( VORGEGEBENE_FILTER ) ?>;

const FILTERBARE_EIGENSCHAFTEN = <?= json_encode( FILTERBARE_EIGENSCHAFTEN ) ?>;
const SORTIERBARE_EIGENSCHAFTEN = <?= json_encode( SORTIERBARE_EIGENSCHAFTEN ) ?>;
const GRUPPIERBARE_EIGENSCHAFTEN = <?= json_encode( GRUPPIERBARE_EIGENSCHAFTEN ) ?>;

const AJAX_ZYKLUSZEIT = <?= AJAX_ZYKLUSZEIT ?>;
//const ZUSTAND = Object.freeze({<?php //foreach (ZUSTAND::cases() as $zustand) { echo $zustand->name . ': Symbol("'.$zustand->name.'"), '; } ?>});

const SYMBOLE = <?= json_encode( SYMBOLE) ?>;
const SORT_ASC = <?= SORT_ASC ?>;
const SORT_DESC = <?= SORT_DESC ?>;