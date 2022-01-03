import { isFriday as _isFriday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isFriday = reactify(_isFriday);