import { isSameSecond as _isSameSecond } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameSecond = reactify(_isSameSecond);