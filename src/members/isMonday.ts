import { isMonday as _isMonday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isMonday = reactify(_isMonday);