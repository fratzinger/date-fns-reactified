import { minutesToHours as _minutesToHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const minutesToHours = reactify(_minutesToHours);