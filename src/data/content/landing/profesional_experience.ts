import { ProfesionalExperience } from "@/data/types/profesional_experience";

import ef from '@svg_assets/svg_enviaflores.svg';
import pacific from '@png_assets/LOGO_PACIFIC.png';
import logistic from '@png_assets/LOGISTIC_ICON.png';

import viva from '@svg_assets/viva_logo.png';

import android from '@svg_assets/svg_android.svg';
import ios from '@svg_assets/svg_apple.svg';
import mobile from '@png_assets/icon-ios-android.png'

export const UserProfesionalExperience: ProfesionalExperience[] = [
    {
        companyIcon: pacific,
        companyName: "pacific_name",
        companyPeriod: "offside_period",
        position: "logistic_charge",
        positionIcon: logistic,
    },
    {
        companyIcon: ef,
        companyName: "enviaflores_name",
        companyPeriod: "internship_period",
        position: "android_intern",
        positionIcon: android,
    },
    {
        companyIcon: ef,
        companyName: "enviaflores_name",
        companyPeriod: "fulltime_period",
        position: "ios_developer",
        positionIcon: ios,
    },
    {
        companyIcon: viva,
        companyName: "viva_aerobus_name",
        companyPeriod: "viva_period",
        position: "mobile_engineer",
        positionIcon: mobile,
    },
]