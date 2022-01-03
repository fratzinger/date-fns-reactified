import { minutesToSeconds as _minutesToSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const minutesToSeconds = reactify(_minutesToSeconds);