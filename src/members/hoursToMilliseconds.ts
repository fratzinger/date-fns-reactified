import { hoursToMilliseconds as _hoursToMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const hoursToMilliseconds = reactify(_hoursToMilliseconds);