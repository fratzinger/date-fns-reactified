import { isThursday as _isThursday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThursday = reactify(_isThursday);