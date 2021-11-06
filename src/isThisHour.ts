import { isThisHour as _isThisHour } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisHour = reactify(_isThisHour);