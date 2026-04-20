import { TimelineApp } from "@/data/types/timeline_app";

import viva from '@png_assets/viva_logo.png';
import ef from '@png_assets/svg_enviaflores.png';
import pacific from '@png_assets/LOGO_PACIFIC.png';

import html from '@png_assets/LOGO_HTML.png';
import css from '@png_assets/LOGO_CSS.png';
import python from '@png_assets/LOGO_Python.png';
import js from '@png_assets/LOGO_JS.png';
import jquery from '@png_assets/svg_jquery.png';
import php from '@png_assets/LOGO_PHP.png';
import bootstrap from '@png_assets/LOGO_Bootstrap.png';
import react from '@png_assets/LOGO_REACT.png';
import kotlin from '@png_assets/LOGO_KOTLIN.png';
import android from '@png_assets/LOGO_ANDROID.png';
import swift from '@png_assets/Swift.png';
import apple from '@png_assets/LOGO_APPLE.png';
import next_js from '@png_assets/svg_next.png';
import ts from '@png_assets/LOGO_TS.png';
import tailwind from '@png_assets/LOGO_Tailwind.png';
import dart from '@png_assets/LOGO_DART.png';
import multiplatform from '@png_assets/LOGO_Multiplatform.png';

export const TimelineYears: number[] = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

export const TimelineApps: TimelineApp[] = [
    {
        id: 'pacific-2023',
        year: 2023,
        kind: 'professional',
        nameKey: 'About_Me_Section.pacific_name',
        subtitleKey: 'About_Me_Section.logistic_charge',
        descriptionKey: 'Timeline_Section.pacific_description',
        icon: pacific,
    },
    {
        id: 'enviaflores-android-2024',
        year: 2024,
        kind: 'professional',
        nameKey: 'Timeline_Section.enviaflores_android_title',
        subtitleKey: 'About_Me_Section.android_intern',
        descriptionKey: 'Timeline_Section.enviaflores_android_description',
        icon: ef,
        techs: [kotlin, android],
        links: [
            { type: 'play_store', url: 'https://play.google.com/', labelKey: 'Timeline_Section.link_play_store' },
        ],
    },
    {
        id: 'enviaflores-ios-2025',
        year: 2025,
        kind: 'professional',
        nameKey: 'Timeline_Section.enviaflores_ios_title',
        subtitleKey: 'About_Me_Section.ios_developer',
        descriptionKey: 'Timeline_Section.enviaflores_ios_description',
        icon: ef,
        techs: [swift, apple],
        links: [
            { type: 'app_store', url: 'https://apps.apple.com/', labelKey: 'Timeline_Section.link_app_store' },
        ],
    },
    {
        id: 'viva-2025',
        year: 2025,
        kind: 'professional',
        nameKey: 'About_Me_Section.viva_aerobus_name',
        subtitleKey: 'About_Me_Section.mobile_engineer',
        descriptionKey: 'Timeline_Section.viva_description',
        icon: viva,
        techs: [kotlin, swift, android, apple, multiplatform],
        links: [
            { type: 'app_store', url: 'https://apps.apple.com/', labelKey: 'Timeline_Section.link_app_store' },
            { type: 'play_store', url: 'https://play.google.com/', labelKey: 'Timeline_Section.link_play_store' },
        ],
    },

    {
        id: 'first-site-2019',
        year: 2019,
        kind: 'personal',
        nameKey: 'Timeline_Section.first_site_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.first_site_description',
        icon: html,
        techs: [html, css],
    },
    {
        id: 'python-scripts-2020',
        year: 2020,
        kind: 'personal',
        nameKey: 'Timeline_Section.python_scripts_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.python_scripts_description',
        icon: python,
        techs: [python],
    },
    {
        id: 'js-game-2021',
        year: 2021,
        kind: 'personal',
        nameKey: 'Timeline_Section.js_game_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.js_game_description',
        icon: js,
        techs: [js, html, css, jquery],
    },
    {
        id: 'php-crud-2022',
        year: 2022,
        kind: 'personal',
        nameKey: 'Timeline_Section.php_crud_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.php_crud_description',
        icon: php,
        techs: [php, bootstrap, jquery],
    },
    {
        id: 'react-experiments-2023',
        year: 2023,
        kind: 'personal',
        nameKey: 'Timeline_Section.react_experiments_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.react_experiments_description',
        icon: react,
        techs: [react, js, ts],
    },
    {
        id: 'android-side-app-2024',
        year: 2024,
        kind: 'personal',
        nameKey: 'Timeline_Section.android_side_app_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.android_side_app_description',
        icon: kotlin,
        techs: [kotlin, android],
    },
    {
        id: 'cross-platform-2025',
        year: 2025,
        kind: 'personal',
        nameKey: 'Timeline_Section.cross_platform_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.cross_platform_description',
        icon: dart,
        techs: [dart, multiplatform, kotlin, swift],
    },
    {
        id: 'portfolio-2026',
        year: 2026,
        kind: 'personal',
        nameKey: 'Timeline_Section.portfolio_title',
        subtitleKey: 'Timeline_Section.personal_project',
        descriptionKey: 'Timeline_Section.portfolio_description',
        icon: next_js,
        featured: true,
        techs: [next_js, react, ts, tailwind, html, css, js],
        links: [
            { type: 'web', url: 'https://contry-mothership.ddns.net/portfolio', labelKey: 'Timeline_Section.link_live' },
            { type: 'github', url: 'https://github.com/', labelKey: 'Timeline_Section.link_github' },
        ],
    },
];
