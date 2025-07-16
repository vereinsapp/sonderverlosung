SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Datenbank: `sonderverlosung`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_migrations`
--

CREATE TABLE `sv_migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `version` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `sv_migrations`
--

INSERT INTO `sv_migrations` (`id`, `version`, `class`, `group`, `namespace`, `time`, `batch`) VALUES
(1, '2020-12-28-223112', 'CodeIgniter\\Shield\\Database\\Migrations\\CreateAuthTables', 'default', 'CodeIgniter\\Shield', 1726846089, 1),
(2, '2021-07-04-041948', 'CodeIgniter\\Settings\\Database\\Migrations\\CreateSettingsTable', 'default', 'CodeIgniter\\Settings', 1726846089, 1),
(3, '2021-11-14-143905', 'CodeIgniter\\Settings\\Database\\Migrations\\AddContextColumn', 'default', 'CodeIgniter\\Settings', 1726846089, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder`
--

CREATE TABLE `sv_mitglieder` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_message` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `last_active` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `sv_mitglieder`
--

INSERT INTO `sv_mitglieder` (`id`, `username`, `status`, `status_message`, `active`, `last_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder_login_eingeloggt_bleiben`
--

CREATE TABLE `sv_mitglieder_login_eingeloggt_bleiben` (
  `id` int(11) UNSIGNED NOT NULL,
  `selector` varchar(255) NOT NULL,
  `hashedValidator` varchar(255) NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `expires` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder_login_versuche`
--

CREATE TABLE `sv_mitglieder_login_versuche` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `id_type` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `user_id` int(11) UNSIGNED DEFAULT NULL,
  `date` datetime NOT NULL,
  `success` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder_login_versuche_token`
--

CREATE TABLE `sv_mitglieder_login_versuche_token` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `id_type` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `user_id` int(11) UNSIGNED DEFAULT NULL,
  `date` datetime NOT NULL,
  `success` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder_rollen`
--

CREATE TABLE `sv_mitglieder_rollen` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `group` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `sv_mitglieder_rollen`
--

INSERT INTO `sv_mitglieder_rollen` (`id`, `user_id`, `group`, `created_at`) VALUES
(1, 1, 'fernbedienung', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder_vergebene_rechte`
--

CREATE TABLE `sv_mitglieder_vergebene_rechte` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `permission` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_mitglieder_zugaenge`
--

CREATE TABLE `sv_mitglieder_zugaenge` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `secret` varchar(255) NOT NULL,
  `secret2` varchar(255) DEFAULT NULL,
  `expires` datetime DEFAULT NULL,
  `extra` text DEFAULT NULL,
  `force_reset` tinyint(1) NOT NULL DEFAULT 0,
  `last_used_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `sv_mitglieder_zugaenge`
--

INSERT INTO `sv_mitglieder_zugaenge` (`id`, `user_id`, `type`, `name`, `secret`, `secret2`, `expires`, `extra`, `force_reset`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'email_password', NULL, 'john.doe@email.de', '$2y$10$AZB9pt4pC8ZQQIoiF2blVuBJcPAf0M8MfX5gqqurLlWOaKdE3hg4q', NULL, NULL, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sv_settings`
--

CREATE TABLE `sv_settings` (
  `id` int(9) NOT NULL,
  `class` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text DEFAULT NULL,
  `type` varchar(31) NOT NULL DEFAULT 'string',
  `context` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `sv_migrations`
--
ALTER TABLE `sv_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `sv_mitglieder`
--
ALTER TABLE `sv_mitglieder`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indizes für die Tabelle `sv_mitglieder_login_eingeloggt_bleiben`
--
ALTER TABLE `sv_mitglieder_login_eingeloggt_bleiben`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `selector` (`selector`),
  ADD KEY `sv_mitglieder_login_eingeloggt_bleiben_user_id_foreign` (`user_id`);

--
-- Indizes für die Tabelle `sv_mitglieder_login_versuche`
--
ALTER TABLE `sv_mitglieder_login_versuche`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_type_identifier` (`id_type`,`identifier`),
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `sv_mitglieder_login_versuche_token`
--
ALTER TABLE `sv_mitglieder_login_versuche_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_type_identifier` (`id_type`,`identifier`),
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `sv_mitglieder_rollen`
--
ALTER TABLE `sv_mitglieder_rollen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sv_mitglieder_rollen_user_id_foreign` (`user_id`);

--
-- Indizes für die Tabelle `sv_mitglieder_vergebene_rechte`
--
ALTER TABLE `sv_mitglieder_vergebene_rechte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sv_mitglieder_vergebene_rechte_user_id_foreign` (`user_id`);

--
-- Indizes für die Tabelle `sv_mitglieder_zugaenge`
--
ALTER TABLE `sv_mitglieder_zugaenge`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `type_secret` (`type`,`secret`),
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `sv_settings`
--
ALTER TABLE `sv_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `sv_migrations`
--
ALTER TABLE `sv_migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder`
--
ALTER TABLE `sv_mitglieder`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder_login_eingeloggt_bleiben`
--
ALTER TABLE `sv_mitglieder_login_eingeloggt_bleiben`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder_login_versuche`
--
ALTER TABLE `sv_mitglieder_login_versuche`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder_login_versuche_token`
--
ALTER TABLE `sv_mitglieder_login_versuche_token`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder_rollen`
--
ALTER TABLE `sv_mitglieder_rollen`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder_vergebene_rechte`
--
ALTER TABLE `sv_mitglieder_vergebene_rechte`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `sv_mitglieder_zugaenge`
--
ALTER TABLE `sv_mitglieder_zugaenge`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `sv_settings`
--
ALTER TABLE `sv_settings`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `sv_mitglieder_login_eingeloggt_bleiben`
--
ALTER TABLE `sv_mitglieder_login_eingeloggt_bleiben`
  ADD CONSTRAINT `sv_mitglieder_login_eingeloggt_bleiben_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `sv_mitglieder` (`id`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `sv_mitglieder_rollen`
--
ALTER TABLE `sv_mitglieder_rollen`
  ADD CONSTRAINT `sv_mitglieder_rollen_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `sv_mitglieder` (`id`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `sv_mitglieder_vergebene_rechte`
--
ALTER TABLE `sv_mitglieder_vergebene_rechte`
  ADD CONSTRAINT `sv_mitglieder_vergebene_rechte_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `sv_mitglieder` (`id`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `sv_mitglieder_zugaenge`
--
ALTER TABLE `sv_mitglieder_zugaenge`
  ADD CONSTRAINT `sv_mitglieder_zugaenge_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `sv_mitglieder` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
