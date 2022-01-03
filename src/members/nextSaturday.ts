import { nextSaturday as _nextSaturday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextSaturday = reactify(_nextSaturday);