import { isThursday as _isThursday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThursday = reactify(_isThursday);