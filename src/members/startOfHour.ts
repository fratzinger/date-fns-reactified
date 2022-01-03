import { startOfHour as _startOfHour } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfHour = reactify(_startOfHour);