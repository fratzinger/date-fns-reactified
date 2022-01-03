import { quartersToYears as _quartersToYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const quartersToYears = reactify(_quartersToYears);