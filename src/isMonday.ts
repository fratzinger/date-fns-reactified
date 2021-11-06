import { isMonday as _isMonday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isMonday = reactify(_isMonday);