import { startOfMinute as _startOfMinute } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfMinute = reactify(_startOfMinute);