import { isThisHour as _isThisHour } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisHour = reactify(_isThisHour);