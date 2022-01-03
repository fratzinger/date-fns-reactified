import { nextThursday as _nextThursday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextThursday = reactify(_nextThursday);