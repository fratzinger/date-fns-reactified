import { isSameHour as _isSameHour } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameHour = reactify(_isSameHour);