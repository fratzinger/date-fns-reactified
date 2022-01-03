import { isSaturday as _isSaturday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSaturday = reactify(_isSaturday);