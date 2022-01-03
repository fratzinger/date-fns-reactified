import { hoursToSeconds as _hoursToSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const hoursToSeconds = reactify(_hoursToSeconds);