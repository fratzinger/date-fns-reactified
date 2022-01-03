import { nextDay as _nextDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextDay = reactify(_nextDay);