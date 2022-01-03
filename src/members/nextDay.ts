import { nextDay as _nextDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextDay = reactify(_nextDay);