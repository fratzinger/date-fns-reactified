import { hoursToSeconds as _hoursToSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const hoursToSeconds = reactify(_hoursToSeconds);