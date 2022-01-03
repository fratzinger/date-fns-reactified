import { endOfDecade as _endOfDecade } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfDecade = reactify(_endOfDecade);