import { isSameSecond as _isSameSecond } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameSecond = reactify(_isSameSecond);