import { hoursToMilliseconds as _hoursToMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const hoursToMilliseconds = reactify(_hoursToMilliseconds);