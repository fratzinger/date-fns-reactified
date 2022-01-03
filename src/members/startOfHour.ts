import { startOfHour as _startOfHour } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfHour = reactify(_startOfHour);