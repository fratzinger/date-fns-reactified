import { isSameDay as _isSameDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameDay = reactify(_isSameDay);