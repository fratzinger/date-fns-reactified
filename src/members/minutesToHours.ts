import { minutesToHours as _minutesToHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const minutesToHours = reactify(_minutesToHours);