import { isFriday as _isFriday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isFriday = reactify(_isFriday);