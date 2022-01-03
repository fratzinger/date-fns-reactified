import { isSaturday as _isSaturday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSaturday = reactify(_isSaturday);