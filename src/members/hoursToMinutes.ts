import { hoursToMinutes as _hoursToMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const hoursToMinutes = reactify(_hoursToMinutes);