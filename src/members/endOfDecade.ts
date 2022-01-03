import { endOfDecade as _endOfDecade } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfDecade = reactify(_endOfDecade);