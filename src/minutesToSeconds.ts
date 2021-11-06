import { minutesToSeconds as _minutesToSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const minutesToSeconds = reactify(_minutesToSeconds);