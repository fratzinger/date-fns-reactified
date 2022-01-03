import { quartersToYears as _quartersToYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const quartersToYears = reactify(_quartersToYears);