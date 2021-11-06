import { endOfSecond as _endOfSecond } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfSecond = reactify(_endOfSecond);