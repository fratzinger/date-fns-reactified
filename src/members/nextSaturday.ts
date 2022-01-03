import { nextSaturday as _nextSaturday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextSaturday = reactify(_nextSaturday);