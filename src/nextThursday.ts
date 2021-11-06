import { nextThursday as _nextThursday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextThursday = reactify(_nextThursday);