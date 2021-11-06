import { hoursToMinutes as _hoursToMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const hoursToMinutes = reactify(_hoursToMinutes);