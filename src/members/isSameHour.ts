import { isSameHour as _isSameHour } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameHour = reactify(_isSameHour);