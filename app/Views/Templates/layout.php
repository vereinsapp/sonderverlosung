<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">

    <title><?= SONDERVERLOSUNG_NAME ?></title>

    <?php foreach( HEAD_STYLESHEET as $stylesheet ): ?><link rel="stylesheet" href="<?= $stylesheet['href']; ?>"<?php if( array_key_exists( 'integrity', $stylesheet ) ) echo ' integrity="'.$stylesheet['integrity'].'"'; ?><?php if( array_key_exists( 'crossorigin', $stylesheet ) ) echo ' crossorigin="'.$stylesheet['crossorigin'].'"'; ?>>
    <?php endforeach; ?>

    <script type='text/javascript'>
<?= view( 'Templates/javascript' ); ?>
    </script>

    <?php foreach( HEAD_SCRIPT as $script ): ?><script src="<?= $script['src']; ?>"<?php if( array_key_exists( 'integrity', $script ) ) echo ' integrity="'.$script['integrity'].'"'; ?><?php if( array_key_exists( 'crossorigin', $script ) ) echo ' crossorigin="'.$script['crossorigin'].'"'; ?>></script>
    <?php endforeach; ?>

  </head>

  <body>
    <?= $this->renderSection('navbar') ?>

    <?= $this->renderSection('containers') ?>

<?php if( isset( $werkzeugkasten ) ) echo view( 'Templates/werkzeugkasten' ); ?>

    <div class="text-secondary mt-5 small text-center"><?= SONDERVERLOSUNG_NAME ?> <?= VERSION; ?></div>
    <div class="text-secondary small text-center jetzt"></div>

    <div id="toasts" class="toast-container position-fixed end-0 pe-3">
<?= view( 'Templates/toast' ); ?>
    </div>

    <div id="modals">
<?= view( 'Templates/modal', array( 'id' => 'BESTAETIGUNG', 'modal' => view( 'Templates/bestaetigung' ) ) ); ?>
    </div>

  </body>
</html>