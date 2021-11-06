import { isDate as _isDate } from "date-fns";
import { reactify } from "@vueuse/core";

export const isDate = reactify(_isDate);