import { isDate as _isDate } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isDate = reactify(_isDate);