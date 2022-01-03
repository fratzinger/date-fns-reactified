import { startOfMinute as _startOfMinute } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfMinute = reactify(_startOfMinute);