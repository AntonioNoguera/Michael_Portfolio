import { ProfesionalExperience } from "@/data/types/profesional_experience";
 
import pacific from '@png_assets/LOGO_PACIFIC.png';
import logistic from '@png_assets/LOGISTIC_ICON.png';

import viva from '@png_assets/viva_logo.png';

import ef from '@png_assets/svg_enviaflores.png';
import android from '@png_assets/LOGO_ANDROID.png';
import ios from '@png_assets/svg_apple.png';
import mobile from '@png_assets/icon-ios-android.png'

export const UserProfesionalExperience: ProfesionalExperience[] = [
    {
        companyIcon: viva,
        companyName: "viva_aerobus_name",
        companyPeriod: "viva_period",
        position: "mobile_engineer",
        positionIcon: mobile,
    },
    {
        companyIcon: String(ef.src),
        companyName: "enviaflores_name",
        companyPeriod: "fulltime_period",
        position: "ios_developer",
        positionIcon: String(ios.src),
    },
    {
        companyIcon: String(ef.src),
        companyName: "enviaflores_name",
        companyPeriod: "internship_period",
        position: "android_intern",
        positionIcon: String(android.src),
    },
    {
        companyIcon: String(pacific.src),
        companyName: "pacific_name",
        companyPeriod: "offside_period",
        position: "logistic_charge",
        positionIcon: String(logistic.src),
    },
]