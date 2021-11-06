import { isSameDay as _isSameDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameDay = reactify(_isSameDay);