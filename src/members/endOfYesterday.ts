import { endOfYesterday as _endOfYesterday } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfYesterday = reactify(_endOfYesterday);